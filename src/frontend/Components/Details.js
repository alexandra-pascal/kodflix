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
    let cover3 = this.state.cover;
    return this.state.cover ? (
      <div className="details">
        <div className="details-title">{cover3.title}</div>
        <div className="details-content">
          <p className="details-content-text">{cover3.synopsis}</p>
          <div className="details-content-cover">
            <img src={cover3.image} alt={cover3.title} className="cover-image" />
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/not-found" />
    );
  }
}
