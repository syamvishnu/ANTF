import dataModel from "../model/dataModel.js";
import asyncHandler from "express-async-handler";

const addData = asyncHandler(async (req, res) => {
  try {
    const {
      sdiv,
      pstn,
      crno,
      firdate,
      name,
      father,
      spouse,
      idno,
      contact,
      email,
      address,
      photo,
    } = req.body;

    // Validate required fields
    if (!contact || !idno) {
      return res.status(400).json({
        message: "Please provide both Contact Details and ID Cards Details",
      });
    }

    // Check if contact number already exists
    const existingData = await dataModel.findOne({ contact });
    if (existingData) {
      return res.status(500).json({
        message: "Contact Number already exists",
        data: [existingData],
      });
    }

    // Save new data
    const newData = new dataModel({
      sdiv,
      pstn,
      crno,
      firdate,
      name,
      father,
      spouse,
      idno,
      contact,
      email,
      address,
      photo,
    });
    await newData.save();

    return res.status(200).json({
      message: "Data Added Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export { addData };
