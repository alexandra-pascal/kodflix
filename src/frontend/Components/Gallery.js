import React from "react";
import Covers from "./Covers";
import Cover from "./Cover";
import "../css/gallery.css";

const Gallery = () => (
  <div>
    <div className="background">
      <div className="flex-grid">
        {Covers.map((cover, index) => (
          <Cover
            key={index}
            id2={cover.id}
            title2={cover.title}
            image2={cover.image}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
