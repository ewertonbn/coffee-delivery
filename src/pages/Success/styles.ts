import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  max-width: 72.5rem;
  margin: 5rem auto;
  padding: 0 1.25rem;
  display: flex;
  gap: 6.375rem;
`

export const Content = styled.div`
  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['yellow-dark']};
    margin-bottom: 4px;
  }

  p {
    ${mixins.fonts.textL}
  }
`

export const Box = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.colors.yellow}, ${props.theme.colors.purple})`};
  width: 100%;
  margin-top: 2.5rem;
`

export const BoxContent = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 100%;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`
