import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideStats from './components/SideStats/SideStats';
import CryptoList from './components/CryptoList/CryptoList';
import WalletList from './components/WalletList/WalletList'
import ModalMy from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        {/* <div className="gradient" /> */}
        <div className="mainBoard">
          <SideStats/>
          <Switch>
            <Route exact path="/">
              <CryptoList/>
            </Route>
            <Route path="/portfolio">
              <WalletList/>
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <ModalMy/> */}

    </div>
  );
}

export default App;
