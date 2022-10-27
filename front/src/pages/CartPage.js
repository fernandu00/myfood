import React from "react";
import CartContainer from "../components/CartContainer";
import { FaChevronLeft } from "react-icons/fa";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const CartPage = () => {
  return (
    <main className="cart-main">
      <div className="cart-bar-container">
        <Link to="/main">
          <FaChevronLeft className="chevron" />
        </Link>
        <h3>Carrinho</h3>
        <div className="cart-icon-container">
          <HiOutlineShoppingCart className="function-icon" />
          <div className="amount-container">
            <p className="total-amount">5</p>
          </div>
        </div>
      </div>
      <CartContainer />
      <button className="btn">fazer pedido</button>
    </main>
  );
};

export default CartPage;
