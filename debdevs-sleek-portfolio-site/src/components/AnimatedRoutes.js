import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "../App.css";
import Home from "../components/pages/Home/Home";
import { useContext } from 'react';
import { HomeContext } from '../HomeContext.js'
import { AnimatePresence } from "framer-motion";
import RenderFarms from "./pages/CaseStudies/RenderFarms/RenderFarms";
import ProjectOverlay from "./templates/ProjectOverlay/ProjectOverlay.jsx";
import ContactOverlay from "./templates/ContactOverlay/ContactOverlay.jsx";
const AnimatedRoutes = () => {
  const location = useLocation();
  const {         
    isActive,
    setIsActive,
    isData,
    setIsData,
    isOpen,
    setIsOpen,
    contactOpen,
    setContactOpen,
} = useContext(HomeContext);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/renderfarms" element={<RenderFarms />} />
      </Routes>
      {/* <AnimatePresence initial={false} className="overlay_holder">
        {isOpen == true ? (
          <ProjectOverlay
            project={isData}
            button_function={() => setIsOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false} className="overlay_holder">
        {contactOpen == true ? (
          <ContactOverlay
            project={isData}
            button_function={() => setContactOpen(false)}
          />
        ) : null}
      </AnimatePresence> */}
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
