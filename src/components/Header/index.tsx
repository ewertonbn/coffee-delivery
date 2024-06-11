import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../../public/logo.svg'

import { ButtonCart, Container, HeaderMenu, Location } from './styles'

export function Header() {
  return (
    <Container>
      <img
        src={logoImg}
        alt="Um copo de café com um foguete no meio, que represente o Coffee Delivery"
      />
      <HeaderMenu>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Praia Grande, SP</span>
        </Location>
        <ButtonCart $items="3">
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </HeaderMenu>
    </Container>
  )
}
