import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
const ProfilePage = () => {
  return (
    <main>
      <div className="cart-bar-container">
        <Link to="/main">
          <FaChevronLeft className="chevron" />
        </Link>
        <h3>Perfil</h3>
      </div>
      <UpdateProfile />
    </main>
  );
};

export default ProfilePage;
