import React from "react";
import { Link } from "react-router-dom";

export default function Cover(props) {
  return (
    <div className="wrap-cover">
      <Link to={props.id}>
        <img src={props.image} alt={props.title} className="image" />
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}
