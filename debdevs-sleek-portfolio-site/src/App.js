import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import { HomeContext } from "./HomeContext";
import AnimatedRoutes from "./components/AnimatedRoutes";
const App = () => {
  return (
    // <HomeContext.Provider
    //   value={{
    //     isActive,
    //     setIsActive,
    //     isData,
    //     setIsData,
    //     isOpen,
    //     setIsOpen,
    //     contactOpen,
    //     setContactOpen,
    //   }}
    // >
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    /* </HomeContext.Provider> */
  );
};

export default App;
