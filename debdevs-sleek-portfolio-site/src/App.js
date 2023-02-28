import logo from './logo.svg';
import './App.css';
import HomeHero from './components/templates/HomeHero/HomeHero';
import Navbar from './components/UI/organisms/Navbar/Navbar';
import { useState, useEffect } from 'react';
import sanityClient from "./client"
import { useContext } from 'react';
import { HomeContext } from './HomeContext.js'
import { motion, AnimatePresence } from 'framer-motion';

import ProjectOverlay from './components/templates/ProjectOverlay/ProjectOverlay';
function App() {
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
  

  const [isActive, setIsActive] = useState(false);
  const [ isData, setIsData ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  function setClose(){
    if (setIsOpen == true){
      setIsOpen(false)
      console.log(setIsOpen)
    }
  }
  return (
    <HomeContext.Provider
    value={{
      isActive,
      setIsActive,
      isData, setIsData,
      isOpen, setIsOpen 

    }}
  >
    <div className="App">

      <Navbar/>
      <HomeHero projects_data={projects} />

      <AnimatePresence initial={false} className = "overlay_holder">

      {isOpen == true?  <ProjectOverlay project={isData} button_function = {() => setIsOpen(false)}/> : null
    }
   
    </AnimatePresence>   
    </div>
    
    </HomeContext.Provider>
  );
  
}

export default App;
