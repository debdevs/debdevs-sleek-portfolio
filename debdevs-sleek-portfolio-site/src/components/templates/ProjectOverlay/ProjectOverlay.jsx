import React from 'react'
import ProjectDisplay from '../../UI/molecules/ProjectDisplay/ProjectDisplay'
import './ProjectOverlay.css'
import { motion, AnimatePresence } from 'framer-motion';
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

    <ProjectDisplay project_source={project}/>

    <div className='project_overlay_close_button' onClick={button_function}>X</div>
  </div>
  
  </motion.div>

  )
}

export default ProjectOverlay