import React from "react";
import "./WHObject.css";
import wh_image from "../../../../assets/images/TLImage.png";
import separator_icon from "../../../../assets/svgs/DottedLineWH.svg";
import { ReactSVG } from "react-svg";
const WHObject = ({
  image = wh_image,
  header = "Terminal Labs",
  time = "May 2023 - Present",
  title = "Frontend Engineer"
}) => {
  return (
    <div className="wh_object">
      <div className="wh_left_items">
        <img className="wh_image" src={image} />
        <div className="wh_left_text">
          <h2 className="csp_card_text">{header}</h2>
          <h2 className="csp_card_paragraph">{time}</h2>
        </div>
      </div>
      <ReactSVG className="bullet_icon" src={separator_icon} />
      <div className="wh_right_items">
        <h2 className="csp_card_text">{title}</h2>
      </div>
    </div>
  );
};

export default WHObject;
