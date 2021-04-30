import { Button } from '@material-ui/core'
import React from 'react'
import './Header.scss'

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Header = () => {
  return ( 
    <div className="header">
      <div className="header__logoWrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" alt="" className="header__logo"/>
      </div>
      <ul className="header__nav">
        <li><NavLink exact to="/">Crypto</NavLink></li>
        <li><NavLink to="/watchlist">Watch</NavLink></li>
        <li><NavLink to="/portfolio">Portf</NavLink></li>
        
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
        variant="contained" color="primary">Log in</Button>
      </div>
    </div>
    );
}

export default Header;