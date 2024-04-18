import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const RotateImage = ({ image }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <img
        ref={imageRef}
        src={image}
        alt="description"
        className="w-60 h-60"
      />
    </div>
  );
};

export default RotateImage;
