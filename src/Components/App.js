import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieCovers from './MovieCovers';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ MovieCovers }></Route>
          <Route path="/details" exact component={ Details }></Route>
        </div>
      </Router>
    );
  }
}

export default App;
