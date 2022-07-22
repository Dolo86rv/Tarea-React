import React from 'react'
import { Icons } from './styles'
import lupa from '../../img/lupa.svg' 

export const ButtonSearch = ({open, state}) => {
    
  return !state ? (
          <button onClick={open} className="bg-transparent" aria-label="Search">
            <Icons className="">
               <img className="ml-10 mt-2" src= {lupa} width="18" height="18" alt='search'></img>
            </Icons>
          </button>
    ):(
          <>
          </>
    )
}
