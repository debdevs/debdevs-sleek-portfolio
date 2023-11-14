
import './Home.css';
import HomeHero from '../../../components/templates/HomeHero/HomeHero';

import Navbar from '../../../components/UI/organisms/Navbar/Navbar';
import { useState, useEffect } from 'react';
import sanityClient from "../../../client"
import '../../../App.css'
import { useContext } from 'react';
import { HomeContext } from '../../../HomeContext.js'
import { motion, AnimatePresence } from 'framer-motion';
import ProjectOverlay from '../../../components/templates/ProjectOverlay/ProjectOverlay';
import ContactOverlay from '../../../components/templates/ContactOverlay/ContactOverlay';
import BaseHeroOverlay from '../../../components/templates/BaseHeroOverlay/BaseHeroOverlay';
import ProjectsHeroOverlay from '../../../components/templates/ProjectsHeroOverlay/ProjectsHeroOverlay';
import ProcessHeroOverlay from '../../../components/templates/ProcessHeroOverlay/ProcessHeroOverlay';

function Home({projects_data=null, tech_data = null }) {
  const {tech } = useContext(HomeContext);
  const { projects} = useContext(HomeContext);
  const {         isActive,
    setIsActive,
    isData,
    setIsData,
    isOpen,
    setIsOpen,
    contactOpen,
    setContactOpen,
} = useContext(HomeContext);
  return (

    <div className="App">

      <Navbar/>
      <HomeHero projects_data={projects} tech_data = {tech} />

    
    </div>

 
  );
  
}

export default Home;
