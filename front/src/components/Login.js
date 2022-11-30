import React from "react";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, isAdmin } = useSelector((store) => store.user);

  const url = "http://192.168.15.14:5000/user";

  // Login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      dispatch(setUser({ uuid: user.uid }));
      console.log(user);
      dispatch(setUser({ isLogged: true }));
      const role = await axios.get(`${url}/${user.uid}`);
      console.log(role);
      dispatch(setUser({ isAdmin: role.data.isAdmin }));
      {
        role.data.isAdmin === true
          ? navigate("/admin/main")
          : navigate("/main");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Login with Google Account
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const res = await signInWithRedirect(auth, provider);
      const user = res.user;
      console.log(user);
      dispatch(setUser({ uuid: user.uid }));
      console.log(user);
      dispatch(setUser({ isLogged: true }));
      const role = await axios.get(`${url}/${user.uid}`);
      console.log(role);
      dispatch(setUser({ isAdmin: role.data.isAdmin }));
      {
        role.data.isAdmin === true
          ? navigate("/admin/main")
          : navigate("/main");
      }
    } catch (error) {
      toast.error(error.message);
    }
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

      {/* <div>
        <GoogleButton onClick={handleGoogleLogin} />
      </div> */}
    </>
  );
};

export default Login;
