import { useState } from "react";

const CommentedVideo = ({ src, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="commented-image">
        <video
          className="p-5"
          width="250"
          height="200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          // controls // Add this if you want to show video controls
          autoPlay
          muted
          loop
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-div">{isHovered && <h1>{text}</h1>}</div>
      </div>
    </>
  );
};

export default CommentedVideo;
