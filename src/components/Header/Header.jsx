import { Button } from '@material-ui/core'
import React, { useRef } from 'react'
import './Header.scss'

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import {
  NavLink, useHistory
} from "react-router-dom";

import { auth } from '../../firebase'
import { useSelector } from 'react-redux';

import selectCoinList from '../../features/coinList/coinList'

const Header = () => {
  const history =useHistory();
  const inputRef = useRef();
  // const coinList = useSelector(selectCoinList);

  const logOut = () => {
    auth.signOut();
    history.push('/');
  }

  const search = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }
  return ( 
    <div className="header">
      <div className="header__logoWrapper">
        <img 
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" 
        src="https://cdn.pixabay.com/photo/2017/08/14/14/38/bitcoin-2640692_960_720.png"alt="" className="header__logo"
        />
      </div>
      <ul className="header__nav">
        <li><NavLink exact to="/">Cryptocurrencies</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        {/* <li><NavLink to="/cryptocurrencies">Test</NavLink></li> */}
        
      </ul>
      <form 
      onSubmit={search}
      type="submit"
      className="header__searchBar">
      <IconButton size="small">
        <SearchIcon />
      </IconButton>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"/>
      </form>
      <div className="header__login">
        <Button 
        onClick={logOut}
        variant="contained" color="primary">Log out</Button>
      </div>
    </div>
    );
}

export default Header;