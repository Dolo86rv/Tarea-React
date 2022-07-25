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
        <div className="items-end border border-turquee rounded-sm p-2"> 
           <form role="search" action="/resultados" method="" className="flex items-center border-0">
              <Icons>
                 <img className="cursor-pointer transform" src= {lupa} width="13" height="13" alt='search'></img>
              </Icons>
              <div className="flex">
                 <input type="text" placeholder="Buscar" name="s" className="text-sm p-1"></input>
                 <Icons>
                    <svg onClick={handleClickSearch} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#01426A" className="transform cursor-pointer h-3 my-2"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg> 
                 </Icons>
                 {!isShow && <ButtonSearch state={isShow} open={handleClickSearch} />}
                </div>
           </form>
        </div>
    ) : (
        <ButtonSearch state={isShow} open={handleClickSearch} />
        )
}
