import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Header } from '../Header'
import { Home } from '../Home'
import { Servicios } from '../Servicios'
import { Especialidades } from '../Especialidades'
import { Footer } from '../Footer'
import { Marquee } from '../Marquee'
import { Pagenotfound } from '../Pagenotfound'
import { Nosotros } from '../Nosotros'
import { Paciente } from '../Paciente'
import { Contacto } from '../Contacto'
import { Emergencia } from '../Emergencia'


export const Layout = () => {
  
  return (
      <div className="flex flex-col h-screen min-w-full">
          <BrowserRouter>
            <Header />
            <div className="flex-grow w-full">
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
