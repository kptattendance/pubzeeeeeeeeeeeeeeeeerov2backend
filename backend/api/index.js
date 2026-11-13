import "dotenv/config";

import express from "express";
import cors from "cors";

import { clerkMiddleware } from "@clerk/express";

import connectDB from "./../config/db.js";
import { publicLimiter } from "./../middleware/rateLimit.js";

import eventRoutes from "./../routes/eventRoutes.js";
import galleryRoutes from "./../routes/galleryRoutes.js";

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", 1);

// Only our own website may call this API from a browser
const allowedOrigins = [
  "https://www.zerodegreebreweryandkitchen.com",
  "https://zerodegreebreweryandkitchen.com",
];
if (process.env.NODE_ENV !== "production") {
  allowedOrigins.push("http://localhost:3000");
}

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400, // browsers cache the preflight for a day -> fewer OPTIONS calls
  }),
);

// Basic security headers
app.use((req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  });
  next();
});

app.use(express.json({ limit: "100kb" }));

// TEST ROUTE (no DB / auth needed)
app.get("/", (req, res) => {
  res.send("PUB Backend Running...");
});

// Rate limit every API call per IP (runs before DB/auth work, so abuse is cheap to reject)
app.use("/api", publicLimiter);

// Make sure the DB is connected before any API route runs
app.use("/api", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB connection failed:", error.message);
    res
      .status(503)
      .json({ success: false, message: "Service temporarily unavailable" });
  }
});

app.use("/api", clerkMiddleware());

// ROUTES
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not found" });
});

// Central error handler (upload errors, bad JSON, etc.) - never leaks internals
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err?.code === "LIMIT_FILE_SIZE") {
    return res
      .status(413)
      .json({ success: false, message: "Image is too large (max 4 MB)" });
  }

  const status = err?.status || err?.statusCode || 500;

  if (status >= 500) console.error(err);

  res.status(status).json({
    success: false,
    message: status < 500 ? err.message : "Something went wrong",
  });
});

// EXPORT APP FOR VERCEL
export default app;

// Local development: `npm run dev`
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
