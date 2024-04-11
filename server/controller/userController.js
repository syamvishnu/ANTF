import asyncHandler from "express-async-handler";
import userModel from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

////////////////// User Login /////////////////////
const authUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { penno, password } = req.body;

  const user = await userModel.findOne({ penno: penno });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      message: "User Login Successfully",
      user: {
        user_id: user._id,
        penno,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

////////////////// Register User //////////////////////
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, penno, password } = req.body;

  const userExist = await userModel.findOne({ penno: penno });
  if (userExist) {
    res.status(400);
    throw new Error("PEN No. Exists");
  }

  const user = await userModel.create({
    name,
    email,
    penno,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(200).json({
      message: "User Registered Successfully",
      user: {
        user_id: user._id,
        name,
        email,
        penno,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User " });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile " });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile " });
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
