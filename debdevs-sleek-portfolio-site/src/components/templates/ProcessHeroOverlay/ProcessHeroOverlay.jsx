import React from 'react'
import './ProcessHeroOverlay.css'
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';
import {BsBoxArrowUpRight} from 'react-icons/bs'
import ExitButton from '../../UI/atoms/ExitButton/ExitButton';
const ProcessHeroOverlay = ({button_function}) => {



  return (

    <motion.div
    
    className="process_hero_parent"
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
    <div className='process_hero_contents_parent'>
      
    <div className='process_hero_contents_top_items'>


    </div>
    
 

</div>



  </motion.div>   

  )
}

export default ProcessHeroOverlay