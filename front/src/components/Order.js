import React from "react";

const Order = ({ title, quantity, unit_price }) => {
  return (
    <article>
      {/* <img className="dish-img" src={item.picture} alt={item.title} /> */}
      <div className="item-container">
        <span className="dish-name">
          {quantity}- {title}
        </span>{" "}
        <span className="dish-price">R$ {unit_price}</span>
      </div>

      {/* <p className="product-desc">{item.desc}</p> */}
    </article>
  );
};

export default Order;
