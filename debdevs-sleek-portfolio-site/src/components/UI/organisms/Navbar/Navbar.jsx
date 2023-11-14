import React from "react";
import "./Navbar.css";
import NavigationButton from "../../atoms/NavigationButton/NavigationButton";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineMail,
} from "react-icons/ai";
import { useContext } from "react";
import { HomeContext } from "../../../../HomeContext";

const Navbar = ({ contact_function }) => {
  const { contactOpen, setContactOpen } = useContext(HomeContext);
  const { menuOpen, setMenuOpen } = useContext(HomeContext);
  function contactFunction() {
    console.log("You clicked a overlay.");

    setContactOpen(true);
  }

  function menuFunction() {
    console.log("You clicked a overlay.");

    setMenuOpen(true);
  }

  return (
    <div className="nav_bar">
      <div className="nav_bar_contents">
        <div className="nav_bar_left_items">
          <a href="/">
            <NavigationButton
              text="Home"
              icon={<AiOutlineHome className="button_icon" />}
            />
          </a>
          <a href="https://github.com/debdevs">
            <NavigationButton
              text="Github"
              icon={<AiOutlineGithub className="button_icon" />}
            />
          </a>

          <NavigationButton
            button_function={() => {
              contactFunction();
            }}
            text="Contact"
            icon={<AiOutlineMail className="button_icon" />}
          />

          <NavigationButton
            button_function={() => {
              menuFunction();
            }}
            text="Menu"
            icon={<AiOutlineMenu className="button_icon" />}
            button_class_name="navigation_button_reverse"
          />
        </div>
        <div className="nav_bar_right_items">
          <a href="https://www.linkedin.com/in/deborah-daniels-34707a24b/">
            <NavigationButton
              text="LinkedIn"
              icon={<AiOutlineLinkedin className="button_icon" />}
              button_class_name="navigation_button_reverse"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
