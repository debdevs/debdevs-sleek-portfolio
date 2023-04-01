import React from 'react'
import './SortGroup.css'
import {AiOutlineSortDescending, AiOutlineFilter} from 'react-icons/ai/'
import { useState } from 'react'
import TertiaryThemeButton from '../../atoms/TertiaryThemeButton/TertiaryThemeButton'
const SortGroup = () => {
    const [open, setOpen] = useState(false)
    const [option, setOption] = useState("Date")
    function makeSelection (option_text){
        setOption(option_text)
        setOpen(false)
    }
    function openSelection (){
        open == false ? setOpen(true) : setOpen(false)
        
    }
  return (
    <div className='sort_group_parent'>
    <TertiaryThemeButton text={'Sort By: '+ option} icon ={<AiOutlineSortDescending className='button_icon'/>} button_function={openSelection}/>
    {open == true?     
    
    <div className='sort_button_modal'>
        <option onClick={()=>{makeSelection("Most Recent")}} value="Date">Most Recent</option>
        <option onClick={()=>{makeSelection("Popularity")}} value="popularity">Most Popular</option>
    </div> 
    : 
    null
    }

    </div>
  )
}

export default SortGroup