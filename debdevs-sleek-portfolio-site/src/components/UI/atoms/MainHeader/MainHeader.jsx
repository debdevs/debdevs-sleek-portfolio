import React from 'react'
import './MainHeader.css'
const MainHeader = ({text = "Deborah Daniels"}) => {
  return (
    <h1 className='main_header'>
        {text}
    </h1>
  )
}

export default MainHeader