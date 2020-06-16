import React from 'react';
import {ThemeProvider } from '@material-ui/core/styles';import Header from './ui/Header';


function App() {
  return (
    <ThemeProvider>
    <div className="">
      <Header/>
      <p>Cristiane Abreu</p>
      <hr/>
    </div>
    </ThemeProvider>
  );
}

export default App;
