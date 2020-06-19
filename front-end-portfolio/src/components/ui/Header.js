import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
  const useStyles = makeStyles(theme=>({
    ToolbarMargin:{
      ...theme.mixins.Toolbar
    }
  }))

function Header(props) {
    return (
      <div className="">
        <ElevationScroll>
        <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant ="h6" >
              <h1>EU</h1>  
              </Typography>
                
            </Toolbar>
        </AppBar>
        </ElevationScroll>
      </div>
    );
  }
  
  export default Header;