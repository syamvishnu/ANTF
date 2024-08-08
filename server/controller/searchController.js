// import dataModel from '../model/dataModel.js';
// import asyncHandler from 'express-async-handler';

// const searchData = asyncHandler(async (req, res) => {
//   const { name, father, idno, contact, address, email } = req.body;
//   console.log(typeof(idno))
//   console.log(typeof(contact))

//   // Create a dynamic query object
//   const query = {};
//   if (name) query.name = name;
//   if (father) query.father = father;
//   if (idno) query.idno = Number(idno);
//   if (contact) query.contact = Number(contact);
//   if (email) query.email = email;
//   if (address) query.address = address;

//   console.log('Constructed Query:', query); // Log the query for inspection

//   try {
//     const data1 = await dataModel.find(query);
//     console.log(data1)
//     res.send(data1).status(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// export { searchData };

import dataModel from '../model/dataModel.js';
import asyncHandler from 'express-async-handler';

const searchData = asyncHandler(async (req, res) => {
  const { name, father, idno, contact, address, email } = req.body;

  console.log(typeof(idno)); // Check data types
  console.log(typeof(contact)); // Check data types

  // Create a dynamic query object
  const query = [];
  if (name) query.push({ name: { $regex: new RegExp(name, 'i') } });
  if (father) query.push({ father: { $regex: new RegExp(father, 'i') } });
  if (idno) query.push({ idno: Number(idno) });
  if (contact) query.push({ contact: Number(contact) });
  if (email) query.push({ email: { $regex: new RegExp(email, 'i') } });
  if (address) query.push({ address: { $regex: new RegExp(address, 'i') } });

  console.log('Constructed Query:', query); // Log the query for inspection

  try {
    const data1 = await dataModel.find({ $or: query });
    console.log(data1);
    res.send(data1).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export { searchData };

// import dataModel from "../model/dataModel.js";
// import asyncHandler from "express-async-handler";

// const searchData = asyncHandler(async (req, res) => {
//   const { name, father, idno, contact, address, email } = req.body;

//   if (name || father || idno || contact || address || email) {
//     // Create a dynamic query object
//     const query = [];
//     if (name) query.push({ name: { $regex: new RegExp(name, "i") } });
//     if (father) query.push({ father: { $regex: new RegExp(father, "i") } });
//     if (idno) query.push({ idno: Number(idno) });
//     if (contact) query.push({ contact: Number(contact) });
//     if (email) query.push({ email: { $regex: new RegExp(email, "i") } });
//     if (address) query.push({ address: { $regex: new RegExp(address, "i") } });

//     // console.log('Constructed Query:', query); // Log the query for inspection

//     try {
//       ////////// Pagination //////////
//       var perPage = 7;
//       var total = await dataModel.countDocuments();
//       var pages = Math.ceil(total / perPage);
//       var pageNumber = req.query.page == null ? 1 : req.query.page;
//       var startFrom = (pageNumber - 1) * perPage;
//       ////////////////////////////////////////

//       const data1 = await dataModel
//         .find({ $or: query })
//         .sort({ field: -1, _id: -1 })
//         .skip(startFrom)
//         .limit(perPage);
//       // return res.status(200).json({
//       //   message: "Data Found",
//       //   data: data1,
//       // });

//       res.send({
//         message: "Data Found",
//         data: data1,
//         total: total,
//         lastpage: pages,
//       });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//   } else {
//     res.status(500).json({ message: "No input data found" });
//   }
// });

// export { searchData };
