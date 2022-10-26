import React from "react";
import { MdFastfood } from "react-icons/md";
import GoogleButton from "react-google-button";
const LoginPage = () => {
  return (
    <>
      <section className="section-center">
        <div className="login-container">
          <div className="icon-container">
            <MdFastfood className="logo-icon" />
          </div>

          <div className="button-container">
            <button className="login-btn">login</button>

            <button className="login-btn">signup</button>
          </div>
        </div>
        <div>
          <GoogleButton />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
