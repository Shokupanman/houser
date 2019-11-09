import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
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
