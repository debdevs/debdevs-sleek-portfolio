import React from 'react'
import './ProjectDisplay.css'
const ProjectDisplay = ({image_source}) => {
  return (
    <div className='project_display_card_parent'>
        <div className='project_display_card_background'/>
        <div className='project_display_card_image_container'>
            <img src = {image_source}/>
        </div>
        <div className='project_display_card_shadow'/>

     
    </div>
  )
}

export default ProjectDisplay