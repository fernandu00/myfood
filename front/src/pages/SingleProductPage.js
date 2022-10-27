import React from "react";

import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dishes } from "../data";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const product = dishes.find((dish) => dish.id === Number(id));

  const { price, name, picture, desc } = product;

  return (
    <main className="single-product-main">
      <div className="container">
        <Link to="/main">
          <FaChevronLeft className="chevron" />
        </Link>
      </div>

      <img src={picture} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <span className="product-price">$ {price}</span>
      </div>

      <div className="details">
        <p className="product-desc">{desc}</p>
      </div>
      <button
        className="btn"
        onClick={() => {
          dispatch(addItem({ name: product }));
          navigate("/main");
        }}
      >
        adicionar ao carrinho
      </button>
    </main>
  );
};

export default SingleProductPage;
