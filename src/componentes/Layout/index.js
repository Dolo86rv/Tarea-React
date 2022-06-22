import React from 'react'
import { Header } from '../Header'
import { Contenido } from '../Contenido'
import { Footer } from '../Footer'
import { Marquee } from '../Marquee'
import { Container, Wrapper} from './styles'

export const Layout = () => {
  return (
    <div>
        <Container>
          <Header />
          <Wrapper>
            <Marquee />
            <Contenido />
            <Footer />
          </Wrapper>
        </Container>

    </div>
  )
}
