import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <div>main Page with crypto</div>
          </Route>
          <Route path="/portfolio">
            <div>Portrolio</div>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
