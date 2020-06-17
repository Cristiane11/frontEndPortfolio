import React from 'react';
import {ThemeProvider } from '@material-ui/core/styles';import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <p>Cristiane Abreu</p>
      <hr/>
    </ThemeProvider>
  );
}

export default App;
