import React from 'react'
import './HomeHero.css'
import MainHeader from '../../UI/atoms/MainHeader/MainHeader'
import NavigationButton from '../../UI/atoms/NavigationButton/NavigationButton'
import MainInfoContainer from '../../UI/molecules/MainInfoContainer/MainInfoContainer'
const HomeHero = () => {
  return (
    <div className='home_hero_section'>
       <div className='home_hero_contents'>

        <MainInfoContainer/>
       
       </div>
    </div>
  )
}

export default HomeHero