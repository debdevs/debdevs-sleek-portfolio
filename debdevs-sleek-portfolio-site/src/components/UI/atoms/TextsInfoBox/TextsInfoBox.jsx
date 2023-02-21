import React from 'react'
import './TextsInfoBox.css'
import MainHeader from '../MainHeader/MainHeader'
import BylineText from '../BylineText/BylineText'
import ParagraphText from '../ParagraphText/ParagraphText'
const TextsInfoBox = () => {
  return (
    <div className='texts_info_box_parent'>
        <MainHeader/>
        <BylineText/>
        <ParagraphText/>
        
    </div>
  )
}

export default TextsInfoBox