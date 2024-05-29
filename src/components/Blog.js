import React from 'react';

import Footer from './Footer';
import MyMapComponent from './Lieux';
import './../styles/Blog.css';

const Blog = () => (
  <section id="Blog">
    <div className='image-wrapper'>
        <div className='image'></div>
    </div>

    
    <div className="blog-text">
        <h1 className='blog-title'>Blog de mariage ! </h1>

        <p className='blog-pres'>Attention ! Garde un oeil sur cette section, c'est ici que tu pourras découvrir les nouvelles 
        fraîches autour de l'organisation de notre mariage :)</p>
    </div>

    <MyMapComponent></MyMapComponent>
    
  </section>
);

export default Blog;
