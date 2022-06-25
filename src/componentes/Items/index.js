import React from 'react'
import lupa from '../../img/lupa.svg'
import { Link, Simple, Lupa } from './styles'

import {Item} from '../Item'

const servicio=[
  {
    name:"Servicios y Especialidades",
    description: ["En el Hospital Ashford ofrecemos una gran diversidad de servicios"],
    href: "##"
  },
  {
    name: "Servicios",
    description: ["Radiología/Centro de Imágenes"," ", "Cuidado de heridas"],
    href: "##"
  }
]

const sala_emergencia=[
  {
    href: "##",
  },
]

const para_pacientes=[
  {
    name:"Para pacientes",
    description: "Encuentre guias esenciales para que todo paciente este informado y tenga la mejor experiencia posible en el Hospital Ashford",
    href: "##"
  },
  {
    name: "Directorios",
    description: ["Condiciones de salud"," ", "Directorio médico"],
    href: "##"
  }
]
  
const sobre_nosotros = [
  {
    name: "Sobre Nosotros",
    description: "El hospital Ashford cuenta con una facultad de aproximadamente 250 médicos, 630 empleados, y con 175 camas para atender paciente en prácticamente todas las especialidades.",
    href: "##"
  },
  {
    name: "Sobre nosotros",
    description: "Sobre nosotros",
    href: "##"
  },
  {
    name: "",
    description: "Equipo",
    href: "##"
  }
]

export const Items = () => {

  return (
    <div className="flex flex-row-reverse space-x-6">
      <Lupa>
       <img className="ml-10 mt-2" src= {lupa} alt='search'></img>
      </Lupa>
      <Link>
        <Simple className="p-2">Contacto</Simple>
      </Link>
      <Link>
        <Item title="Sobre nosotros" items={sobre_nosotros}></Item>
      </Link>
      <Link>
        <Item title="Para pacientes" items={para_pacientes}></Item>
      </Link>
      <Link>
         <Simple className="p-2">Sala de emergencia</Simple>
      </Link>
      <Link>
        <Item title="Servicio y especialidades" items={servicio}></Item>
      </Link>
    </div>
  )
}
