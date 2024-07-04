import { NavigateFunction } from 'react-router-dom'

import { OrderInfo } from '../../pages/Cart'

import { Item } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT = 'CHECKOUT',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_TO_CART; payload: { item: Item } }
  | {
      type:
        | ActionTypes.REMOVE_FROM_CART
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.DECREMENT_ITEM_QUANTITY
      payload: { itemId: Item['id'] }
    }
  | {
      type: ActionTypes.CHECKOUT
      payload: { order: OrderInfo; callback: NavigateFunction }
    }

export function addToCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  } satisfies ActionTypesProps
}

export function removeFromCartAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      itemId,
    },
  } satisfies ActionTypesProps
}

export function incrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies ActionTypesProps
}

export function decrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies ActionTypesProps
}

export function checkoutAction(order: OrderInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback,
    },
  } satisfies ActionTypesProps
}
