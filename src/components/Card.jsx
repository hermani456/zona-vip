import React from "react";
import logo from "../assets/react.svg";

const Card = () => {
  return (
    <div className="grid justify-start gap-4 p-8 bg-white rounded-xl shadow-xl card-shadow">
      <img src={logo} alt="" />
      <div>
        <h2>hola</h2>
        <p>chao</p>
      </div>
      <p>456</p>
      <button>chao</button>
    </div>
  );
};

export default Card;
