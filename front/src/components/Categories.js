import React from "react";
import { categories } from "../data";
const Categories = () => {
  return (
    <div className="categories-list">
      {categories.map((cat, index) => {
        return (
          <article className="cat-item" key={index}>
            {cat}
          </article>
        );
      })}
    </div>
  );
};

export default Categories;
