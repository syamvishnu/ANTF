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

const updateData = async (req, res) => {
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
    id, // Ensure id is included in the request body
  } = req.body;

  console.log(id)


  try {
    if (!id) {
      return res.status(400).send({ message: "ID is required" });
    }

    const updateFields = {
      ...(sdiv && { sdiv }),
      ...(pstn && { pstn }),
      ...(crno && { crno }),
      ...(firdate && { firdate }),
      ...(name && { name }),
      ...(father && { father }),
      ...(spouse && { spouse }),
      ...(idno && { idno }),
      ...(contact && { contact }),
      ...(email && { email }),
      ...(address && { address }),
      ...(photo && { photo }),
    };

    const data = await dataModel.updateOne({ _id: id }, { $set: updateFields });

    console.log(data)

    if (data.nModified === 0) {
      return res
        .status(404)
        .send({ message: "No document found with this ID" });
    }

    res.send({ status: 200, message: "Data Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, message: "Error updating data" });
  }
};

export { addData, updateData };
