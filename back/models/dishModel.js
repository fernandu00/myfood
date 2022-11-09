const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  unit_price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: false,
  },
  picture: {
    type: String,
    required: true,
  },
  currency_id: {
    type: String,
    default: "BRL",
  },
});

module.exports = mongoose.model("dish", dishSchema);
