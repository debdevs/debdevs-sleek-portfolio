import React from 'react'
import './ProjectCarousel.css'
import ProjectCard from '../../molecules/ProjectCard/ProjectCard'
const ProjectCarousel = ({projects_input}) => {
 
let project_array = Array.from(projects_input)
  return (
    <div className='project_carousel_parent'>
        {project_array.toString()}
        {console.log(Object.values(projects_input))}
        {console.log(typeof projects_array, "array")}
        { console.log(Array.from(projects_input))}
        {        
       project_array?.map((project) =>{
            <ProjectCard project_title={project?.title}/>
        })}
{ 
    Object.keys(projects_input).map((item, i) => (
        <li className="travelcompany-input" key={i}>
            <span className="input-label">{ projects_input[item].name }</span>
            <ProjectCard project_title={projects_input[item].title}/>
        </li>
    ))
}  
<ProjectCard />
        
    
    </div>
  )
}

export default ProjectCarousel