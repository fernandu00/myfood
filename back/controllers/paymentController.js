const axios = require("axios");

const createPayment = async (req, res) => {
  const order = req.order;
  const url = "https://api.mercadopago.com/checkout/preferences";

  const body = {
    payer_email: order.user.email,
    items: order.items,
    payer: {
      phone: {
        area_code: "",
        number: order.user.phone,
      },
      address: {
        zip_code: order.user.address.zipCode,
        street_name: order.user.address.line_1,
        street_number: order.user.address.number,
      },
      email: order.user.email,
      name: order.user.name,
      surname: "",
    },

    back_urls: {
      success: "http://localhost:3000/main",
      failure: "http://www.failure.com",
      pending: "http://www.pending.com",
    },
  };
  try {
    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    return res.json(payment.data);
  } catch (error) {
    console.log(error);
  }
};

// single payment
const singlePayment = (req, res, next) => {
  return res.json({});
};

module.exports = { singlePayment, createPayment };
