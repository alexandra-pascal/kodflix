import React from 'react';
import Covers from './Covers';
import '../css/details.css';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {cover: {}}
  }

  componentDidMount() {
    let cover = Covers.find(cover => cover.id === this.props.match.params.coverId);
    this.setState({cover})
  }

  render() {
    return (
      <div>
        <h1>{this.state.cover.title}</h1>
      </div>
    )
  }
}