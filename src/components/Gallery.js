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
            <div className='qrCode'></div>
            <div className='text-qrCode'>
              <p><strong>Accéder à l'album : </strong></p>
            <p>Ouvrez WedShoots sur votre téléphone portable, ajoutez votre prénom et introduisez le code de l'album ou scannez le QR code.</p>
            <p>Code de l'album :<strong>FRa87ccc60</strong></p></div>
        </div>

    </div>
    
  </section>
);

export default Gallery;
