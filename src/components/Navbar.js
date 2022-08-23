import React from 'react';
import { AppBar , Toolbar  , styled } from '@mui/material';
import {NavLink} from 'react-router-dom';
const Header= styled(AppBar)`
  background-color: black;
`

const Tabs = styled(NavLink)`
  font-size : 20px;
  margin-right:20px;
  color:white;
  text-decoration:none;
`

const Navbar =()=>{
    return(
      <Header>
        <Toolbar>
            <Tabs to="/">Todo app</Tabs>
            <Tabs to="adduser">Add User</Tabs>
            <Tabs to="alluser">All User </Tabs>
        </Toolbar>
      </Header>
    )
}

export default Navbar;
