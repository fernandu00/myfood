const paymentRoutes = require("express").Router();

const {
  singlePayment,
  createPayment,
} = require("../controllers/paymentController");
const { createOrder } = require("./../controllers/orderController");

paymentRoutes.get("/");

paymentRoutes.post("/", createOrder, createPayment);

module.exports = paymentRoutes;
