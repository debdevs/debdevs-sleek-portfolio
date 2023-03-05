import React from 'react'
import ProjectDisplay from '../../UI/molecules/ProjectDisplay/ProjectDisplay'
import './ProjectOverlay.css'
import { motion, AnimatePresence } from 'framer-motion';
import ProjectTextsInfoBox from '../../UI/atoms/ProjectTextsInfoBox/ProjectTextsInfoBox';
import MainHeader from '../../UI/atoms/MainHeader/MainHeader';
import {AiFillCloseCircle, AiOutlineGlobal} from 'react-icons/ai'
import TechStackArray from '../../UI/atoms/TechStackArray/TechStackArray';
import ProjectOverlayButton from '../../UI/atoms/ProjectOverlayButton/ProjectOverlayButton';
import myConfiguredSanityClient from '../../../client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ProjectOverlay = ({project, display_value, button_function}) => {
  return (
    <motion.div
    
    className="project_overlay_parent"
    initial={{  translateY: 10, scaleX: 1, opacity: 0 }}
    animate={{ translateY: 0, scaleX: 1, opacity: 1 }}
    exit={{
      scaleX: 0.97,
      translateY: 50,
      opacity: 0,
      transition: { type: 'linear', stiffness: 50 },
    }}
    transition={{ duration: .3 }}
  >     
<div className="project_overlay_contents">
        <motion.div className='bg_image_container'
        
        
        initial={{  translateX: 30, scaleX: 1, opacity: 0 }}
        animate={{ translateX: 0, scaleX: 1, opacity: 1 }}
        exit={{
          scaleX: 0.97,
          translateY: 50,
          opacity: 0,
          transition: { type: 'ease', stiffness: 50 },
        }}
        transition={{ duration: .8, delay: .7 }}
        
        
        
        >
          <img className='bg_image' src = {urlFor(project.imageItems[0]).url()}/>
        </motion.div>
            <div className='project_display_card_left_items'>
            <ProjectDisplay project_source={project}/>
                
            </div>
            <div className='project_display_card_right_items'>
            <MainHeader text={project.title} description = {project.overview[0].children[0].text}/>
      
            <div className='sections_parent'>
            <div className='roles_container'>
            <h3 className='project_display_accent_header'>Responsibilities:</h3>
            <p className='project_display_accent_roles'>
            {Object.keys(project?.roleDescriptionSections).map((item, i) => (

              
            <span className='project_display_accent_roles'>
            {project?.roleDescriptionSections[i].roleDescriptionSection.name.toString()} ● </span>
))
}  
            </p>


            </div>

            <div className='description_container'>
              <h3 className='project_display_accent_header'></h3>
              <p className='project_display_description'>{project.overview[0].children[0].text}</p>
            </div>
            <div className='tech_container'>
              <h3 className='project_display_accent_header'>Tech Stack:</h3>
              <TechStackArray image = {project.techStackItems}/>
            </div>
            <div className='project_buttons_container'>
            <ProjectOverlayButton text='Live Project' icon={<AiOutlineGlobal className='button_icon'/>}/>
            </div>
            </div>

            </div>
            
            {console.log(project.overview[0].children[0].text)}

    <div className='project_overlay_close_button' onClick={button_function}><AiFillCloseCircle/></div>
  </div>
  
  </motion.div>

  )
}

export default ProjectOverlay