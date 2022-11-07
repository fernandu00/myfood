const userRoutes = require("express").Router();

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/userController");

userRoutes.post("/new", createUser);

userRoutes.get("/", getUsers);

userRoutes.get("/:uid", getSingleUser);

userRoutes.patch("/:uid", updateUser);

userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes;
