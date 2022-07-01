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
 
  return (
    <div className="flex flex-row-reverse space-x-6">
      <Lupa>
       <img className="ml-10 mt-1" src= {lupa} alt='search'></img>
      </Lupa>
      <Link>
         <a href="/contact" className="p-2">Contacto</a>
      </Link>
      <Link>
        <Item title="Sobre nosotros" items={sobre_nosotros}></Item>
      </Link>
      <Link>
        <Item title="Para paciente" items={para_pacientes}></Item>
      </Link>
      <Link>
         <a href="/emergency" className="p-2">Sala de emergencia</a>
      </Link>
      <Link>
        <Item title="Servicios y Especialidades" items={servicio} ></Item>
      </Link>
    </div>
  )
}


