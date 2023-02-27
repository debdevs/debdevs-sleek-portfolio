import React from 'react'
import './ProjectCarousel.css'
import ProjectCard from '../../molecules/ProjectCard/ProjectCard'



import myConfiguredSanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ProjectCarousel = ({projects_input}) => {
 
let project_array = Array.from(projects_input)
  return (
    <div className='project_carousel_parent'>
        {project_array.toString()}
        {console.log(Object.values(projects_input))}
        {console.log(typeof projects_array, "array")}
        { console.log(Array.from(projects_input))}
         

{ 
    Object.keys(projects_input).map((item, i) => (

            <ProjectCard 
            project_title={projects_input[item].title}
            image_source = {urlFor(projects_input[item].poster).url()}
            project_description = {projects_input[item].shortDescription}
            project_technology_stack_array = {projects_input[item]?.techStackItems}
           
            
            />

    ))
}  

        
    
    </div>
  )
}

export default ProjectCarousel