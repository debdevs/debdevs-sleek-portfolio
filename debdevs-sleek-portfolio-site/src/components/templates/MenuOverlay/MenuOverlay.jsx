import React from "react";
import "./MenuOverlay.css";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ExitButton from "../../UI/atoms/ExitButton/ExitButton";
import CSDottedListObject from "../../UI/molecules/CSDottedListObject/CSDottedListObject";
import separator_icon from "../../../../src/assets/svgs/SeparatorLine.svg";
import { ReactSVG } from "react-svg";
const MenuOverlay = ({ button_function }) => {
  return (
    <motion.div
      className="menu_overlay_parent"
      initial={{ translateY: 10, scaleX: 1, opacity: 0 }}
      animate={{ translateY: 0, scaleX: 1, opacity: 1 }}
      exit={{
        scaleX: 0.97,
        translateY: 50,
        opacity: 0,
        transition: { type: "linear", stiffness: 50 },
      }}
      transition={{ duration: 0.3 }}
    >
      <ExitButton button_function={button_function} />

      <div
        className="menu_content_parent"
   
      >
        <div className="menu_content_left_items"></div>
        <div className="menu_content_right_items">
          <a href="/case-studies/">
            <CSDottedListObject header="Case Studies" />
          </a>

          {/* <CSDottedListObject header="All Projects" />
          <CSDottedListObject header="About Me" /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
