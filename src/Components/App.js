import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ Gallery }></Route>
          <Route path="/details" exact component={ Details }></Route>
        </div>
      </Router>
    );
  }
}

export default App;
