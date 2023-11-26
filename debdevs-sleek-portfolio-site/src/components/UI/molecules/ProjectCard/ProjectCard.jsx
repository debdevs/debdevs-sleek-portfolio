import React from "react";
import "./ProjectCard.css";
import react_logo from "../../../../logo512.png";
import MainThemeButton from "../../atoms/MainThemeButton/MainThemeButton";
import TechStackArray from "../../atoms/TechStackArray/TechStackArray";
import { ReactSVG } from "react-svg";
import bs_arrow from "../../../../../src/assets/svgs/BsArrowReturnRight.svg";
import { GiArchiveResearch } from "react-icons/gi";
const ProjectCard = ({
  project_title = "1-DECISION",
  image_source = react_logo,
  project_description,
  project_technology_stack_array = [1, 2],
  click_data,
  click_function,
  project_source,
  card_type = "basic"
}) => {
  function clickHandle({ input }) {
    console.log("You clicked submit.");
    console.log(click_data);
  }

  function hexToRGBA(hex, alpha) {
    // Remove '#' if present
    hex = hex.replace("#", "");

    // Convert hex to RGB value
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Create RGBA string with the given alpha value
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    return rgba;
  }

  // Convert hex color to RGBA with alpha value 0.22
  const rgbaColor = hexToRGBA(project_source.color, 0.22);

  return (
    <div
      className="project_card_parent"
      onClick={click_function}
      // style={{ filter: `drop-shadow(0px 4px 35px ${rgbaColor})` }}
      style={card_type == 'basic' ? {filter: `drop-shadow(0px 4px 35px ${rgbaColor})` }: {border: "0px solid" + project_source?.color, width:'100%', maxWidth:'489.74px' , filter: `drop-shadow(0px 4px 35px ${rgbaColor})`}}
    >
      <div className="project_card_contents">
        <div
          className="project_card_image_container"
          style={card_type == 'basic' ? {border: "1px solid" + project_source?.color }: {border: "1px solid" + project_source?.color, width:'100%' }}
        >
          <img src={image_source}></img>
        </div>
        <div className="lower_items">
          <div className="left_items">
       
            <div className="top_items_row">
              <div className="top_left_items">
                {
                  card_type == 'basic' ? 

                  <ReactSVG className="bs_arrow" src={bs_arrow} />
                  :
                  <GiArchiveResearch className="bs_arrow"/>
           
                }
            
              <h1 className="project_title" style={{ color: project_source?.color }}>{project_title}</h1>
              </div>

              <TechStackArray image={project_technology_stack_array} />
            </div>

            <p className="project_description">{project_description}</p>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
