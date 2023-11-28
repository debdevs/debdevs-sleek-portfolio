import React from "react";
import "./StyledImageDisplay.css";
import RFBanner from "../../../../assets/images/RF_MTG.png";
const StyledImageDisplay = ({ main_style = "basic", image_source = {RFBanner} , border_color = "FFF", container_width = '1035px', container_height = '314px' }) => {
  return (
    <div className={main_style == "basic" ? "styled_image_display_container":"styled_image_display_container_small" } style={{border: '1px solid' + border_color, height: container_height}}>
      <img className="styled_image_display" src={image_source} />
    </div>
  );
};

export default StyledImageDisplay;
