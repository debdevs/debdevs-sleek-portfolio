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
  AiOutlineFileText,
} from "react-icons/ai";
import { GiArchiveResearch } from "react-icons/gi";
import { useContext } from "react";
import { HomeContext } from "../../../../HomeContext";
import { useState, useEffect } from "react";
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

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1035);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {isVisible ? (
            <a href="/case-studies">
              <NavigationButton
                text="Case Studies"
                icon={<GiArchiveResearch className="button_icon" />}
              />
            </a>
          ) : null}
          {isVisible ? (
            <NavigationButton
              button_function={() => {
                contactFunction();
              }}
              text="Contact"
              icon={<AiOutlineMail className="button_icon" />}
            />
          ) : null}
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
          <a>
            {isVisible ? (
              <a href="https://github.com/debdevs">
                <NavigationButton
                  style_type="secondary"
                  text=""
                  icon={<AiOutlineGithub className="button_icon" />}
                />
              </a>
            ) : null}
          </a>
          <a>
            {isVisible ? (
              <a href="https://www.linkedin.com/in/deborah-daniels-34707a24b/">
                <NavigationButton
                  style_type="secondary"
                  text=""
                  icon={<AiOutlineLinkedin className="button_icon" />}
                />
              </a>
            ) : null}
          </a>
          <a href="https://www.linkedin.com/in/deborah-daniels-34707a24b/">
            
            <NavigationButton
              text="Resume"
              icon={<AiOutlineFileText className="button_icon" />}
              button_class_name="navigation_button_reverse"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
