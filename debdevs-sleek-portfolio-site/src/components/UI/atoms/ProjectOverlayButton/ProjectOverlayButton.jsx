import React from 'react'
import './ProjectOverlayButton.css'
import {AiOutlineGithub} from 'react-icons/ai'
const ProjectOverlayButton = ({text = 'Home',icon = ''}) => {
  return (
    <button className='project_overlay_button'>{text}{icon}</button>
  )
}

export default ProjectOverlayButton