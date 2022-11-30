import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { doc, updateDoc, collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const UpdateProfile = () => {
  const {
    name,
    email,
    uuid,
    address,
    address2,
    houseNumber,
    phoneNumber,
    zipCode,
  } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const url = "http://localhost:5000/user";

  const url = "http://192.168.15.14:5000/user";

  // fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`${url}/${uuid}`);
      console.log(res.data);
      dispatch(setUser({ name: res.data.name }));
      dispatch(setUser({ address: res.data.address.line_1 }));
      dispatch(setUser({ address2: res.data.address.line_2 }));
      dispatch(setUser({ houseNumber: res.data.address.number }));
      dispatch(setUser({ zipCode: res.data.address.zipCode }));
      dispatch(setUser({ phoneNumber: res.data.phone }));
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
      const response = await axios.patch(`${url}/${uuid}`, data);
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
            onChange={(e) => dispatch(setUser({ address: e.target.value }))}
          />
        </label>
        <label htmlFor="address">
          Complemento
          <input
            type="text"
            id="address"
            value={address2}
            onChange={(e) => dispatch(setUser({ address2: e.target.value }))}
          />
        </label>
        <label htmlFor="housenumber">
          Número
          <input
            type="number"
            id="housenumber"
            value={houseNumber}
            onChange={(e) => dispatch(setUser({ houseNumber: e.target.value }))}
          />
        </label>
        <label htmlFor="zip">
          CEP
          <input
            type="text"
            size="10"
            id="zip"
            value={zipCode}
            onChange={(e) => dispatch(setUser({ zipCode: e.target.value }))}
          />
        </label>
        <label htmlFor="phone">
          Fone
          <input
            type="number"
            size="11"
            id="phone"
            value={phoneNumber}
            onChange={(e) => dispatch(setUser({ phoneNumber: e.target.value }))}
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
