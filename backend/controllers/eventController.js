import Event from "../models/Event.js";
import {
  uploadImage,
  deleteImage,
  isValidId,
  str,
  sendError,
  setPublicCache,
} from "../utils/helpers.js";

const FOLDER = "pub-events";

const pickFields = (body) => ({
  title: str(body.title),
  description: str(body.description),
  category: str(body.category),
  eventDate: str(body.eventDate) || undefined,
});

// ==========================================
// GET ALL EVENTS (public)
// ==========================================
export const getEvents = async (req, res) => {
  try {
    const filter = { isActive: true };
    // optional ?category=upcoming so the public page only downloads what it shows
    const category = str(req.query.category);
    if (category) filter.category = category;

    const events = await Event.find(filter)
      .sort({ priority: -1, createdAt: -1 })
      .lean();

    setPublicCache(res);

    res.status(200).json({ success: true, count: events.length, events });
  } catch (error) {
    sendError(res, error);
  }
};

// ==========================================
// GET SINGLE EVENT (public)
// ==========================================
export const getSingleEvent = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const item = await Event.findOne({ _id: req.params.id, isActive: true }).lean();

    if (!item) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    setPublicCache(res);

    res.status(200).json({ success: true, event: item });
  } catch (error) {
    sendError(res, error);
  }
};

// ==========================================
// CREATE EVENT (admin)
// ==========================================
export const createEvent = async (req, res) => {
  let uploaded;

  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    uploaded = await uploadImage(req.file, FOLDER);

    const item = await Event.create({
      ...pickFields(req.body),
      image: uploaded.secure_url,
      imagePublicId: uploaded.public_id,
    });

    res.status(201).json({ success: true, event: item });
  } catch (error) {
    // don't leave an orphan image on Cloudinary if saving failed
    if (uploaded) await deleteImage(uploaded.public_id);
    sendError(res, error);
  }
};

// ==========================================
// UPDATE EVENT (admin)
// ==========================================
export const updateEvent = async (req, res) => {
  let uploaded;

  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const item = await Event.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const oldPublicId = item.imagePublicId;

    // upload the new image first, so a failed upload never loses the old one
    if (req.file) {
      uploaded = await uploadImage(req.file, FOLDER);
      item.image = uploaded.secure_url;
      item.imagePublicId = uploaded.public_id;
    }

    const fields = pickFields(req.body);
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) item[key] = value;
    }

    await item.save();

    if (uploaded) await deleteImage(oldPublicId);

    res.status(200).json({ success: true, event: item });
  } catch (error) {
    if (uploaded) await deleteImage(uploaded.public_id);
    sendError(res, error);
  }
};

// ==========================================
// DELETE EVENT (admin)
// ==========================================
export const deleteEvent = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const item = await Event.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    await item.deleteOne();
    await deleteImage(item.imagePublicId);

    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    sendError(res, error);
  }
};
