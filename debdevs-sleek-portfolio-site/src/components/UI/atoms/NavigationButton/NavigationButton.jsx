import React from 'react'
import './NavigationButton.css'
import {AiOutlineGithub} from 'react-icons/ai'
const NavigationButton = ({icon = ''}) => {
  return (
    <button className='navigation_button'>Home{icon}</button>
  )
}

export default NavigationButton