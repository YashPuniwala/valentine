import { useState } from "react";
import "./commentedImage.css"; // Import the CSS file

const CommentedImage = ({ src, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="commented-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="p-5" src={src} width="250" height="200" alt="" />
      <div className="text-div">
      {isHovered && <h1>{text}</h1>}
      </div>
    </div>
  );
};

export default CommentedImage;
