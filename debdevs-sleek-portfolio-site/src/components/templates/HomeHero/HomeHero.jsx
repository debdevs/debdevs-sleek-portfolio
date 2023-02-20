import React from 'react'
import './HomeHero.css'
import MainHeader from '../../UI/atoms/MainHeader/MainHeader'
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