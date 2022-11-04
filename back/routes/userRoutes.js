const userRoutes = require("express").Router();

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

userRoutes.post("/new", createUser);

userRoutes.get("/", getUsers);

userRoutes.patch("/:uid", updateUser);

userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes;
