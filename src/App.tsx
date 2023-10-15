import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { useState } from 'react'
import { ContextCartCount } from './utils/context-cart'
import { ContextFinalOrder, CreateFinalOrderData } from './utils/context-order'

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextFinalOrder, setContextFinalOrder] = useState<CreateFinalOrderData>({
    paymentMethod: '',
    logradouro: '',
    numero: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  return (
    <>
      <ContextFinalOrder.Provider value={{ contextFinalOrder: contextFinalOrder, setContextFinalOrder: setContextFinalOrder }}>
        <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <GlobalStyle />
          </ThemeProvider>
        </ContextCartCount.Provider>
      </ContextFinalOrder.Provider>
    </>
  )
}

export default App
