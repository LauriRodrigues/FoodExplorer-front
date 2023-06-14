import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider  } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { QuantitySelector } from "./components/QuantitySelector"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />  
      <QuantitySelector/>
    </ThemeProvider>
  </React.StrictMode>,
)
