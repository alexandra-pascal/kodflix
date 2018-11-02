import React, { Component } from 'react';
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
          <div className="flex-grid">
            <CoverPoster title="First Man" image={man}/>
            <CoverPoster title="Paddington" image={paddington}/>
            <CoverPoster title="Nutcracker" image={nutcracker}/>
          </div>
          <div className="flex-grid">
            <CoverPoster title="Blade Runner" image={runner}/>
            <CoverPoster title="Thor Ragnarok" image={thor}/>
            <CoverPoster title="Wonder Woman" image={wonder}/>
          </div>
      </div>
    );
  }
}
const CoverPoster = (props) => {
  return (
    <div className="wrap-cover">
      <img src={props.image} className="image" alt={props.title} />
      <h2>{props.title}</h2>
    </div>
  );
};
export default App;
