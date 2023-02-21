import React from 'react'
import "./BylineText.css"
const BylineText = ({text = "Frontend Developer ● Animator ● Visual designer"}) => {
  return (
    <p className='byline_text'>{text}</p>
  )
}

export default BylineText