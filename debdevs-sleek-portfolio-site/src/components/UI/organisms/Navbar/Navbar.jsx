import React from 'react'
import './Navbar.css'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'
import {AiOutlineGithub} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='nav_bar'>
        <div className='nav_bar_contents'>
        <NavigationButton text='Home'/>
        <NavigationButton text = 'Github' icon = {<AiOutlineGithub className = 'button_icon'/>} />
        <NavigationButton text = 'Contact'/>
        </div>
    </div>
  )
}

export default Navbar