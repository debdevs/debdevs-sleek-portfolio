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
import SHM1 from "../../../../assets/images/SHM_MTG_IMG_1.png";
import SHM_Sample_1 from "../../../../assets/images/SHM_SAMPLE_1.png";
import SHM_Sample_2 from "../../../../assets/images/SHM_SAMPLE_2.png";
import SHM_Branding1 from "../../../../assets/images/ShowmanBranding1.png";
import SHM_Branding2 from "../../../../assets/images/ShowmanBranding2.png";
import SHM_Branding3 from "../../../../assets/images/ShowmanBranding3.png";
import SHM_Branding4 from "../../../../assets/images/ShowmanBranding4.png";
import SHM_Branding5 from "../../../../assets/images/ShowmanBranding5.png";
import SHM_Desktop from "../../../../assets/images/ShowmanTemplatesDesktop.png";
import SHM_Wireframe from "../../../../assets/images/ShowmanTemplatesDesktopWireframe.png";
import { motion, AnimatePresence, color } from "framer-motion";
import StyledImageDisplay from "../../../UI/molecules/StyledImageDisplay/StyledImageDisplay";
import RoleList from "../../../UI/molecules/RoleList/RoleList";
import { HomeContext } from "../../../../HomeContext";
import { useContext, useEffect, useState } from "react";
import ProjectGalleryOverlay from "../../../UI/molecules/ProjectGalleryOverlay/ProjectGalleryOverlay";
import myConfiguredSanityClient from "../../../../client";
import imageUrlBuilder from "@sanity/image-url";
import ProjectCard from "../../../UI/molecules/ProjectCard/ProjectCard";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const builder = imageUrlBuilder(myConfiguredSanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ShowmanVideo = () => {
  let main_color = "#A259FF";
  const { galleryOpen, setGalleryOpen } = useContext(HomeContext);
  const { projects } = useContext(HomeContext);
  const {
    isData,
    setIsData,
    projectSectionID,
    setProjectSectionID,
    projectTagTab,
    setProjectTagTab,
  } = useContext(HomeContext);
  const showmanVideoProject = Object.values(projects).find(
    (project) => project.title === "Showman Video"
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setProjectSectionID(
      (projectSectionID) =>
        (projectSectionID + 1) %
        showmanVideoProject?.projectDescriptionSections.length
    );
  };

  const [currentImage, setCurrentImage] = useState(SHMBanner); 
  return (
    <div className="App">
      {console.log(showmanVideoProject)}
      {console.log("testdesct")}
      {console.log(projects.sort((a, b) => a.externalId - b.externalId))}
      {console.log("testdesctdif")}
      {console.log(
        showmanVideoProject?.projectDescriptionSections[0]
          .projectDescriptionSection.description[0].children[0].text
      )}
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
        <h1 className="large_desc_header">
          {/* {showmanVideoProject?.projectDescriptionSections[0].projectDescriptionSection.description[0].children[0].text} */}
          {/* {showmanVideoProject?.projectDescriptionSections[0].projectDescriptionSection.description[0].children[0].text} */}
          {/* {showmanVideoProject?.projectDescriptionSections[0].image} */}

          {/* <ProjectCard
          project_title={projects[item].title}
          image_source={urlFor(projects[item].poster).url()}
          project_description={projects[item].shortDescription}
          project_technology_stack_array={projects[item]?.techStackItems}
          click_data={projects[item]}
          // click_function={() => clickFunction(projects[item])}
          project_source={projects[item]}
        /> */}
        </h1>
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
        <div className="main_display">
          <StyledImageDisplay
            border_color={main_color}
            image_source={SHMBanner}
            button_function={() => {
              setGalleryOpen(true);
            }}
          />
        </div>

        <div className="list_items_container">
          <div className="list_text_with_image">
            <CSListObject
              class_name="cs_list_object_secondary_version"
              header="Goals & Insights"
              paragraph="Showman's business goal is to generate and deliver videos on the cloud to a multitude of users"
            />
            <StyledImageDisplay
              image_source={SHM_Sample_1}
              container_height="131px"
              container_width="313px"
              border_color={main_color}
              main_style="small"
              button_function={() => {
                setGalleryOpen(true);
                setCurrentImage(SHM_Sample_1)
              }}
            />
          </div>
          <div className="list_text_with_image">
            <CSListObject
              class_name="cs_list_object_secondary_version"
              header="Discussion & Feedback"
              paragraph=" 

              Primary discussion revolved around how Showman would fit into the market & who its users would be.
              
              "
            />
            <StyledImageDisplay
              image_source={SHM_Sample_2}
              container_height="131px"
              container_width="313px"
              border_color={main_color}
              main_style="small"
              button_function={() => {
                setGalleryOpen(true);
                setCurrentImage(SHM_Sample_2)
              }}
            />
          </div>
          <div className="list_text_with_image">
            <CSListObject
              class_name="cs_list_object_secondary_version"
              header="Research & Analysis"
              paragraph="I researched potential competitors to examine their pain points and product presentation."
            />
            <StyledImageDisplay
              image_source={SHM1}
              container_height="131px"
              container_width="313px"
              border_color={main_color}
              main_style="small"
              button_function={() => {
                setGalleryOpen(true);
                setCurrentImage(SHM1)
              }}
            />
          </div>
        </div>

        <div className="cs_lower_items_container">
          <div className="cs_list_items_row">
            <CSListObject
              header="Objective"
              paragraph="Design a visually distinct App that generates and delivers videos to users over the cloud"
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

          <div className="primary_section_shm">
            <h1 className="large_desc_header">
              Problem, Brand Vision & Goal Identification
            </h1>
            <div className="grid_list">
              <CSListObject
                header="Initial Problem"
                paragraph="Showman is attempting to break into the market of video creation software & apps. Many competitors on the market have good UI/UX, but tend to be to be locked into either mobile or desktop layout. "
              />
              <CSListObject
                header="Brand Vision"
                paragraph="The goal for this project was to have a western-style video creation tool "
              />
              <CSListObject
                header="Research Methodology"
                paragraph="I researched competitor products and developed various target personas of users who would like to use a Video Template SAAS and what their goals & feelings were towards a new product"
              />
              <CSListObject
                header="Features to visually implement"
                paragraph="Basic features for this type of software would include an interface for users to make edits to their templates "
              />
            </div>
            <h1 className="large_desc_header">Design Process</h1>
            <div class="grid-container">
              <div class="grid-item top-item">
                {" "}
                <CSListObject
                  header="Branding"
                  paragraph="Meant to embody the golden age of animation and add a 20’s western feel with a neo-90’s twist. For this product, being distinct is at the forefront of the product goals"
                />
              </div>
              <div class="grid-item top-item">
                {" "}
                <StyledImageDisplay
                  image_source={SHM_Branding5}
                  container_height="131px"
                  container_width="313px"
                  border_color={main_color}
                  main_style="small"
                  button_function={() => {
                    setGalleryOpen(true);
                    setCurrentImage(SHM_Branding5)
                  }}
                />
              </div>
              <div class="grid-item span-bottom">
                {" "}
                <StyledImageDisplay
                  image_source={SHM_Branding1}
                  container_height="131px"
                  container_width="313px"
                  border_color={main_color}
                  main_style="small"
                  button_function={() => {
                    setGalleryOpen(true);
                    setCurrentImage(SHM_Branding1)
                  }}
                />
              </div>
              <div class="grid-item span-bottom">
                {" "}
                <StyledImageDisplay
                  image_source={SHM_Branding2}
                  container_height="131px"
                  container_width="313px"
                  border_color={main_color}
                  main_style="small"
                  button_function={() => {
                    setGalleryOpen(true);
                    setCurrentImage(SHM_Branding2)
                  }}
                />
              </div>
              <div class="grid-item span-bottom">
                {" "}
                <StyledImageDisplay
                  image_source={SHM_Branding3}
                  container_height="131px"
                  container_width="313px"
                  border_color={main_color}
                  main_style="small"
                  button_function={() => {
                    setGalleryOpen(true);
                    setCurrentImage(SHM_Branding3)
                  }}
                />
              </div>
            </div>
            <div>
              <div className="desc_container">
                <CSListObject
                  header="Wireframing"
                  paragraph="Initial wireframing focused on base features & presentation."
                />
                <div className="desc_image_row">
                  <StyledImageDisplay
                    image_source={SHM_Wireframe}
                    container_height="131px"
                    container_width="313px"
                    border_color={main_color}
                    main_style="small"
                    button_function={() => {
                      setGalleryOpen(true);
                      setCurrentImage(SHM_Wireframe)
                    }}
                  />
                  <StyledImageDisplay
                    image_source={SHM_Wireframe}
                    container_height="131px"
                    container_width="313px"
                    border_color={main_color}
                    main_style="small"
                    button_function={() => {
                      setGalleryOpen(true);
                      setCurrentImage(SHM_Wireframe)
                    }}
                  />
                  <StyledImageDisplay
                    image_source={SHM_Wireframe}
                    container_height="131px"
                    container_width="313px"
                    border_color={main_color}
                    main_style="small"
                    button_function={() => {
                      setGalleryOpen(true);
                      setCurrentImage(SHM_Wireframe)
                    }}
                  />
                </div>
              </div>
              <div className="desc_container">
                <CSListObject
                  header="UI Design"
                  paragraph="I developed the color scheme in line with the branding. Purple became the primary color, used to visually reinforce the brand vision of creativity, luxury, & intrigue"
                />
                <div className="desc_image_row">
                  <StyledImageDisplay
                    image_source={SHM_Desktop}
                    container_height="131px"
                    container_width="313px"
                    border_color={main_color}
                    main_style="small"
                    button_function={() => {
                      setGalleryOpen(true);
                      setCurrentImage(SHM_Desktop)
                    }}
                  />
                  <StyledImageDisplay
                    image_source={SHM_Desktop}
                    container_height="131px"
                    container_width="313px"
                    border_color={main_color}
                    main_style="small"
                    button_function={() => {
                      setGalleryOpen(true);
                      setCurrentImage(SHM_Desktop)
                    }}
                  />
                  <StyledImageDisplay
                    image_source={SHM_Desktop}
                    container_height="131px"
                    container_width="313px"
                    border_color={main_color}
                    main_style="small"
                    button_function={() => {
                      setGalleryOpen(true);
                      setCurrentImage(SHM_Desktop)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className="large_desc_header padded">
            Additional Information Coming Soon
          </h1>
        </div>
      </motion.div>
      <AnimatePresence initial={false} className="overlay_holder">
        {/* {galleryOpen ? (
          <ProjectGalleryOverlay
          project = {showmanVideoProject}
          project_section_id = {projectSectionID} 
          project_tag_tab = {projectTagTab}
          set_project_section_id={()=>{goToNextImage()}}
            gallery_theme_color={main_color}
            close_function={() => {
              setGalleryOpen(false);
            }}
          />
        ) : null} */}

        {galleryOpen ? (
          <Lightbox
            plugins={[Zoom]}
            open={galleryOpen}
            // close={() => setGalleryOpen(false)}
            close={() => {
              setGalleryOpen(false);
              setCurrentImage(SHMBanner)
            }}
            slides={[{ src: currentImage }, { src: SHM_Desktop }]}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ShowmanVideo;
