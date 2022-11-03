const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// routers
const dishRoutes = require("./routes/dishRoutes");

// middlewares
app.use(cors());
app.use(express.json());
app.use("/menu", dishRoutes);
//
mongoose.connect(process.env.MONGO_URI, () => {
  console.log(`connected to DB`);
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
