import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
//const arcBlue = '#75cb5b'
//const arcOrange ='#75cb5b'



const theme = createMuiTheme({
  palette: {
    common: {
      blue:`${arcBlue}`,
      orange:`${arcOrange}`
    },
    primary:{
        main:`${arcBlue}`
    },
    secondary: {
      main:`${arcOrange}`
    }
  },
    typography: {
      tab:{
      fontFamily:"Raleway",
      textTransform:"none",
      fontWeight:700,
      fontSize:"1rem",
    },
    estimate:{
      fontFamily:"Pacifico",
      fontSize:"1rem",
      textTransform:"none",
      color:"white"
    }
    
  }
});
  export default theme;