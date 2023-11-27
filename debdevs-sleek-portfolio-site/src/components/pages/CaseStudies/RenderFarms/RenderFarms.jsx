import React from "react";
import '../../../../App.css'
import MainHeader from "../../../UI/atoms/MainHeader/MainHeader";
import Navbar from "../../../UI/organisms/Navbar/Navbar";
import "./RenderFarms.css";
import CSListObject from "../../../UI/molecules/CSListObject/CSListObject";
import CSNumberListObject from "../../../UI/molecules/CSNumberListObject/CSNumberListObject";
import separator_icon from "../../../../../src/assets/svgs/SeparatorLine.svg";
import { ReactSVG } from "react-svg";
import CSSmallListObject from "../../../UI/molecules/CSSmallListObject/CSSmallListObject";
import CSHeaderParagraphObject from "../../../UI/molecules/CSHeaderParagraphObject/CSHeaderParagraphObject";
import CSSecondaryListObject from "../../../UI/molecules/CSSecondaryListObject/CSSecondaryListObject";
import RFBanner from "../../../../assets/images/RF_MTG.png";
import { motion, AnimatePresence } from "framer-motion";
const RenderFarms = () => {
  return (
    <div className="App">
      <motion.div
        className="cs_content"
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
        <MainHeader text="Renderfarms" />
        <p className="cs_central_paragraph">
          I took the helm for designing every aspect of this project. From
          branding to illustration, UI Design and interaction. With the input
          from project stakeholders, and collaboration of the lead frontend
          developer, we created a product that generated significant revenue for
          Terminal Labs & to this day serves as their <span>flagship</span>{" "}
          product
        </p>
        <div className="case_study_image_container">
          <img className="case_study_image" src={RFBanner} />
        </div>
        <CSListObject
          class_name="cs_list_object_secondary_version"
          header="Background"
          paragraph="I was selected for this project because of my domain expertise in the field of animation as well as my extensive design experience. 

              Because of my experience using these types of software, I was able to immediately provide extensive input from the perspective of a user. This led to the rapid design and production of deliverables and iterations."
        />
        <div className="cs_lower_items_container">
          <div className="cs_list_items_row">
            <CSListObject
              header="Objective"
              paragraph="Design a visually distinguishing RenderFarm primarily focused on keyshot users with the goal of eventually attracting new users"
            />
            <CSListObject header="Responsibilities" paragraph={null} />
            <CSListObject
              header="Domain"
              paragraph="Animation, Visual Design, Web Development"
            />
          </div>
          <div className="separator_container">
            <ReactSVG className="separator_icon" src={separator_icon} />
          </div>

          <div className="primary_section">
            <div className="primary_section_left_items">
              <CSNumberListObject
                header="Discovery"
                paragraph="Figure out what RenderFarms is trying to achieve and where it fits into the market."
              />
              <div className="primary_section_left_items_list">
                <CSSmallListObject paragraph="Interview stakeholders to determine project goals" />
                <CSSmallListObject paragraph="Research competing companies and study their presentation" />
                <CSSmallListObject paragraph="Determine main features and iterate for future features" />
                <CSSmallListObject paragraph="Determine initial pages & site & user flows" />
              </div>
            </div>
            <div className="primary_section_right_items">
              <CSHeaderParagraphObject
                header="About RenderFarms"
                paragraph="RenderFarms is a new render-farm offering. render-farms are web applications that enable users to use cloud infrastructure to render their 3D art & research projects"
              />

              <div className="primary_section_right_items_list">
                <CSSecondaryListObject
                  header="Product Differentiator"
                  paragraph="Why choose renderfarms over any of the other similar options in the market?"
                />
                <ul className="primary_section_right_items_list_ul">
                  <li>
                    RenderFarms has smart resource allocation to ensure that you
                    don’t spend more than what you need to in order to render
                    your projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RenderFarms;
