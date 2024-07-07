import mongoose from "mongoose";

const dataSchema = mongoose.Schema(
  {
    sdiv: {
      type: String,
    },

    pstn: {
      type: String,
    },

    crno: {
      type: String,
    },

    firdate: {
      type: String,
    },

    name: {
      type: String,
    },

    father: {
      type: String,
    },

    spouse: {
      type: String,
    },

    idno: {
      type: Number,
    },

    contact: {
      type: Number,
    },

    email: {
      type: String,
    },

    address: {
      type: String,
    },

    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

const dataModel = mongoose.model("data", dataSchema);

export default dataModel;
