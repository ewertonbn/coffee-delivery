import { OrderInfo } from '../../pages/Cart'

import { ActionTypes, ActionTypesProps } from './actions'

export interface Item {
  id: string
  title: string
  quantity: number
}

export interface Order {
  id: number
  items: Item[]
  order: OrderInfo
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.item.id,
      )

      if (!existingItem) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.item }],
        }
      }

      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            if (item.id === action.payload.item.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.item.quantity,
              }
            } else {
              return item
            }
          }),
        ],
      }
    }

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.itemId
        }),
      }

    case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          } else {
            return item
          }
        }),
      }
    }

    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.itemId && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          } else {
            return item
          }
        }),
      }
    }

    case ActionTypes.CHECKOUT: {
      const newOrder = {
        id: new Date().getTime(),
        items: state.cart,
        order: action.payload.order,
      }

      const orderData: Order = state.orders.find(
        (order) => order.id !== Number(newOrder),
      ) as Order

      if (orderData) {
        action.payload.callback(`/order/${newOrder.id}/success`)
      }

      return {
        orders: [newOrder],
        cart: [],
      }
    }

    default:
      return state
  }
}
