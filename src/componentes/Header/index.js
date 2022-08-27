import logo from '../../img/logo-1.svg'
import { Items } from '../Items'
import { Container } from './styles'
import { HashLink as Link } from 'react-router-hash-link';



export const Header = () => {
   
    return (
      <nav className="flex flex-wrap justify-between items-center fixed top-0 left-0 right-0 box-border bg-white z-50 px-0 py-2 lg:flex-nowrap lg:items-stretch lg:pb-0 lg:px-16">
        <Link className="items-stretch py-5px pl-4 mr-4 mb-0 lg:mb-2 whitespace-nowrap leading-8 inline" to="/">
          <img className="align-middle box-border w-104px h-10" src= {logo} alt='logo'></img>
        </Link>
        <Items />
      </nav>
  )
}


/* p-0 w-full mx-auto" style={{height:'calc(100vh - 66px)'}}

<nav className="flex flex-wrap fixed top-0 shadow-3xl justify-between items-center py-2 bg-white z-50">
        <div className="justify-between p-0 w-full">
          
        </div>
      </nav>

      <header className="fixed inset-x-0 justify-end bg-white pl-20 z-50 min-w-full">
      <div className="flex pt-3 pb-3 w-full">
        <div className="flex-none sm:align-middle">
          <Link className="text-lg" to="/">
             <img className="" src= {logo} alt='logo' width={104} height={40}></img>
           </Link>
        </div>
        <div className="flex-auto pt-1 pr-16">
          <Items>
          </Items >
        </div>
      </div>
    </header>

*/