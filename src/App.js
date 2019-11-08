import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import House from './Components/House/House'
import Header from './Components/Header/Header'
import Wizard from './Components/Wizard/Wizard'
import { HashRouter, Route } from 'react-router-dom'
import Routes from './Routes'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <Header />
            {Routes}
          </div>
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
