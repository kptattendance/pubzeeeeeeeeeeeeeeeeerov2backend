import express from "express";

import {
  getGalleryItems,
  getSingleGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from "../controllers/galleryController.js";

import upload from "../middleware/uploadMiddleware.js";

import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================================
// PUBLIC ROUTES
// ==========================================
router.route("/").get(getGalleryItems);

router.route("/:id").get(getSingleGalleryItem);

// ==========================================
// ADMIN ROUTES
// ==========================================
router.route("/").post(protectAdmin, upload.single("image"), createGalleryItem);

router
  .route("/:id")
  .put(protectAdmin, upload.single("image"), updateGalleryItem)
  .delete(protectAdmin, deleteGalleryItem);

export default router;
