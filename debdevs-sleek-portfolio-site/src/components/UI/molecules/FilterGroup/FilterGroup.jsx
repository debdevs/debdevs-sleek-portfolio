import React from 'react'
import './FilterGroup.css'
import {AiOutlineFilterDescending, AiOutlineFilter} from 'react-icons/ai/'
import { useState } from 'react'
import TertiaryThemeButton from '../../atoms/TertiaryThemeButton/TertiaryThemeButton'
const FilterGroup = () => {
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
    <div className='filter_group_parent'>
    <TertiaryThemeButton text={'Filter By: '+ option} icon ={<AiOutlineFilter className='button_icon'/>} button_function={openSelection}/>
    {open == true?     
    
    <div className='filter_button_modal'>

    <div>
      <input type="checkbox" id="sausage" name="topping" value="sausage"/>
      <label for="sausage">Web Development</label>
    </div>
    
    <div>
      <input type="checkbox" id="sausage" name="topping" value="sausage"/>
      <label for="sausage">Video Editing</label>
    </div>
    
    <div>
      <input type="checkbox" id="design" name="video" value="design"/>
      <label for="design">Design</label>
    </div>
    
    </div>
    
    : 
    null
    }

    </div>
  )
}

export default FilterGroup