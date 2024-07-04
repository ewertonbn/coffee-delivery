import { useParams } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import deliveryImg from '../../../public/images/delivery.svg'
import { useCart } from '../../hooks/useCart'
import { Order } from '../../reducers/cart/reducer'

import { Box, BoxContent, Container, Content } from './styles'

type OrderParams = {
  orderId: string
}

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams<OrderParams>()

  const orderData: Order = orders.find(
    (order) => order.id === Number(orderId),
  ) as Order

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  const theme = useTheme()

  if (!orderData?.id) {
    return null
  }

  return (
    <Container>
      <Content>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Box>
          <BoxContent>
            <div>
              <MapPin
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
                size={32}
                weight="fill"
              />
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderData?.order.street}, {orderData?.order.number}
                  </strong>
                </span>
                <span>
                  {orderData?.order.neighborhood} - {orderData?.order.city},{' '}
                  {orderData?.order.state}
                </span>
              </div>
            </div>
            <div>
              <Timer
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
                size={32}
                weight="fill"
              />
              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min </strong>
                </span>
              </div>
            </div>
            <div>
              <CurrencyDollar
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
                size={32}
              />
              <div>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>
                    {paymentMethod[orderData?.order.paymentMethod]}
                  </strong>
                </span>
              </div>
            </div>
          </BoxContent>
        </Box>
      </Content>
      <img
        src={deliveryImg}
        alt="Homem de camisa amarela e calça verde andando em uma motocicleta roxa"
      />
    </Container>
  )
}
