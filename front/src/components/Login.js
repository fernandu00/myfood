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
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, checkpasswd, isLogged, uuid, name } = useSelector(
    (store) => store.user
  );

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({ uuid: user.uid }));
        console.log(user);
      })
      .then(() => {
        dispatch(setUser({ isLogged: true }));

        navigate("/main");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then(navigate("/main"));
  };

  return (
    <>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => dispatch(setUser({ email: e.target.value }))}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          onChange={(e) => dispatch(setUser({ password: e.target.value }))}
        />

        <button className="btn login-btn" onClick={handleLogin}>
          Login
        </button>
      </form>

      <div>
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
    </>
  );
};

export default Login;
