import React from "react";
import "./CSSmallListObject.css";
import { ReactSVG } from "react-svg";
import bullet_icon from "../../../../../src/assets/svgs/DottedBulletIcon.svg";
const CSSmallListObject = ({
  header = "Overview",
  paragraph = `Design a visually distinguishing RenderFarm primarily focused on keyshot`,
}) => {
  return (
    <div className="cs_small_list_object">
      <div className="cs_small_list_header_with_icon">
        <ReactSVG className="bullet_icon" src={bullet_icon} />
        <p className="cs_small_list_paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default CSSmallListObject;
