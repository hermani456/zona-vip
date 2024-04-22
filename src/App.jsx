import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovingText from "./components/MovingText";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Barber from "./components/Barber";
import { useEffect } from "react";
import Ratings from "./components/Ratings";

function App() {
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    });

    const svg = document.querySelectorAll("svg");
    svg.forEach((svg) => {
      svg.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <MovingText />
      <CardSection />
      <Barber />
      <Ratings />
      <Footer />
    </>
  );
}

export default App;
