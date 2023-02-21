import React from 'react'
import './HomeHero.css'
import MainHeader from '../../UI/atoms/MainHeader/MainHeader'
import NavigationButton from '../../UI/atoms/NavigationButton/NavigationButton'
const HomeHero = () => {
  return (
    <div className='home_hero_section'>
       <div className='home_hero_contents'>
        <MainHeader/>
       
       </div>
    </div>
  )
}

export default HomeHero