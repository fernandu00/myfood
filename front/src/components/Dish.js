import React from "react";

const Dish = ({ name, picture, price, id }) => {
  return (
    <article className="dish">
      <img className="dish-img" src={picture} alt={name} />
      <p className="dish-name">{name}</p>
      <p className="dish-price">$ {price}</p>
    </article>
  );
};

export default Dish;
