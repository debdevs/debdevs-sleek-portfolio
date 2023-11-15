import React from "react";
import "./CSDottedListObject.css";
import { ReactSVG } from "react-svg";
import bullet_icon from "../../../../../src/assets/svgs/BulletPointIcon.svg";
import separator_icon from "../../../../../src/assets/svgs/SeparatorLine.svg";

const CSDottedListObject = ({
  header = "Overview",
  paragraph = `        Design a visually distinguishing RenderFarm primarily focused on keyshot
users with the goal of eventually attracting new users`,
  class_name = "cs_dotted_list_object",
}) => {
  return (
    <div className={class_name}>
      <div className="cs_dotted_list_header_with_icon">
        {/* <ReactSVG className="bullet_icon" src={bullet_icon} /> */}
        <h1 className="cs_dotted_list_header_text">{header}</h1>
        <div className="separator_container_menu">
          
            <ReactSVG className="separator_icon_menu" src={separator_icon} />
          </div>
      </div>
    </div>
  );
};

export default CSDottedListObject;
