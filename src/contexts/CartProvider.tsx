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

export interface Item {
  id: string
  title: string
  quantity: number
}

interface CartContextProps {
  cart: Item[]
  addToCart: (item: Item) => void
  removeFromCart: (itemId: string) => void
  incrementItemQuantity: (itemId: string) => void
  decrementItemQuantity: (itemId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

    if (storedCart) {
      return JSON.parse(storedCart)
    } else {
      return []
    }
  })
  console.log(cart)

  function addToCart(item: Item) {
    const itemAlreadyAdded = cart.find((itemCart) => itemCart.id === item.id)

    if (itemAlreadyAdded) {
      itemAlreadyAdded.quantity += item.quantity
      toast.success(
        `+ ${item.quantity} ${item.title} adicionado ao carrinho!`,
        { duration: 4000 },
      )
    } else {
      setCart((state) => [...state, item])
      toast.success(
        `+ ${item.quantity} ${item.title} adicionado ao carrinho!`,
        { duration: 4000 },
      )
    }
  }

  function removeFromCart(itemId: string) {
    const itemAlreadyRemoved = cart.filter((itemCart) => itemCart.id === itemId)

    setCart(itemAlreadyRemoved)
  }

  function incrementItemQuantity(itemId: string) {
    const updateCart = [...cart]
    const itemToIncrement = cart.find((item) => item.id === itemId)

    if (itemToIncrement) {
      itemToIncrement.quantity += 1
      setCart(updateCart)
    }
  }

  function decrementItemQuantity(itemId: string) {
    const updateCart = [...cart]
    const itemToDecrement = cart.find((item) => item.id === itemId)

    if (itemToDecrement?.id) {
      itemToDecrement.quantity -= 1
      setCart(updateCart)
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:cart-state-1.0.0',
      JSON.stringify(cart),
    )
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
