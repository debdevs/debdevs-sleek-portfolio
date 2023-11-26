import React from 'react'
import './ProjectCard.css'
import react_logo from '../../../../logo512.png'
import MainThemeButton from '../../atoms/MainThemeButton/MainThemeButton'
import TechStackArray from '../../atoms/TechStackArray/TechStackArray'
const ProjectCard = ({
    project_title = '1-DECISION', 
    image_source = react_logo, 
    project_description, 
    project_technology_stack_array = [1,2], 
    click_data,
    click_function,
    project_source
}) => {
    function clickHandle({input}) {
       
        console.log('You clicked submit.');
        console.log(click_data);

      }
    

      function hexToRGBA(hex, alpha) {
        // Remove '#' if present
        hex = hex.replace('#', '');
      
        // Convert hex to RGB value
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
      
        // Create RGBA string with the given alpha value
        const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      
        return rgba;
      }
      
 
      // Convert hex color to RGBA with alpha value 0.22
      const rgbaColor = hexToRGBA(project_source.color, 0.22);

    return (
    <div className='project_card_parent' onClick = {click_function} style={{ filter: `drop-shadow(0px 4px 35px ${rgbaColor})`}}>
        <div className='project_card_contents'>
        <div className='project_card_image_container' style={{ border: "1px solid" + project_source?.color }} >
            <img src={image_source}></img>
        </div>
        <div className='lower_items'>
            <div className='left_items'>
                <h1 className='project_title'>
                    {project_title}
                </h1>
                <p className='project_description'>
                {project_description}
                </p>
                
            </div>
            <div className='right_items'>
                <TechStackArray image = {project_technology_stack_array}/>
                <MainThemeButton/>
                
            </div>
       
        </div>
        



        </div>
        
        
    </div>
  )
}

export default ProjectCard