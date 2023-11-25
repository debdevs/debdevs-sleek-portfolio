import React from 'react'
import './MainInfoContainer.css'
import TextsInfoBox from '../../atoms/TextsInfoBox/TextsInfoBox'
import SecondaryThemeButton from '../../atoms/SecondaryThemeButton/SecondaryThemeButton'
import TechStackArray from '../../atoms/TechStackArray/TechStackArray'
import TertiaryThemeButton from '../../atoms/TertiaryThemeButton/TertiaryThemeButton'
import { BsHdd, BsHddNetwork } from 'react-icons/bs'
const MainInfoContainer = ({image_data}) => {
  return (
    <div className='main_info_container_parent'>
        <TextsInfoBox/>
        <div className='info_tech_items'>
        <h3 className='project_display_accent_header'>Skills:</h3>
        <TechStackArray image = {image_data}/>
        </div>
       <div className='main_info_button_rows'>

       <SecondaryThemeButton/>
        <TertiaryThemeButton text='Work' icon ={<BsHddNetwork/>} />

       </div>




       
    </div>
  )
}

export default MainInfoContainer