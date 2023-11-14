import React from "react";
import "./MenuOverlay.css";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ExitButton from "../../UI/atoms/ExitButton/ExitButton";
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
        onClick={() => (window.location = "mailto:debdevs97@gmail.com")}
      >
        <div className="menu_content_left_items">
          werwertgydhfj
          <AiOutlineMail className="button_icon" />
        </div>
        <div className="menu_content_right_items">
          <AiOutlineMail className="button_icon" />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
