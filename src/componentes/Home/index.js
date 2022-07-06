import React from 'react'
import {Container, Seccion1, Seccion2, Arrow, Box} from './styles';
import fondo from '../../img/info-background.png'
import arrow_down from '../../img/arrow_down.svg'

export const Home = () => {
  
  return (
   <>
  <Seccion1>
     <img src={fondo} alt="Image background" className="absolute"></img>
       <div className="absolute my-48 mx-60 p-4 text-center text-white">
             <p className=" text-4xl mb-6 pb-6 space-x-0">Hospital Ashford, comprometidos con tu calidad de vida</p> 
             <p className=" text-md leading-6 font-normal pt-4 space-x-0">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
           <Arrow>
            <img src={arrow_down} alt='arrow' className=" ml-96 mt-56"></img>
           </Arrow>
        </div>
    </Seccion1>
       
      <Seccion2>
         <div className=" pt-96"> 
            <p className="text-4xl">¡Saludos! ¿Cómo podríamos ayudarle?</p>
            <Box>
               <div>
                  <img></img>
                  <p></p>
                  <p></p>
               </div>
            </Box>
            <Box>
               <div>
                  <img></img>
                  <p></p>
                  <p></p>
               </div>
            </Box>
            <Box>
               <div>
                  <img></img>
                  <p></p>
                  <p></p>
               </div>
            </Box>
         </div>
    </Seccion2>  
    </>
  )
}

