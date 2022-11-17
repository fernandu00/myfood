import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminOrderHistoryComponent from "../components/AdminOrderHistoryComponent";
import Footer from "../components/Footer";
import OrderHistory from "../components/OrderHistory";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";

const AdminOrderHistory = () => {
  return (
    <main>
      <div className="cart-bar-container">
        <Link to="/admin/main">
          <FaChevronLeft className="chevron" />
        </Link>
      </div>
      <AdminOrderHistoryComponent />
      <Footer />
    </main>
  );
};

export default AdminOrderHistory;
