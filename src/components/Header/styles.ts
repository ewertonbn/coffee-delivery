import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  padding: 2rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${(props) => props.theme.colors.background};

  & > div {
    max-width: 72.5rem;
    margin: 0 auto;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  border-radius: 6px;
  ${mixins.fonts.textS};

  svg {
    fill: ${(props) => props.theme.colors.purple};
  }
`

interface ButtonCartProps {
  $items: number
}

export const ButtonCart = styled(Link)<ButtonCartProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 6px;
  color: ${(props) => props.theme.colors['yellow-dark']};
  position: relative;

  &:before {
    content: '${(props) => props.$items}';
    position: absolute;
    top: -8px;
    right: -8px;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    ${mixins.fonts.textS};
  }
`
