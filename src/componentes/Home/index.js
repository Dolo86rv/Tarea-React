import React from 'react'
import {Seccion1, Seccion2 ,Arrow, Box} from './styles';
import fondo from '../../img/info-background.png'
import arrow_down from '../../img/arrow_down.svg'
import { Footer } from '../Footer';

export const Home = () => {
  
  return (
      <div className="bg-gray-200 flex flex-col w-full pt-12 max-h-full">
         <Seccion1>
            <img src={fondo} alt="Image background" className="object-fill"></img>
               <div className="absolute my-48 mx-60 p-4 text-center text-white">
                     <p className=" text-4xl mb-6 pb-6 space-x-0">Hospital Ashford, comprometidos con tu calidad de vida</p> 
                     <p className=" text-md leading-6 font-normal pt-4 space-x-0">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
                  <Arrow>
                     <img src={arrow_down} alt='arrow' className=" ml-96 mt-36"></img>
                  </Arrow>
               </div>
            </Seccion1>
            <Seccion2>
               <p className=" text-4xl block static z-auto mt-11 text-c_footer text-center font-normal">¡Saludos! ¿Cómo podríamos ayudarle?</p>
                  <div className=" pt-14 pb-14 flex flex-wrap justify-center ">
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 h-80 w-80">
                         <div>
                           <img></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 w-80">
                      <div>
                           <img></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 w-80">
                      <div>
                           <img></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 w-80">
                      <div>
                           <img></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                  </div>
               </Seccion2>
           </div>     
                      
  )
}

