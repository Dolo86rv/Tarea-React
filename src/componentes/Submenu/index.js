import React from 'react'
import { Link } from '../Menuderecho/styles'
import {LinkServicio, Container} from './styles'

export const Submenu = () => {
  
  return (
      <Container>
         <div className=" flex flex-row mt-6 mb-16 sm:mb-0 border-t-0 bg-gray-300">
            <div className="container mx-auto w-full flex flex-wrap">
              <div className="px-4 w-full sm:w-1/2 lg:w-1/4 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div className="pb-6 pt-6  font-family1 text-3xl leading-10 space-x-0">
                        <h3 className=" text-gray-700">Servicios y Especialidades</h3>
                    </div>
                    <p>En el Hospital Ashford ofrecemos unagran diversidad de servicios</p>
              </div>
              <div className="px-4 w-full sm:w-1/2 lg:w-1/4 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <ul className="justify-between flex flex-wrap">
                  <div className="pt-7 pb-4">
                     <LinkServicio>
                        <a href='/' className="mx-8 text-lg"> Servicios</a>
                      </LinkServicio>
                  </div>
                  <li className="justify-between">
                     <Link>
                      <a href='/'className="mx-8">Radiología/Centro de Imágenes</a>
                     </Link>
                  </li>
                  <li>
                     <Link>
                      <a href='/'className="mx-8">Cuidado de heridas</a>
                     </Link>
                  </li>
                  <li>
                      <Link>
                      <a href='/' className="mx-8">Medicina Nuclear y centro de cardiología</a>
                     </Link>
                  </li>
                  <li>
                  <Link>
                      <a href='/' className="mx-8">Laboratorio</a>
                      </Link>
                  </li>
                  <li>
                  <Link>
                     <a href='/' className="mx-8">Centro de Medicina física y rehbilitación</a>
                     </Link>
                  </li>
                  <li>
                  <Link>
                     <a href='/' className="mx-8">Ashford prenatal</a>
                     </Link>
                  </li>
                  <li>
                  <Link>
                     <a href='/' className="mx-8">Centro de la mujer</a>
                     </Link>
                  </li>
                  <li>
                  <Link>
                     <a href='/' className="mx-8">Centro de vacunación</a>
                     </Link>
                  </li>
                  <li>
                  <Link>
                  <a href='/' className="mx-8">Farmacia de la comunidad</a>
                  </Link>
                  </li>                 
                </ul>
              </div>
            </div>
         </div>
        </Container>
    
      
   )
}


         