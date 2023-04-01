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
import ContactOverlay from './components/templates/ContactOverlay/ContactOverlay';
import BaseHeroOverlay from './components/templates/BaseHeroOverlay/BaseHeroOverlay';
import ProjectsHeroOverlay from './components/templates/ProjectsHeroOverlay/ProjectsHeroOverlay';
import ProcessHeroOverlay from './components/templates/ProcessHeroOverlay/ProcessHeroOverlay';

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
  const [ isData, setIsData ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ contactOpen, setContactOpen ] = useState(false);
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
      isOpen, setIsOpen, 
      contactOpen, setContactOpen 

    }}
  >
    <div className="App">

      <Navbar/>
      <HomeHero projects_data={projects} tech_data = {tech} />
      {/* <ProcessHeroOverlay/> */}
      <ProjectsHeroOverlay tech={tech}/>
      <AnimatePresence initial={false} className = "overlay_holder">

      {isOpen == true?  <ProjectOverlay project={isData} button_function = {() => setIsOpen(false)}/> : null
    }
   
    </AnimatePresence>   

   

      <AnimatePresence initial={false} className = "overlay_holder">

      {contactOpen == true?  
      <ContactOverlay project={isData} button_function = {() => setContactOpen(false)}/> 
      : 
      null
      }

      </AnimatePresence>   
  
    
    </div>
    
    </HomeContext.Provider>
  );
  
}

export default App;
