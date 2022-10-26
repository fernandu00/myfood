import React from "react";
import CartContainer from "../components/CartContainer";
import { FaChevronLeft } from "react-icons/fa";
const CartPage = () => {
  return (
    <main className="cart-main">
      <div className="cart-bar-container">
        <FaChevronLeft className="chevron" />
        <h3>Carrinho</h3>
      </div>
      <CartContainer />
      <button className="btn">fazer pedido</button>
    </main>
  );
};

export default CartPage;
