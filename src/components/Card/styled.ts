import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const CardBox = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
  }

  img {
    margin-top: -2.5rem;
    width: 3.75rem;
    height: 3.75rem;

    @media (min-width: 1024px) {
      width: 7.5rem;
      height: 7.5rem;
    }
  }

  h3 {
    ${mixins.fonts.textXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: 768px) {
      ${mixins.fonts.titleS}
    }
  }

  p {
    ${mixins.fonts.textXS}
    font-weight: normal;
    text-align: center;
    color: ${(props) => props.theme.colors['base-label']};

    @media (min-width: 768px) {
      ${mixins.fonts.textS}
    }
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0.75rem 0 1rem;

  span {
    ${mixins.fonts.tag}
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 6.25rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const Price = styled.strong`
  ${mixins.fonts.titleM}

  span {
    ${mixins.fonts.textS}
  }
`

export const Footer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.375rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const ButtonAddCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }

  svg#spinner {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
