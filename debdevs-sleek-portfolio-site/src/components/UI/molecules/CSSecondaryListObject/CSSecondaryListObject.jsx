import React from "react";
import "./CSSecondaryListObject.css";
import { ReactSVG } from "react-svg";
import bullet_icon from "../../../../../src/assets/svgs/BsArrowReturnRight.svg";
const CSSecondaryListObject = ({
  header = "Overview",
  paragraph = `        Design a visually distinguishing RenderFarm primarily focused on keyshot
users with the goal of eventually attracting new users`,
}) => {
  return (
    <div className="cs_secondary_list_object">
      <div className="cs_secondary_list_header_with_icon">
        <ReactSVG className="bullet_icon" src={bullet_icon} />
        <h1 className="cs_secondary_list_header_text">{header}</h1>
      </div>
      {paragraph != null ?
      <p className="cs_secondary_list_paragraph">{paragraph}</p>
    :
    
<ul className="cs_secondary_list_list">
  <li>Branding</li>
  <li>UI & UX Design</li>
  <li>Illustration</li>
</ul>
    }
      
    </div>
  );
};

export default CSSecondaryListObject;
