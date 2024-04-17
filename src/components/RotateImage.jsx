import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/react.svg";

const RotateImage = ({ image }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <img ref={imageRef} src={image} alt="description" className="w-80" />
  );
};

export default RotateImage;
