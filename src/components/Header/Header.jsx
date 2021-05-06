import { Button } from '@material-ui/core'
import React from 'react'
import './Header.scss'

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import {
  NavLink, useHistory
} from "react-router-dom";

import { auth } from '../../firebase'

const Header = () => {
  const history =useHistory();

  const logOut = () => {
    auth.signOut();
    history.push('/');
  }
  return ( 
    <div className="header">
      <div className="header__logoWrapper">
        <img 
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" 
        src="https://cdn.pixabay.com/photo/2017/08/14/14/38/bitcoin-2640692_960_720.png"alt="" className="header__logo"/>
      </div>
      <ul className="header__nav">
        <li><NavLink exact to="/">Cryptocurrencies</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        
      </ul>
      <div className="header__searchBar">
      <IconButton size="small">
        <SearchIcon />
      </IconButton>
      <input
        type="text"
        placeholder="Search"/>
      </div>
      <div className="header__login">
        <Button 
        onClick={logOut}
        variant="contained" color="primary">Log out</Button>
      </div>
    </div>
    );
}

export default Header;