import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./Gallery";
import Details from "./Details";
import NotFound from "./NotFound";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/:coverId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}
