import React from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  return (
    <section className="cart-container">
      <CartItem />
      <CartItem />
      <CartItem />
      <hr />
      <div className="totals">
        <span>total</span>
        <span>$ 333</span>
      </div>
    </section>
  );
};

export default CartContainer;
