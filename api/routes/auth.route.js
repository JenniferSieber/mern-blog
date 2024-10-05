import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// create signup auth POST
router.post("/signup", signup);

export default router;
