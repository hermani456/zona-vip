import React from "react";

const Card = ({title, img, paragraph, price, bgColor}) => {
  return (
    <div className={`text-text grid justify-start gap-4 p-8 rounded-xl shadow-xl card-shadow font-sans mx-auto ${bgColor}`}>
      <img src={img} alt="" className="w-12"/>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{paragraph}</p>
      </div>
      <p className="text-xl"><span className="text-lg font-bold">$</span>{price}</p>
    </div>
  );
};

export default Card;
