import React from 'react'
import { Icons } from './styles'
import lupa from '../../img/lupa.svg' 
import { FormSearch } from './FormSearch'

export const ButtonSearch = ({open, state}) => {
    
  return !state ? (
          <button onClick={open} className="bg-transparent" aria-label="Search" >
            <Icons>
               <img className="ml-4 mt-1" src= {lupa} width="18" height="18" alt='search'></img>
            </Icons>
          </button>
    ):(
          <></>
    )
}
