import React, { useState } from 'react'
import logo from '../../img/logo-1.svg'
import { Menuderecho } from '../Menuderecho'
import { Submenu } from '../Submenu'


export const Header = () => {
  
  const[IsOver, setIsOver]=useState(true)
  const cursorEncima=()=>{
    setIsOver(!IsOver);
  }

  return (
      <div className="flex pt-4 pb-4 bg-white pl-20 pr-20">
        <div className="flex-none">
           <img src= {logo} alt='logo' width={104} height={40}></img>
        </div>
        <div className="flex-auto pt-1">
          <Menuderecho />
        </div>
      </div>
  )
}
