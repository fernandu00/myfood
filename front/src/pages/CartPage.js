import React from "react";
import CartContainer from "../components/CartContainer";
import { FaChevronLeft } from "react-icons/fa";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { quantity, cartItems } = useSelector((store) => store.cart);

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
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
      <CartContainer />

      <button className="btn">
        <Link style={{ color: "white" }} to="/checkout">
          fazer pedido
        </Link>
      </button>
    </main>
  );
};

export default CartPage;
