import { createContext, ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { OrderInfo } from '../pages/Cart'

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

interface Order {
  id: number
  items: Item[]
  order: OrderInfo
}

interface CartContextProps {
  cart: Item[]
  orders: Order[]
  addToCart: (item: Item) => void
  removeFromCart: (itemId: string) => void
  incrementItemQuantity: (itemId: string) => void
  decrementItemQuantity: (itemId: string) => void
  checkout: (order: OrderInfo) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])
  console.log(orders)

  const [cart, setCart] = useState<Item[]>(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

    if (storedCart) {
      return JSON.parse(storedCart)
    } else {
      return []
    }
  })

  function addToCart(item: Item) {
    const itemAlreadyAdded = cart.find((itemCart) => itemCart.id === item.id)
    const updateCart = [...cart]

    if (itemAlreadyAdded) {
      itemAlreadyAdded.quantity += item.quantity
      setCart(updateCart)
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
    const itemAlreadyRemoved = cart.filter((itemCart) => itemCart.id !== itemId)

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

  function checkout(order: OrderInfo) {
    const newOrder = {
      id: new Date().getTime(),
      items: cart,
      order,
    }

    setOrders((state) => [...state, newOrder])
    setCart([])
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
        orders,
        checkout,
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
