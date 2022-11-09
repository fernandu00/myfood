import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { setCurrentItem } from "../features/menu/menuSlice";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { menuItems, currentItem } = useSelector((store) => store.menu);

  const currentProduct = menuItems.find((item) => item._id === id);
  const { unit_price, title, picture, desc } = currentProduct;

  dispatch(setCurrentItem(currentProduct));

  return (
    <main className="single-product-main">
      <div className="container">
        <Link to="/main">
          <FaChevronLeft className="chevron" />
        </Link>
      </div>

      <img src={picture} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <span className="product-price">R$ {unit_price.toFixed(2)}</span>
      </div>

      <div className="details">
        <p className="product-desc">{desc}</p>
      </div>
      <button
        className="btn"
        onClick={() => {
          dispatch(addItem(currentItem));
          console.log(currentItem);
          toast.success("item adicionado!");
          navigate("/main");
        }}
      >
        adicionar ao carrinho
      </button>
    </main>
  );
};

export default SingleProductPage;
