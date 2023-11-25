import React from "react";
import "./NavigationButton.css";
import { AiOutlineGithub } from "react-icons/ai";
const NavigationButton = ({
  text = "Home",
  icon = "",
  link = "",
  button_function = null,
  button_class_name = "navigation_button",
  style_type = 'main'
}) => {
  return (
    <button onClick={button_function} className={button_class_name} style={style_type == 'secondary' ?{ padding:'8px', border: '1px solid transparent'}:null}>
      {text}
      {icon}
    </button>
  );
};

export default NavigationButton;
