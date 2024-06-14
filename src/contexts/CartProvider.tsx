import { createContext, ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

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

interface CartContextProps {
  cart: Cart[]
  addToCart: (coffeeItem: Cart) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
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
      toast.success(
        `+ ${coffeeItem.quantity} ${coffeeItem.coffee.title} adicionado ao carrinho!`,
        { duration: 4000 },
      )
    } else {
      setCart((state) => [...state, coffeeItem])
      toast.success(
        `+ ${coffeeItem.quantity} ${coffeeItem.coffee.title} adicionado ao carrinho!`,
        { duration: 4000 },
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
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
