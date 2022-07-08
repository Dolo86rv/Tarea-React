import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import lupa from '../../img/lupa.svg'
import menu from '../../img/menu.svg'
import { Links, Lupa, Simple } from './styles'


import {Item} from '../Item'

// Menu Servicio y Especilaidades..........
const servicios_especialidades=[
  {
    id:"servicios",
    description: "Servicios",
    href: "/servicios",
    sub_menu: [
      {
        id:"radiología_centro_de_imagenes",
        description: "Radiología/Centro de Imágenes",
        href:"/servicios#radiologia_centro_de_imagenes",
        sub_menu:[],
      },
      {
        id:"medicina_nuclear_centro_de_cardiología",
        description: "Medicina nuclear y centro de cardiología",
        href:"/servicios#medicina_nuclear_centro_de_cardiología",
        sub_menu:[],
      },
      {
        id:"laboratorio",
        description: "Laboratorio",
        href:"/servicios#laboratorio",
        sub_menu:[],
      },
      {
        id:"centro_de_medicina_física_rehabilitación",
        description: "Centro de medicina física y rehabilitación",
        href:"/servicios#centro_de_medicina_física_y_rehabilitación",
        sub_menu:[],
      },
      {
        id:"cuidado_de_heridas",
        description: "Cuidado de heridas",
        href:"/servicios#cuidado_de_heridas",
        sub_menu:[],
      },
      {
        id:"ashford_prenatal",
        description: "Ashford Prenatal",
        href:"/servicios#ashford_prenatal",
        sub_menu:[],
      },
      {
        id:"centro_de_la_mujer",
        description: "Centro de la mujer",
        href:"/servicios#centro_de_la_mujer",
        sub_menu:[],
      },
      {
        id:"centro_de_vacunacion",
        description: "Centro de vacunación",
        href:"/servicios#centro_de_vacunacion",
        sub_menu:[],
      },
      {
        id:"farmacia_de_la_comunidad",
        description: "Farmacia de la comunidad",
        href:"/servicios#farmacia_de_la_comunidad",
        sub_menu:[],
      }]
  },
  {
    id:"especialidades",
    description:"Especialidades",
    href:"/especialidades",
    sub_menu: [
      {
        id:"obstetricia_ginecología_ginecología_oncológica",
        description: "Obstetricia, ginecología y ginecología oncológica",
        sub_menu:[],
        href:"/especialidades#obstetricia_ginecología_ginecología_oncológica"
      },
      {
        id:"unidad_de_cuidado_intensivo_neonatal",
        description: "Unidad de cuidado intensivo neonatal",
        sub_menu:[],
        href:"/especialidades#unidad_de_cuidado_intensivo_neonatal"
      },
      {
        id:"cirugía_colorrectal",
        description: "Cirugía colorrectal",
        sub_menu:[],
        href:"/especialidades#cirugía_colorrectal"
      },
      {
        id:"ortopedia",
        description: "Ortopedia",
        sub_menu:[],
        href:"/especialidades#ortopedia"
      },
      {
        id:"medicina_deportiva",
        description: "Medicina deportiva",
        sub_menu:[],
        href:"/especialidades#medicina_deportiva"
      },
      {
        id:"otorrinolaringología",
        description: "Otorrinolaringología",
        sub_menu:[],
        href:"/especialidades#otorrinolaringología"
      },
      {
        id:"endocrinología",
        description: "Endocrinología",
        sub_menu:[],
        href:"/especialidades#endocrinología"
      },
      {
        id:"cirugia_general",
        description: "Cirugía general",
        sub_menu:[],
        href:"/especialidades#cirugia_general"
      },
      {
        id:"cirugia_oncologica",
        description: "Cirugía oncológica",
        sub_menu:[],
        href:"/especialidades#cirugia_oncologica"
      },
      {
        id:"pediatría",
        description: "Pediatría",
        sub_menu:[],
        href:"/especialidades#pediatria"
      },
      {
        id:"urologia",
        description: "Urología",
        sub_menu:[],
        href:"/especialidades#urologia"
      },
      {
        id:"sala_de_emergencia",
        description: "Sala de emergencia",
        sub_menu:[],
        href:"/especialidades#sala_de_emergencia"
      },
    ]
   
  }
]

const serviciosEspecialidades_html=()=>{
  
    return (
      <div className="grid grid-cols-3">
        <div>
          <div className="text-2xl text-c_text">Servicios y especialidades</div>
          <div className="pt-5 pr-5 text-c_text normal-case">En el Hospital Ashford ofrecemos una gran diversidad de servicios.</div>
        </div>
        {servicios_especialidades.map((item) => (
          
          <div className=" pl-8 pr-8 space-y-2 border-l border-gray-400 borde grid grid-cols-2 capitalize gap-1" key={item.id}>
            <div className="col-span-2">
               <Link key={item.id} className="text-lg text-turquee" to={item.href}>{item.description}</Link>
             </div>
            { item.sub_menu.map((sub_item) => (
              <div key={sub_item.id}>
                <Link key={sub_item.id} to={sub_item.href} className="text-c_text hover:text-turquee">{sub_item.description}</Link >
              </div>
              ))
            }
          </div>
          ))
        }
      </div>
  )}
// Menu Sobre Nosotros..........
  const sobre_nosotros = [
    {
      id: "sobre_nosotros",
      description: "Sobre nosotros",
      href: "/sobrenosotros",
      sub_menu:[
        {
          id: "nosotros",
          description: "Sobre nosotros",
          sub_menu:[],
          href: "/sobrenosotros#nostros"
        },
        {
          id: "equipo",
          description: "Equipo",
          sub_menu:[],
          href: "/sobrenostros#equipo"
        }]
    }]

  const sobreNosotros_html=()=>{
  
    return(
      <div className="grid grid-cols-3">
         <div>
            <div className="text-2xl text-c_text">
                Sobre Nostros
            </div>
            <div className="pt-5 pr-5 text-c_text normal-case">
              <p>El hospital Ashford cuenta con una facultad de aproximadamente 250 médicos, 630 empleados, y con 175 camas para atender paciente en prácticamente todas las especialidades.</p>
            </div>
        </div>
        {sobre_nosotros.map((item)=>(
          <div className="pl-10 space-y-2 border-l border-gray-400 capitalize" key={item.id}>
            <Link key={item.id} to={item.href} className="text-lg text-turquee">{item.description}</Link>

            {item.sub_menu.map((subItem)=>(
              <div key={subItem.id}>
                <Link key={subItem.id} to={subItem.href} className="text-c_text hover:text-turquee">{subItem.description}</Link>
              </div>
            ))}
          </div>
        ))}
        
    </div>
  )}

// Menu Para pacientes..........
const para_pacientes=[
  {
    id:"directorios",
    description: "Directorios",
    href:"/parapacientes",
    sub_menu: [
      {
       id:"condiciones_de_salud",
       description: "Condiciones de Salud",
       sub_menu:[],
       href:"/parapacientes#codiciones_de_salud"
      },
      {
        id:"directorio_medico",
        description: "Directorio médico",
        sub_menu:[],
        href:"/parapacientes#directorio_medico"
      }],
  },
  {
    id: "recursos",
    description:"Recursos",
    href:"/parapacientes#recursos" ,
    sub_menu:[
      {
        id:"guia_para_pacientes",
        description:"Guía para pacientes",
        sub_menu:[],
        href:"/parapacientess#guia_para_pacientes"  
      },
      {
        id:"admisiones_y_pre-admisiones",
        description:"Admisiones y pre-admisiones",
        sub_menu:[],
        href:"/parapacientess#admisiones_y_pre-admisiones"
      },
      {
        id:"testimonios",
        description:"Testimonios",
        sub_menu:[],
        href:"/parapacientes#testimonios"
      }]
    }]

const paraPacientes_html=()=>{
     
  return (
    <div className="grid grid-cols-3 pb-8">
      <div>
        <div className="text-2xl text-c_text">
              Para Paciente
        </div>
        <div className="pt-5 pr-5 text-c_text normal-case">
          <p>Encuentre guias esenciales para que todo paciente este informado y tenga la mejor experiencia posible en el Hospital Ashford.</p>
        </div>
      </div>
      {para_pacientes.map((item)=>(
        <div className="pl-10 space-y-2 border-l border-gray-400 capitalize" key={item.id} >
          <Link key={item.id} to={item.href} className="text-lg text-turquee">{item.description}</Link>

          {item.sub_menu.map((subMenu)=>(
            <ul key={subMenu.id}>
              <Links>
                 <Link key={subMenu.id} to={subMenu.href} className="text-c_text hover:text-turquee">{subMenu.description}</Link>
              </Links>
            </ul>
          ))}
        </div>
      ))}
    </div>
    )
  
    }

export const Items = () => {
  return(
    <div className="flex flex-row-reverse space-x-2">
        <div className="flex lg:hidden justify-end">
         <button class="flex cursor-pointer border border-turquee text-xl bg-transparent" aria-label="Search">
            <form role="search" action="/resultados" method="get" autocomplete="off" className="flex items-center pl-2 pr-0 pt-2 pb-2 mx-0">
               <Lupa>
                <img className="mx-2 py-1" src= {lupa} width="20" height="20" alt='search'></img>
               </Lupa>
               <div className="flex">
                  <input type="text" value="" id="search" placeholder="Buscar" name="s" className="box-border mx-2 border-0 w-full"></input>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#01426A" className="animated-icon mx-2 py-1"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                </div> 
            </form>
          </button>
          <button>
             <Lupa>
                <img className="mx-4 mt-2" src= {menu} width="24" height="24" alt='menu'></img>
             </Lupa>   
          </button>
        </div>
        
         <Lupa className="hidden lg:block">
            <img className="ml-10 mt-2" src= {lupa} width="18" height="18" alt='search'></img>
         </Lupa>
         <Simple className="hidden lg:block">
           <Link to="/contacto" className="p-2">Contacto</Link>
         </Simple>
         <Links className="hidden lg:block">
           <Item title="Sobre nosotros" subMenu={sobreNosotros_html()}></Item>
         </Links>
         <Links className="hidden lg:block">
           <Item title="Para pacientes" subMenu={paraPacientes_html()}></Item>
          </Links>
          <Simple className="hidden lg:block">
             <Link to="/salaemergencia" className="p-2">Sala de emergencia</Link>
          </Simple>
          <Links className="hidden lg:block">
           <Item title="Servicios y especialidades" subMenu={serviciosEspecialidades_html()}></Item>
          </Links>
      </div>
  )
}

/*<div className="flex box-border my-1 items-center">
        <form role="search" action="/resultados" method="get" autocomplete="off" className="flex items-end p-2 transition-all w-full">
            <Lupa>
                <img className="ml-10 mt-2" src= {lupa} width="18" height="18" alt='search'></img>
            </Lupa>
            <div className="flex">
              <input type="text" value="" id="header-search" placeholder="Buscar" name="s" className="border border-turquee text-xl bg-transparent"></input>
               <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#01426A" className="animated-icon mx-1"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
              
            </div>
         </form>
         </div>*/

