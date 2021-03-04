import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#CCD5DA',
      200: '#FF0049',
      300: '#002B45',
      400: '#FFF1E5',
      500: '#41C2DF',
      600: '#597686',
    },
    white: '#FFFFFF',
    black: '#000000',
    success: '#4BB543',
    warning: '#F78A50',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
