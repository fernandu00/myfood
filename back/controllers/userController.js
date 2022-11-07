const userModel = require("../models/userModel");

// list all users
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};

// get single user based on uid
const getSingleUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await userModel.findOne({ uuid: uid });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};

// create a new user
const createUser = async (req, res) => {
  const { name, email, uuid } = req.body;

  if (!name || !email || !uuid) {
    return res.status(500).json({ success: false, msg: "request incomplete" });
  }
  const userExists = await userModel.findOne({ email: email });
  if (userExists) {
    return res.status(500).json({ success: false, msg: "email in use" });
  }

  try {
    const newUser = new userModel({ name, email, uuid });
    await newUser.save();
    return res.status(201).json({ success: true, msg: newUser });
  } catch (error) {
    res.json(error);
    return res.status(500).json({ success: false, msg: error });
  }
};

// update existing user by uid
const updateUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ uuid: req.params.uid });
    if (user) {
      const updatedUser = await userModel.findOneAndUpdate(
        req.params.uid,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(201).json({ success: true, msg: updatedUser });
    } else {
      res.status(400).json({ success: false, msg: "user not found" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};

// delete existing user by id
const deleteUser = async (req, res) => {
  userId = req.params.id;
  try {
    const userToDelete = await userModel.findByIdAndDelete(userId);
    return res.status(201).json({ success: true, msg: userToDelete });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getSingleUser,
};
