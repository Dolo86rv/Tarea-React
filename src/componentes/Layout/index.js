import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from '../Header'
import { Home } from '../Home'
import { Servicios } from '../Servicios'
import { Especialidades } from '../Especialidades'
import { Footer } from '../Footer'
import { Pagenotfound } from '../Pagenotfound'
import { Nosotros } from '../Nosotros'
import { Paciente } from '../Paciente'
import { Contacto } from '../Contacto'
import { Emergencia } from '../Emergencia'


export const Layout = () => {
  
  return (
    <div className="absolute overflow-y-auto mx-auto mt-66px w-full p-0" style={{height:'calc(100vh - 66px)'}}>
      <BrowserRouter>
        <Header />
        <div className="grow w-full ">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/servicios" element={<Servicios />} />
            <Route exact path="/especialidades" element={<Especialidades />} />
            <Route exact path="/sobrenosotros" element={<Nosotros />} />
            <Route exact path="/salaemergencia" element={<Emergencia />} />
            <Route exact path="/parapacientes" element={<Paciente />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
