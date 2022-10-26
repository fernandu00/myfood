import React from "react";
import { FaHome, FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { BiUser } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <FaHome className="function-icon footer-item" />
      <FaRegHeart className="function-icon footer-item" />
      <BiUser className="function-icon footer-item" />
      <RiHistoryFill className="function-icon footer-item" />
    </footer>
  );
};

export default Footer;
