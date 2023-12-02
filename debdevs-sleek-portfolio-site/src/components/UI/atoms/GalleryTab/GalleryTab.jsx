import React from "react";
import "./GalleryTab.css";
const GalleryTab = ({ text = "Deborah Daniels", margin_left = "-15px" }) => {
  return (
    <div className="gallery_tab_parent">
      <h4 className="gallery_tab" style={{ marginLeft: margin_left }}>
        {text}
      </h4>
      <div className="blur_div"></div>
    </div>
  );
};

export default GalleryTab;
