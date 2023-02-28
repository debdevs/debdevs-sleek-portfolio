import React from 'react'
import './ProjectDisplay.css'
import myConfiguredSanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ProjectDisplay = ({project_source}) => {
  return (
    <div className='project_display_card_parent'>
        <div className='project_display_card_background'  style={{border: '1px solid' + project_source.color, opacity: '.25'}}/>
        <div className='project_display_card_image_container' style={{border: '1px solid' + project_source.color}}>
            <img className='project_display_card_image' src ={urlFor(project_source.poster).url()} />
        </div>
        <div className='project_display_card_shadow' style={{background: project_source.color}}/>

  
    </div>
  )
}

export default ProjectDisplay