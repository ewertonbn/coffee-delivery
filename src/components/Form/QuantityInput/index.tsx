import { Minus, Plus } from 'phosphor-react'

import { Quantity } from './styled'

interface QuantityInputProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <Quantity>
      <button type="button" onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </Quantity>
  )
}
