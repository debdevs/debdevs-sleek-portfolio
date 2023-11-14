import React, { useState } from "react";
import ProjectDisplay from "../../UI/molecules/ProjectDisplay/ProjectDisplay";
import "./ProjectOverlay.css";
import { motion, AnimatePresence } from "framer-motion";
import ProjectTextsInfoBox from "../../UI/atoms/ProjectTextsInfoBox/ProjectTextsInfoBox";
import MainHeader from "../../UI/atoms/MainHeader/MainHeader";
import { AiFillCloseCircle, AiOutlineGlobal } from "react-icons/ai";
import TechStackArray from "../../UI/atoms/TechStackArray/TechStackArray";
import ProjectOverlayButton from "../../UI/atoms/ProjectOverlayButton/ProjectOverlayButton";
import myConfiguredSanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { ReactSVG } from "react-svg";
import ExitButton from "../../UI/atoms/ExitButton/ExitButton";
const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
  return builder.image(source);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const ProjectOverlay = ({ project, display_value, button_function }) => {
  return (
    <motion.div
      className="project_overlay_parent"
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
      <div className="project_overlay_contents">
        <motion.div
          className="bg_image_container"
          initial={{ translateX: 30, scaleX: 1, opacity: 0 }}
          animate={{ translateX: 0, scaleX: 1, opacity: 1 }}
          exit={{
            scaleX: 0.97,
            translateY: 50,
            opacity: 0,
            transition: { type: "ease", stiffness: 50 },
          }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <img className="bg_image" src={urlFor(project.imageItems[0]).url()} />
        </motion.div>
        <div className="project_display_card_left_items">
          <ProjectDisplay project_source={project} />
        </div>
        <div className="project_display_card_right_items">
          <MainHeader
            text={project.title}
            description={project.overview[0].children[0].text}
          />

          <div className="sections_parent">
            <div className="roles_container">
              <h3 className="project_display_accent_header">
                Responsibilities:
              </h3>
              <p className="project_display_accent_roles">
                {Object.keys(project?.roleDescriptionSections).map(
                  (item, i) => (
                    <span className="project_display_accent_roles">
                      {project?.roleDescriptionSections[
                        i
                      ].roleDescriptionSection.name.toString()}{" "}
                      ●{" "}
                    </span>
                  )
                )}
              </p>
            </div>

            <div className="description_container">
              <h3 className="project_display_accent_header"></h3>
              <p className="project_display_description">
                {project.overview[0].children[0].text}
              </p>
            </div>
            <div className="tech_container">
              <h3 className="project_display_accent_header">Tech Stack:</h3>
              <TechStackArray image={project.techStackItems} />
            </div>
            <div className="project_buttons_container">
              {/* <ProjectOverlayButton text='Live Project' icon={<AiOutlineGlobal className='button_icon'/>}/> */}

              {Object.keys(project?.buttonItems).map((item, i) => (
                <ProjectOverlayButton
                  text={project?.buttonItems[i].button.name.toString()}
                  button_direct_link={project?.buttonItems[i].buttonLink}
                  color_data={
                    project?.buttonItems[i].button.name == "Video Overview"
                      ? `linear-gradient(111.03deg, rgba(${
                          hexToRgb(project?.color).r
                        }, ${hexToRgb(project?.color).g}, ${
                          hexToRgb(project?.color).b
                        }, 0.25) 15.71%, rgba(12, 210, 237, 0.25) 198.24%)`
                      : project?.buttonItems[i].button.color
                  }
                  icon={
                    <ReactSVG
                      className="button_icon"
                      src={urlFor(project?.buttonItems[i].button.image).url()}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {console.log(project.overview[0].children[0].text)}

        {/* <div className='project_overlay_close_button' onClick={button_function}><AiFillCloseCircle/></div> */}
        <ExitButton button_function={button_function} />
      </div>
    </motion.div>
  );
};

export default ProjectOverlay;
