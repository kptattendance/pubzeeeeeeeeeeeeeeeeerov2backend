import express from "express";

import {
  getEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

import upload from "../middleware/uploadMiddleware.js";

import { protectAdmin } from "../middleware/authMiddleware.js";

import { writeLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

// PUBLIC ROUTES
router.route("/").get(getEvents);

router.route("/:id").get(getSingleEvent);

// ADMIN ROUTES
router.route("/").post(writeLimiter, protectAdmin, upload.single("image"), createEvent);

router
  .route("/:id")
  .put(writeLimiter, protectAdmin, upload.single("image"), updateEvent)
  .delete(writeLimiter, protectAdmin, deleteEvent);

export default router;
