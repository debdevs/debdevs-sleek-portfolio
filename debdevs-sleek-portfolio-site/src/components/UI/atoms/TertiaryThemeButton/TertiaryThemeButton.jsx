import React from 'react'
import './TertiaryThemeButton.css'
import {AiOutlinePlaySquare} from 'react-icons/ai'
const TertiaryThemeButton = ({text = 'Video Resume',icon = <AiOutlinePlaySquare className='button_icon'/>, button_function = null}) => {
  return (
    <button className='tertiary_theme_button' onClick={()=>{button_function()}}>
      {text}
      {icon}
    </button>
  )
}

export default TertiaryThemeButton