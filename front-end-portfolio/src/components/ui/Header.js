import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Header(props) {
    return (
      <div className="">
        <AppBar position="fixed">
  <Toolbar>
    <h1>EU</h1> 
  </Toolbar>
</AppBar>
      </div>
    );
  }
  
  export default Header;