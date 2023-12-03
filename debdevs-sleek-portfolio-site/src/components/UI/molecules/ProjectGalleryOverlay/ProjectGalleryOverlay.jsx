import React from "react";
import MainHeader from "../../../UI/atoms/MainHeader/MainHeader";
import Navbar from "../../../UI/organisms/Navbar/Navbar";
import "./ProjectGalleryOverlay.css";
import CSListObject from "../../../UI/molecules/CSListObject/CSListObject";
import CSNumberListObject from "../../../UI/molecules/CSNumberListObject/CSNumberListObject";
import separator_icon from "../../../../../src/assets/svgs/DottedBulletIcon.svg";
import { ReactSVG } from "react-svg";
import CSSmallListObject from "../../../UI/molecules/CSSmallListObject/CSSmallListObject";
import CSHeaderParagraphObject from "../../../UI/molecules/CSHeaderParagraphObject/CSHeaderParagraphObject";
import CSSecondaryListObject from "../../../UI/molecules/CSSecondaryListObject/CSSecondaryListObject";
import RFBanner from "../../../../assets/images/RFBannerSized.png";

import { motion, AnimatePresence } from "framer-motion";
import AccentHeader from "../../atoms/AccentHeader/AccentHeader";
import ExitButton from "../../atoms/ExitButton/ExitButton";
import StyledImageDisplay from "../StyledImageDisplay/StyledImageDisplay";
import GalleryTab from "../../atoms/GalleryTab/GalleryTab";
import GalleryTabContainer from "../GalleryTabContainer/GalleryTabContainer";
import NavigationButton from "../../atoms/NavigationButton/NavigationButton";
import { BsArrowRightShort } from "react-icons/bs";
import myConfiguredSanityClient from "../../../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ProjectGalleryOverlay = ({
  close_function,
  main_theme_color = "FFF",
  project = null,
  project_section_id,
  project_tag_tab,
  set_project_section_id
}) => {

  return (
    <div className="gallery_overlay">
      <motion.div
        className="gallery_content"
        id = {project_section_id}
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
        <div className="gallery_top_items">
          <AccentHeader text="PROJECT GALLERY" />
          <div className="header_with_icon">
            <div className="icon_container">
              <ReactSVG className="rhombus_icon" src={separator_icon} />
            </div>

            <MainHeader text="Showman Video" />
          </div>

          <GalleryTabContainer />
        </div>
        <motion.div className="gallery_lower_items"
        
        

        id = {5}
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
          <div className="gallery_left_items">
            <div className="gallery_left_top_items">
              <CSListObject
                class_name="cs_list_object_secondary_version"
                header={
                  project.projectDescriptionSections[project_section_id]
                    .projectDescriptionSection.name
                }
                paragraph={
                  project.projectDescriptionSections[project_section_id]
                    .projectDescriptionSection.description[0].children[0].text
                }
              />
              <NavigationButton
                text="Next"
                icon={<BsArrowRightShort className="button_icon" />}
                button_class_name="navigation_button_reverse"
                button_function={()=>{set_project_section_id()}}
              />
            </div>
          </div>
          <div className="gallery_right_items">
          {/* <img src = {urlFor(project?.projectDescriptionSections[0].projectDescriptionSection.image).url()}/> */}
            <StyledImageDisplay border_color={main_theme_color} image_source={urlFor(project?.projectDescriptionSections[project_section_id].projectDescriptionSection.image).url()} />
          </div>
        </motion.div>

        <ExitButton button_function={close_function} />
      </motion.div>
    </div>
  );
};

export default ProjectGalleryOverlay;
