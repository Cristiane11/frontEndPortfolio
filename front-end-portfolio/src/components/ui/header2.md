# this is the header before
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


  }))

function Header(props) {
  const classes = useStyles();
  const[value,setValue]=useState(0);
  const [anchorEl,setAnchorEl]=useState(null);
  const[open,setOpen]=useState(false);
  


  const handleChange =(e,value)=>{
    setValue(value);
  };

  const handleClick = (e)=>{
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }
  
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
                    <MenuItem onClick ={()=>{handleClose();setValue(1)}} component={Link} to='/services' classes={{root:classes.MenuItem}}>Services</MenuItem>
                    <MenuItem onClick ={()=>{handleClose();setValue(1)}} component={Link} to='/customosoftware' classes={{root:classes.MenuItem}}>Custom Software Developement</MenuItem>
                    <MenuItem onClick ={()=>{handleClose();setValue(1)}} component={Link} to='/mobileapps' classes={{root:classes.MenuItem}}>Mobile App Developement</MenuItem>
                    <MenuItem onClick ={()=>{handleClose();setValue(1)}}component={Link} to='/websites' classes={{root:classes.MenuItem}}>Webiste Developement</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
      </React.Fragment>
      
    );
  }
  
  export default Header;
  //Time 8:52 of the last video