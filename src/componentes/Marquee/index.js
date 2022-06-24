import React from 'react'

export const Marquee = () => {
  const colorDiv={background:'#3eb1c8'};
  return (
    
       <div class="overflow-x-hidden text-white" style={colorDiv}>
            <div class="py-3 animate-marquee whitespace-nowrap ">
                <span class="text-sm mx-8">Vacunación Covid 19| Lunes-Viernes 8:30am-3:00pm</span>
                <span class="text-sm mx-8">Vacunación Covid 19| Lunes-Viernes 8:30am-3:00pm</span>
           </div>
       </div>
    
  )
}
