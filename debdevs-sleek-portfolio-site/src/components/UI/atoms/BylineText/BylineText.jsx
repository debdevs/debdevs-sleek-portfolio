import React from 'react'
import "./BylineText.css"
const BylineText = ({text = "UI/UX Engineer ● Animator ● Visual Designer"}) => {
  return (
    <p className='byline_text'>{text}</p>
  )
}

export default BylineText