const dishModel = require("../models/dishModel");

// lists all menu items
const getItems = async (req, res) => {
  const items = await dishModel.find({});
  return res.status(201).json(items);
};

// create a menu item
const createDish = async (req, res) => {
  const { title, desc, category, unit_price, picture } = req.body;
  if (!title || !desc || !category || !unit_price || !picture) {
    return res.status(500).json({ success: false, msg: "request incomplete" });
  }

  try {
    const newDish = new dishModel({
      title,
      desc,
      category,
      unit_price,
      picture,
    });
    await newDish.save();
    return res.status(201).json({ success: true, msg: newDish });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

// update menu item based on id
const updateDish = async (req, res) => {
  try {
    const dish = await dishModel.findById(req.params.id);
    if (dish) {
      const updatedDish = await dishModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(201).json({ success: true, msg: updatedDish });
    } else {
      res.status(500).json({ success: false, msg: "dish not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete menu item based on id
const deleteDish = async (req, res) => {
  dishId = req.params.id;
  try {
    const dishToDelete = await dishModel.findByIdAndDelete(dishId);
    return res.status(201).json({ success: true, msg: dishToDelete });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
};

module.exports = { getItems, createDish, updateDish, deleteDish };
