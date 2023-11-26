import React from 'react'
import './ProjectCarousel.css'
import ProjectCard from '../../molecules/ProjectCard/ProjectCard'
import myConfiguredSanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
import { HomeContext } from '../../../../HomeContext'
import { useContext } from 'react'
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ProjectCarousel = ({projects_input}) => {
const { isData, setIsData } = useContext(HomeContext);
const { isOpen, setIsOpen } = useContext(HomeContext);

function clickFunction(input) {
       
    console.log('You clicked a project.');

    setIsData(input);
    setIsOpen(true);
    console.log(input);
    // console.log(input.roleDescriptionSections[0].children[1]);
    console.log(input.overview[0].children[0].text)

    
  }

let project_array = Array.from(projects_input)
  return (
    <div className='project_carousel_parent'>
        {/* {project_array.toString()}
        {console.log(Object.values(projects_input))}
        {console.log(typeof projects_array, "array")}
        { console.log(Array.from(projects_input))} */}
         

{ 
    Object.keys(projects_input).map((item, i) => (

            <ProjectCard 
            project_title={projects_input[item].title}
            image_source = {urlFor(projects_input[item].poster).url()}
            project_description = {projects_input[item].shortDescription}
            project_technology_stack_array = {projects_input[item]?.techStackItems}
            click_data =  {projects_input[item]}
            click_function = {() => clickFunction(projects_input[item])}
            project_source={projects_input[item]}
            
           
            
            />

    ))
}  
       
    
    </div>
  )
}

export default ProjectCarousel