const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    items: {
      type: Array,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    paymentOption: {
      type: String,
      required: true,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "recebido",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
