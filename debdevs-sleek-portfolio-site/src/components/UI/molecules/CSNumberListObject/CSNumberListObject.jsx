import React from "react";
import "./CSNumberListObject.css";
import { ReactSVG } from "react-svg";
import dotted_circle_icon from "../../../../../src/assets/svgs/DottedCircleIcon.svg";
const CSNumberListObject = ({
  number = "01",
  header = "Overview",
  paragraph = `        Design a visually distinguishing RenderFarm primarily focused on keyshot
users with the goal of eventually attracting new users`,
}) => {
  return (
    <div className="cs_number_list_object">
      <div className="cs_number_list_header_with_icon">
        <div className="number_icon_container">
          <ReactSVG className="dotted_circle_icon" src={dotted_circle_icon} />
          <h1 className="dotted_circle_number">{number}</h1>
        </div>

        <h1 className="cs_number_list_header_text">{header}</h1>
      </div>
      {paragraph != null ? (
        <p className="cs_number_list_paragraph">{paragraph}</p>
      ) : (
        <ul className="cs_number_list_list">
          <li>Branding</li>
          <li>UI & UX Design</li>
          <li>Illustration</li>
        </ul>
      )}
    </div>
  );
};

export default CSNumberListObject;
