import logo from '../../img/logo-1.svg'
import { Items } from '../Items'
import { Container } from './styles'
import { HashLink as Link } from 'react-router-hash-link';


export const Header = () => {
   
    return (
    <Container>
      <div className="flex pt-3 pb-3 relative">
        <div className="flex-none">
          <Link className="text-lg" to="/">
             <img src= {logo} alt='logo' width={104} height={40}></img>
           </Link>
        </div>
        <div className="flex-auto pt-1">
          <Items>
          </Items >
        </div>
      </div>
    </Container>
  )
}
