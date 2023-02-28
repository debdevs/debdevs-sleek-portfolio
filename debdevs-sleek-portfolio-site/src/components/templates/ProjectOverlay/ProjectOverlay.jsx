import React from 'react'
import ProjectDisplay from '../../UI/molecules/ProjectDisplay/ProjectDisplay'
import './ProjectOverlay.css'

const ProjectOverlay = ({project, display_value}) => {
  return (
    <div className='project_overlay_parent'>
        <div className='project_overlay_contents'>
            <ProjectDisplay project_source={project}/>
        </div>
    
    </div>
  )
}

export default ProjectOverlay