import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, submitUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./../firebase";

const Register = ({ setLogin }) => {
  const dispatch = useDispatch();
  const { email, password, checkpasswd, uuid, name } = useSelector(
    (store) => store.user
  );

  const createUserFirestore = async (uuid) => {
    try {
      const user = {
        name: name,
        email: email,
        address: null,
        uuid: uuid,
      };

      await setDoc(doc(db, "users", uuid), user);

      console.log(user.id);
      toast.success("usuário cadastrado no banco");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (password !== checkpasswd) {
      toast.error("senhas não conferem");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({ uuid: user.uid }));
        console.log(user.uid);

        toast.success("usuário criado com sucesso");
      })
      .then(() => {
        createUserFirestore(auth.currentUser.uid);
      })
      .then(() => {
        setLogin(true);
      })

      .catch((error) => {
        toast.error(error.message);
      });
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
