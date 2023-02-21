import React from 'react'
import './ProjectCard.css'
import react_logo from '../../../../logo512.png'
const ProjectCard = ({image_source = react_logo}) => {
  return (
    <div className='project_card_parent'>
        <div className='project_card_contents'>
        <div className='project_card_image_container'>
            <img src={image_source}></img>

        </div>



        </div>
        
        
    </div>
  )
}

export default ProjectCard