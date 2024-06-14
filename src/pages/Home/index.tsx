import { useEffect, useState } from 'react'
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

export interface Product {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface Cart {
  coffee: Product
  quantity: number
}

export function Home() {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

    if (storedCart) {
      return JSON.parse(storedCart)
    } else {
      return []
    }
  })
  console.log(cart)

  function addToCart(coffeeItem: Cart) {
    const itemAlreadyAdded = cart.find(
      (item) => item.coffee.id === coffeeItem.coffee.id,
    )

    if (itemAlreadyAdded) {
      itemAlreadyAdded.quantity += coffeeItem.quantity
      alert(
        `+ ${coffeeItem.quantity} ${coffeeItem.coffee.title} adicionado ao carrinho!`,
      )
    } else {
      setCart((state) => [...state, coffeeItem])
      alert(
        `+ ${coffeeItem.quantity} ${coffeeItem.coffee.title} adicionado ao carrinho!`,
      )
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:cart-state-1.0.0',
      JSON.stringify(cart),
    )
  }, [cart])

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
            return (
              <Card key={coffee.id} coffee={coffee} addToCart={addToCart} />
            )
          })}
        </div>
      </CoffeeList>
    </>
  )
}
