import FullKit from "../images/fullkit.png";
import Bottle1 from "../images/bottle1.png";
import Earbuds from "../images/earbuds.png";
import Loofah from "../images/loofah.png";
import Straws from "../images/straws.png";
import Toothbrush from "../images/toothbrush.png";
import Container from "../images/container.png";
import { useState } from "react";
import LeftArrow from "../images/left.png";
import RightArrow from "../images/right.png";

export default function Hero() {
  const [count, setCount] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const images = [
    FullKit,
    Bottle1,
    Straws,
    Loofah,
    Container,
    Earbuds,
    Toothbrush,
  ];

  const saveCursorPosition = function (x, y) {
    setPos({
      x: (x / window.innerWidth).toFixed(2),
      y: (y / window.innerHeight).toFixed(2),
    });
    document.documentElement.style.setProperty("--x", pos.x);
    document.documentElement.style.setProperty("--y", pos.y);
  };

  return (
    <div className="hero--carousel">
      <div
        className="hero--button left"
        onClick={() =>
          setCount(
            (prevCount) => (images.length + prevCount - 1) % images.length
          )
        }
      >
        <img className="arrow" src={LeftArrow} alt="left" />
      </div>
      <div className="image--zoom">
        <img
          className="hero--image"
          onMouseMove={(e) => saveCursorPosition(e.clientX, e.clientY)}
          src={images[count]}
          alt="fullkit"
        />
      </div>
      <div
        className="hero--button right"
        onClick={() => setCount((prevCount) => (prevCount + 1) % images.length)}
      >
        <img className="arrow" src={RightArrow} alt="right" />
      </div>
    </div>
  );
}
