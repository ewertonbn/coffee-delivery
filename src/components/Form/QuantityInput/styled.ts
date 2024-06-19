import styled from 'styled-components'

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;

  button {
    background: transparent;
  }
`
