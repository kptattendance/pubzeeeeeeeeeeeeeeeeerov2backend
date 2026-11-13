import multer from "multer";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 4 * 1024 * 1024, // Vercel rejects request bodies over ~4.5 MB anyway
    files: 1,
  },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_TYPES.includes(file.mimetype)) return cb(null, true);
    const err = new Error("Only JPG, PNG, WebP or AVIF images are allowed");
    err.status = 400;
    cb(err);
  },
});

export default upload;
