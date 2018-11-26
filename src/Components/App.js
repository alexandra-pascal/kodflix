import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route path="/" exact component={ Gallery }></Route>
           <Route path='/:coverId' component={Details} />
         </div>
      </Router>
    )
  }
}
