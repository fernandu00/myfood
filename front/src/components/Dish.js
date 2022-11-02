import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentItem } from "../features/menu/menuSlice";

const Dish = ({ title, picture, price, _id }) => {
  const dispatch = useDispatch();

  return (
    <article className="dish">
      <Link to={`/products/${_id}`}>
        <img className="dish-img" src={picture} alt={title} />
        <p className="dish-name">{title}</p>
        <p className="dish-price">R$ {price.toFixed(2)}</p>
      </Link>
    </article>
  );
};

export default Dish;
