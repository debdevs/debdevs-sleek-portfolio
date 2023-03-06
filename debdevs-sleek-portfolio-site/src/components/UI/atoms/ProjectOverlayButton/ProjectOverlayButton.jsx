import React from 'react'
import './ProjectOverlayButton.css'
import {AiOutlineGithub} from 'react-icons/ai'
const ProjectOverlayButton = ({text = 'Home',icon = '', color_data = null}) => {
  return (
    <button className='project_overlay_button' style={{background: color_data}}>{text}{icon}</button>
  )
}

export default ProjectOverlayButton