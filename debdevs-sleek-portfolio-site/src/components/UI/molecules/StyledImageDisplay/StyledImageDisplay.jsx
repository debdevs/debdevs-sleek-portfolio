import React from "react";
import "./StyledImageDisplay.css";
import RFBanner from "../../../../assets/images/RF_MTG.png";
import { useState } from "react";
const StyledImageDisplay = ({
  main_style = "basic",
  image_source = { RFBanner },
  border_color = "FFF",
  container_width = "1035px",
  container_height = "314px",
  button_function = () => {
    console.log("Function prop was called!"); // Function prop that logs a message
  },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    container: {
      border: "1px solid" + border_color,

      transition: "border-color 0.3s ease",
      borderColor: border_color,
    },
    containerHover: {
      borderColor: "white",
    },
  };

  // <div className={main_style == "basic" ? "styled_image_display_container":"styled_image_display_container_small" } style={{border: '1px solid' + border_color, height: container_height}}>

  return (
    <div
      className={
        main_style == "basic"
          ? "styled_image_display_container"
          : "styled_image_display_container_small"
      }
      style={
        isHovered
          ? { ...styles.container, ...styles.containerHover }
          : styles.container
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={button_function}
    >
      <img className="styled_image_display" src={image_source} />
    </div>
  );
};

export default StyledImageDisplay;
