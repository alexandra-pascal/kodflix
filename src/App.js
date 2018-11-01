import React, { Component } from 'react';
// import logo from './logo.svg';
import venom from './img/venom.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kodflix</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Did it!
        </p> */}
        <header className="App-body">
          <img src={venom} className="App-img" alt="img" />
        </header>
      </div>
    );
  }
}

export default App;
