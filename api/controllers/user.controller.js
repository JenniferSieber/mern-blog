import User from "../models/user.model.js";

// Test API working
export const test = (req, res) => {
  res.json({ message: "API is working controllers, routes, index." });
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
