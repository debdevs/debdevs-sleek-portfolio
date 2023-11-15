import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import AnimatedRoutes from "./components/AnimatedRoutes";

import { useState, useEffect } from "react";
import sanityClient from "./client";

import { useContext } from "react";
import { HomeContext } from "./HomeContext.js";
import ProcessHeroOverlay from "./components/templates/ProcessHeroOverlay/ProcessHeroOverlay.jsx";
import ProjectsHeroOverlay from "./components/templates/ProjectsHeroOverlay/ProjectsHeroOverlay.jsx";
import ProjectOverlay from "./components/templates/ProjectOverlay/ProjectOverlay.jsx";
import ContactOverlay from "./components/templates/ContactOverlay/ContactOverlay.jsx";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./components/templates/MenuOverlay/MenuOverlay.jsx";
import Navbar from "./components/UI/organisms/Navbar/Navbar.jsx";
const App = () => {
  const [projects, setProjects] = useState([]);
  let data1 = useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          ...,
          
          "techStackItems": techStackItems[]{
            ...
            tech->
          },
      
          "roleDescriptionSections": roleDescriptionSections[]{
            ...,
            roleDescriptionSection->
          
          },
                   
          "buttonItems": buttonItems[]{
            
            ...,
         
            button->
          },
    
          
          title,
          shortDescription,
 
          slug,
          tagline,
          overview,
          releaseDate,
          poster,
          externalId,
          imageWithExplanation,
          popularity,
          github,
          liveLink,
 
          projectTypes,
          projectDescriptionSection,
          video,
          imageItems,
          videoGallery,
          color,
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const [tech, setTech] = useState([]);
  let data2 = useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "tech"]{
          name,
          image

    }`
      )
      .then((data) => setTech(data))
      .catch(console.error);
  }, []);
  const [isActive, setIsActive] = useState(false);
  const [isData, setIsData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  function setClose() {
    if (setIsOpen == true) {
      setIsOpen(false);
      console.log(setIsOpen);
    }
  }
  return (
    <HomeContext.Provider
      value={{
        isActive,
        setIsActive,
        isData,
        setIsData,
        isOpen,
        setIsOpen,
        contactOpen,
        setContactOpen,
        menuOpen,
        setMenuOpen,
        tech,
        projects,
      }}
      className = "App"
    >
      {/* <div className="cs_number_list_paragraph">{isOpen + "hello"}</div> */}
<Navbar/>
      <BrowserRouter>
        <AnimatePresence initial={false} className="overlay_holder">
          {contactOpen == true ? (
            <ContactOverlay
              project={isData}
              button_function={() => setContactOpen(false)}
            />
          ) : null}
        </AnimatePresence>

        <AnimatePresence initial={false} className="overlay_holder">
          {isOpen == true ? (
            <ProjectOverlay
              project={isData}
              button_function={() => setIsOpen(false)}
            />
          ) : null}
        </AnimatePresence>
        <AnimatePresence initial={false} className="overlay_holder">
          {menuOpen == true ? (
            <MenuOverlay
              project={isData}
              button_function={() => setMenuOpen(false)}
            />
          ) : null}
        </AnimatePresence>
        <AnimatedRoutes />

        {/* <ProjectsHeroOverlay projects_data={projects} tech={tech} /> */}
      </BrowserRouter>
    </HomeContext.Provider>
  );
};

export default App;
