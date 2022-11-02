import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart-container">
      {cartItems.map((item) => {
        return <CartItem key={item._id} {...item} />;
      })}
      <hr />
      <div className="totals">
        <span>total</span>
        <span>$ {total.toFixed(2)}</span>
      </div>
      <div className="btn-container">
        <button
          className="change-btn clear-cart-btn"
          onClick={() => dispatch(clearCart())}
        >
          Limpar carrinho
        </button>
      </div>
    </section>
  );
};

export default CartContainer;
