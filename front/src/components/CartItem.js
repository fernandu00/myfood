import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const CartItem = () => {
  return (
    <article className="cart-item">
      <img
        className="cart-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/375px-Hamburger_%28black_bg%29.jpg"
        alt="name"
      />
      <div className="cart-details">
        <h4>product name</h4>
        <span className="product-price">$ product price</span>
        <div className="toggle-item">
          <button className="toggle-btn">
            <FaMinus />
          </button>
          <span className="quantity">1</span>
          <button className="toggle-btn">
            <FaPlus />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
