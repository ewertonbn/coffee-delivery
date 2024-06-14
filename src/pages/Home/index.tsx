import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { coffees } from '../../../data.json'
import heroImg from '../../../public/images/hero.svg'
import heroBgImg from '../../../public/images/hero-bg.svg'
import { Card } from '../../components/Card'

import {
  CoffeeList,
  HeroContainer,
  HeroContent,
  HeroList,
  HeroListItem,
  HeroSection,
} from './styles'

export function Home() {
  return (
    <>
      <HeroSection>
        <img src={heroBgImg} alt="" id="hero-bg" />
        <HeroContainer>
          <HeroContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <HeroList>
              <HeroListItem variant="yellowDark">
                <div>
                  <ShoppingCart weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </HeroListItem>
              <HeroListItem variant="gray">
                <div>
                  <Package weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </HeroListItem>
              <HeroListItem variant="yellow">
                <div>
                  <Timer weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </HeroListItem>
              <HeroListItem variant="purple">
                <div>
                  <Coffee weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </HeroListItem>
            </HeroList>
          </HeroContent>
          <img
            src={heroImg}
            alt="Um copo de café, com grãos de café ao redor"
          />
        </HeroContainer>
      </HeroSection>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CoffeeList>
    </>
  )
}
