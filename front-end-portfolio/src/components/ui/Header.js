import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
    const { children} = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
function Header(props) {
    return (
      <div className="">
        <ElevationScroll>
        <AppBar position="fixed" color="secondary">
            <Toolbar>
                    <h1>EU</h1> 
            </Toolbar>
        </AppBar>
        </ElevationScroll>
      </div>
    );
  }
  
  export default Header;