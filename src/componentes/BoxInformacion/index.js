import React from 'react'

export const BoxInformacion = ({list_informacion, }) => {
  return (
    <div className="flex flex-col">
        {list_informacion.map((item)=>(
          <div key={item.id} className="flex bg-white mr-4 my-2 py-3 px-3 rounded">
            <img src={item.icons} width="18" height="18"></img>
            <span className="pl-2 text-sm font-medium text-darkfont">{item.description}</span>
          </div>
        ))}
    </div>
  )
}
