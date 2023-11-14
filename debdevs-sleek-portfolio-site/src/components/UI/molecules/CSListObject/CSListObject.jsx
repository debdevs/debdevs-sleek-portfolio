import React from "react";
import "./CSListObject.css";
import { ReactSVG } from "react-svg";
import bullet_icon from "../../../../../src/assets/svgs/BulletPointIcon.svg";
const CSListObject = ({
  header = "Overview",
  paragraph = `        Design a visually distinguishing RenderFarm primarily focused on keyshot
users with the goal of eventually attracting new users`,
class_name = 'cs_list_object'
}) => {
  return (
    <div className={class_name}>
      <div className="cs_list_header_with_icon">
        <ReactSVG className="bullet_icon" src={bullet_icon} />
        <h1 className="cs_list_header_text">{header}</h1>
      </div>
      {paragraph != null ?
      <p className="cs_list_paragraph">{paragraph}</p>
    :
    
<ul className="cs_list_list">
  <li>Branding</li>
  <li>UI & UX Design</li>
  <li>Illustration</li>
</ul>
    }
      
    </div>
  );
};

export default CSListObject;
