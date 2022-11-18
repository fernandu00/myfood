import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Dish from "../components/Dish";
import { filterItems, getMenuItems, test } from "../features/menu/menuSlice";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const AdminAddMenuItem = () => {
  const { menuItems, categories, filteredItems } = useSelector(
    (store) => store.menu
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuItems());
  }, []);
  return (
    <div>
      <h3>Menu</h3>
      <div className="dishes-container">
        <article className="dish add-dish">
          <Link to={`/admin/menu/add`}>
            <IoIosAddCircleOutline className="AddIcon" />
            <p className="dish-name">Novo Produto</p>
          </Link>
        </article>
        {filteredItems.map((dish) => {
          return <Dish key={dish._id} {...dish} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default AdminAddMenuItem;
