import React from 'react'
import Logo from '../../img/ashford-logo-white.svg'

export const Footer = () => {
  return (
    <footer className="bg-c_footer w-full h-4/5" >
      <div className="grid grid-cols-3 gap-1 border-l border-blue-400">
          <div className="pt-2 p-4 m  w-80">
            <img src={Logo} width={147} height={56} alt="logo_footer"></img>
          </div>
          <div className="pt-2 px-4 m-2 w-64">2</div>
          <div className="pt-2 px-4 m-2 w-64">3</div>
        </div>  
    </footer>
  )
}
