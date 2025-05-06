import React from 'react';
import './../styles/Gallery.css';

const Gallery = () => (
  <section id="gallery">
    {/*<h2>Gallery</h2>
    <div className="gallery-grid">
       Add your image URLs here 
      <img src="image1.jpg" alt="Gallery 1" />
      <img src="image2.jpg" alt="Gallery 2" />
      <img src="image3.jpg" alt="Gallery 3" />

      
    </div>*/}

    <div className='cat'>
        <div className='text-wrap'>
            <div className='text-qrCode'>
              <p><strong>Accéder à l'album : </strong></p>
            <p>Vous trouverez sur notre drive toutes les photos (Nous sommes encore en attente des photos des photographes)</p>
            <p> Acces  : <a href= 'https://drive.google.com/drive/folders/19v3XOmNWIgiiEQmRNUNXzU-ec7wYxE38?usp=drive_link'> lien drive photo </a>
            </p>
            </div>
        </div>

    </div>
    
  </section>
);

export default Gallery;
