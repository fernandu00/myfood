import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";
const ProfilePage = () => {
  return (
    <main>
      <div className="cart-bar-container">
        <FaChevronLeft className="chevron" />
        <h3>Perfil</h3>
      </div>
      <UpdateProfile />
    </main>
  );
};

export default ProfilePage;
