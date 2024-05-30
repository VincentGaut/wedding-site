import React from 'react';
import './../styles/Gallery.css';

const Gallery = () => (
  <section id="gallery">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {/* Add your image URLs here */}
      <img src="image1.jpg" alt="Gallery 1" />
      <img src="image2.jpg" alt="Gallery 2" />
      <img src="image3.jpg" alt="Gallery 3" />
    </div>
    <h1> Pas encore disponible ! Wait and see</h1>
  </section>
);

export default Gallery;
