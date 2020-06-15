import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
function Header(props) {
    return (
      <div className="">
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar>
                    <h1>EU</h1> 
            </Toolbar>
        </AppBar>
        </ElevationScroll>
      </div>
    );
  }
  
  export default Header;