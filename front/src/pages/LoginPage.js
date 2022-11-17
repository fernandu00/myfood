import React from "react";
import { MdFastfood } from "react-icons/md";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { setUser, submitUser, loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, checkpasswd, isLogged } = useSelector(
    (store) => store.user
  );
  // login with Google Account
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then(() => navigate("/main"));
  };

  // state to change components between Register and Login
  const [login, setLogin] = useState(false);

  return (
    <>
      <section className="section-center">
        <div className="login-container">
          <div className="icon-container">
            <MdFastfood className="logo-icon" />
          </div>

          <div className="button-container">
            <button
              className={login ? "container-btn active" : "container-btn"}
              onClick={() => setLogin(true)}
            >
              login
            </button>

            <button
              onClick={() => setLogin(false)}
              className={!login ? "container-btn active" : "container-btn"}
            >
              signup
            </button>
          </div>
        </div>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </section>
    </>
  );
};

export default LoginPage;
