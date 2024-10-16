import express from "express";
import {
  create,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// CRUD routes
router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.put("/updatepost/:postId/:userId", verifyToken, updatePost);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);

export default router;
