import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// signup, signin, google signin
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
