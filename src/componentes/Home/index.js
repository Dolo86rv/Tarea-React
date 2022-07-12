import React from 'react'
import {Seccion1, Seccion2 ,Arrow, Box} from './styles';
import fondo from '../../img/info-background.png'
import arrow_down from '../../img/arrow_down.svg'
import Indice from '../../img/indice.svg'
import Indice2 from '../../img/indice2.svg'
import Indice3 from '../../img/indice3.svg'
import Indice4 from '../../img/indice4.svg'

export const Home = () => {
  
  return (
      <div className="bg-gray-200 pt-12 flex flex-col w-full ">
         <Seccion1>
            <img src={fondo} alt="Image background" className="object-fill"></img>
               <div className="absolute my-48 mx-60 p-4 text-center text-white">
                     <p className="flex text-4xl mb-6 pb-6 space-x-0 md:text-xl">Hospital Ashford, comprometidos con tu calidad de vida</p> 
                     <p className=" text-2xl leading-6 font-normal pt-4 space-x-0 md:text-lg">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
                  <Arrow>
                     <img src={arrow_down} alt='arrow' className=" ml-96 mt-36"></img>
                  </Arrow>
               </div>
            </Seccion1>
            <Seccion2>
               <p className="text-2xl block static z-auto mt-11 text-c_footer text-center font-normal sm:text-4xl">¡Saludos! ¿Cómo podríamos ayudarle?</p>
                  <div className="pt-14 pb-14 flex flex-wrap justify-center ">
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 h-72 w-72">
                         <div className="pt-12 pb-12 pl-12 items-center ">
                           <img src={Indice} alt='indice' width={20} height={20} ></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 w-72">
                      <div>
                           <img src={Indice2} alt='indice' width={20} height={20}></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 w-72">
                      <div>
                           <img src={Indice3} alt='indice' width={20} height={20}></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                      <div className="bg-gray-50 border border-solid border-gray-300 rounded shadow-lg px-4 py-2 m-2 w-72">
                      <div className="">
                           <img src={Indice4} alt='indice' width={20} height={20}></img>
                           <p>hola</p>
                           <p></p>
                         </div>
                      </div>
                  </div>
               </Seccion2>
           </div>
  )
}

