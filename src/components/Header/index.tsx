import { NavLink } from 'react-router-dom'
import logo from '/images/logo.svg'
import { HeaderContainer } from './styles'
import { MapPin } from 'phosphor-react'
import CartIcon from '../CartIcon'

export function Header() {

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logo} />
      </NavLink>
      <nav>
        <p>
          <MapPin size={24} color='#8047F8' weight="fill" />
          Porto Alegre, RS
        </p>
        <span>
          <NavLink
            className='nav-link-header'
            to="/checkout" title='Cart'>
            <CartIcon />
          </NavLink>
        </span>
      </nav>
    </HeaderContainer>

  )
}
