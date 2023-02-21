import React from 'react'
import './MainThemeButton.css'
import {AiOutlineGithub} from 'react-icons/ai'
const MainThemeButton = ({text = 'View',icon = ''}) => {
  return (
    <button className='main_theme_button'>{text}{icon}</button>
  )
}

export default MainThemeButton