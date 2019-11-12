import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { HashRouter, Route } from 'react-router-dom'
import Routes from './Routes'
import axios from 'axios';


if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://houser.devmountain.com/v2/part/2'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Header />
            {Routes}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
