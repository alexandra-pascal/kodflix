import React, { Component } from 'react';
import venom from './img/venom.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={venom} className="venom-cover" alt="venom-cover" />
          <div className="flex-grid">
            <div className="wrap-cover">
              <h2 className="App-title">Venom</h2>
            </div>
            <div className="wrap-cover">
              <h2 className="App-title">Wonder Woman</h2>
            </div>
            <div className="wrap-cover">
              <h2 className="App-title">Nutcracker</h2>
            </div>
          </div>

          <div className="flex-grid">
            <div className="wrap-cover">
              <h2 className="App-title">Blade Runner</h2>
            </div>
            <div className="wrap-cover">
              <h2 className="App-title">Thor Ragnarok</h2>
            </div>
            <div className="wrap-cover">
              <h2 className="App-title">Paddington 2</h2>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
