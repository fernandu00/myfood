import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, submitUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./../firebase";
import axios from "axios";
import { RiContactsBookLine } from "react-icons/ri";

const Register = ({ setLogin }) => {
  const dispatch = useDispatch();
  const { email, password, checkpasswd, uuid, name } = useSelector(
    (store) => store.user
  );

  const url = "http://localhost:5000/user/new";

  // create firestore user
  // const createUserFirestore = async (uuid) => {
  //   try {
  //     const user = {
  //       name: name,
  //       email: email,
  //       address: null,
  //       uuid: uuid,
  //     };

  //     await setDoc(doc(db, "users", uuid), user);

  //     console.log(user.uuid);
  //     toast.success("usuário cadastrado no banco");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // create user on MongoDB database

  const createUserDb = async (uuid) => {
    try {
      const user = {
        name: name,
        email: email,
        address: null,
        uuid: uuid,
      };
      const res = await axios.post(url, user);
      console.log(res);
      if (res.data.success) {
        toast.success("usuário criado!");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  // register user
  const registerUser = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    if (password !== checkpasswd) {
      toast.error("senhas não conferem");
      return;
    }
    // firebase auth function
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      // set uuid on redux
      dispatch(setUser({ uuid: user.uid }));
      // register on MongoDB
      await createUserDb(user.uid);
      setLogin(true);
    } catch (error) {
      toast.error(error.message);
    }

    // register on firestore function
    // const userFirestore = await createUserFirestore(auth.currentUser.uid);
  };

  return (
    <>
      <form className="register-form">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => dispatch(setUser({ name: e.target.value }))}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => dispatch(setUser({ email: e.target.value }))}
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => dispatch(setUser({ password: e.target.value }))}
        />
        <label htmlFor="check-password">Repita a senha:</label>
        <input
          type="password"
          id="check-password"
          onChange={(e) => dispatch(setUser({ checkpasswd: e.target.value }))}
        />
        <button className="btn login-btn" onClick={registerUser}>
          Registrar
        </button>
      </form>
    </>
  );
};

export default Register;
