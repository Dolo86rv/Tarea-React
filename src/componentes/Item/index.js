import { Popover, Transition } from "@headlessui/react"
import { Fragment, useRef } from "react"
import { Link} from './styles'

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
                  text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
                  <Popover.Panel className="absolute z-10 w-screen px-4 mt-0 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div
                      className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                      <div className="relative grid gap-8 bg-gray-200 mt-3 p-7 lg:grid-cols-2">
                        {items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="ml-4">
                              <p className="pb-6 pt-6 text-3xl leading-10 space-x-0 text-gray-700">
                                {item.name}
                              </p>
                                <ul>
                                  <li className="text-sm text-gray-500">
                                    {item.description}
                                  </li>
                                  
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
