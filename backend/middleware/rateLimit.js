import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ------------------------------------------------------------------
// Rate limiting
//  - If Upstash Redis env vars are set, limits are shared across every
//    Vercel instance (accurate).
//  - Otherwise falls back to an in-memory limiter per instance
//    (still blocks bursts/abuse, just less precise on serverless).
// Env vars accepted (the Vercel Marketplace Upstash integration sets either):
//   UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
//   KV_REST_API_URL        + KV_REST_API_TOKEN
// ------------------------------------------------------------------

const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

const redis = url && token ? new Redis({ url, token }) : null;

if (!redis) {
  console.warn("Rate limit: Upstash not configured, using in-memory fallback");
}

// --- in-memory fallback (fixed window) ---
const memoryStore = new Map();

const memoryLimit = (key, limit, windowMs) => {
  const now = Date.now();
  let entry = memoryStore.get(key);

  if (!entry || now >= entry.reset) {
    entry = { count: 0, reset: now + windowMs };
    memoryStore.set(key, entry);
  }

  entry.count += 1;

  // keep memory bounded
  if (memoryStore.size > 10000) {
    for (const [k, v] of memoryStore) if (now >= v.reset) memoryStore.delete(k);
  }

  return {
    success: entry.count <= limit,
    limit,
    remaining: Math.max(0, limit - entry.count),
    reset: entry.reset,
  };
};

// Vercel sets x-real-ip / x-forwarded-for itself, so clients can't spoof it there
const getClientIp = (req) =>
  req.headers["x-real-ip"] ||
  req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
  req.ip ||
  "unknown";

/**
 * @param {string} name     bucket name, e.g. "public" or "admin"
 * @param {number} limit    max requests per window per IP
 * @param {number} seconds  window length
 */
export const rateLimit = (name, limit, seconds) => {
  const upstash = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(limit, `${seconds} s`),
        prefix: `pub-rl:${name}`,
        ephemeralCache: new Map(), // skips Redis calls for IPs already blocked
        timeout: 1000, // if Redis is slow, let the request through
      })
    : null;

  return async (req, res, next) => {
    if (req.method === "OPTIONS") return next();

    const ip = getClientIp(req);

    let result;
    try {
      result = upstash
        ? await upstash.limit(ip)
        : memoryLimit(`${name}:${ip}`, limit, seconds * 1000);
    } catch (error) {
      // never take the site down because the limiter failed
      console.error("Rate limit error:", error.message);
      return next();
    }

    res.set({
      "RateLimit-Limit": String(result.limit),
      "RateLimit-Remaining": String(result.remaining),
    });

    if (!result.success) {
      const retryAfter = Math.max(1, Math.ceil((result.reset - Date.now()) / 1000));
      res.set("Retry-After", String(retryAfter));
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again shortly.",
      });
    }

    next();
  };
};

// Public reads: generous (most are served by the CDN cache anyway)
export const publicLimiter = rateLimit("public", 120, 60);

// Admin writes (create / update / delete / upload): stricter
export const writeLimiter = rateLimit("write", 30, 60);
