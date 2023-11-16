import React from "react";
import MainHeader from "../../../UI/atoms/MainHeader/MainHeader";
import Navbar from "../../../UI/organisms/Navbar/Navbar";
import "./CaseStudiesPage.css";
import CSListObject from "../../../UI/molecules/CSListObject/CSListObject";
import CSNumberListObject from "../../../UI/molecules/CSNumberListObject/CSNumberListObject";
import case_study_card_border from "../../../../../src/assets/svgs/CaseStudyCardBorder.svg";
import { ReactSVG } from "react-svg";
import CSSmallListObject from "../../../UI/molecules/CSSmallListObject/CSSmallListObject";
import CSHeaderParagraphObject from "../../../UI/molecules/CSHeaderParagraphObject/CSHeaderParagraphObject";
import CSSecondaryListObject from "../../../UI/molecules/CSSecondaryListObject/CSSecondaryListObject";
import RFBanner from "../../../../assets/images/RFBannerSized.png";
import CSProductCard from "../../../UI/molecules/CSProductCard/CSProductCard";
import { motion, AnimatePresence } from "framer-motion";

import rf_image from "../../../../assets/images/RFBannerSized.png";
import showman_image from "../../../../assets/images/ShowmanTemplatesDesktop.png";
const CaseStudiesPage = () => {
  return (
    <div className="App">
      <motion.div
        className="csp_content"
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
        <MainHeader text="Case Studies" />
        <div className="csp_cards_grid">
          
            <CSProductCard border_color = "#FF7798" main_image = {rf_image} link="/case-studies/RenderFarms" header = "RenderFarms" subtext = "An SAAS Web Application"/>
            <CSProductCard border_color = "#9A17EA" main_image = {showman_image} link="/case-studies/RenderFarms" header = "Showman Video" subtext = "An SAAS Web Application (React PWA)"/>
            <CSProductCard border_color = "#2F9A41" main_image = {showman_image} link="/case-studies/RenderFarms" header = "Terminal Labs" subtext = "An SAAS Web Application (React PWA)"/>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudiesPage;
