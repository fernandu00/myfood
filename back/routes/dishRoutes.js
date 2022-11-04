const dishRoutes = require("express").Router();

const {
  getItems,
  createDish,
  updateDish,
  deleteDish,
} = require("../controllers/dishController");

dishRoutes.get("/all", getItems);

dishRoutes.post("/new", createDish);

dishRoutes.delete("/delete/:id", deleteDish);

dishRoutes.patch("/update/:id", updateDish);

module.exports = dishRoutes;
