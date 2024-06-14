import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/CartProvider'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <Toaster
        position="top-right"
        containerStyle={{ top: 110 }}
        reverseOrder={false}
      />
    </ThemeProvider>
  )
}
