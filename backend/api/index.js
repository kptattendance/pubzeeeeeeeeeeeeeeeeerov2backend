import "dotenv/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { clerkMiddleware } from "@clerk/express";

import connectDB from "./../config/db.js";

import authRoutes from "./../routes/authRoutes.js";
import eventRoutes from "./../routes/eventRoutes.js";
import galleryRoutes from "./../routes/galleryRoutes.js";

const app = express();

// CONNECT DB
connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.zerodegreebreweryandkitchen.com",
      "https://zerodegreebreweryandkitchen.com",
    ],
    credentials: true,
  }),
);

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(clerkMiddleware());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("PUB Backend Running...");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);

// EXPORT APP FOR VERCEL
export default app;
