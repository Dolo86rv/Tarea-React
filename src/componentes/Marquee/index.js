import React from 'react'
import {Container} from './styles'

export const Marquee = () => {
  return (
    <Container>
       <div class="overflow-x-hidden">
            <div class="py-3 animate-marquee whitespace-nowrap ">
                <span class="text-lg mx-4">Vacunación Covid 19| Lunes-Viernes 8:30am-3:00pm</span>
           </div>
        </div>
    </Container>
  )
}