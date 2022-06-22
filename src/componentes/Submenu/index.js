import { Container } from 'postcss'
import React from 'react'
import {Encabezado, Texto} from './styles'

export const Submenu = () => {
  return (
        <div role="toggle" className="p-6 mb-16 sm:mb-0 shadow-xl bg-gray-400">
            <div className="container mx-auto w-full flex flex-wrap justify-between">
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <li>
                <Encabezado>
                <h3>Servicios y Especialidades</h3>
                </Encabezado>
                <Texto>
                <p>En el Hospital Ashford ofrecemos unagran diversidad de servicios</p>
                </Texto>
                </li>
               </ul>
             </div> 
        </div>
    
  )
}
