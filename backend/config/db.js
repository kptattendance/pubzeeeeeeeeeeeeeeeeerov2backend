import mongoose from "mongoose";

// Reuse one connection across serverless invocations instead of
// reconnecting (and never crashing the function with process.exit)
let connectionPromise = null;

const connectDB = () => {
  if (mongoose.connection.readyState === 1) return Promise.resolve();

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGO_URI, {
        maxPoolSize: 5,
        serverSelectionTimeoutMS: 8000,
      })
      .then((conn) => {
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      })
      .catch((error) => {
        connectionPromise = null; // allow a retry on the next request
        throw error;
      });
  }

  return connectionPromise;
};

export default connectDB;
