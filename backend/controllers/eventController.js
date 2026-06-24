import Event from "../models/Event.js";
import cloudinary from "../config/cloudinary.js";

// ==========================================
// GET ALL EVENTS
// ==========================================
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({
      priority: -1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// GET SINGLE EVENT
// ==========================================
export const getSingleEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// CREATE EVENT
// ==========================================
export const createEvent = async (req, res) => {
  try {
    let imageData = {};

    // IMAGE UPLOAD
    if (req.file) {
      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const uploadedImage = await cloudinary.uploader.upload(dataURI, {
        folder: "pub-events",
      });

      imageData = {
        url: uploadedImage.secure_url,
        public_id: uploadedImage.public_id,
      };
    }

    // CREATE EVENT
    const event = await Event.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      day: req.body.day,
      eventDate: req.body.eventDate,
      image: imageData.url,
      imagePublicId: imageData.public_id,
    });

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// UPDATE EVENT
// ==========================================
export const updateEvent = async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    let imageUrl = event.image;
    let imagePublicId = event.imagePublicId;

    // IF NEW IMAGE EXISTS
    if (req.file) {
      // DELETE OLD IMAGE
      if (event.imagePublicId) {
        await cloudinary.uploader.destroy(event.imagePublicId);
      }

      // UPLOAD NEW IMAGE
      const b64 = Buffer.from(req.file.buffer).toString("base64");

      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const uploadedImage = await cloudinary.uploader.upload(dataURI, {
        folder: "pub-events",
      });

      imageUrl = uploadedImage.secure_url;
      imagePublicId = uploadedImage.public_id;
    }

    // UPDATE EVENT
    event = await Event.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        day: req.body.day,
        eventDate: req.body.eventDate,
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
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// DELETE EVENT
// ==========================================
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // DELETE CLOUDINARY IMAGE
    if (event.imagePublicId) {
      await cloudinary.uploader.destroy(event.imagePublicId);
    }

    // DELETE EVENT
    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
