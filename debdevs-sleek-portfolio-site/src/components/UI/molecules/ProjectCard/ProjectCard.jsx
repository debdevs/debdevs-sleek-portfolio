import React from 'react'
import './ProjectCard.css'
import react_logo from '../../../../logo512.png'
import MainThemeButton from '../../atoms/MainThemeButton/MainThemeButton'
import TechStackArray from '../../atoms/TechStackArray/TechStackArray'
const ProjectCard = ({project_title = '1-DECISION', image_source = react_logo, project_technology_stack = ''}) => {
  return (
    <div className='project_card_parent'>
        <div className='project_card_contents'>
        <div className='project_card_image_container'>
            <img src={image_source}></img>
        </div>
        <div className='lower_items'>
            <div className='left_items'>
                <h1 className='project_title'>
                    {project_title}
                </h1>
                <p className='project_description'>
                Progressive Web App
                </p>
                
            </div>
            <div className='right_items'>
                <TechStackArray/>
                <MainThemeButton/>
            </div>
       
        </div>
        



        </div>
        
        
    </div>
  )
}

export default ProjectCard