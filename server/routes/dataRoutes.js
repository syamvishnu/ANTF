import express from "express";
import { addData } from "../controller/entryController.js";
import { searchData } from "../controller/searchController.js";
import { getHome } from "../controller/HomeController.js";

const router = express.Router();
+router.post("/", addData);
router.post("/records", searchData);
router.get("/home", getHome);

export default router;
