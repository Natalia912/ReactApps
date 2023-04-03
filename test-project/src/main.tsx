import React from 'react'
import ReactDOM from 'react-dom/client'
import { blue } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
      light: "#82b1ff",
    },
    secondary: {
      main: '#fff',
      contrastText: '#1c1b20'
    },
    info: {
      main: 'rgb(175,175,175)'
    },
    background: {
      default: 'rgb(28,27,32)'
    },
    text: {
      primary: '#fff',
      secondary: '#9e9e9e'
    }
  },

});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
)
