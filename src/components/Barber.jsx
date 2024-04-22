import React from "react";
import photo from "../assets/images/photo.webp";

const Barber = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap lg:flex-nowrap gap-5">
        <div className="text-text flex flex-col gap-5">
          <h2 className="text-5xl text-primary font-bebasNeue border-b-2 border-secondary">Confíanos tu look</h2>
          <p className="leading-relaxed tracking-wide">
            Nuestro equipo de barberos expertos no solo sigue las últimas
            tendencias y técnicas en el mundo de la barbería, sino que también
            se esfuerza por superar las expectativas en cada trabajo. Desde cortes de pelo a la moda hasta afeitados detallados
            y tratamientos faciales rejuvenecedores, estamos comprometidos en
            brindar resultados excepcionales que resalten la individualidad y
            estilo de cada cliente.
          </p>
        </div>
        <div>
          <img src={photo} alt="foto" className="w-4/5 mx-auto rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Barber;
