import React from 'react'
import './HomeHero.css'
import MainHeader from '../../UI/atoms/MainHeader/MainHeader'
import NavigationButton from '../../UI/atoms/NavigationButton/NavigationButton'
import MainInfoContainer from '../../UI/molecules/MainInfoContainer/MainInfoContainer'
import ProjectCard from '../../UI/molecules/ProjectCard/ProjectCard'
const HomeHero = () => {
  return (
    <div className='home_hero_section'>
       <div className='home_hero_contents'>
        <div className='home_hero_left_items'>
        <ProjectCard/>
        </div>
        <div className='home_hero_right_items'>
        <MainInfoContainer/>
        </div>   
       </div>
    </div>
  )
}

export default HomeHero