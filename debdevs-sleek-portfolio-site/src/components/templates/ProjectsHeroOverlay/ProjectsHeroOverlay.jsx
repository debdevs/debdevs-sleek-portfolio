import React from "react";
import "./ProjectsHeroOverlay.css";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSortDescending, AiOutlineFilter } from "react-icons/ai/";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ExitButton from "../../UI/atoms/ExitButton/ExitButton";
import ProjectTextsInfoBox from "../../UI/atoms/ProjectTextsInfoBox/ProjectTextsInfoBox";
import TechStackArray from "../../UI/atoms/TechStackArray/TechStackArray";
import TertiaryThemeButton from "../../UI/atoms/TertiaryThemeButton/TertiaryThemeButton";
import ProjectsGallery from "../../UI/organisms/ProjectsGallery/ProjectsGallery";
import SortGroup from "../../UI/molecules/SortGroup/SortGroup";
import FilterGroup from "../../UI/molecules/FilterGroup/FilterGroup";
const ProjectsHeroOverlay = ({
  projects_data,
  tech = [0, 1],
  button_function,
}) => {
  return (
    <motion.div
      className="projects_hero_parent"
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
      <div className="projects_hero_contents_parent">
        <ExitButton button_function={button_function} />
        <div className="projects_hero_contents_top_items">
          <ProjectTextsInfoBox
            title="Projects"
            description="A collection of projects that I’ve worked on over the years. From animation to programming."
          />
          <div className="projects_tech_container">
            <h3 className="project_display_accent_header">
              Technologies Used:
            </h3>
            <TechStackArray image={tech} />
          </div>
          <div className="projects_button_box">
            <SortGroup />
            <div className="button_with_modal">
              <FilterGroup />
            </div>
          </div>
          <div className="lower_items">
            <ProjectsGallery projects_input={projects_data} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsHeroOverlay;
