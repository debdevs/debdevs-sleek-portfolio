import React from 'react'
import './NavigationButton.css'
import {AiOutlineGithub} from 'react-icons/ai'
const NavigationButton = ({text = 'Home',icon = '', link = "", button_function = null}) => {
  return (
    
    <button onClick = {button_function} className='navigation_button'>{text}{icon}</button>
  )
}

export default NavigationButton