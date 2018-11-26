import React from "react";
import { Redirect } from "react-router-dom";
import Covers from "./Covers";
import "../css/details.css";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = { cover: {} };
  }

  componentDidMount() {
    let coverData = Covers.find(
      cover => cover.id === this.props.match.params.coverId
    );
    this.setState({ cover: coverData });
  }

  render() {
    return this.state.cover ? (
      <h1>{this.state.cover.title}</h1>
    ) : (
      <Redirect to="/not-found" />
    );
  }
}
