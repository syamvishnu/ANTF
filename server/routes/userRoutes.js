import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";


router.post("/", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
