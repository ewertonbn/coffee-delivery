import { Minus, Plus } from 'phosphor-react'

import { Quantity } from './styled'

interface QuantityInputProps {
  quantity: number
  increment: () => void
  decrement: () => void
}

export function QuantityInput({
  decrement,
  increment,
  quantity,
}: QuantityInputProps) {
  return (
    <Quantity>
      <button type="button" onClick={decrement}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={increment}>
        <Plus size={14} />
      </button>
    </Quantity>
  )
}
