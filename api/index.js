import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection to MongoDB successful."))
  .catch((error) => console.log("Error in DB connection", error));

const app = express();
const PORT = process.env.PORT || 3001;

// API Middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port: ${PORT}.`));

// API Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Error Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
