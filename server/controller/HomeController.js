import dataModel from "../model/dataModel.js";

const getHome = async (req, res) => {
  var perPage = 10;
  var total = await dataModel.countDocuments();
  var pages = Math.ceil(total / perPage);
  var pageNumber = req.query.page == null ? 1 : req.query.page;
  var startFrom = (pageNumber - 1) * perPage;

  var data1 = await dataModel
    .find({})
    .sort({ field: -1, _id: -1 })
    .skip(startFrom)
    .limit(perPage);
  res.send({ data: data1, total: total, lastpage: pages });
};

export { getHome };
