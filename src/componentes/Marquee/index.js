import React from 'react'
import { Container, Marquee1, Overlay } from './styles';

export const Marquee = () => {
  const colorDiv={background:'#3eb1c8'};
  return (
    
    <Container>
       <Overlay>

       </Overlay>
       <Marquee1>
             <span className="mx-12">Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
       </Marquee1>
       <Marquee1>
             <span className="mx-12">Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
       </Marquee1>
     </Container>
    
  )
}

/*<div className="relative overflow-x-hidden text-white h-12" style={colorDiv}>
          <div className="animate-marquee py-3  whitespace-nowrap">
             <span className="mx-12">Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
             <span className="mx-12">Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
           </div>
     </div>*/