import Gallery from "../models/Gallery.js";
import {
  uploadImage,
  deleteImage,
  isValidId,
  str,
  sendError,
  setPublicCache,
} from "../utils/helpers.js";

const FOLDER = "pub-gallery";

const pickFields = (body) => ({
  title: str(body.title),
  description: str(body.description),
  category: str(body.category),
  galleryDate: str(body.galleryDate) || undefined,
});

// ==========================================
// GET ALL GALLERY ITEMS (public)
// ==========================================
export const getGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find({ isActive: true })
      .sort({ priority: -1, createdAt: -1 })
      .lean();

    setPublicCache(res);

    res.status(200).json({ success: true, count: items.length, items });
  } catch (error) {
    sendError(res, error);
  }
};

// ==========================================
// GET SINGLE GALLERY ITEM (public)
// ==========================================
export const getSingleGalleryItem = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }

    const item = await Gallery.findOne({ _id: req.params.id, isActive: true }).lean();

    if (!item) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }

    setPublicCache(res);

    res.status(200).json({ success: true, item });
  } catch (error) {
    sendError(res, error);
  }
};

// ==========================================
// CREATE GALLERY ITEM (admin)
// ==========================================
export const createGalleryItem = async (req, res) => {
  let uploaded;

  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    uploaded = await uploadImage(req.file, FOLDER);

    const item = await Gallery.create({
      ...pickFields(req.body),
      image: uploaded.secure_url,
      imagePublicId: uploaded.public_id,
    });

    res.status(201).json({ success: true, item });
  } catch (error) {
    // don't leave an orphan image on Cloudinary if saving failed
    if (uploaded) await deleteImage(uploaded.public_id);
    sendError(res, error);
  }
};

// ==========================================
// UPDATE GALLERY ITEM (admin)
// ==========================================
export const updateGalleryItem = async (req, res) => {
  let uploaded;

  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }

    const item = await Gallery.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
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

    res.status(200).json({ success: true, item });
  } catch (error) {
    if (uploaded) await deleteImage(uploaded.public_id);
    sendError(res, error);
  }
};

// ==========================================
// DELETE GALLERY ITEM (admin)
// ==========================================
export const deleteGalleryItem = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }

    const item = await Gallery.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Gallery item not found" });
    }

    await item.deleteOne();
    await deleteImage(item.imagePublicId);

    res.status(200).json({ success: true, message: "Gallery item deleted successfully" });
  } catch (error) {
    sendError(res, error);
  }
};
