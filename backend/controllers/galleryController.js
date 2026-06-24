import Gallery from "../models/Gallery.js";

import cloudinary from "../config/cloudinary.js";

// ==========================================
// GET ALL GALLERY ITEMS
// ==========================================
export const getGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find({
      isActive: true,
    }).sort({
      priority: -1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// GET SINGLE GALLERY ITEM
// ==========================================
export const getSingleGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// CREATE GALLERY ITEM
// ==========================================
export const createGalleryItem = async (req, res) => {
  try {
    let imageData = {};

    // IMAGE UPLOAD
    if (req.file) {
      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const uploadedImage = await cloudinary.uploader.upload(dataURI, {
        folder: "pub-gallery",
      });

      imageData = {
        url: uploadedImage.secure_url,

        public_id: uploadedImage.public_id,
      };
    }

    // CREATE ITEM
    const item = await Gallery.create({
      title: req.body.title,

      description: req.body.description,

      category: req.body.category,

      galleryDate: req.body.galleryDate,

      image: imageData.url,

      imagePublicId: imageData.public_id,
    });

    res.status(201).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// UPDATE GALLERY ITEM
// ==========================================
export const updateGalleryItem = async (req, res) => {
  try {
    let item = await Gallery.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    let imageUrl = item.image;

    let imagePublicId = item.imagePublicId;

    // IF NEW IMAGE EXISTS
    if (req.file) {
      // DELETE OLD IMAGE
      if (item.imagePublicId) {
        await cloudinary.uploader.destroy(item.imagePublicId);
      }

      // UPLOAD NEW IMAGE
      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const uploadedImage = await cloudinary.uploader.upload(dataURI, {
        folder: "pub-gallery",
      });

      imageUrl = uploadedImage.secure_url;

      imagePublicId = uploadedImage.public_id;
    }

    // UPDATE ITEM
    item = await Gallery.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,

        description: req.body.description,

        category: req.body.category,

        galleryDate: req.body.galleryDate,

        image: imageUrl,

        imagePublicId: imagePublicId,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// DELETE GALLERY ITEM
// ==========================================
export const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    // DELETE CLOUDINARY IMAGE
    if (item.imagePublicId) {
      await cloudinary.uploader.destroy(item.imagePublicId);
    }

    // DELETE ITEM
    await item.deleteOne();

    res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
