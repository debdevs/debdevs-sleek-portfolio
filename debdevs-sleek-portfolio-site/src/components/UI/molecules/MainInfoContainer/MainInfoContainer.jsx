import React from 'react'
import './MainInfoContainer.css'
import TextsInfoBox from '../../atoms/TextsInfoBox/TextsInfoBox'
import SecondaryThemeButton from '../../atoms/SecondaryThemeButton/SecondaryThemeButton'
import TechStackArray from '../../atoms/TechStackArray/TechStackArray'
const MainInfoContainer = ({image_data}) => {
  return (
    <div className='main_info_container_parent'>
        <TextsInfoBox/>
        <TechStackArray image = {image_data}/>
        <SecondaryThemeButton/>



       
    </div>
  )
}

export default MainInfoContainer