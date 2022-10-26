import React from "react";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import Categories from "../components/Categories";
import { dishes } from "../data";
import Dish from "../components/Dish";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <main className="main">
      <div className="toolbar">
        <HiMenuAlt1 className="function-icon" />
        <HiOutlineShoppingCart className="function-icon" />
      </div>
      <h3 className="title-main">Comidas deliciosas pra você!</h3>
      <Categories />
      {dishes.map((dish) => {
        return <Dish key={dish.id} {...dish} />;
      })}
      <Footer />
    </main>
  );
};

export default MainPage;
