const dishModel = require("../models/dishModel");

const getItems = async (req, res) => {
  const items = await dishModel.find({});
  return res.status(201).json(items);
};

const createDish = async (req, res) => {
  const { title, desc, category, price, picture } = req.body;
  if (!title || !desc || !category || !price || !picture) {
    return res.status(500).json({ success: false, msg: "request incomplete" });
  }

  try {
    const newDish = new dishModel({ title, desc, category, price, picture });
    await newDish.save();
    return res.status(201).json({ success: true, msg: newDish });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

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

module.exports = { getItems, createDish, updateDish };
