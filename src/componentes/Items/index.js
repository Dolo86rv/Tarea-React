import React from 'react'
import lupa from '../../img/lupa.svg'
import { Link, Lupa } from './styles'


import {Item} from '../Item'

const servicio=[
  {
    name:"Servicios y Especialidades",
    description: ["En el Hospital Ashford ofrecemos una gran diversidad de servicios."],
    href: ["##"]
  },
 {
    name: "Servicios",
    description: ["Radiología/Centro de Imágenes",
     "Medicina nuclear y centro de cardiología",
    "Laboratorio",
    "Centro de medicina física y rehabilitación",
     "Cuidado de heridas", "Ashford Prenatal", "Centro de la mujer", "Centro de vacunación","Farmacia de la comunidad"],
    href:["##"]
  },
  {
    name:"Especialidades",
    description: ["Obstetricia, ginecología y ginecología oncológica","Unidad de cuidado intensivo neonatal",
    "Cirugía colorrectal","Ortopedia","Medicina deportiva","Otorrinolaringología", "Endocrinología",
    "Cirugía general","Cirugía oncológica","Pediatría","Urología","Sala de emergencia"],
    href: ["##"]
  }
]

const para_pacientes=[
  {
    name:"Para pacientes",
    description: ["Encuentre guias esenciales para que todo paciente este informado y tenga la mejor experiencia posible en el Hospital Ashford"],
    href: ["##"]
  },
  {
    name: "Directorios",
    description: ["Condiciones de salud", "Directorio médico"],
    href:["##"]
  },
  {
    name: "Recursos",
    description: ["Guía para pacientes", "Admisiones y pre-admisiones","Testimonios"],
    href:["##"] 
  }
]
  
const sobre_nosotros = [
  {
    name: "Sobre Nosotros",
    description: ["El hospital Ashford cuenta con una facultad de aproximadamente 250 médicos, 630 empleados, y con 175 camas para atender paciente en prácticamente todas las especialidades."],
    href: ["##"]
  },
  {
    name: "Sobre nosotros",
    description: ["Sobre nosotros", "Equipo"],
    href: ["/nosotros"]
  },
]
export const Items = () => {
  return(
    <div className="flex flex-row-reverse space-x-6 ">
         <Lupa>
            <img className="ml-10 mt-1" src= {lupa} alt='search'></img>
          </Lupa>
          <Link>
           <a href="/contact" className="mt-3">Contacto</a>
          </Link>
          <Link>
           <Item title="Sobre nosotros" items={sobre_nosotros}></Item>
          </Link>
          <Link>
           <Item title="Para pacientes" items={para_pacientes}></Item>
          </Link>
           <Link>
           <a href="/service" className="">Sala de emergencia</a>
          </Link>
          <Link>
           <Item title="Servicios y especialidades" items={servicio}></Item>
          </Link>
       </div>
  )
}


/*export const Items = () => {
 
  const sobreNosotros=()=>{
  
    return(
      <div className="relative bg-gray-200 grid lg:grid-cols-3 divide-x gap-8 border-l">
        <h2>Sobre Nostros</h2>
        <p className="pb-6 pt-6 text-3xl leading-10 space-x-0 text-gray-700">El hospital Ashford cuenta con una facultad de aproximadamente 250 médicos, 630 empleados, y con 175 camas para atender paciente en prácticamente todas las especialidades.</p>
      <div>
          <p>Sobre nosotros</p>
          <ul className="text-sm text-gray-500">
              <li>
                <a href="/aboutus">Sobre nosotros</a>
              </li>
              <li>
                <a href="/team">Equipo</a>
              </li>
          </ul>
    </div>
    </div>
  )}

  return (
    <div className="flex flex-row-reverse space-x-6">
      <Lupa>
       <img className="ml-10 mt-1" src= {lupa} alt='search'></img>
      </Lupa>
      <Link>
         <a href="/contact" className="p-2">Contacto</a>
      </Link>
      <Link>
        <Item title="Sobre nosotros" items={sobreNosotros}></Item>
      </Link>
      <Link>
        <Item title="Para paciente" items={paraPacientes}></Item>
      </Link>
      <Link>
         <a href="/emergency" className="p-2">Sala de emergencia</a>
      </Link>
      <Link>
        <Item title="Servicios y Especialidades" items={serviciosEspecialidades} ></Item>
      </Link>
    </div>
  )
}




const serviciosEspecialidades=()=>{
  return(
    <div className="relative bg-gray-200 mt-2 p-4 grid lg:grid-cols-3 divide-x gap-8 border-l">
      <h2>Servicios y Especialidades</h2>
      <p className="pb-6 pt-6 text-3xl leading-10 space-x-0 text-gray-700">En el Hospital Ashford ofrecemos una gran diversidad de servicios</p>
    <div>
        <p>Servicios</p>
        <ul className="text-sm text-gray-500">
          <li>
            <a href="">Radiología/Centro de Imágenes</a>
          </li>
          <li>
            <a href="">Medicina nuclear y centro de cardiología</a>
          </li>
          <li>
            <a href="">Laboratorio</a>
          </li>
          <li>
            <a href="">Centro de medicina física y rehabilitación</a>
          </li>
          <li>
            <a href="">Cuidado de heridas</a>
          </li>
          <li>
            <a href="">Ashford Prenatal</a>
          </li>
          <li>
            <a href="">Centro de la mujer</a>
          </li>
          <li>
            <a href="">Centro de vacunación</a>
          </li>
          <li>
            <a href="">Farmacia de la comunidad</a>
          </li>
        </ul>
  </div>
  </div>
  )}
 
  const paraPacientes=()=>{
    return (
      <div className="relative bg-gray-200 mt-2 p-4 grid lg:grid-cols-3 divide-x gap-8 border-l">
      <h2>Para Pacientes</h2>
      <p className="pb-6 pt-6 text-3xl leading-10 space-x-0 text-gray-700">
        Encuentre guias esenciales para que todo paciente este informado y tenga la mejor experiencia posible en el Hospital Ashford</p>
    <div>
        <p>Directorios</p>
        <ul className="text-sm text-gray-500">
            <li>
              <a href="/salud">Condiciones de salud</a>
            </li>
            <li>
              <a href="/direct">Directorio médico</a>
            </li>
        </ul>
        <p>Recursos</p>
        <ul>
          <li>
            <a href="">Guía para pacientes</a>
          </li>
          <li>
            <a href="">Admisiones y pre-admisiones</a>
          </li>
          <li>
            <a href="">Testimonios</a>
          </li>
        </ul>
  </div>
  </div>
    )

  }*/