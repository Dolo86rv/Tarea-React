import React from 'react'
import { Container, Wrapper } from './styles'
import logo from '../../img/logo-1.svg'
import { Menuderecho } from '../Menuderecho'


export const Header = () => {
  return (
    <Container>
      <div className="flex pt-3 pb-3">
        <div className="flex-none">
          <Wrapper>
            <img src= {logo} alt='logo'></img>
          </Wrapper>
        </div>
        <div className="flex-auto pt-1">
          <Menuderecho >
          </Menuderecho >
        </div>
      </div>
    </Container>
  )
}
