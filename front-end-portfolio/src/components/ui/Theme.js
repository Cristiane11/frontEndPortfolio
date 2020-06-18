import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
//const arcBlue = '#0B72B9'
const arcBlue = '#75cb5b'
const arcOrange ='#dcffbc'
//const arcOrange = '#FFBA60'

const theme = createMuiTheme({
  palette: {
    common: {
      Blue:`${arcBlue}`,
      Orange:`${arcOrange}`
    },
    primary:{
        main:`${arcBlue}`
    },
    secondary: {
      main:`${arcOrange}`
    }
  }
});
  export default theme;