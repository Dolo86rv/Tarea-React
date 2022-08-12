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
         <form role="search" action="/resultados" method="" className="flex border-0 border-solid border-turquee box-border mx-10px my-0 p-0 w-full h-fit">
                <Icons>
                  <img className="cursor-pointer h-3 my-2 pr-5" src={lupa} width={18} height={18} alt='search'></img>
                </Icons>
                <input type="text" placeholder="Buscar" name="s" className="text-sm"></input>
                 <Icons>
                    <svg onClick={handleClickSearch} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#01426A" className="cursor-pointer h-3 my-2"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg> 
                 </Icons>
                 {!isShow && <ButtonSearch state={isShow} open={handleClickSearch} />}
         </form>
    ) : (
        <ButtonSearch state={isShow} open={handleClickSearch} />
        )
}


/*<img className="cursor-pointer h-3 my-2" src={lupa} width={10} height={10} alt='search'></img>*/