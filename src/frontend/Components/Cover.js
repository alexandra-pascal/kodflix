import React from "react";
import { Link } from "react-router-dom";

export default function Cover(props) {
  return (
    <div className="wrap-cover">
      <Link to={props.id2}>
        <img src={props.image2} alt={props.title2} className="image" />
        <h2>{props.title2}</h2>
      </Link>
    </div>
  );
}
