import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentItem } from "../features/menu/menuSlice";

const Dish = ({ title, picture, unit_price, _id }) => {
  return (
    <article className="dish">
      <Link to={`/products/${_id}`}>
        <img className="dish-img" src={picture} alt={title} />
        <p className="dish-name">{title}</p>
        <p className="dish-price">R$ {unit_price.toFixed(2)}</p>
      </Link>
    </article>
  );
};

export default Dish;
