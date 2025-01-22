import { useState } from "react";
export default function Card({ src, onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    onClick(isPressed);
    setIsPressed(true);
  };

  const cardStyle = {
    height: "100px",
    width: "100px",
  };
  return <img style={cardStyle} src={src} onClick={handleClick} />;
}
