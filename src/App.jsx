import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovingText from "./components/MovingText";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

function App() {
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
  
  return (
    <>
      <Navbar />
      <Hero />
      <MovingText />
      <CardSection />
      <Footer />
    </>
  );
}

export default App;
