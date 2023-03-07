import React from 'react'
import './HomeScrollButton.css'
import { AiFillStepForward } from 'react-icons/ai'

const HomeScrollButton = () => {
  return (
    <button className='home_scroll_button'>
        . <AiFillStepForward className='home_scroll_button_icon'/>.
    </button>
  )
}

export default HomeScrollButton