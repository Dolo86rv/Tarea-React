import React from 'react'
import {HashLink as Link } from 'react-router-hash-link'

export const Menu = () => {
  return (
    <div className="">
      <Link className="" to="/servicios">
        Servicios y especialidades
      </Link>
      <Link className="" to="/salaemergencia">
        Sala de emergencia
      </Link>
      <Link className="" to="/parapacientes">
        Para pacientes
      </Link>
       <Link className="" to="/sobrenosotros">
         Sobre nosotros
      </Link>
       <Link className="" to="/contacto">
         Contacto
       </Link>
    </div>
  )
}
