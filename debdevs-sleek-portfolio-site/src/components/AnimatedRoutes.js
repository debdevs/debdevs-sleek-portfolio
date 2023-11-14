import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "../App.css";
import Home from "../components/pages/Home/Home";

import { AnimatePresence } from "framer-motion";
import RenderFarms from "./pages/CaseStudies/RenderFarms/RenderFarms";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/renderfarms" element={<RenderFarms />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
