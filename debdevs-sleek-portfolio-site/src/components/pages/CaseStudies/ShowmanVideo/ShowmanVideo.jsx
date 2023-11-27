import React from "react";
import "../../../../App.css";
import MainHeader from "../../../UI/atoms/MainHeader/MainHeader";
import Navbar from "../../../UI/organisms/Navbar/Navbar";
import "./ShowmanVideo.css";
import CSListObject from "../../../UI/molecules/CSListObject/CSListObject";
import CSNumberListObject from "../../../UI/molecules/CSNumberListObject/CSNumberListObject";
import separator_icon from "../../../../../src/assets/svgs/SeparatorLine.svg";
import { ReactSVG } from "react-svg";
import CSSmallListObject from "../../../UI/molecules/CSSmallListObject/CSSmallListObject";
import CSHeaderParagraphObject from "../../../UI/molecules/CSHeaderParagraphObject/CSHeaderParagraphObject";
import CSSecondaryListObject from "../../../UI/molecules/CSSecondaryListObject/CSSecondaryListObject";
import SHMBanner from "../../../../assets/images/SHM_MTG.png";
import { motion, AnimatePresence, color } from "framer-motion";
import StyledImageDisplay from "../../../UI/molecules/StyledImageDisplay/StyledImageDisplay";
import RoleList from "../../../UI/molecules/RoleList/RoleList";
const ShowmanVideo = () => {
  let main_color = "#A259FF";
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
        <MainHeader text="Showman Video" />
        <p className="cs_central_paragraph">
          I consider this project my{" "}
          <span style={{ color: main_color }}>Magnum Opus</span>. This is a SAAS
          application that I designed to produce a variety of animations to
          distribute over the cloud.
        </p>
        <div className="role_parent">
          <h1 className="accent_text">Role:</h1>
          <div className="role_list_items">
            <RoleList />
            <RoleList header="UI/UX Design" />
            <RoleList header="Technical Writing" />
            <RoleList header="React Development" />
          </div>
        </div>

        <StyledImageDisplay
          border_color={main_color}
          image_source={SHMBanner}
        />
        <CSListObject
          class_name="cs_list_object_secondary_version"
          header="Goals & Insights"
          paragraph="Showman's business goal is to generate and deliver videos on the cloud to a multitude of users"
        />
        <StyledImageDisplay container_height="131px" container_width="313px" border_color={main_color}/>
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

          <div className="primary_section"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowmanVideo;
