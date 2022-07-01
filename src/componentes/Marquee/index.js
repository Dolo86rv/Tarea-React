import React from 'react'

export const Marquee = () => {
  const colorDiv={background:'#3eb1c8'};
  return (
    
     <div className="relative flex overflow-x-hidden text-white h-12 text-center" style={colorDiv}>
          <div className="animate-marquee py-3  whitespace-nowrap block">
             <span className="mx-4">Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
             <span className="mx-4">Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
           </div>
     </div>
    
  )
}
