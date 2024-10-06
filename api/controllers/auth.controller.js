import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
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

// Signin Controller
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || email === "" || !password || password === "") {
    next(errorHandler(400, "All fields required for signin."));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "Invalid Credentials."));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Credentials."));
    }
    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET
    );

    // return validUser sans password || hashedPassword
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch(error) {
    next(error)
  }
};
