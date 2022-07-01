import React from 'react'
import { Imagen } from './styles';

export const Contenido = () => {
  const h_imagen={height:'549px'};

  return (
    <div className="pt-12 w-full">
      <Imagen>
      <div className=" bg-imagen_fondo" style={h_imagen}>
        <section className=" mt-0 ml-56 mr-40 text-center pt-4 text-white">
          <div className=" py-4">
              <p className=" text-5xl pb-6 text-center leading-normal space-x-0">Hospital Ashford, comprometidos con tu calidad de vida</p>  
            </div>
            <div>
              <p className="text  pt-6 font-Untitled-Sans text-2xl leading-normal space-x-0">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
          </div>
        </section>
      </div>
     </Imagen>
   </div>
  )
}

