import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Delivery from "../components/Delivery";

const CheckoutDeliveryPage = () => {
  return (
    <main className="delivery-main">
      <div className="cart-bar-container">
        <Link to="/cart">
          <FaChevronLeft className="chevron" />
        </Link>
        <h3>Pedido</h3>
      </div>
      <Delivery />
      <div className="totals checkout-totals">
        <span>total</span>
        <span>99.99</span>
      </div>
      <button className="btn">Pagar</button>
    </main>
  );
};

export default CheckoutDeliveryPage;
