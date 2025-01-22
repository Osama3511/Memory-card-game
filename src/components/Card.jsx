import { useState } from "react";
import "../styles/card.css"
export default function Card({ src, onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    onClick(isPressed);
    setIsPressed(true);
  };

  return (
    <div className="card-container" onClick={handleClick} >
      <img className="card-image" alt="card image" src={src} />
    </div>
  );
}
