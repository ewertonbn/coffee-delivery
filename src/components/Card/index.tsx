import { useContext, useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'

import { CartContext, Product } from '../../contexts/CartProvider'
import { QuantityInput } from '../Form/QuantityInput'

import { ButtonAddCart, CardBox, Footer, Price, Tags } from './styled'

interface CardProps {
  coffee: Product
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const { addToCart } = useContext(CartContext)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    const newItem = {
      id: coffee.id,
      title: coffee.title,
      quantity,
    }

    addToCart(newItem)
    setQuantity(1)
  }

  return (
    <CardBox>
      <img src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag: string) => {
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
            incrementQuantity={handleIncrement}
            decrementQuantity={handleDecrement}
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
