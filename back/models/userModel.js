const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
    address: {
      line_1: {
        type: String,
      },
      line_2: {
        type: String,
      },
      number: {
        type: Number,
      },
      zipCode: {
        type: String,
      },
      neighborhood: {
        type: String,
      },
    },
    phone: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
