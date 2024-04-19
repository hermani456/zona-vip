import React from "react";
import Card from "./Card";
import beard from "../assets/svg/angrybeard.svg";
import beardCopete from "../assets/svg/beardcopete.svg";
import style from "../assets/svg/style2.svg";
import { cardInfo } from "../utils/index";

const CardSection = () => {
  return (
    <div className="bg-background mt-5">
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
        {/* <Card title={"Corte de Pelo Clásico"} img={beard} paragraph={" Estilo atemporal para hombres elegantes. Cortes precisos y acabados impecables que resaltan tu personalidad con clase."} price="3.000"/>
        <Card title={"Diseño de Barba Personalizado"} img={beardCopete} paragraph={"Estilo único para tu barba. Diseños precisos y asesoramiento experto para conseguir la forma y el mantenimiento perfectos."} price="3.000"/>
        <Card title={"Corte de Pelo Moderno"} img={style} paragraph={"Estilo contemporáneo para hombres vanguardistas. Cortes innovadores, texturas dinámicas y acabados únicos que te harán destacar con audacia y estilo."} price="3.000"/> */}
      </div>
    </div>
  );
};

export default CardSection;
