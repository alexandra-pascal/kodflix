import React from 'react'
import man from '../img/man.jpg';
import paddington from '../img/paddington.jpg';
import nutcracker from '../img/nutcracker.jpg';
import runner from '../img/runner.jpg';
import thor from '../img/thor.jpg';
import wonder from '../img/wonder.jpg';

import Cover from './Cover';

import '../css/MovieCovers.css';

const MovieCovers = props =>
  <div>
    <div className="flex-grid">
      <Cover title="First Man" image={ man }/>
      <Cover title="Paddington" image={ paddington }/>
      <Cover title="Nutcracker" image={ nutcracker }/>
    </div>
    <div className="flex-grid">
      <Cover title="Blade Runner" image={ runner }/>
      <Cover title="Thor Ragnarok" image={ thor }/>
      <Cover title="Wonder Woman" image={ wonder }/>
    </div>
  </div>

export default MovieCovers;
