import React from 'react'
import './TechStackArray.css'

import myConfiguredSanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from "../../../../client"
import { useState, useEffect } from 'react'
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}


const TechStackArray = ({image}) => {
  const [techItems, setTechItems] = useState([]);
let data1 = useEffect(() => {
  sanityClient
    .fetch(
      `*[_type == "tech"]{
        name,
        slug,
        image

  }`
    )
    .then((data) => setTechItems(data))
    .catch(console.error);
}, []);

  return (
    <div className='tech_stack_array_container'>
      {/* {console.log(techItems, "tech qyer")} */}

      {    Object.keys(image).map((item, i) => (

            <div className='tech_image_parent'>
            <img className='tech_image' src = {urlFor(image[item].image).url()}/>
            </div>
      ))}

    </div>
  )
}

export default TechStackArray