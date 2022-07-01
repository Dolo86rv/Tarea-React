import { Popover, Transition } from "@headlessui/react"
import { Fragment, useRef } from "react"
import { Link} from '../Items/styles'


export const Item = ({title, items} = props) => {

  const buttonRef = useRef(null)
  const timeoutDuration = 200
  let timeout

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      })
    )
  }

  const onMouseEnter = (open) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = (open) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return (
    <div className="w-full">
      <Popover>
        {({ open }) => {
          return (
            <>
              <div onMouseLeave={onMouseLeave.bind(null, open)}>
                <Popover.Button
                  ref={buttonRef}
                  className={`
                  ${open ? "" : "text-opacity-90"}
                  text-white group bg-orange-700 px-3 py-1 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  <Link>
                    <a className="normal-case" href="/aboutus">{title}</a>
                  </Link>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-screen text-left px-4 mt-0 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div
                      className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                      <div className="relative bg-gray-200 mt-2 p-4 grid lg:grid-cols-3 divide-x gap-8">
                      {items.map((item) => (
                          <a
                            key={item.name}
                            href="/home"
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="ml-4">
                              <p className="pb-6 pt-6 text-3xl leading-10 space-x-0 text-gray-700">
                                {item.name}
                              </p>
                                <ul className="text-sm text-gray-500">
                                    {item.description.map((elemento,)=>
                                    <li>
                                       <a className="normal-case" href={item.href.map((h,i)=>h)}>{elemento}</a> 
                                    </li> )}
                                </ul>
                              </div>
                           </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            </>
          )
        }}
      </Popover>
    </div>
  )
}
