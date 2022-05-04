import React, { useState } from 'react';
import {  AppBar, Avatar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { HiOutlineMenu , HiOutlineUser, HiOutlineUserAdd } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import './Menu.css';

function Menu(props)
{
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathname)
    {
        window.location.href = pathname;
        setCurrentPage(pathname);
    }

    function handleDrawer(isOpen)
    {
        setOpen(isOpen);
    }

    const pages = 
    [
        {
            pathname: "/home",
            icon: <HiOutlineMenu/>,
            text: "Home",
            iconSize: '2em',
        },
        {
            pathname: "/login",
            icon: <HiOutlineUser/>,
            text: "Login",
            iconSize: '1.5em',
        },
        {
            pathname: "/cadastro",
            icon: <HiOutlineUserAdd/>,
            text: "Cadastro",
            iconSize: '1.5em',
        },
    ];

    return(
        <>
        <AppBar position="static">
            <Toolbar style={{backgroundColor: 'white'}}>
                <IconButton
                    onClick={() => handleDrawer(!open)}
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    < HiOutlineMenu/>
                </IconButton>
                <div className="userConteiner">
                    <p className="userName">Ana Laura</p>
                    <Avatar alt="Ana Laura" src="/images/AnaLaura.jpg" />
                </div>
            </Toolbar>
        </AppBar>
        {props.children}
        <Drawer open = {open} onClose={()=>handleDrawer(false)}>
            <List className = "list">
                {pages.map((listItem) => {
                    return(
                        <ListItem button selected = {currentPage === listItem.pathname} onClick={() => {handleClick(listItem.pathname)}}>
                            <IconContext.Provider value={{color: '#000000',size: listItem.iconSize}}>
                                {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className="textHome">
                                <Typography >{listItem.text}</Typography>
                            </ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
        </>
        
    );
}

export default Menu;