import logo from "../assets/logos/mainlogo.svg";

const Footer = () => {
  return (
    <footer className="bg-background text-text min-h-[50vh] relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div className="flex flex-col justify-center items-center gap-3 w-full sm:w-1/4 ">
            <div className="flex flex-col justify-center items-center">
              <img src={logo} alt="logo zona vip" width={90} height={90} />
              <h3 className="text-2xl text-center">Zona Vip BarberShop</h3>
            </div>
            <p className="font-palanquin text-center">
              Refina tu estilo, vive la experiencia VIP.
            </p>
          </div>
          <div>
            <h3 className="text-2xl">Navegación</h3>
            <ul className="font-palanquin">
              <a href="/">
                <li>Inicio</li>
              </a>
              <a href="/#servicios">
                <li>Servicios</li>
              </a>
              <a href="/#equipo">
                <li>Equipo</li>
              </a>
              <a href="/#contacto">
                <li>Contacto</li>
              </a>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Servicios</h3>
            <ul className="font-palanquin">
              <a href="hospedaje">
                <li>Hospedaje</li>
              </a>
              <a href="alimentacion">
                <li>Alimentación</li>
              </a>
              <a href="transporte">
                <li>Transporte</li>
              </a>
              <a href="aseo">
                <li>Aseo y Limpieza</li>
              </a>
              <a href="seguridad">
                <li>Seguridad</li>
              </a>
              <a href="fumigacion">
                <li>Fumigación</li>
              </a>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Contacto</h3>
            <ul className="font-palanquin">
              <li className="flex items-center gap-2">+56995273144</li>
              <li className="flex items-center gap-2">
                <a href="mailto:ventas@servicioswillka.cl">
                  {" "}
                  ventas@servicioswillka.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                Aldunate 215, Pozo Almonte
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pb-4 text-center text-sm text-primary bottom-0 absolute">
        <p>© 2024 Copyright: Zona Vip Barbershop</p>
      </div>
    </footer>
  );
};

export default Footer;
