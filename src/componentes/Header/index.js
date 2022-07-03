import { useState } from 'react'
import logo from '../../img/logo-1.svg'
import { Item } from '../Item'
import { Items } from '../Items'
import { Container } from './styles'


export const Header = () => {
   
    return (
    <Container>
      <div className="flex pt-4 pb-4 bg-white pl-20 pr-20">
        <div className="flex-none">
           <img src= {logo} alt='logo' width={104} height={40}></img>
        </div>
        <div className="flex-auto pt-1">
          <Items />
        </div>
      </div>
    </Container>
  )
}
