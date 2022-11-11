const orderRoutes = require("express").Router();

const {
  createOrder,
  getOrders,
  getOrderByUserId,
  deleteOrder,
  getSingleOrder,
  updateOrder,
} = require("../controllers/orderController");

orderRoutes.post("/new", createOrder);

orderRoutes.get("/", getOrders);

orderRoutes.get("/uuid", getOrderByUserId);

orderRoutes.get("/:id", getSingleOrder);

orderRoutes.delete("/:id", deleteOrder);

orderRoutes.patch("/:id", updateOrder);

module.exports = orderRoutes;
