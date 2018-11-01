import React, { Component } from 'react';
import venom from './img/venom.jpg';
import man from './img/man.jpg';
import paddington from './img/paddington.jpg';
import nutcracker from './img/nutcracker.jpg';
import runner from './img/runner.jpg';
import thor from './img/thor.jpg';
import wonder from './img/wonder.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={venom} className="venom-cover" alt="venom-cover" />
          <div className="flex-grid">
            <div className="wrap-cover">
              <img src={man} className="img" alt="first-man-cover" />
              <div className="wrap-text">
                <h2 className="App-title">First Man</h2>
              </div>
            </div>
            <div className="wrap-cover">
              <img src={paddington} className="img" alt="paddington2-cover" />
              <div className="wrap-text">
                <h2 className="App-title">Paddington 2</h2>
              </div>
            </div>
            <div className="wrap-cover">
              <img src={nutcracker} className="img" alt="nutcracker-cover" />
              <div className="wrap-text">
                <h2 className="App-title">Nutcracker</h2>
              </div>
            </div>
          </div>

          <div className="flex-grid">
            <div className="wrap-cover">
              <img src={runner} className="img" alt="blade-runner-cover" />
              <div className="wrap-text">
                <h2 className="App-title">Blade Runner</h2>
              </div>
            </div>
            <div className="wrap-cover">
              <img src={thor} className="img" alt="thor-cover" />
              <div className="wrap-text">
                <h2 className="App-title">Thor Ragnarok</h2>
              </div>
            </div>
            <div className="wrap-cover">
              <img src={wonder} className="img" alt="wonder-woman-cover" />
              <div className="wrap-text">
                <h2 className="App-title">Wonder Woman</h2>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
