import dataModel from "../model/dataModel.js";

const deleteRecords = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);

  try {
    var del = await dataModel.deleteOne({ _id: id });
    res.send({ status: 200, message: "Delete Successfully" });
  } catch (error) {
    res.send({ status: 400, message: "Not Delete" });
  }
};

export { deleteRecords };
