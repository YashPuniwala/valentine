import React, { useState } from "react";
import "./home.css"

const RandomButton = ({ text, minHeight, maxHeight}) => 
{
  const [position, setPosition] = useState({});

  const handleClick = () => 
  {
    const maxWidth = window.innerWidth - 300;
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor((Math.random() * ({ maxHeight } - { minHeight })) + { minHeight });
    setPosition({ top: y, left: x });
  };

  return (
    <button
    className="yes-button"
      style={{ position: "absolute", ...position }}
      onClick={handleClick}
    >
      { text }
    </button>
  );
};

export default RandomButton;