import React from "react";
import MainHeader from "../../../UI/atoms/MainHeader/MainHeader";
import Navbar from "../../../UI/organisms/Navbar/Navbar";
import "./GalleryTabContainer.css";
import CSListObject from "../../../UI/molecules/CSListObject/CSListObject";
import CSNumberListObject from "../../../UI/molecules/CSNumberListObject/CSNumberListObject";
import separator_icon from "../../../../../src/assets/svgs/SeparatorLine.svg";
import { ReactSVG } from "react-svg";
import CSSmallListObject from "../../../UI/molecules/CSSmallListObject/CSSmallListObject";
import CSHeaderParagraphObject from "../../../UI/molecules/CSHeaderParagraphObject/CSHeaderParagraphObject";
import CSSecondaryListObject from "../../../UI/molecules/CSSecondaryListObject/CSSecondaryListObject";
import RFBanner from "../../../../assets/images/RFBannerSized.png";

import { motion, AnimatePresence } from "framer-motion";
import GalleryTab from "../../atoms/GalleryTab/GalleryTab";
const GalleryTabContainer = () => {
  return (
    <motion.div
      className="gallery_tab_container"
      initial={{ translateY: 10, scaleX: 1, opacity: 0 }}
      animate={{ translateY: 0, scaleX: 1, opacity: 1 }}
      exit={{
        scaleX: 0.97,
        translateY: 50,
        opacity: 0,
        transition: { type: "linear", stiffness: 50 },
      }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <GalleryTab text="Wireframing" />
      <GalleryTab text="UI Design" />
      <GalleryTab text="Interaction Design" />
    </motion.div>
  );
};

export default GalleryTabContainer;