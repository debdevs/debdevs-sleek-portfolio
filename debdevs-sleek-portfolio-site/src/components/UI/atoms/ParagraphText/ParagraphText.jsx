import React from 'react'
import './ParagraphText.css'
const ParagraphText = ({
    text = `I’m a web & software developer with a passion for making things work. With years of experience in animation, I’ve translated my design and technical scripting skills to web development. 

    Now, I create robust & dynamic frontends using Figma, React and other web technologies.`
    




}) => {
  return (
    <p className='paragraph_text'>{text}</p>
  )
}

export default ParagraphText