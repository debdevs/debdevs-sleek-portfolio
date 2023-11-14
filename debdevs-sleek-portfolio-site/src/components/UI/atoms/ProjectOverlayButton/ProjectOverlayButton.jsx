import React from "react";
import "./ProjectOverlayButton.css";
import { AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";

const ProjectOverlayButton = ({
  text = "Home",
  icon = "",
  color_data = null,
  button_direct_link = "google.com",
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
  };

  return (
    <a href={button_direct_link}>
      <button
        className="project_overlay_button"
        style={{ background: isHover == false ? color_data : null }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
        {icon}
      </button>
    </a>
  );
};

export default ProjectOverlayButton;
