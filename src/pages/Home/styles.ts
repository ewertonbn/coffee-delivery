import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HeroSection = styled.section`
  padding: 5.75rem 0;
  position: relative;

  img#hero-bg {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100vw;
    max-height: 800px;
    object-fit: cover;
    z-index: -1;
  }
`

export const HeroContainer = styled.section`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: 36.875rem 1fr;
  gap: 3.5rem;
`

export const HeroContent = styled.div`
  h1 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors['base-title']};
    ${mixins.fonts.titleXL}
  }

  & > p {
    ${mixins.fonts.textL}
  }
`

export const HeroList = styled.ul`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

const VARIANT_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface HeroListItemProps {
  variant: keyof typeof VARIANT_COLORS
}

export const HeroListItem = styled.li<HeroListItemProps>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  ${mixins.fonts.textS}

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: ${(props) =>
      props.theme.colors[VARIANT_COLORS[props.variant]]};
  }

  svg {
    fill: ${(props) => props.theme.colors.white};
  }
`

export const CoffeeList = styled.section`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 9.8125rem;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  & > div {
    margin-top: 2.125rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`
