import React from "react";
import { FaHome, FaRegHeart, FaRegUser, FaMotorcycle } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isAdmin } = useSelector((store) => store.user);
  return (
    <footer className="footer">
      {isAdmin ? (
        <Link to="/admin/main">
          <FaHome className="function-icon footer-item" />
        </Link>
      ) : (
        <Link to="/main">
          <FaHome className="function-icon footer-item" />
        </Link>
      )}

      {isAdmin ? (
        <Link to="/admin/togo">
          <FaMotorcycle className="function-icon footer-item" />
        </Link>
      ) : (
        <Link to="/profile">
          <BiUser className="function-icon footer-item" />
        </Link>
      )}
      {isAdmin ? (
        <Link to="/admin/orderhistory">
          <RiHistoryFill className="function-icon footer-item" />
        </Link>
      ) : (
        <Link to="/history">
          <RiHistoryFill className="function-icon footer-item" />
        </Link>
      )}
    </footer>
  );
};

export default Footer;
