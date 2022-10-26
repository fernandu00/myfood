import React from "react";

import { FaChevronLeft } from "react-icons/fa";
const SingleProductPage = () => {
  return (
    <main className="single-product-main">
      <div className="container">
        <FaChevronLeft className="chevron" />
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/375px-Hamburger_%28black_bg%29.jpg"
        alt="name"
      />
      <div className="info">
        <h2>Dish Name</h2>
        <span className="product-price">$ dish price</span>
      </div>

      <div className="details">
        <p className="product-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          libero praesentium inventore dignissimos eos sit dolorum voluptatibus
          hic vitae explicabo quis nihil dolore, voluptatem corporis magnam
          autem veritatis distinctio ad.
        </p>
      </div>
      <button className="btn">adicionar ao carrinho</button>
    </main>
  );
};

export default SingleProductPage;
