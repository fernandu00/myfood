import React from "react";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import Dish from "../components/Dish";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { filterItems, getMenuItems, test } from "../features/menu/menuSlice";

const AdminMenu = () => {
  const { menuItems, categories, filteredItems } = useSelector(
    (store) => store.menu
  );
  const dispatch = useDispatch();

  const [active, setActive] = useState(null);
  // const [categories, setCategories] = useState([]);

  // const getCategories = () => {
  //   const cat = menuItems.map((item) => item.category);
  //   setCategories([...new Set(cat)]);
  // };

  // load menu items from database
  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  const { quantity } = useSelector((store) => store.cart);
  return (
    <main className="main">
      <div className="toolbar">
        <HiMenuAlt1 className="function-icon" />
        <div className="cart-icon-container">
          <Link to="/cart">
            <HiOutlineShoppingCart className="function-icon" />
          </Link>
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
      <h3 className="title-main">Comidas deliciosas pra você!</h3>

      {/* categories */}
      <div className="categories-list">
        {categories.map((cat, index) => {
          return (
            <article
              key={index}
              // change styles based on state active
              className={index === active ? "cat-item active" : "cat-item"}
              onClick={() => {
                setActive(index);
                dispatch(filterItems(cat));
              }}
            >
              {cat}
            </article>
          );
        })}
      </div>

      <div className="dishes-container">
        {filteredItems.map((dish) => {
          return <Dish key={dish._id} {...dish} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default AdminMenu;
