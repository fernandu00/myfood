import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Delivery from "../components/Delivery";

const CheckoutDeliveryPage = () => {
  return (
    <main className="delivery-main">
      <div className="cart-bar-container">
        <FaChevronLeft className="chevron" />
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
