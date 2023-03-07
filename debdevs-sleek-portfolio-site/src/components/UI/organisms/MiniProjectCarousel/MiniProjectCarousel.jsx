import React from 'react'
import './MiniProjectCarousel.css'
import MiniProjectCard from '../../molecules/MiniProjectCard/MiniProjectCard'
import myConfiguredSanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
import { HomeContext } from '../../../../HomeContext'
import { useContext } from 'react'
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const MiniProjectCarousel = ({projects_input}) => {
const { isData, setIsData } = useContext(HomeContext);
const { isOpen, setIsOpen } = useContext(HomeContext);

function clickFunction(input) {
       
    console.log('You clicked a project.');

    setIsData(input);
    setIsOpen(true);
    console.log(input);
    console.log(input.roleDescriptionSections[0].children[1]);
    console.log(input.overview[0].children[0].text)

    
  }

let project_array = Array.from(projects_input)
  return (
    <div className='mini_project_carousel_parent'>

         

{ 
    Object.keys(projects_input).map((item, i) => (

            <MiniProjectCard 
            project_title={projects_input[item].title}
            image_source = {urlFor(projects_input[item].poster).url()}
            project_description = {projects_input[item].shortDescription}
            project_technology_stack_array = {projects_input[item]?.techStackItems}
            click_data =  {projects_input[item]}
            click_function = {() => clickFunction(projects_input[item])}
           
            
            />

    ))
}  
       
    
    </div>
  )
}

export default MiniProjectCarousel