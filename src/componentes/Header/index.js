import logo from '../../img/logo-1.svg'
import { Items } from '../Items'
import { Container } from './styles'
import { HashLink as Link } from 'react-router-hash-link';



export const Header = () => {
   
    return (
    <nav className=" fixed shadow-3xl bg-white h-17 z-50 min-w-full px-0 py-2 lg:pt-2 lg:px-16 lg:pb-0 lg:items-stretch">
      <div className="flex flex-wrap justify-between w-full lg:flex-nowrap lg:items-stretch">
        <Link className="flex items-stretch py-5px pl-4 mr-4 mb-2 whitespace-nowrap" to="/">
            <img className="align-middle" src= {logo} alt='logo' width={104} height={40}></img>
        </Link>
        <Items />
      </div>
    </nav>
  )
}
