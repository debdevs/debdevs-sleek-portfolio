import React from "react";
import "./CSProductCard.css";
import outlined_background from "../../../../../src/assets/svgs/CaseStudyCardBorder.svg";
import { ReactSVG } from "react-svg";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";
import project_image from "../../../../assets/images/RFBannerSized.png";
import project_image_2 from "../../../../assets/images/ShowmanTemplatesDesktop.png";
const CSProductCard = ({ border_color = "FFF", main_image = project_image, link = '/', header1 = 'RenderFarms',  header= 'RenderFarms', subtext = 'A SAAS web application'}) => {
  return (
    <a href = {link}>

 
    <div className="csp_product_card_container">
      <ReactSVG className="outlined_background" src={outlined_background} />
      <div className="csp_card_content">
        <div className="csp_product_card_image_container" style={{ border: `2px solid ${border_color}` }}>
          <img src={main_image} />
        </div>
        <div className="csp_lower_items">
          <div className="csp_left">
            <h1 className="csp_card_text">{header}</h1>
            <h1 className="csp_card_paragraph">{subtext}</h1>
          </div>
          <div className="csp_right"></div>
        </div>
      </div>
    </div>
    </a>
  );
};

export default CSProductCard;
