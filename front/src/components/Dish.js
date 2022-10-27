import React from "react";
import { Link } from "react-router-dom";

const Dish = ({ name, picture, price, id }) => {
  return (
    <article className="dish">
      <Link to={`/single/${id}`}>
        <img className="dish-img" src={picture} alt={name} />
        <p className="dish-name">{name}</p>
        <p className="dish-price">$ {price}</p>
      </Link>
    </article>
  );
};

export default Dish;
