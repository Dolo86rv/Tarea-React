import React from 'react'

export const Marquee = () => {
  const colorDiv={background:'#3eb1c8'};
  return (
    
      <div className="relative overflow-x-hidden text-white h-12" style={colorDiv}>
          <div className="animate-marquee py-3  whitespace-nowrap">
             <span>Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
           </div>
     </div> 
  )
}
