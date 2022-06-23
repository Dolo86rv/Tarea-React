import React from 'react'
import lupa from '../../img/lupa.svg'
import { Link, Lupa} from './styles'

export const Menuderecho = (mouseOver) => {
  return (
    <div className="flex flex-row-reverse space-x-10">
      <Lupa>
       <img className="ml-10 mt-1" src= {lupa} alt='search'></img>
      </Lupa>
      <Link>
        <a className="normal-case" href="/contact">Contacto</a>
      </Link>
      <Link>
        <a className="normal-case" href="/aboutus">Sobre nosotros</a>
      </Link>
      <Link>
        <a className="normal-case" href="/aboutpacient">Para paciente</a>
      </Link>
      <Link>
        <a className="normal-case" href="/emergencyroom">Sala de emergencia</a>
      </Link>
      <Link>
        <a className="normal-case" href="/services" onMouseOver={mouseOver}>Servicio y especialidades</a>
      </Link>
    </div>
  )
}


