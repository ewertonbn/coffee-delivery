import { useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'

import { QuantityInput } from '../QuantityInput'

import { ButtonAddCart, CardBox, Footer, Price, Tags } from './styled'

interface Card {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CardProps {
  data: Card
}

export function Card({ data }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const newItemCart = {
      data,
      quantity,
    }
    console.log(newItemCart)
  }

  return (
    <CardBox>
      <img src={data.image} alt={data.title} />
      <Tags>
        {data.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Footer>
        <Price>
          <span>R$</span> {data.price.toFixed(2)}
        </Price>
        <div>
          <QuantityInput
            increment={handleIncrement}
            decrement={handleDecrement}
            quantity={quantity}
          />
          <ButtonAddCart type="button" id={data.id} onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </ButtonAddCart>
        </div>
      </Footer>
    </CardBox>
  )
}
