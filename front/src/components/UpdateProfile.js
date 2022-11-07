import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { doc, updateDoc, collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const UpdateProfile = () => {
  const { name, email, uuid } = useSelector((store) => store.user);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = "http://localhost:5000/user";

  // fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`${url}/${uuid}`);
      dispatch(setUser({ name: res.data.name }));
      setAddress(res.data.address.line_1);
      setAddress2(res.data.address.line_2);
      setHouseNumber(res.data.address.number);
      setZipCode(res.data.address.zipCode);
      setPhoneNumber(res.data.phone);
    };
    fetchUserData();
  }, []);
  // update user
  const updateUserInfo = async (e) => {
    e.preventDefault();

    try {
      const data = {
        address: {
          line_1: address,
          line_2: address2,
          number: houseNumber,
          zipCode: zipCode,
        },
        phone: phoneNumber,
      };
      await axios.patch(`${url}/${uuid}`, data);
      toast.success("usuário atualizado");
      navigate("/main");
    } catch (error) {
      console.log(error);
    }

    //   try {
    //     const updatedUser = doc(db, "users", uuid);
    //     const data = {
    //       street_ave: address,
    //       houseNumber,
    //       zipCode,
    //       phoneNumber,
    //     };
    //     await updateDoc(updatedUser, {
    //       address: data,
    //     });
    //     toast.success("usuário atualizado");
    //     navigate("/main");
    //   } catch (error) {
    //     console.log(error);
    //   }
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label htmlFor="address">
          Complemento
          <input
            type="text"
            id="address"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </label>
        <label htmlFor="housenumber">
          Número
          <input
            type="number"
            id="housenumber"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </label>
        <label htmlFor="zip">
          CEP
          <input
            type="text"
            size="10"
            id="zip"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Fone
          <input
            type="number"
            size="11"
            id="phone"
            value={phoneNumber}
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
