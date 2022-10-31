import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { doc, updateDoc, collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { name, email, uuid } = useSelector((store) => store.user);
  const [address, setAddress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserInfo = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = doc(db, "users", uuid);
      const data = {
        street_ave: address,
        houseNumber,
        zipCode,
        phoneNumber,
      };
      await updateDoc(updatedUser, {
        address: data,
      });
      toast.success("usuário atualizado");
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="profile-form">
      <div className="profile-details"></div>
      <div className="profile-info">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => dispatch(setUser({ name: e.target.value }))}
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => dispatch(setUser({ email: e.target.value }))}
          />
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label htmlFor="address2">
          Número
          <input
            type="number"
            id="address2"
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </label>
        <label htmlFor="zip">
          CEP
          <input
            type="text"
            size="10"
            id="zip"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Fone
          <input
            type="number"
            size="11"
            id="phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <button className="btn" onClick={updateUserInfo}>
        atualizar
      </button>
    </form>
  );
};

export default UpdateProfile;
