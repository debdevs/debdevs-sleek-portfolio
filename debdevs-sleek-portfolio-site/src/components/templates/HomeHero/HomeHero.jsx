import React from 'react'
import './HomeHero.css'
import MainHeader from '../../UI/atoms/MainHeader/MainHeader'
import NavigationButton from '../../UI/atoms/NavigationButton/NavigationButton'
import MainInfoContainer from '../../UI/molecules/MainInfoContainer/MainInfoContainer'
import ProjectCard from '../../UI/molecules/ProjectCard/ProjectCard'
import ProjectCarousel from '../../UI/organisms/ProjectCarousel/ProjectCarousel'
import { HomeContext } from '../../../HomeContext'
import { useContext } from 'react'
import HomeScrollButton from '../../UI/atoms/HomeScrollButton/HomeScrollButton'
import MiniProjectCarousel from '../../UI/organisms/MiniProjectCarousel/MiniProjectCarousel'
const HomeHero = ({projects_data, tech_data}) => {
  const { isData, setIsData } = useContext(HomeContext);
  return (
    <div className='home_hero_section'>
       <div className='home_hero_contents'>
        <div className='home_hero_left_items'>
          {projects_data ? <ProjectCarousel projects_input={projects_data}/>: console.log("carousel not displayed")}
 
        </div>
        <div className='home_hero_center_items'>
          <div className='project_button'>
          <HomeScrollButton/>
          </div>

        </div>
        <div className='home_hero_right_items'>
        <MainInfoContainer image_data = {tech_data}/>
        <MiniProjectCarousel projects_input={projects_data}/>
        </div>   
       </div>
    </div>
  )
}

export default HomeHero