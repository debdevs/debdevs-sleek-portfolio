import React from 'react'
import './AccentHeader.css'
const AccentHeader = ({text = "Deborah Daniels", margin_left = '-15px'}) => {
  return (
    <h1 className='accent_header' style={{ marginLeft: margin_left }}>
        {text}
    </h1>
  )
}

export default AccentHeader