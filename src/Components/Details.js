import React, { Component } from 'react';
import '../css/details.css';

class Details extends Component {
  constructor() {
    super();
    this.state = {message: "Hello, this will be the details page for each Movie and TV Show"}
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        message: "Coming soon! :)"
      });
    }, 3000)
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
export default Details;