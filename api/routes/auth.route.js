import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// create signup auth POST
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
