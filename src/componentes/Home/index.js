import React from 'react'
import {Container, Seccion1, Arrow} from './styles';
import fondo from '../../img/info-background.png'
import arrow_down from '../../img/arrow_down.svg'

export const Home = () => {
  
  return (
  <Container>
    <Seccion1>
       <img src={fondo} alt="Image background" width="100%" className="absolute"></img>
       <div className="absolute my-40 mx-60 p-4 text-center text-white">
          <div className="block">
             <p className=" text-4xl mb-6 space-x-0">Hospital Ashford, comprometidos con tu calidad de vida</p> 
          </div>
          <div className="block">
             <p className=" text-lg leading-6 font-normal space-x-0">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
           </div>
        </div> 
        <Arrow>
            <img src={arrow_down} className="overflow-hidden" width="25px" height="25px" alt='arrow'  type='img/svg'></img>
        </Arrow>
    </Seccion1>   
  </Container>
  )
}

