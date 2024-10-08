import express from "express";
import { getUser, test } from "../controllers/user.controller.js";

const router = express.Router();

// API TEST route
router.get("/test", test);
// router.get("/:id")
router.get('/:userId', getUser);
export default router;