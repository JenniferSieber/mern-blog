import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

// Test API working
export const test = (req, res) => {
  res.json({ message: "API is working controllers, routes, index." });
};

// PUT updateUser
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'Unauthorized to update this user.'));
  }
  // new username validation 
  let hashedPassword;
  if (req.body.password) {
    if (req.body.password.length < 8) {
      return next(errorHandler(400, "Password must be at least 8 characters."));
    } 
    // encrypt valid new password
    hashedPassword = bcryptjs.hashSync(req.body.password, 10);
  } 
  
  // new username validation 
  if (req.body.username) {
    if (req.body.username.length < 5 || req.body.username.length > 20) {
      return next(errorHandler(400, "Username must be between 5 and 20 characters in length."));
    }
    if (!req.body.username.match(/^[a-z0-9]+$/g) || req.body.username.includes(' ') ) {
      return next(errorHandler(400, "Username should contain only lowercase letters and numbers with no spaces."));
    }
  }
  
  // Update DB with validated data from user
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: hashedPassword,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch(error) {
    next(error);
  }
};

// Get User
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
