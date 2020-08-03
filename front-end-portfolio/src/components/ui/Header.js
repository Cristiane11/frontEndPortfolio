import React, { useState,useEffect, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import logo from '../../assets/logo.svg'
import { useIsFocusVisible } from '@material-ui/core';

function ElevationScroll(props) {
    const { children} = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }
  const useStyles = makeStyles(theme=>({
    toolbarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:'3em'

    },
    logo:{
      height:'8em'
    },
    logoContainer:{
      padding:0,
      "&:hover":{
        backgroundColor:"transparent"
      }

    },
    tabContainer:{
      marginLeft:'auto'
    },
    tab:{
      ...theme.typography.tab,
      minWidth:10,
      marginLeft:"25px"
   
    },
    button:{
      ...theme.typography.estimate,
      borderRadius:"50px", 
      marginLeft:"50px",
      marginRight:"25px",
      height:"45px"

    },
    menu:{
      backgroundColor:theme.palette.common.blue,
      color:"white",
      borderRadius:"0px"
    },
    MenuItem:{
      ...theme.typography.tab,
      opacity:0.7,
      "&:hover":{
        opacity:1
      }
    }
  }));

function Header(props) {
  const classes = useStyles();
  const[value,setValue]=useState(0);
  const [anchorEl,setAnchorEl]=useState(null);
  const[open,setOpen]=useState(false);
  const [selectedIndex, setSelectedIndex]= useState(0)


  const handleChange =(e,value)=>{
    setValue(value);
  };

  const handleClick = e=>{
    setAnchorEl(e.currentTarget)
    setOpen(true)
  };
  const handleMenuItemClick=(e, i)=>{
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i)
  }
  const handleClose = e => {
    setAnchorEl(null)
    setOpen(false)
  };
  const menuOptions=[{name:"Services", Link:"/services"},{name:"Custom Software Development", Link:"/customsoftware"},{name:"Mobile App Development", Link:"/mobileapps"},{name:"Websites Development", Link:"/websites"}]
  
  useEffect(()=>{
    if(window.location.pathname==='/'&& value !==0){
      setValue(0)
    }else if (window.location.pathname==='/services'&& value !==1){
      setValue(1)
    }else if (window.location.pathname==='/revolution'&& value !==2){
      setValue(2)
    }else if (window.location.pathname==='/about'&& value !==3){
      setValue(3)
    }else if (window.location.pathname==='/contact'&& value !==4){
      setValue(4)
    }else if (window.location.pathname==='/estimate'&& value !==5){
      setValue(5);
      }
  },[value]);

    return (
      <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
              <Button component={Link} to='/' disableRipple onClick={()=>setValue(0)} className={classes.logoContainer}>
             <img alt ='company logo' className={classes.logo} src={logo}/> 
             </Button>  
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
              <Tab className={classes.tab} component={Link} to='/' label="Home"/>
              <Tab aria-owns ={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true":undefined} onMouseOver={event=>handleClick(event)} className={classes.tab} component={Link} to='/services'  label="Services"/>
              <Tab className={classes.tab} component={Link} to='/revolution' label="The Revolution"/>
              <Tab className={classes.tab}component={Link} to='/about' label="About Us"/>
              <Tab className={classes.tab}component={Link}to='/contact'  label="Contact US"/>
             
            </Tabs>
                <Button  component={Link}to='/Estimate' variant='contained'color="secondary" className={classes.button}>
                  Free Estimate
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} classes={{paper:classes.menu}} MenuListProps={{onMouseLeave: handleClose}}elevation={0}>
                    {menuOptions.map((option, i)=>(
                      <MenuItem component={Link}  to= {option.link} classes={{root:classes.menuItem}} onClick ={(event)=>{handleMenuItemClick}}>
                        {option.name}
                      </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
      </React.Fragment>
      
    );
  }
  
  export default Header;
 