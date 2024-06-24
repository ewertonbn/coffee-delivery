import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../../public/logo.svg'
import { CartContext } from '../../contexts/CartProvider'

import { ButtonCart, Container, HeaderMenu, Location } from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <div>
        <Link to="/">
          <img
            src={logoImg}
            alt="Um copo de café com um foguete no meio, que represente o Coffee Delivery"
          />
        </Link>
        <HeaderMenu>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Praia Grande, SP</span>
          </Location>
          <ButtonCart to="cart" $items={cart.length}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </HeaderMenu>
      </div>
    </Container>
  )
}
