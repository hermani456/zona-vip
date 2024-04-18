import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="bg-accent">
      <div className="max-w-screen-xl mx-auto h-screen grida p-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;
