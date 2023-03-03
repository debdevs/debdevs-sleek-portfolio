import React from 'react'
import './SecondaryThemeButton.css'
import {AiOutlineFileText} from 'react-icons/ai'
const SecondaryThemeButton = ({text = 'Resume',icon = <AiOutlineFileText className='button_icon'/>}) => {
  return (
    <button className='secondary_theme_button'>
      {text}
      {icon}
    </button>
  )
}

export default SecondaryThemeButton