import { useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'

import { Product } from '../../pages/Home'
import { QuantityInput } from '../QuantityInput'

import { ButtonAddCart, CardBox, Footer, Price, Tags } from './styled'

interface Cart {
  coffee: Product
  quantity: number
}
interface CardProps {
  coffee: Product
  addToCart: (data: Cart) => void
}

export function Card({ coffee, addToCart }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const newItemCart = {
      coffee,
      quantity,
    }

    addToCart(newItemCart)
    setQuantity(1)
  }

  return (
    <CardBox>
      <img src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <Footer>
        <Price>
          <span>R$</span> {coffee.price.toFixed(2)}
        </Price>
        <div>
          <QuantityInput
            increment={handleIncrement}
            decrement={handleDecrement}
            quantity={quantity}
          />
          <ButtonAddCart type="button" id={coffee.id} onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </ButtonAddCart>
        </div>
      </Footer>
    </CardBox>
  )
}
