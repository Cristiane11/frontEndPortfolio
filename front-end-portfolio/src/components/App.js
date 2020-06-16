import React from 'react';
import {ThemeProvider } from '@material-ui/core/styles';import Header from './ui/Header';


function App() {
  return (
    <ThemeProvider>
      <Header/>
      <p>Cristiane Abreu</p>
      <hr/>
    </ThemeProvider>
  );
}

export default App;
