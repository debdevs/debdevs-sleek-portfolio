import React from 'react'
import './MainInfoContainer.css'
import TextsInfoBox from '../../atoms/TextsInfoBox/TextsInfoBox'
import SecondaryThemeButton from '../../atoms/SecondaryThemeButton/SecondaryThemeButton'
const MainInfoContainer = () => {
  return (
    <div className='main_info_container_parent'>
        <TextsInfoBox/>
        <SecondaryThemeButton/>



       
    </div>
  )
}

export default MainInfoContainer