import React from "react";
import "./NavigationButton.css";
import { AiOutlineGithub } from "react-icons/ai";
const NavigationButton = ({
  text = "Home",
  icon = "",
  link = "",
  button_function = null,
  button_class_name = "navigation_button",
}) => {
  return (
    <button onClick={button_function} className={button_class_name}>
      {text}
      {icon}
    </button>
  );
};

export default NavigationButton;
