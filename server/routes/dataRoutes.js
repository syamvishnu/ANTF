import express from "express";
import { addData, updateData } from "../controller/entryController.js";
import { searchData } from "../controller/searchController.js";
import { getHome, moreData } from "../controller/HomeController.js";
import { deleteRecords } from "../controller/DeleteDataController.js";

const router = express.Router();
+router.post("/", addData);
router.post("/records", searchData);
router.route("/home").get(getHome).post(moreData);
router.post("/delete", deleteRecords);
router.post("/edit", updateData);


export default router;
