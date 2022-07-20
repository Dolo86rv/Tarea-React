import React from 'react'
import {Seccion1,Arrow, Box, Box1, Box2, Img} from './styles';
import fondo from '../../img/info-background.png'
import arrow_down from '../../img/arrow_down.svg'
import Indice from '../../img/indice.svg'
import Indice2 from '../../img/indice2.svg'
import Indice3 from '../../img/indice3.svg'
import Indice4 from '../../img/indice4.svg'
import Interest from '../../img/interest.png'
import Servicios from '../../img/servicios.svg'
import { HashLink as Link } from 'react-router-hash-link';

export const Home = () => {
  
  return (
      <div className="bg-gray-200 pt-12 flex flex-col w-full ">
         <Seccion1>
            <img src={fondo} alt="Image background" className="object-fill"></img>
               <div className="absolute my-48 mx-60 p-4 text-center text-white">
                     <p className="flex text-4xl mb-6 pb-6 space-x-0">Hospital Ashford, comprometidos con tu calidad de vida</p> 
                     <p className=" text-2xl leading-6 font-normal pt-4 space-x-0">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
                  <Arrow>
                     <img src={arrow_down} alt='arrow' className="ml-96 mt-36"></img>
                  </Arrow>
               </div>
            </Seccion1>
            <div className="w-full mt-16">
               <p className="text-2xl block static z-auto mt-11 text-c_footer text-center font-normal sm:text-4xl">¡Saludos! ¿Cómo podríamos ayudarle?</p>
                  <div className="flex flex-wrap min-h-full justify-center items-stretch py-12 px-20">
                      <Box2>
                           <img className="ml-32" src={Indice} alt='indice-1' width={20} height={20} ></img>
                           <p className="my-6 text-lg text-c_footer font-normal not-italic text-center">¿Necesitas estar ingresado para utilizar los servicios del hospital?</p>
                           <p className=" mb-4 mt-0 text-sm text-c_box items-center font-normal not-italic text-center">Nuestros servicios - incluyendo laboratorios, centro de imágenes, cuidado de heridas - están disponibles para el público en general.</p>
                      </Box2>
                      <Box2>
                           <img className="ml-32" src={Indice2} alt='indice-2' width={20} height={20}></img>
                           <p className="my-6 text-lg text-c_footer font-normal not-italic text-center">¿Cómo hacer citas con nuestros médicos?</p>
                           <p className=" mb-4 mt-0 text-sm text-c_box items-center font-normal not-italic text-center">Citas con nuestra facultad médica se hacen a través de sus oficinas, favor referirse al directorio médico para información de contacto.</p>
                     </Box2>
                      <Box2>
                           <img className="ml-32" src={Indice3} alt='indice-3' width={20} height={20}></img>
                           <p className="my-6 text-lg text-c_footer font-normal not-italic text-center">¿Qué constituye una emergencia médica?</p>
                           <p className=" mb-4 mt-0 text-sm text-c_box items-center font-normal not-italic text-center">Se considera una emergencia toda condición que podría resultar en daño a las funciones corporales, a un órgano corporal o a la salud del individuo.</p>
                     </Box2>
                     <Box2>
                           <img className="ml-32" src={Indice4} alt='indice-4' width={20} height={20}></img>
                           <p className="my-6 text-lg text-c_footer font-normal not-italic text-center">¿Qué tengo que saber antes de mi operación?</p>
                           <p className=" mb-4 mt-0 text-sm text-c_box items-center font-normal not-italic text-center">Visite la sección de “Admisiones” donde encontrará toda información, en adición a un listado detallado de los requisitos necesarios antes de ser admitido.</p>
                     </Box2>
                  </div>
             </div>
            <div className="w-full bg-ashford">
               <div className="flex flex-row flex-wrap justify-center min-h-full">
                  <Img>
                     <img src={Interest} width={514} height={560}></img>
                  </Img>
                  <div className="flex flex-col flex-1 mt-14 ml-12 mr-28  min-h-full">
                     <p className="font-bold space-x-5 text-s text-turquee uppercase">Datos de interés</p>
                     <p className="font-normal not-italic text-5xl text-bg_gray2 my-5">¡En el Hospital Ashford estamos para servirles!</p>
                     <p className="font-normal not-italic text-1xl text-turquee mb-12">Nuestra misión es proveer servicios médicos hospitalarios de excelencia con calor humano con empatía y compasión</p>
                     <div className="grid grid-cols-2 gap-5">
                        <div>
                           <div>
                              <p className=" text-white font-normal text-5xl">118</p>
                           </div>
                           <div>
                              <p className=" text-white font-medium text-base mb-0 mt-2">Años de servicio a la comunidad</p>
                           </div>
                        </div>
                        <div>
                           <div>
                              <p className=" text-white font-normal text-5xl">300</p>
                           </div>
                           <div>
                              <p className=" text-white font-medium text-base mb-0 mt-2">Vidas de bebés salvadas al año en  nuestro NICU Nivel 3</p>
                           </div>
                        </div>
                        <div>
                           <div>
                              <p className=" text-white font-normal text-5xl">#1</p>
                           </div>
                           <div>
                              <p className=" text-white font-medium text-base mb-0 mt-2">La clínica colorrectal más completa de Puerto Rico</p>
                           </div>
                        </div>
                        <div>
                           <div>
                              <p className=" text-white font-normal text-5xl">#1</p>
                           </div>
                           <div>
                              <p className=" text-white font-medium text-base mb-0 mt-2">#1 en partos en Hospital Privado en Puerto Rico</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col lg:flex-row items-center w-full min-h-full">
                  <div className=""></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
            <div className=" max-w-full bg-white">
               <div className="flex flex-col ml-auto mr-auto">
                  <p className="text-center text-c_footer font-normal text-xl not-italic py-4">Especialidades</p>
                  <div className="flex flex-wrap flex-col justify-center items-center md:flex-row min-h-full">
                     <Link className="block w-48 h-36 pb-3" to="/especialidades#obstetricia_ginecología_ginecología_oncológica">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">OB-G</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">OB-Gyn/Ginecología</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pb-2" to="/especialidades#unidad_de_cuidado_intensivo_neonatal">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">NICU</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Unidad NICU</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pb-2" to="/especialidades#cirugía_colorrectal">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Cc</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Cirugía colorrectal</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pb-2" to="/especialidades#ortopedia">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Or</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Ortopedia</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pb-2" to="/especialidades#medicina_deportiva">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">FdR</p>
                           </Box1>
                           <div className="block h-5 w-50 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Medicina física, deportiva y rehabilitación</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pb-2" to="/especialidades#otorrinolaringología">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Ot</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Otorrinolaringología</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pt-3" to="/especialidades#endocrinología">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">En</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Endocrinología</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pt-3" to="/especialidades#cirugia_general">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Cg</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Cirugía general</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pt-3" to="/especialidades#cirugia_oncologica">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Co</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Cirugía oncológica</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pt-3" to="/especialidades#pediatria">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Pe</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Pediatría</p>
                           </div>
                     </Link>
                     <Link className="block w-48 h-36 pt-3" to="/especialidades#urologia">
                           <Box1>
                              <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">Ur</p>
                           </Box1>
                           <div className="block h-5 w-44 ml-0">
                              <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">Urología</p>
                           </div>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="w-full bg-bg_gray2">
               <p className="text-center text-c_footer font-normal text-xl not-italic py-14">Servicios</p>
               <div className="flex flex-wrap justify-center items-center min-h-full pb-28">
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#radiologia_centro_de_imagenes" className="font-normal text-lg m-0 pl-5 text-left not-italic">Radiología/Centro de imágenes</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#cuidado_de_heridas" className="font-normal text-lg m-0 pl-5 text-left not-italic">Cuidado de heridas</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#laboratorio" className="font-normal text-lg m-0 pl-5 text-left not-italic">Laboratorio</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#centro_de_medicina_física_y_rehabilitación" className="font-normal text-lg m-0 pl-5 text-left not-italic">Centro de medicina física y rehabilitación</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#ashford_prenatal" className="font-normal text-lg m-0 pl-5 text-left not-italic">Ashford prenatal</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#centro_de_vacunacion" className="font-normal text-lg m-0 pl-5 text-left not-italic">Centro de vacunación</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#medicina-nuclear_centro-de-cardiologia" className="font-normal text-lg m-0 pl-5 text-left not-italic">Clínica de cardiología</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#centro_de_la_mujer" className="font-normal text-lg m-0 pl-5 text-left not-italic">Centro de la mujer</Link>
                  </Box>
                  <Box>
                     <img src={Servicios} width={25} height={25} alt="servicios"></img>
                     <Link to="/servicios#farmacia_de_la_comunidad" className="font-normal text-lg m-0 pl-5 text-left not-italic">Farmacia de la comunidad</Link>
                  </Box>
               </div>
            </div>
           </div>
  )
}

