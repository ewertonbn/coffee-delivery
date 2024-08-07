import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CircleNotch, ShoppingCartSimple } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'
import { QuantityInput } from '../Form/QuantityInput'

import { ButtonAddCart, CardBox, Footer, Price, Tags } from './styled'

interface Product {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}
interface CardProps {
  coffee: Product
}

export function Card({ coffee }: CardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [quantity, setQuantity] = useState<number>(1)
  const { addToCart } = useCart()

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    setIsLoading(true)

    const newItem = {
      id: coffee.id,
      title: coffee.title,
      quantity,
    }

    addToCart(newItem)
    toast.success('Produto adicionado ao carrinho')
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isLoading) {
      timeout = setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isLoading])

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
            {!isLoading ? (
              <ShoppingCartSimple weight="fill" size={22} />
            ) : (
              <CircleNotch id="spinner" size={22} />
            )}
          </ButtonAddCart>
        </div>
      </Footer>
    </CardBox>
  )
}
