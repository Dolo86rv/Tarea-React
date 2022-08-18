import React from 'react'
import { Icons } from './styles'
import lupa from '../../img/lupa.svg'  
import { useState } from 'react'
import { ButtonSearch } from './ButtonSearch'

export const FormSearch = ({show}) => {
    const [isShow, setIsShow]=useState(show)
    

    const handleClickSearch=()=>{
         setIsShow(!isShow)   
    }
    
    return isShow ? (
        <button className="px-3 py-1 mx-1 bg-transparent border border-solid border-turquee box-border rounded-sm text-lg transition-shadow duration-150 ease-in-out" label="Search">
          <form role="search" action="/resultados" method="" className="flex items-center mx-10px my-0 p-0 w-full h-fit">
          <img className="cursor-pointer" src={lupa} width={13} height={13} alt='search'></img>
          <div className="flex">
               <input type="text" placeholder="Buscar" name="s" className="text-sm"></input>
               <svg onClick={handleClickSearch} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#01426A" className="cursor-pointer my-3"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg> 
               {!isShow && <ButtonSearch state={isShow} open={handleClickSearch} />}
          </div>
          </form>
       </button>
    ) : (
        <ButtonSearch state={isShow} open={handleClickSearch} />
        )
}


/*<img className="cursor-pointer h-3 my-2" src={lupa} width={10} height={10} alt='search'></img>*/