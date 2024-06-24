import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  max-width: 72.5rem;
  margin: 2.5rem auto;
  padding: 0 1.25rem;
  display: flex;
  gap: 2rem;
`

export const InfoContainer = styled.div`
  h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const DefaultContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.colors['base-card']};
`

export const AddressContainer = styled(DefaultContainer)`
  width: 100%;
  min-width: 40rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
`

export const Heading = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 2px;
  }

  span {
    ${mixins.fonts.textS}
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(DefaultContainer)`
  border-radius: 6px;
`

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
  margin-top: 8px;
`

export const CartTotal = styled(DefaultContainer)`
  width: 100%;
  min-width: 28rem;
  border-radius: 6px 44px 6px 44px;
`

export const Empty = styled.div`
  & > p {
    text-align: center;
    margin-bottom: 1rem;
  }

  & > a {
    margin: 0 auto;
    display: flex;
    width: fit-content;
    padding: 8px 12px;
    background: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};
    border-radius: 6px;
    text-decoration: none;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-right: 0.5rem;
  max-height: 21.875rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors['base-button']};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.yellow};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.125rem;
  padding: 8px 4px;
  position: relative;

  &:not(&:last-child) {
    &:before {
      content: '';
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors['base-button']};
    }
  }
`

export const CoffeeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    max-width: 4rem;
  }
`

export const CoffeTitle = styled.p`
  ${mixins.fonts.textM}
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const CoffeePrice = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0;

  span {
    ${mixins.fonts.textM}
    font-weight: 700;

    &:last-child {
      ${mixins.fonts.textXS}
      color: ${(props) => props.theme.colors.purple};
    }
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px;
    background: ${(props) => props.theme.colors['base-button']};
    border-radius: 6px;
    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors['base-hover']};
    }

    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    span {
      ${mixins.fonts.buttonM}
      text-transform: uppercase;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors['base-button']};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      ${mixins.fonts.textS}
    }

    span {
      ${mixins.fonts.textM}
    }

    &:last-child {
      p,
      span {
        ${mixins.fonts.textL}
        font-weight: bold;
      }
    }
  }
`

export const ButtonCheckout = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  ${mixins.fonts.buttonG}
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }

  svg {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
