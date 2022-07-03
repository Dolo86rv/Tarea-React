import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home'
import { Footer } from '../Footer'
import { Marquee } from '../Marquee'
import { Container, Wrapper} from './styles'

export const Layout = () => {
  
  return (
       <Container>
          <Header />
          <Marquee />
           <Wrapper>
            <Home />
            <Footer />
          </Wrapper>
      </Container>
  )
}
