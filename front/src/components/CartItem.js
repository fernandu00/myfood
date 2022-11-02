import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increase, remove, decrease } from "../features/cart/cartSlice";
const CartItem = ({ title, price, picture, amount, _id }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <div className="img-container">
        <img className="cart-img" src={picture} alt={title} />
        <button
          className="change-btn"
          onClick={() => {
            dispatch(remove(_id));
          }}
        >
          remover
        </button>
      </div>

      <div className="cart-details">
        <h4>{title}</h4>
        <span className="product-price">R$ {price.toFixed(2)}</span>
        <div className="toggle-item">
          <button
            className="toggle-btn"
            onClick={() => {
              if (amount === 1) {
                dispatch(remove(_id));
                return;
              }
              dispatch(decrease(_id));
            }}
          >
            <FaMinus />
          </button>
          <span className="quantity">{amount}</span>
          <button
            className="toggle-btn"
            onClick={() => {
              dispatch(increase(_id));
            }}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
