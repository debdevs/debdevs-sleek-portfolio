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
        // <img src = {urlFor(image[item].tech._ref.image).url()}/>
            // console.log(image[item].name, "hello")
            <div className='tech_image_parent'>
            <img className='tech_image' src = {urlFor(image[item].image).url()}/>
            </div>
  //           Object.keys(item).map((itm, x) => (

  //         console.log(image[item].tech._ref)
  
  // ))
  

))}

    </div>
  )
}

export default TechStackArray