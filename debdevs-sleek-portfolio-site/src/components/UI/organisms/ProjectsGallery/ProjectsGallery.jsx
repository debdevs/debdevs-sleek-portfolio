import React from 'react'
import './ProjectsGallery.css'
import ProjectGalleryCard from '../../molecules/ProjectGalleryCard/ProjectGalleryCard'
import myConfiguredSanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
import { HomeContext } from '../../../../HomeContext'
import { useContext } from 'react'
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ProjectsGallery = ({projects_input}) => {
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
    <div className='project_gallery_parent'>
        {/* {project_array.toString()}
        {console.log(Object.values(projects_input))}
        {console.log(typeof projects_array, "array")}
        { console.log(Array.from(projects_input))} */}
         

{ 
    Object.keys(projects_input).map((item, i) => (

            <ProjectGalleryCard 
            project_gallery_title={projects_input[item].title}
            image_source = {urlFor(projects_input[item].poster).url()}
            project_gallery_description = {projects_input[item].roleDescriptionSections[0].roleDescriptionSection.name.toString()}
            // {project?.roleDescriptionSections[i].roleDescriptionSection.name.toString()}
            project_gallery_technology_stack_array= {projects_input[item]?.techStackItems}
          
            click_data =  {projects_input[item]}
            click_function = {() => clickFunction(projects_input[item])}
           
            
            />

    ))
}  
       
    
    </div>
  )
}

export default ProjectsGallery