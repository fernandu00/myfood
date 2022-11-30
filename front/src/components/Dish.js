import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentItem } from "../features/menu/menuSlice";

const Dish = ({ title, picture, unit_price, _id }) => {
  const { isAdmin } = useSelector((store) => store.user);
  return (
    <article className="dish">
      {isAdmin ? (
        <Link to={`/admin/menu/${_id}`}>
          <img className="dish-img" src={picture} alt={title} />
          <p className="dish-name">{title}</p>
          <p className="dish-price">R$ {unit_price.toFixed(2)}</p>
        </Link>
      ) : (
        <Link to={`/products/${_id}`}>
          <img className="dish-img" src={picture} alt={title} />
          <p className="dish-name">{title}</p>
          <p className="dish-price">R$ {unit_price.toFixed(2)}</p>
        </Link>
      )}
      {/* <Link to={`/products/${_id}`}>
        <img className="dish-img" src={picture} alt={title} />
        <p className="dish-name">{title}</p>
        <p className="dish-price">R$ {unit_price.toFixed(2)}</p>
      </Link> */}
    </article>
  );
};

export default Dish;
