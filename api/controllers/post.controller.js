import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  console.log("create");
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a post."));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fields."));
  }

  if (!/^[a-zA-Z0-9\s]*$/.test(req.body.title)) {
    return next(errorHandler(400, "Invalid post title: Only letters, numbers and spaces allowed."));
  }

  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    // .replace(/[^a-zA-Z0-9\s]/g, '');
    
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  console.log("deletePost");
};

export const getPosts = async (req, res, next) => {
  console.log("getPosts");
};

export const updatePost = async (req, res, next) => {
  console.log("updatePost");
};