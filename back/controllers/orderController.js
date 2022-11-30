const orderModel = require("./../models/orderModel");
const userModel = require("./../models/userModel");

// create a new order
const createOrder = async (req, res, next) => {
  const { items, uuid, quantity, total, paymentOption } = req.body;

  const user = await userModel.findOne({ uuid: uuid }).populate();

  if (!user) {
    return res.status(500).json({ success: false, msg: "user not provided" });
  }
  if (!items) {
    return res.status(500).json({ success: false, msg: "items not provided" });
  }
  if (!quantity) {
    return res
      .status(500)
      .json({ success: false, msg: "quantity not provided" });
  }
  if (!paymentOption) {
    return res
      .status(500)
      .json({ success: false, msg: "payment option not provided" });
  }
  if (!total) {
    return res.status(500).json({ success: false, msg: "total not provided" });
  }

  try {
    const newOrder = new orderModel({
      items,
      uuid,
      quantity,
      total,
      paymentOption,
      user: user,
    });
    await newOrder.save();
    // return res.status(201).json({ success: true, msg: newOrder });
    req.order = newOrder;
  } catch (error) {
    res.json(error);
    return res.status(500).json({ success: false, msg: error });
  }
  next();
};

// get order all orders

const getOrders = async (req, res) => {
  const orders = await orderModel.find({}).populate("user");
  res.status(200).json({ success: true, msg: orders });
};

// get order by uuid
const getOrderByUserId = async (req, res) => {
  const { uuid } = req.body;
  try {
    const ordersById = await orderModel.find({ uuid: uuid });
    res.status(200).json({ success: true, msg: ordersById });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// delete order by id

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const orderToDelete = await orderModel.findOneAndDelete({ id });
    res.status(200).json({ success: true, msg: orderToDelete });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

// get single order by id
const getSingleOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const singleOrder = await orderModel.findById(id);
    res.status(201).json({ success: true, msg: singleOrder });
  } catch (error) {
    res.status(500).json({ success: false, meg: error.message });
  }
};

// update order
const updateOrder = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if (order) {
      const updatedOrder = await orderModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(201).json({ success: true, msg: updatedOrder });
    } else {
      res.status(400).json({ success: false, msg: "order not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
    console.log(error);
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderByUserId,
  deleteOrder,
  getSingleOrder,
  updateOrder,
};
