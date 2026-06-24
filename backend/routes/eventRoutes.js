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

const router = express.Router();

// PUBLIC ROUTES
router.route("/").get(getEvents);

router.route("/:id").get(getSingleEvent);

// ADMIN ROUTES
router.route("/").post(protectAdmin, upload.single("image"), createEvent);

router
  .route("/:id")
  .put(protectAdmin, upload.single("image"), updateEvent)
  .delete(protectAdmin, deleteEvent);

export default router;
