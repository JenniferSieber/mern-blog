import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  // validation of user with token
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized Access."));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized Access."));
    }
    req.user = user;
    next();
  });
};
