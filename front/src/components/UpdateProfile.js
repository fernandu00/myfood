import React from "react";

const UpdateProfile = () => {
  return (
    <form className="profile-form">
      <div className="profile-details"></div>
      <div className="profile-info">
        <label htmlFor="name">
          Nome
          <input type="text" id="name" />
        </label>
        <label htmlFor="email">
          E-mail
          <input type="email" id="email" />
        </label>
        <label htmlFor="address">
          Endereço
          <input type="text" id="address" />
        </label>
        <label htmlFor="address2">
          Número
          <input type="text" id="address2" />
        </label>
        <label htmlFor="zip">
          CEP
          <input type="text" size="10" id="zip" />
        </label>
        <label htmlFor="phone">
          Fone
          <input type="number" size="11" id="phone" />
        </label>
      </div>
      <button className="btn">atualizar</button>
    </form>
  );
};

export default UpdateProfile;
