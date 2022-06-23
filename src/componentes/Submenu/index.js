import React from 'react'
import {Tema, Texto, Megamenu} from './styles'

export const Submenu = () => {
  return (
       <Megamenu>
        <div className=" flex flex-row mb-16 sm:mb-0">
           <div className="container mx-auto w-full flex flex-wrap justify-between">
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                 <div class="flex items-center">
                    <Tema>
                     <p>Servicios y Especialidades</p>
                    </Tema>
                  </div>
                  <Texto>
                    <p>En el Hospital Ashford ofrecemos unagran diversidad de servicios</p>
                  </Texto>
              </ul>
            </div>
        </div>
      </Megamenu>
   )
}


         