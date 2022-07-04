import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Header } from '../Header'
import { Home } from '../Home'
import { Servicios } from '../Servicios'
import { Especialidades } from '../Especialidades'
import { Footer } from '../Footer'
import { Marquee } from '../Marquee'
import { Container, Wrapper} from './styles' 
import { Pagenotfound } from '../Pagenotfound'
import { Nosotros } from '../Nosotros'
import { Paciente } from '../Paciente'
import { Contacto } from '../Contacto'


export const Layout = () => {
  
  return (
    <div>
        <Container>
          <BrowserRouter>
            <Header />
            <Wrapper>
            <Marquee />
              <div className="">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/servicios" element={<Servicios />} />
                  <Route exact path="/especialidades" element={<Especialidades />} />
                  <Route exact path="/sobrenosotros" element={<Nosotros />} />
                  <Route exact path="/salaemergencia" element={<Especialidades />} />
                  <Route exact path="/parapacientes" element={<Paciente />} />
                  <Route exact path="/contacto" element={<Contacto />} />
                  <Route path="*" element={<Pagenotfound />} />
                </Routes>
              </div>
            <Footer />
            </Wrapper>
          </BrowserRouter>
        </Container>
      </div>
  )
}
