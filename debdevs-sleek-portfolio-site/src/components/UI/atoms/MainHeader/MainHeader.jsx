import React from 'react'
import './MainHeader.css'
const MainHeader = ({text = "Deborah Daniels", margin_left = '-15px'}) => {
  return (
    <h1 className='main_header' style={{ marginLeft: margin_left }}>
        {text}
    </h1>
  )
}

export default MainHeader