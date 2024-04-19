import React from "react";
import Card from "./Card";
import { cardInfo } from "../utils/index";

const CardSection = () => {
  return (
    <div id="servicios" className="bg-background mt-5">
      <div className="max-w-screen-xl mx-auto min-h-[70vh] grida p-5">
        {cardInfo.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            img={card.img}
            paragraph={card.paragraph}
            price={card.price}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
