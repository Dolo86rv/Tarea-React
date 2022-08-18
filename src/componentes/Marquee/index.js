import React from 'react'


export const Marquee = () => {

  return (
    <div className=" h-12 z-40 w-full">
        <div className="relative overflow-x-hidden text-white bg-turquee box-border">
              <div className="animate-marquee py-3 whitespace-nowrap">
                <span>Vacunación Covid 19 | Lunes-Viernes 8:30am-3:00pm</span>
              </div>
        </div>
     </div> 
  )
}
