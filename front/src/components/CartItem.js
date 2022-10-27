import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increase, remove, decrease } from "../features/cart/cartSlice";
const CartItem = ({ name, price, picture, amount, id }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <div className="img-container">
        <img className="cart-img" src={picture} alt={name} />
        <button
          className="change-btn"
          onClick={() => {
            dispatch(remove(id));
          }}
        >
          remover
        </button>
      </div>

      <div className="cart-details">
        <h4>{name}</h4>
        <span className="product-price">$ {price}</span>
        <div className="toggle-item">
          <button
            className="toggle-btn"
            onClick={() => {
              if (amount === 1) {
                dispatch(remove(id));
                return;
              }
              dispatch(decrease(id));
            }}
          >
            <FaMinus />
          </button>
          <span className="quantity">{amount}</span>
          <button
            className="toggle-btn"
            onClick={() => {
              dispatch(increase(id));
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
