import React from "react";
import logo from "../assets/logos/logo.svg";
import RotateImage from "./RotateImage";

const Hero = () => {
  return (
    <section className="bg-accent">
      <div className="max-w-screen-xl mx-auto h-[90vh] p-5">
        <div className="flex justify-center items-center h-full gap-5 flex-wrap">
          <div className="flex-1 mx-auto">
            <h1 className="text-8xl mb-4 text-tercero">
              Zona Vip Barbershop
            </h1>
            <p className="text-primary text-xl">
              donde el estilo y el cuidado personal alcanzan su máximo
              esplendor! Con profesionales expertos y un ambiente exclusivo, te
              garantizamos una experiencia única en cada visita. Descubre el
              arte de la barbería con cortes de vanguardia, afeitados impecables
              y tratamientos de cuidado facial. En Zona VIP, tu imagen es
              nuestra prioridad.
            </p>
          </div>
          <div className="flex flex-1 justify-center min-w-96">
            {/* <img src={logo} alt="Logo zona vip" className="w-80"/> */}
            <RotateImage image={logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;