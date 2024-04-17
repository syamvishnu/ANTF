import asyncHandler from "express-async-handler";
import userModel from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

////////////////// User Login /////////////////////
const authUser = asyncHandler(async (req, res) => {
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

/////////////// User Logout //////////////////////
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User Logged Out " });
});

/////////////// Get User Profile //////////////////////
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    penno: req.user.penno,
  };
  res.status(200).json(user);
});

/////////////// Update User Profile //////////////////////
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.penno = req.body.penno || user.penno;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      penno: updatedUser.penno,
    });
  } else {
    res.status(400);
    throw new Error("No User Found");
  }
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
