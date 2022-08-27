import React from 'react'
import lupa from '../../img/lupa.svg' 

export const ButtonSearch = ({open, state}) => {
    
  return !state ? (
    <button type="button" onClick={open} className="flex bg-transparent mx-1 px-3 py-1 items-center hover:scale-100" aria-label="Search" >
      <img className="w-7 h-7 lg:w-18px lg:h-18px align-middle bg-center bg-cover" src= {lupa} alt='search'></img>          
    </button>
    ):(
          <></>
    )
}
/*hover:bg-blue-300 transition-colors duration-200 delay-200  text-white py-4 px-8 rounded text-xl*/