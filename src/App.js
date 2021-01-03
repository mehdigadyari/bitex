import React from 'react'
import { CssBaseline } from '@material-ui/core'
import RTL from './component/RTL'
import ThemeProvider from './component/ThemeProvider'
import MasterLayout from './screens/MasterLayout'
import LoginContextProvider from './contexts/LoginContext'

function App() {
  return (
    <ThemeProvider>
      <RTL>
        <CssBaseline />
        <LoginContextProvider>
          <MasterLayout />
        </LoginContextProvider>
      </RTL>
    </ThemeProvider>
  )
}

export default App
