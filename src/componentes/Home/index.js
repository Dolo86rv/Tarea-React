import React from 'react'
import {Arrow, Box, Box1, Box2, Img} from './styles';
import fondo from '../../img/info-background.png'
import arrow_down from '../../img/arrow_down.svg'
import Indice from '../../img/indice.svg'
import Indice2 from '../../img/indice2.svg'
import Indice3 from '../../img/indice3.svg'
import Indice4 from '../../img/indice4.svg'
import Interest from '../../img/interest.png'
import Servicios from '../../img/servicios.svg'
import { HashLink as Link } from 'react-router-hash-link';

   const Seccion1=()=>{
      return(
            <div className="flex mr-auto min-w-full">
               <img src={fondo} alt="Image background" className="object-fill"></img>
                  <div className="absolute my-48 mx-60 p-4 text-center text-white">
                        <p className="flex text-4xl mb-6 pb-6 space-x-0">Hospital Ashford, comprometidos con tu calidad de vida</p> 
                        <p className=" text-2xl leading-6 font-normal pt-4 space-x-0">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
                     <Arrow>
                        <img src={arrow_down} alt='arrow' className="ml-96 mt-36"></img>
                     </Arrow>
                  </div>
            </div>
      )
   }

   const list_seccion2=[
      {
         id:'ingreso',
         title:'¿Necesitas estar ingresado para utilizar los servicios del hospital?',
         description:'Nuestros servicios - incluyendo laboratorios, centro de imágenes, cuidado de heridas - están disponibles para el público en general.',
         img:Indice,
         alt:'Indice-1'
      },
      {
         id:'citas',
         title:'¿Cómo hacer citas con nuestros médicos?',
         description:'Citas con nuestra facultad médica se hacen a través de sus oficinas, favor referirse al directorio médico para información de contacto.',
         img:Indice2,
         alt:'Indice-2'
      },
      {
         id:'emergencia',
         title:'¿Qué constituye una emergencia médica?',
         description:'Se considera una emergencia toda condición que podría resultar en daño a las funciones corporales, a un órgano corporal o a la salud del individuo.',
         img:Indice3,
         alt:'Indice-3'
      },
      {
         id:'operacion',
         title:'¿Qué tengo que saber antes de mi operación?',
         description:'Visite la sección de “Admisiones” donde encontrará toda información, en adición a un listado detallado de los requisitos necesarios antes de ser admitido.',
         img:Indice4,
         alt:'Indice-4'
      },
   ]

   const Seccion2=()=>{
      return(
         <div className="w-full mt-16">
                  <p className="text-2xl block static z-auto mt-11 text-c_footer text-center font-normal sm:text-4xl">¡Saludos! ¿Cómo podríamos ayudarle?</p>
            <div className="flex flex-wrap min-h-full justify-center items-stretch py-12 px-20">
               {list_seccion2.map((item)=>(
                  <Box2>
                     <img className="ml-32" src={item.img} alt={item.alt} width={20} height={20} ></img>
                     <p className="my-6 text-lg text-c_footer font-normal not-italic text-center">{item.title}</p>
                     <p className=" mb-4 mt-0 text-sm text-c_box items-center font-normal not-italic text-center">{item.description}</p>
                  </Box2> 
               ))}  
         </div>
         </div>  
      )}
   
      const list_datos_interes=[
         {
            id:'118',
            estadisticas:'118',
            description:'Años de servicio a la comunidad'
         }, 
         {
            id:'300',
            estadisticas:'300',
            description:'Vidas de bebés salvadas al año en  nuestro NICU Nivel 3'
         }, 
         {
            id:'#1',
            estadisticas:'#1',
            description:'La clínica colorrectal más completa de Puerto Rico'
         }, 
         {
            id:'#1_1',
            estadisticas:'#1',
            description:'#1 en partos en Hospital Privado en Puerto Rico'
         }, 
       ]
      
   const Seccion3=()=>{
      return(
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
                        {list_datos_interes.map((item)=>(
                          <div key={item.id}>
                              <div>
                                 <p className=" text-white font-normal text-5xl">{item.estadisticas}</p>
                              </div>
                              <div>
                                 <p className=" text-white font-medium text-base mb-0 mt-2">{item.description}</p>
                              </div>
                          </div>
                        ))}
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
      )
   }   

   const list_especialidades=[
      {
         id:'OB-G',
         siglas:'OB-G',
         description:'OB-Gyn/Ginecología',
         href:'/especialidades#obstetricia_ginecología_ginecología_oncológica'
      },
      {
         id:'NICU',
         siglas:'NICU',
         description:'Unidad NICU',
         href:'/especialidades#unidad_de_cuidado_intensivo_neonatal'
      },
      {
         id:'Cc',
         siglas:'Cc',
         description:'Cirugía colorrectal',
         href:'/especialidades#cirugía_colorrectal'
      },
      {
         id:'Or',
         siglas:'Or',
         description:'Ortopedia',
         href:'/especialidades#ortopedia'
      },
      {
         id:'FdR',
         siglas:'FdR',
         description:'Medicina física, deportiva y rehabilitación',
         href:'/especialidades#medicina_deportiva'
      },
      {
         id:'Ot',
         siglas:'Ot',
         description:'Otorrinolaringología',
         href:'/especialidades#otorrinolaringología'
      },
      {
         id:'En',
         siglas:'En',
         description:'Endocrinología',
         href:'/especialidades#endocrinología'
      },
      {
         id:'Cg',
         siglas:'Cg',
         description:'Cirugía General',
         href:'/especialidades#cirugia_general'
      },
      {
         id:'Co',
         siglas:'Co',
         description:'Cirugía oncológica',
         href:'/especialidades#cirugia_oncologica'
      },
      {
         id:'Pe',
         siglas:'Pe',
         description:'Pediatría',
         href:'/especialidades#pediatria'
      },
      {
         id:'Ur',
         siglas:'Ur',
         description:'Urología',
         href:'/especialidades#urologia'
      }
   ]

   const Seccion4=()=>{
      return(
         <div className=" max-w-full bg-white">
            <div className="flex flex-col ml-auto mr-auto">
               <p className="text-center text-c_footer font-normal text-xl not-italic py-16">Especialidades</p>
               <div className="flex flex-wrap flex-col justify-center mx-2 items-center md:flex-row min-h-full">
                  {list_especialidades.map((item)=>(
                    <Link key={item.id} className="block w-48 h-36 pb-3" to={item.href}>
                        <Box1>
                           <p className="not-italic font-normal leading-6 text-center text-bg_gray2 m-0">{item.siglas}</p>
                        </Box1>
                        <div className="block h-5 w-44 ml-0">
                           <p className="not-italic font-normal text-c_footer py-4 text-center text-sm">{item.description}</p>
                        </div>
                    </Link>
                  ))}
               </div>
            </div>
         </div>
      )}
      
   const list_servicios=[
         {
            id:'Centro de imagenes',
            description:'Radiología/Centro de imágenes',
            href:'/servicios#radiologia_centro_de_imagenes'
         },
         {
            id:'Cuidado_de_ heridas',
            description:'Cuidado de heridas',
            href:'/servicios#cuidado_de_heridas'
         },
         {
            id:'laboratorio',
            description:'Laboratorio',
            href:'/servicios#laboratorio'
         },
         {
            id:'rehabilitación',
            description:'Centro de medicina física y rehabilitación',
            href:'/servicios#centro_de_medicina_física_y_rehabilitación'
         },
         {
            id:'ashford_prenatal',
            description:'Ashford prenatal',
            href:'/servicios#ashford_prenatal'
         },
         {
            id:'centro_vacunacion',
            description:'Centro de vacunación',
            href:'/servicios#centro_de_vacunacion'
         },
         {
            id:'clinica_cardiologia',
            description:'Clínica de cardiología',
            href:'/servicios#medicina-nuclear_centro-de-cardiologia'
         },
         {
            id:'centro_mujer',
            description:'Centro de la mujer',
            href:'/servicios#centro_de_la_mujer'
         },
         {
            id:'farmacia_comunidad',
            description:'Farmacia de la comunidad',
            href:'/servicios#farmacia_de_la_comunidad'
         },
   ]
   
   const Seccion5=()=>{
         return(
            <div className="w-full bg-bg_gray2">
               <p className="text-center text-c_footer font-normal text-xl not-italic py-14">Servicios</p>
               <div className="flex flex-wrap justify-center items-center min-h-full pb-28">
                  {list_servicios.map((item)=>(
                     <Box key={item.id}>
                        <img src={Servicios} width={25} height={25} alt="servicios"></img>
                        <Link to={item.href} className="font-normal text-lg m-0 pl-5 text-left not-italic">{item.description}</Link>
                     </Box>
                  ))}
               </div>
            </div>
      )}

export const Home = () => {
  
  return (
      <div className="bg-gray-200 pt-12 flex flex-col w-full ">
            <Seccion1 />
            <Seccion2 />
            <Seccion3 />
            <Seccion4 />
            <Seccion5 />
         </div>
  )}

