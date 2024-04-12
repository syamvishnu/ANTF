import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import asyncHanler from "express-async-handler";

const protect = asyncHanler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SEC);
      req.user = await userModel.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("No Token");
  }
});

export { protect };
