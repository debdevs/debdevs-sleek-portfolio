import React from 'react'
import './MiniProjectCard.css'
import react_logo from '../../../../logo512.png'
import MainThemeButton from '../../atoms/MainThemeButton/MainThemeButton'
import TechStackArray from '../../atoms/TechStackArray/TechStackArray'
const MiniProjectCard = ({
    project_title = '1-DECISION', 
    image_source = react_logo, 
    project_description, 
    project_technology_stack_array = [1,2], 
    click_data,
    click_function
}) => {
    function clickHandle({input}) {
       
        console.log('You clicked submit.');
        console.log(click_data);

      }
    



    return (
    <div className='mini_project_card_parent' onClick = {click_function}>
        <div className='mini_project_card_contents'>
        <div className='mini_project_card_image_container'>
            <img src={image_source}></img>
        </div>
        <div className='mini_project_card_lower_items'>
            <div className='left_items'>
                <h1 className='mini_project_card_project_title'>
                    {project_title}
                </h1>
                <p className='mini_project_card_project_description'>
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

export default MiniProjectCard