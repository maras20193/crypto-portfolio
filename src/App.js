import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import SideStats from './components/SideStats/SideStats';
import CryptoList from './components/CryptoList/CryptoList';
import WalletList from './components/WalletList/WalletList'
import LoginScreen from './components/LoginScreen/LoginScreen';
import Modal from './components/Modal/Modal'

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import { auth } from './firebase';
import {LOG_IN, LOG_OUT} from './features/user/userSlice'

import axios from './axios'
import requests from './requests';
import { SET_COIN_LIST } from './features/coinList/coinList';

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth){
      dispatch(LOG_IN({
        uid: userAuth.uid,
        email: userAuth.email,
      }))
    } else {
      dispatch(LOG_OUT())
    }
    return unsubscribe
  })
},[dispatch])

useEffect(() => {
  async function fetchData(){
    const request = await axios.get(requests.fetchCoins);
    console.log(request)
    dispatch(SET_COIN_LIST(request.data))
    // setCoins(request.data)
  }
  fetchData()
}, [])

  return (
    <div className="App">
      <Router>
        {!user ? <LoginScreen/> :
        <>
        <Header/>
        <div className="mainBoard">
          <SideStats/>
            <Switch>
              <Route exact path="/">
                <CryptoList/>
              </Route>
              <Route path="/portfolio">
                <WalletList/>
              </Route>
              <Route path="/cryptocurrencies/:id">
                <div>jedna krypto</div>
              </Route>
          </Switch>
        </div>
        </>}
      </Router>
    </div>
  );
}

export default App;
