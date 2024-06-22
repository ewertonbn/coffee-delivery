import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import * as zod from 'zod'

import { coffees } from '../../../data.json'
import { QuantityInput } from '../../components/Form/QuantityInput'
import { Radio } from '../../components/Form/Radio'
import { TextInput } from '../../components/Form/TextInput'
import { CartContext } from '../../contexts/CartProvider'
import { formatValueCurrency } from '../../utils/formatValueCurrency'

import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  ButtonCheckout,
  CartTotal,
  Coffee,
  CoffeeList,
  CoffeTitle,
  Container,
  Control,
  Info,
  InfoContainer,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
} from './styles'

const newOrderValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.string(),
})

type newOrderData = zod.infer<typeof newOrderValidationSchema>

export function Cart() {
  const { cart, removeFromCart, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext)

  const newOrderForm = useForm<newOrderData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      cep: 0,
      street: '',
      number: '',
      fullAddress: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: '',
    },
  })

  const {
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = newOrderForm

  const selectedPaymentMethod = watch('paymentMethod')

  const coffeesInCart = cart.map((item) => {
    const coffeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeInfo) {
      throw new Error('Indalid coffee!')
    }

    return {
      ...coffeInfo,
      quantity: item.quantity,
    }
  })

  const totalPriceItemsCart = coffeesInCart.reduce((acc, item) => {
    return item.quantity * item.price + acc
  }, 0)

  const shippingValue = 3.5

  function handleCreateNewOrder(data: newOrderData) {
    if (cart.length === 0) {
      return alert('É necessário adicionar pelo menos um café ao carrinho')
    }
    console.log(data)

    reset()
  }

  function handleRemoveFromCart(itemId: string) {
    removeFromCart(itemId)
  }

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
          <AddressContainer>
            <AddressHeading>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                {...register('cep', { valueAsNumber: true })}
                error={errors.cep}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
                error={errors.street}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
                error={errors.number}
              />
              <TextInput
                placeholder="Complemente"
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                {...register('fullAddress')}
                error={errors.fullAddress}
                optional
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
                error={errors.neighborhood}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
                error={errors.city}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
                error={errors.state}
              />
            </AddressForm>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>

              {errors.paymentMethod && (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              )}
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <CartTotal>
          <CoffeeList>
            {coffeesInCart.map((coffee) => {
              return (
                <Coffee key={coffee.id}>
                  <div>
                    <img src={coffee.image} alt={coffee.title} />
                    <div>
                      <CoffeTitle>{coffee.title}</CoffeTitle>
                      <Control>
                        <QuantityInput
                          quantity={coffee.quantity}
                          incrementQuantity={() =>
                            handleItemIncrement(coffee.id)
                          }
                          decrementQuantity={() =>
                            handleItemDecrement(coffee.id)
                          }
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveFromCart(coffee.id)}
                        >
                          <Trash size={16} />
                          <span>Remover</span>
                        </button>
                      </Control>
                    </div>
                  </div>
                  <span>{formatValueCurrency(coffee.price)}</span>
                </Coffee>
              )
            })}
          </CoffeeList>
          <Info>
            <div>
              <p>Total de itens</p>
              <span>{formatValueCurrency(totalPriceItemsCart)}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>{formatValueCurrency(shippingValue)}</span>
            </div>
            <div>
              <p>Total</p>
              <span>
                {formatValueCurrency(totalPriceItemsCart + shippingValue)}
              </span>
            </div>
          </Info>
          <ButtonCheckout type="submit" form="order">
            Confirmar pedido
          </ButtonCheckout>
        </CartTotal>
      </InfoContainer>
    </Container>
  )
}
