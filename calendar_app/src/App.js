import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import {theme} from './constants/theme'
import { Provider } from 'react-redux'
import store from './redux/store'
import {Calendar} from './components/calendar/calendar'


const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Calendar />
    </ThemeProvider>
  </Provider>
)
export default App