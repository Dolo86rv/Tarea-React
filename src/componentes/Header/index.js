import logo from '../../img/logo-1.svg'
import { Items } from '../Items'
import { Container } from './styles'
import { HashLink as Link } from 'react-router-hash-link';


export const Header = () => {
   
    return (
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
  )
}
