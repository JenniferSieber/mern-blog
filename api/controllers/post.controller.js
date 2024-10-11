import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  console.log("create");
  errorHandler();
  const newPost = new Post();
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
