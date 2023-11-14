import React from "react";
import "./CSHeaderParagraphObject.css";
import { ReactSVG } from "react-svg";
import bullet_icon from "../../../../../src/assets/svgs/BulletPointIcon.svg";
const CSHeaderParagraphObject = ({
  header = "Overview",
  paragraph = `        Design a visually distinguishing RenderFarm primarily focused on keyshot
users with the goal of eventually attracting new users`,
}) => {
  return (
    <div className="cs_header_paragraph_object">


        <h1 className="cs_header_paragraph_header_text">{header}</h1>
 
      {paragraph != null ?
      <p className="cs_header_paragraph_paragraph">{paragraph}</p>
    :
    
<ul className="cs_header_paragraph_list">
  <li>Branding</li>
  <li>UI & UX Design</li>
  <li>Illustration</li>
</ul>
    }
      
    </div>
  );
};

export default CSHeaderParagraphObject;
