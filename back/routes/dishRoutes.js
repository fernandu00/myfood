const dishRoutes = require("express").Router();

const { getItems, createDish } = require("../controllers/dishController");

dishRoutes.get("/all", getItems);

dishRoutes.post("/new", createDish);

module.exports = dishRoutes;
