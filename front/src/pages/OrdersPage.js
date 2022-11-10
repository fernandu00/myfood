import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderHistory from "../components/OrderHistory";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
const OrdersPage = () => {
  return (
    <main>
      <div className="cart-bar-container">
        <Link to="/main">
          <FaChevronLeft className="chevron" />
        </Link>
        <h3>Perfil</h3>
      </div>
      <OrderHistory />
    </main>
  );
};

export default OrdersPage;
