import express from "express";
import { addData } from "../controller/entryController.js";

const router = express.Router();
router.post("/", addData);



export default router;

