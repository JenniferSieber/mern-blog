import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// API TEST route
router.get("/test", test);
// Update Profile Data
router.put("/update/:userId", verifyToken, updateUser);

export default router;
