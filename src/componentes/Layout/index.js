import React from 'react'
import { Header } from '../Header'
import { Contenido } from '../Contenido'
import { Footer } from '../Footer'
import { Carrusel } from '../Carrusel'
import { Container, Wrapper} from './styles'

export const Layout = () => {
  return (
    <div>
        <Container>
          <Header />
          <Wrapper>
            <Carrusel />
            <Contenido />
            <Footer />
          </Wrapper>
        </Container>

    </div>
  )
}
