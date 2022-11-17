import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Delivery from "../components/Delivery";
import { useSelector } from "react-redux";
import PaymentChoice from "../components/PaymentChoice";
import axios from "axios";

const CheckoutDeliveryPage = () => {
  const { total, quantity, paymentOption, cartItems } = useSelector(
    (store) => store.cart
  );
  const navigate = useNavigate();
  const { uuid } = useSelector((store) => store.user);
  // const url = "http://localhost:5000/order/new";

  // const url = "http://localhost:5000/payment";

  const url = "http://192.168.15.14:5000/payment";

  const createOrder = async (e) => {
    e.preventDefault();
    const order = {
      uuid,
      quantity,
      paymentOption,
      items: cartItems,
      total,
    };
    try {
      const resp = await axios.post(url, order);
      console.log(resp);
      window.location.replace(resp.data.init_point);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="delivery-main">
      <div className="cart-bar-container">
        <Link to="/cart">
          <FaChevronLeft className="chevron" />
        </Link>
        <h3>Pedido</h3>
      </div>
      <Delivery />
      <PaymentChoice />
      <div className="totals checkout-totals">
        <span>total</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <button className="btn" onClick={createOrder}>
        Pagar
      </button>
    </main>
  );
};

export default CheckoutDeliveryPage;
