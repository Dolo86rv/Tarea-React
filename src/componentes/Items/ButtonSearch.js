import React from 'react'
import { Icons } from './styles'
import lupa from '../../img/lupa.svg' 

export const ButtonSearch = ({open, state}) => {
    
  return !state ? (
          <button onClick={open} className="bg-transparent" aria-label="Search" >
            <Icons>
               <img className="cursor-pointer lg:h-4 lg:w-4" src= {lupa} width={23} height={23} alt='search'></img>
            </Icons>
          </button>
    ):(
          <></>
    )
}
