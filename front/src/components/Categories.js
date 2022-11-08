import React, { useState } from "react";
import { useEffect } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Categories = () => {
  const { menuItems } = useSelector((store) => store.menu);
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const cat = menuItems.map((item) => item.category);
    setCategories([...new Set(cat)]);
  };

  const handleCategory = (name) => {
    setActive(true);
    menuItems.filter((item) => item.category === name);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="categories-list">
      {categories.map((cat, index) => {
        return (
          <article
            key={index}
            className={active ? "cat-item active" : "cat-item"}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </article>
        );
      })}
    </div>
  );
};

export default Categories;
