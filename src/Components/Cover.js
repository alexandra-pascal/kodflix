import React from 'react'
import { Link } from 'react-router-dom';

const Cover = (props) => {
  return (
    <div className="wrap-cover">
      <Link to="/details">
        <img src={ props.image } alt={ props.title } className="image"/>
        <h2>{ props.title }</h2>
      </Link>
    </div>
  );
};

export default Cover;