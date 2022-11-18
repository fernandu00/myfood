import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
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

  const url = "http://localhost:5000/user";

  // fetch user data

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`${url}/${uuid}`);
      dispatch(setUser({ name: res.data.name }));
      dispatch(setUser({ address: res.data.address.line_1 }));
      dispatch(setUser({ address2: res.data.address.line_2 }));
      dispatch(setUser({ houseNumber: res.data.address.number }));
      dispatch(setUser({ zipCode: res.data.address.zipCode }));
      dispatch(setUser({ phoneNumber: res.data.phone }));
    };
    fetchUserData();
  }, []);
  return (
    <section className="address">
      <div className="adress-details">
        <h3>endereço de entrega</h3>
        <button className="change-btn" onClick={() => navigate("/profile")}>
          alterar
        </button>
      </div>
      <div className="adress-info">
        <p className="info">nome: {name}</p>
        <div className="info">
          Endereço:
          <p>
            {address}. {address2}, {houseNumber}. CEP: {zipCode}. phone:
            {phoneNumber}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
