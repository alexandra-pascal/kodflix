import React from 'react';
import Covers from './Covers';
import Cover from './Cover';
import '../css/Gallery.css';

const Gallery = () =>
  <div>
    <div className="background">
      <div className="flex-grid">
      {
        Covers.map((cover, index) => <Cover key={index} id={cover.id} title={cover.title} image={cover.image}></Cover>)
      }
    </div>
  </div>
  </div>

export default Gallery;
