import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import lupa from '../../img/lupa.svg'
import { ButtonSearch } from './ButtonSearch'
import { useState } from 'react'
import { Item } from '../Item'
import { FormSearch } from './FormSearch'
import  menu from '../../img/menu.svg'



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
        id:"cuidado_de_heridas",
        description: "Cuidado de heridas",
        href:"/servicios#cuidado_de_heridas",
        sub_menu:[],
      },
      {
        id:"medicina_nuclear_centro_de_cardiología",
        description: "Medicina nuclear y centro de cardiología",
        href:"/servicios#medicina_nuclear_centro_de_cardiología",
        sub_menu:[],
      },
      {
        id:"ashford_prenatal",
        description: "Ashford Prenatal",
        href:"/servicios#ashford_prenatal",
        sub_menu:[],
      },
      {
        id:"laboratorio",
        description: "Laboratorio",
        href:"/servicios#laboratorio",
        sub_menu:[],
      },
      {
        id:"centro_de_la_mujer",
        description: "Centro de la mujer",
        href:"/servicios#centro_de_la_mujer",
        sub_menu:[],
      },
      {
        id:"centro_de_medicina_física_rehabilitación",
        description: "Centro de medicina física y rehabilitación",
        href:"/servicios#centro_de_medicina_física_y_rehabilitación",
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
      <div className="flex">
        <div className="ml-8 w-2/4">
          <div className="text-xl font-normal text-c_text normal-case">Servicios y especialidades</div>
          <div className="pt-5 text-c_text normal-case">En el Hospital Ashford ofrecemos una gran diversidad de servicios.</div>
        </div>
        {servicios_especialidades.map((item) => (
          <div className="grid grid-cols-2 gap-2 space-y-1 border-l border-c_border capitalize pl-8 w-2/3" key={item.id}>
            <div className=" col-span-2">
              <Link className="text-lg font-medium text-turquee" to={item.href}>{item.description}</Link>
            </div>
            {item.sub_menu.map((sub_item) => (
              <ul key={sub_item.id} className="mr-1">
                <Link to={sub_item.href} className="ext-c_text normal-case font-normal text-sm not-italic leading-5 hover:text-turquee transition-colors ease-in-out duration-150">{sub_item.description}</Link >
              </ul>
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
      <div className="grid grid-cols-3 ">
        <div className="ml-6"> 
            <div className="text-2xl text-c_text">
                Sobre Nostros
            </div>
            <div className="pt-5 pr-5 text-c_text normal-case">
              <p>El hospital Ashford cuenta con una facultad de aproximadamente 250 médicos, 630 empleados, y con 175 camas para atender paciente en prácticamente todas las especialidades.</p>
            </div>
        </div>
        {sobre_nosotros.map((item)=>(
          <div className="space-y-2 border-l border-c_border capitalize pl-8 w-2/3" key={item.id}>
            <Link key={item.id} to={item.href} className="text-lg text-turquee">{item.description}</Link>

            {item.sub_menu.map((subItem)=>(
              <div key={subItem.id}>
                <Link key={subItem.id} to={subItem.href} className="ext-c_text normal-case font-normal text-sm not-italic leading-5 hover:text-turquee transition-colors ease-in-out duration-150">{subItem.description}</Link>
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
       description: "Condiciones de salud",
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
    <div className="grid grid-cols-3">
      <div className="ml-6">
        <div className="text-2xl text-c_text">
              Para Paciente
        </div>
        <div className="pt-5 pr-5 text-c_text normal-case">
          <p>Encuentre guias esenciales para que todo paciente este informado y tenga la mejor experiencia posible en el Hospital Ashford.</p>
        </div>
      </div>
      {para_pacientes.map((item)=>(
        <div className="space-y-2 border-l border-c_border capitalize pl-8 w-2/3"  key={item.id} >
          <Link key={item.id} to={item.href} className="text-lg text-turquee">{item.description}</Link>
          {item.sub_menu.map((subMenu)=>(
            <ul key={subMenu.id}>
              <Link key={subMenu.id} to={subMenu.href} className="ext-c_text normal-case font-normal text-sm not-italic leading-5 hover:text-turquee transition-colors ease-in-out duration-150">{subMenu.description}</Link>
            </ul>
          ))}
        </div>
      ))}
    </div>
    )}
    
export const Items = () => {
    const [isOpen, setIsOpen]=useState(false)

    const handleClick=()=>{
      setIsOpen(!isOpen)
    }   

  return(
      <div className="flex box-border">
        <div className="flex box-border items-center lg:h-full">
          <Item title="Servicios y especialidades" subMenu={serviciosEspecialidades_html()} />
          <Link to="/salaemergencia" className="hidden lg:block text-c_text normal-case font-normal text-sm not-italic leading-5 hover:text-turquee transition-colors ease-in-out duration-150 px-2 py-2 text-left lg:static">Sala de emergencia</Link>
          <Item title="Para pacientes" subMenu={paraPacientes_html()} />
          <Item title="Sobre nosotros" subMenu={sobreNosotros_html()} />
          <Link to="/contacto" className="hidden lg:block text-c_text normal-case font-normal text-sm not-italic leading-5 hover:text-turquee transition-colors ease-in-out duration-150 px-2 text-left lg:static">Contacto</Link>
        </div>
        <div className="flex box-border lg:px-2 lg:pb-2">
          <ButtonSearch state={isOpen} open={handleClick} className="hidden mx-1 py-1 px-3 leading-4 lg:block"/>
          {isOpen && <FormSearch show={isOpen}/>}
          <button type='button' className="bg-transparent rounded text-1xl py-1 px-3 lg:hidden hover:scale-100" aria-label="toggle">
            <img className="w-7 h-7 align-middle bg-center bg-cover" src= {menu} alt='menu' />
          </button>  
        </div>
      </div>    
  )}



  /*
  <div className="flex flex-row-reverse box-border items-center flex-grow space-x-6 lg:h-full">
  
  <Simple className="hidden lg:block">
          <Link to="/contacto" className="">Contacto</Link>
        </Simple>
        <Links className="hidden lg:block">
          <Item title="Sobre nosotros" subMenu={sobreNosotros_html()}></Item>
        </Links>
        <Links className="hidden lg:block"> 
          <Item title="Para pacientes" subMenu={paraPacientes_html()}></Item>
        </Links>
        <Simple className="hidden lg:block">
          <Link to="/salaemergencia" className=" decoration-inherit">Sala de emergencia</Link>
        </Simple>
        <Links className="hidden lg:block">
          <Item title="Servicios y especialidades" subMenu={serviciosEspecialidades_html()}></Item>
        </Links>*/