import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";

// Upload an in-memory file to Cloudinary, capped at 2000px and auto-compressed
export const uploadImage = (file, folder) => {
  const dataURI = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

  return cloudinary.uploader.upload(dataURI, {
    folder,
    resource_type: "image",
    transformation: [
      { width: 2000, height: 2000, crop: "limit", quality: "auto:good" },
    ],
  });
};

// Delete from Cloudinary without failing the request if it errors
export const deleteImage = async (publicId) => {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary delete failed:", publicId, error.message);
  }
};

export const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// Only allow plain strings from form fields (blocks {"$gt": ""} style payloads)
export const str = (value) =>
  typeof value === "string" ? value.trim() : undefined;

// Send a safe error: validation errors are shown, internal details are not
export const sendError = (res, error) => {
  if (error?.name === "ValidationError" || error?.name === "CastError") {
    return res.status(400).json({ success: false, message: error.message });
  }

  console.error(error);

  return res
    .status(500)
    .json({ success: false, message: "Something went wrong. Please try again." });
};

// Let Vercel's CDN cache public GET responses briefly so repeat visitors
// don't hit the serverless function + database every time
export const setPublicCache = (res) => {
  res.set("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
};
