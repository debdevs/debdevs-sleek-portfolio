import React from 'react'
import './NavigationButton.css'
import {AiOutlineGithub} from 'react-icons/ai'
const NavigationButton = ({text = 'Home',icon = ''}) => {
  return (
    <button className='navigation_button'>{text}{icon}</button>
  )
}

export default NavigationButton