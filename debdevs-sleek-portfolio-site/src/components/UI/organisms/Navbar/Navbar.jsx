import React from 'react'
import './Navbar.css'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'
import {AiOutlineGithub} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='nav_bar'>
        <div className='nav_bar_contents'>
          <a href = "/">
          <NavigationButton text='Home'/>
          </a>
          <a href = "https://github.com/debdevs">
          <NavigationButton text = 'Github' icon = {<AiOutlineGithub className = 'button_icon'/>} />
          </a>
        
        <NavigationButton text = 'Contact'/>
        </div>
    </div>
  )
}

export default Navbar