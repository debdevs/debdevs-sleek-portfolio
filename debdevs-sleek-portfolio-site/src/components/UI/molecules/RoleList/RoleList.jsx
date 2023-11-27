import React from "react";
import "./RoleList.css";
import { ReactSVG } from "react-svg";
import bullet_icon from "../../../../../src/assets/svgs/BulletPointIcon.svg";
const RoleList = ({
  header = "Product Design",
  paragraph = `        Design a visually distinguishing RenderFarm primarily focused on keyshot
users with the goal of eventually attracting new users`,
  class_name = "rl_list_object",
}) => {
  return (
    <div className={class_name}>
      <div className="rl_list_header_with_icon">
        <ReactSVG className="rl_icon" src={bullet_icon} />
        <h1 className="rl_list_header_text">{header}</h1>
      </div>

    </div>
  );
};

export default RoleList;
