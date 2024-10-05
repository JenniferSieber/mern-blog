import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/Error.js";

// Signup Controller
export const signup = async (req, res, next) => {
  // console.log(req.body)
  const { username, email, password } = req.body;

  // Our model has those requirements but this is extra step of securing the data before updating the database
  if (
    !username ||
    username === "" ||
    !email ||
    email === "" ||
    !password ||
    password === ""
  ) {
    next(errorHandler(400, "All fields required for signup."));
  }

  // Hash password before passing to DB
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  console.log(newUser);
  try {
    await newUser.save();
    res.json("Signup successful.");
  } catch (error) {
    next(error);
  }
};
