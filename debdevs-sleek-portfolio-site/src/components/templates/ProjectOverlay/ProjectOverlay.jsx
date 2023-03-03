import React from 'react'
import ProjectDisplay from '../../UI/molecules/ProjectDisplay/ProjectDisplay'
import './ProjectOverlay.css'
import { motion, AnimatePresence } from 'framer-motion';
import ProjectTextsInfoBox from '../../UI/atoms/ProjectTextsInfoBox/ProjectTextsInfoBox';
import {AiFillCloseCircle} from 'react-icons/ai'
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

            <div className='project_display_card_left_items'>
            <ProjectDisplay project_source={project}/>
                
            </div>
            <div className='project_display_card_right_items'>
            <ProjectTextsInfoBox title={project.title} description = {project.overview[0].children[0].text}/>
      
            {/* <p  className='project_display_accent_header'>
              {project?.roleDescriptionSections[0].roleDescriptionSection.name.toString()}
            </p> */}
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


            </div>
      
            {console.log(project.overview[0].children[0].text)}

    <div className='project_overlay_close_button' onClick={button_function}><AiFillCloseCircle/></div>
  </div>
  
  </motion.div>

  )
}

export default ProjectOverlay