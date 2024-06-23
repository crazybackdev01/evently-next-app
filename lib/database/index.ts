import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is required");

  cached.promise =
    cached.promise ||
    (await mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    }));

  cached.conn = await cached.promise;

  return cached.conn;
};

// Server actions use connectDB() everytime to create a connection to the database and to decrease this overhead, we need to cache the database connection.........*
