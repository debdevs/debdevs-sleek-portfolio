import React from 'react'
import './Navbar.css'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'
import {AiOutlineGithub, AiOutlineLinkedin, AiFillLinkedin} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='nav_bar'>
        <div className='nav_bar_contents'>
          <div className='nav_bar_left_items'>
          <a href = "/">
          <NavigationButton text='Home'/>
          </a>
          <a href = "https://github.com/debdevs">
          <NavigationButton text = 'Github' icon = {<AiOutlineGithub className = 'button_icon'/>} />
          
          </a>
        
        <NavigationButton text = 'Contact'/>

          </div>
          <div className='nav_bar_right_items'>
          <a href = "https://www.linkedin.com/in/deborah-daniels-34707a24b/">
          <NavigationButton text = 'LinkedIn' icon = {<AiOutlineLinkedin className = 'button_icon'/>} />
          </a>
   
          </div>

        </div>
    </div>
  )
}

export default Navbar