const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// routers
const dishRoutes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const orderRoutes = require("./routes/orderRoutes");

// middlewares
app.use(cors());
app.use(express.json());
app.use("/menu", dishRoutes);
app.use("/user", userRoutes);
app.use("/payment", paymentRoutes);
app.use("/order", orderRoutes);

//connect to DB
mongoose.connect(process.env.MONGO_URI, () => {
  console.log(`connected to DB`);
});

// Listen
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
