import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import { OrderInfo } from '../pages/Cart'
import {
  addToCartAction,
  checkoutAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeFromCartAction,
} from '../reducers/cart/actions'
import { cartReducer, Item, Order } from '../reducers/cart/reducer'

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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (initialState) => {
      const storedCartAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedCartAsJSON) {
        return JSON.parse(storedCartAsJSON)
      }

      return initialState
    },
  )

  const { cart, orders } = cartState

  const navigate = useNavigate()

  function addToCart(item: Item) {
    dispatch(addToCartAction(item))
  }

  function removeFromCart(itemId: Item['id']) {
    dispatch(removeFromCartAction(itemId))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutAction(order, navigate))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

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
