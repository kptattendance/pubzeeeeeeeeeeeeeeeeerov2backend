import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    imagePublicId: {
      type: String,
    },

    category: {
      type: String,
      enum: [
        "food",
        "events",
        "ambience",
        "sports",
        "dj-night",
        "cocktails",
        "crowd",
      ],
      default: "events",
    },

    galleryDate: {
      type: Date,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    priority: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model(
  "Gallery",
  gallerySchema
);

export default Gallery;