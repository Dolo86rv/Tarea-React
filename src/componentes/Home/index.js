import React from 'react'
import {Box, Box1, Box2, Box3} from './styles';
import fondo from '../../img/info-background.png'
import fondo2 from '../../img/info-background-small.png'
import arrow_down from '../../img/arrow_down.svg'
import Indice from '../../img/indice.svg'
import Indice2 from '../../img/indice2.svg'
import Indice3 from '../../img/indice3.svg'
import Indice4 from '../../img/indice4.svg'
import Interest from '../../img/interest.png'
import Servicios from '../../img/servicios.svg'
import Story1 from '../../img/story1.png'
import Story2 from '../../img/story2.jpg'
import Story3 from '../../img/story3.png'
import Story4 from '../../img/story4.png'
import { HashLink as Link } from 'react-router-hash-link';
import { Marquee } from '../Marquee';

   const Seccion1=()=>{
      return(
            <div className="flex flex-col justify-center items-center">
               <div className="2sm:hidden relative overflow-hidden">
                  <img src={fondo} alt="Image background" className="opacity-100 object-cover"></img>
               </div>
               <div className="1sm:hidden 1sm:h-114px relative overflow-hidden w-full h-full opacity-100">
                  <img src={fondo2} alt="Image background" className="object-cover w-full"></img>
               </div>
               <div className="flex flex-col justify-end px-4 absolute max-w-9xl 1xl:max-w-4xl 1xl:p-0 1sm:justify-center 1sm:items-center">
                  <p className="text-2xl font-normal text-bg_gray2 text-left mb-2 max-w-10xl animate-reavel 1sm:text-xl 1sm:text-center 1sm:text-white 1sm:drop-shadow-3xl 1sm:mb-6 md:text-5xl ">Hospital Ashford, comprometidos con tu calidad de vida</p> 
                  <p className="text-base leading-6 font-normal text-white animate-reavel 1sm:text-lg 1sm:drop-shadow-4xl 1sm:text-center">Por 118 años hemos operado de forma continua con los principios de nuestros fundadores como norte: Salud preventiva, vocación al servicio, innovación y trato con calor humano.</p>  
               </div>
               <div className=" w-full flex justify-center py-8">
                  <div className="hidden absolute items-end h-1 bottom-0 1sm:flex">
                     <div className="sticky bottom-0 pb-8">
                        <Link to="/#seccion2">
                           <img src={arrow_down} width={25} height={25} alt='arrow' className="cursor-pointer"></img>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
      )}

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
         <div className="w-full mt-16 text-center" id='seccion2'>
                  <p className="text-2xl block static z-auto mt-11 text-c_footer text-center font-normal sm:text-4xl">¡Saludos! ¿Cómo podríamos ayudarle?</p>
            <div className="flex flex-wrap min-h-full justify-center items-stretch py-50px px-20">
               {list_seccion2.map((item)=>(
               <div key={item.id} className={`${ item.id ==='ingreso' ? "animate-reavel"
               : item.id ==='citas' ? "animate-reavel1" 
               : item.id ==='emergencia' ? "animate-reavel2"
               : item.id ==='operacion' ? "animate-reavel3"
               : ""} 1sm:m-2`}>
                  <Box2>
                     <img className="ml-32 align-middle items-center" src={item.img} alt={item.alt} width={20} height={20} ></img>
                     <p className="my-6 text-lg text-c_footer font-normal not-italic text-left 1sm:text-center 1sm:leading-5">{item.title}</p>
                     <p className="mb-4 mt-0 text-c_box text-xs font-normal not-italic text-center cursor-pointer 1sm:text-sm 1sm:leading-5">{item.description}</p>
                  </Box2> 
               </div>
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
   
   const list_story=[
      {
         id:'story0',
         img:Story1,
         nombre:'Maydelise Columna',
         description:'Paciente del Centro de la mujer',
         href:'/testimonios#0'
      },
      {
         id:'story1',
         img:Story2,
         nombre:'Natalie y Daniel',
         description:'Pacientes de Ginecología y sala de partos',
         href:'/testimonios#1'
      },
      {
         id:'story2',
         img:Story3,
         nombre:'Dra. Rosa Bonilla',
         description:'Directora NICU Nivel 3',
         href:'/testimonios#2'
      },
      {
         id:'story3',
         img:Story4,
         nombre:'Elizabeth De Jesús',
         description:'Sobreviviente de COVID-19',
         href:'/testimonios#3'
      },
   ]
   const Seccion4=()=>{
      return(
         <Box3>
            <div className="w-full max-w-8xl mx-auto px-4 md:px-10 md:py-10 lg:px-28 lg:py-0">
               <div className="list-none mx-auto overflow-hidden p-0 relative z-10 touch-pan-y">
                  <div className="flex box-content h-full relative transition-transform w-full z-10">
                  {list_story.map((item)=>(
                        <div className="justify-center mr-5 h-full" style={{width:334}} key={item.id}>
                              <img src={item.img} className="object-cover rounded-lg opacity-100"></img>
                              <div className="flex flex-col justify-end items-start rounded-lg relative my-4 w-full">
                                 <div className="absolute text-left opacity-100">
                                    <p className=" text-lg font-normal not-italic text-c_story">{item.nombre}</p>
                                    <p className="font-medium text-xs text-white">{item.description}</p>
                                 </div>
                                 <div>
                                    <Link to={item.href} className="text-white">Leer más</Link>
                                 </div>
                              </div>
                           </div>
                  ))}   
                  </div>  
                  <div className="">
                     <div className="">
                        <span className="active: bg-c_footer rounded-lg inline-block h-2 w-2 mr-1"></span>
                        <span className="rounded-lg inline-block h-2 w-2 bg-gray-400"></span>
                     </div>
                  </div> 
               </div>         
               
            </div>  
         </Box3>   
      )
   }
   
   const Seccion3=()=>{
      return(
         <div className="bg-ashford">
            <div className="w-full max-w-8xl mx-auto pb-12 md:py-12 md:px-10 lg:px-28 ">
               <div className="flex flex-wrap relative justify-center items-start w-full">
                  <div className="flex p-0 w-full relative overflow-hidden md:w-1/2 md:rounded-md">
                     <img className="bg-cover h-full" src={Interest} width={514} height={750}></img>
                  </div>
                  <div className="flex flex-col justify-center w-full px-4 md:p-0 md:w-1/2">
                     <p className="font-normal text-sm text-turquee uppercase leading-5 1sm:font-bold 1sm:text-s 1sm:leading-4">Datos de interés</p>
                     <p className="font-normal not-italic text-2xl leading-7 my-18px 1sm:text-5xl 1sm:leading-11 text-bg_gray2 ">¡En el Hospital Ashford estamos para servirles!</p>
                     <p className="font-normal not-italic text-1xl text-turquee mb-8">Nuestra misión es proveer servicios médicos hospitalarios de excelencia con calor humano con empatía y compasión</p>
                     <div className="grid grid-cols-2 gap-y-8 gap-x-12">
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
         </div>     
      </div>
   )}   

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

   const Seccion5=()=>{
      return(
         <div className="max-w-full bg-white">
            
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
   
   const Seccion6=()=>{
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
   <div className="flex flex-col w-full bg-gray-200">
      <Marquee />
      <Seccion1 />
      <Seccion2 /> 
      <Seccion3 />
      <Seccion4 />
      <Seccion5 />
      <Seccion6 />
   </div>
)}


/*const Seccion4=()=>{
      return(
         <div className="flex flex-col flex-wrap relative lg:flex-row justify-center items-start w-full -mt-60 opacity-100">
            {list_story.map((item)=>(
            <div className="my-4 mr-5" style={{width:341.3}} key={item.id}>
                  <img src={item.img} className="bg-contain rounded-lg" height={498} width={'100%'}></img>
                  <div className="flex flex-col justify-end relative pb-10 px-5">
                     <div className="absolute text-left opacity-100">
                        <p className=" text-lg font-normal not-italic text-c_story">{item.nombre}</p>
                        <p className="font-medium text-xs text-white">{item.description}</p>
                     </div>
                     <div>
                        <Link to={item.href} className="text-white">Leer más</Link>
                     </div>
                  </div>
              </div>
            ))}
         </div>  
      )
   }
   
   <Box3>
            <div className="flex flex-wrap relative lg:flex-row justify-center items-start w-full opacity-100">
               <div className="w-full max-w-8xl mx-auto px-4 md:px-10 md:py-10 lg:px-28 lg:py-0">
                  <div className="list-none mx-auto overflow-hidden p-0 relative z-10 touch-pan-y">
                     <div className="box-content flex h-full relative transition-transform w-full z-10" style={{width:'341.333'}}>
                     {list_story.map((item)=>(
                           <div className="flex-shrink-0 h-full relative mr-5" key={item.id}>
                              <img src={item.img} className="object-cover rounded-lg opacity-100"></img>
                              <div className="flex flex-col justify-end items-start rounded-lg relative my-4 w-full">
                                 <div className="absolute text-left opacity-100">
                                    <p className=" text-lg font-normal not-italic text-c_story">{item.nombre}</p>
                                    <p className="font-medium text-xs text-white">{item.description}</p>
                                 </div>
                                 <div>
                                    <Link to={item.href} className="text-white">Leer más</Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                        <div className="">
                           <div className="">
                              <span className="rounded-lg inline-block h-2 w-2 bg-c_footer mr-1"></span>
                              <span className="rounded-lg inline-block h-2 w-2 bg-c_footer"></span>
                           </div>
                        </div> 
                     </div>  
                  </div>         
               </div>
            </div>  
         </Box3>

         {list_story.map((item)=>(
                           <div className="flex-shrink-0 justify-center transition-transform h-full relative mr-5 w-80" key={item.id}>
                              <img src={item.img} className="object-cover rounded-lg opacity-100"></img>
                              <div className="flex flex-col justify-end items-start rounded-lg relative my-4 w-full">
                                 <div className="absolute text-left opacity-100">
                                    <p className=" text-lg font-normal not-italic text-c_story">{item.nombre}</p>
                                    <p className="font-medium text-xs text-white">{item.description}</p>
                                 </div>
                                 <div>
                                    <Link to={item.href} className="text-white">Leer más</Link>
                                 </div>
                              </div>
                           </div>
                        ))}
   */