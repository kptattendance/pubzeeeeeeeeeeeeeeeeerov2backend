import { getAuth } from "@clerk/express";

export const protectAdmin = (req, res, next) => {
  try {
    const auth = getAuth(req);

    if (!auth?.userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // role comes from the Clerk session token claims (publicMetadata.role)
    if (auth.sessionClaims?.metadata?.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Access denied. Admin only." });
    }

    req.auth = auth;
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
