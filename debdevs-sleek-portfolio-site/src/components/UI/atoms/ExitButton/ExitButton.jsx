import React from 'react'
import './ExitButton.css'
import { AiOutlineClose } from 'react-icons/ai'
const ExitButton = ({button_function = null, input = <AiOutlineClose className='exit_button_icon' />}) => {
  return (
    <button className='exit_button' onClick={button_function}>
        {input}
    </button>
  )
}

export default ExitButton