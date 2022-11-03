const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      email: {
        type: String,
        required: true,
      },
      uuid: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    items: {
      type: [String],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
