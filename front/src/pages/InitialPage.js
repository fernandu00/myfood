import React from "react";
import { SiIfood } from "react-icons/si";
import { MdFastfood } from "react-icons/md";
const InitialPage = () => {
  return (
    <main className="main-page">
      <div className="icon">
        <SiIfood className="logo-icon" />
      </div>
      {/* <h1 className="title">Comida para todos</h1> */}

      <MdFastfood className="food-icon" />

      <button className="btn">começar</button>
    </main>
  );
};

export default InitialPage;
