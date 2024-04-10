import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      String,
      required: true,
    },

    email: {
      String,
      required: true,
    },

    penno: {
      Number,
      required: true,
    },

    password: {
      String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
