import React from 'react'
import './ProjectGalleryCard.css'
import react_logo from '../../../../logo512.png'
import MainThemeButton from '../../atoms/MainThemeButton/MainThemeButton'
import TechStackArray from '../../atoms/TechStackArray/TechStackArray'
const ProjectGalleryCard = ({
    project_gallery_title = '1-DECISION', 
    image_source = react_logo, 
    project_gallery_description, 
    project_gallery_technology_stack_array = [1,2], 
    click_data,
    click_function
}) => {
    function clickHandle({input}) {
       
        console.log('You clicked submit.');
        console.log(click_data);

      }
    



    return (
    <div className='project_gallery_card_parent' onClick = {click_function}>
        <div className='project_gallery_card_contents'>
        <div className='project_gallery_card_image_container'>
            <img src={image_source}></img>
        </div>
        <div className='lower_items'>
            <div className='left_items'>
                <h1 className='project_gallery_title'>
                    {project_gallery_title}
                </h1>
                <p className='project_gallery_description'>
                {project_gallery_description}
                {/* {project?.roleDescriptionSections[i].roleDescriptionSection.name.toString()} */}
                </p>
                
            </div>
            <div className='right_items'>
                <TechStackArray image = {project_gallery_technology_stack_array}/>
                <MainThemeButton/>
                
            </div>
       
        </div>
        



        </div>
        
        
    </div>
  )
}

export default ProjectGalleryCard