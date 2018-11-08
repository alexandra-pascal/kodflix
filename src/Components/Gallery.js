import React from 'react'
import man from '../img/man.jpg';
import paddington from '../img/paddington.jpg';
import nutcracker from '../img/nutcracker.jpg';
import runner from '../img/runner.jpg';
import thor from '../img/thor.jpg';
import wonder from '../img/wonder.jpg';

import Cover from './Cover';

import '../css/Gallery.css';

const MovieCovers = props =>
  <div>
    <div className="background">
    <div className="flex-grid">
      <Cover title="First Man" image={ man } id="First-Man"/>
      <Cover title="Paddington" image={ paddington } id="Paddington"/>
      <Cover title="Nutcracker" image={ nutcracker } id="Nutcracker"/>
      <Cover title="Blade Runner" image={ runner } id="Blade-Runner"/>
      <Cover title="Thor Ragnarok" image={ thor } id="Thor-Ragnarok"/>
      <Cover title="Wonder Woman" image={ wonder } id="Wonder-Woman"/>
    </div>
  </div>
  </div>

export default MovieCovers;
