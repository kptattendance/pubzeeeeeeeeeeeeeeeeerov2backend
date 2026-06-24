import { getAuth } from "@clerk/express";

export const protectAdmin = (req, res, next) => {
  try {
    const auth = getAuth(req);

    if (!auth.userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // ROLE FROM SESSION CLAIMS
    const role = auth.sessionClaims?.metadata?.role;

    console.log("ROLE:", role);

    if (role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }

    req.auth = auth;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: error.message || "Unauthorized",
    });
  }
};
