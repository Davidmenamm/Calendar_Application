import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './constants/theme'

import {Calendar} from './components/calendar/calendar'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Calendar />
  </ThemeProvider>
)
export default App