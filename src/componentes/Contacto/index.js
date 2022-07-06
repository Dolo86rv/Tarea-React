import React from 'react'
import { Container, Seccion1, Seccion2, Panel } from './styles' 
import Icons1 from '../../img/icons1.svg'


export const Contacto = () => {
    
      return(
        <Container>
          <Seccion1>
            <p className=" block mt-0 text-sml tracking-widest font-bold text-turquee mb-4 uppercase justify-items-start">contacta</p>
            <p className="text-5xl tracking-normal text-c_text mb-0 mt-0 justify-items-start">Contacta con Ashford</p>
          </Seccion1>
          <Seccion2>
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="w-2">
                 <Panel>
                   <p> Hola</p>
                 </Panel>
               </div>
               <div className="w-2">
                   <Panel>
                      <div className="pl-0 pr-4 pt-0 pb-4">
                         <p className="font-medium text-xl text-turquee ml-4 mr-4 space-x-0">Información, ubicación y horarios</p>
                        <div className="mb-8 flex flex-col w-full">
                          <div className="overflow-hidden mt-4">
                            <div className="flex-col">
                              <div>
                                <img src={Icons1} alt="icons"></img>
                              </div>
                              <div>
                                <p>1451 Ave Dr Ashford, San Juan, 00907, Puerto Rico</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   </Panel>
               </div>
            </div>
          
          </Seccion2>
   
       </Container>
       )}
  
       
  
