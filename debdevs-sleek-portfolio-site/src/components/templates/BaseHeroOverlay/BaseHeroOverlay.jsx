import React from 'react'
import './BaseHeroOverlay.css'
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';
import {BsBoxArrowUpRight} from 'react-icons/bs'
import ExitButton from '../../UI/atoms/ExitButton/ExitButton';
const BaseHeroOverlay = ({button_function}) => {



  return (

    <motion.div
    
    className="base_hero_parent"
    initial={{  translateY: 10, scaleX: 1, opacity: 0 }}
    animate={{ translateY: 0, scaleX: 1, opacity: 1 }}
    exit={{
      scaleX: 0.97,
      translateY: 50,
      opacity: 0,
      transition: { type: 'linear', stiffness: 50 },
    }}
    transition={{ duration: .3 }}
  >
    <ExitButton button_function={button_function}/>

<div className='base_hero_contents_parent' onClick={() => window.location = 'mailto:debdevs97@gmail.com'}>
    <div className='base_hero_contents_top_items'>
    <span>Email:</span> debdevs97@gmail.com
    <AiOutlineMail className='button_icon'/>
    </div>
    
    <BsBoxArrowUpRight className='center_icon'/>
    <div className='rounded_line'/>
</div>



  </motion.div>   

  )
}

export default BaseHeroOverlay