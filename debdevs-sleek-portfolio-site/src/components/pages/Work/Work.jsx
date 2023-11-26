import React from "react";
import MainHeader from "../../UI/atoms/MainHeader/MainHeader";
import Navbar from "../../UI/organisms/Navbar/Navbar";
import "./Work.css";
import CSListObject from "../../UI/molecules/CSListObject/CSListObject";
import CSNumberListObject from "../../UI/molecules/CSNumberListObject/CSNumberListObject";
import separator_icon from "../../../../src/assets/svgs/SeparatorLine.svg";
import { ReactSVG } from "react-svg";
import CSSmallListObject from "../../UI/molecules/CSSmallListObject/CSSmallListObject";
import CSHeaderParagraphObject from "../../UI/molecules/CSHeaderParagraphObject/CSHeaderParagraphObject";
import CSSecondaryListObject from "../../UI/molecules/CSSecondaryListObject/CSSecondaryListObject";
import RFBanner from "../../../assets/images/RFBannerSized.png";
import { motion, AnimatePresence } from "framer-motion";
import WHObject from "../../UI/molecules/WHObject/WHObject";
import viddyoze_image from "../../../assets/images/viddyoze_logo.png";
import fpo_image from "../../../assets/images/fpo_logo.png";
const Work = () => {
  return (
    <div className="App">
      <motion.div
        className="wrk_content"
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
        <MainHeader text="Work History" />
        <div className="wrk_cards">
          <WHObject title="UI/UX Engineer" />
          <WHObject
            image={viddyoze_image}
            header="Viddyoze"
            time="Feb 2023-May 2023"
            title="Technical Animator"
          />
          <WHObject
            image={fpo_image}
            header="FloorPlanOnline"
            time="Feb 2023-May 2023"
            title="Visual Design & Tech Consultant"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
