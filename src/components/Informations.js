import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './../styles/Information.css';

const Information = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const [submitted, setSubmitted] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, e.target,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              setSubmitted(true);
          }, (error) => {
              console.log(error.text);
              setSubmitted(false);
          });
        
        e.target.reset();
      };
    
      return (
        <div className='information-wrapper'>
            <div className='information-container'>
              <div className='information-text'>
                <h2> Se rendre à la Gentilhomiere : </h2>
                <p> Plus d'informations concernant le programme seront publiées plus tard</p>
                <ul className='list-info'>
                  <li><b>En voiture :</b> se rendre à l'adresse 2 Rue de l'Église, 59269 Artres </li>
                  <li><b>En train : </b> Le domaine de la Gentilhomiere se trouve à coté de Valenciennes,
                    qui est accessible en train depuis Lille
                  </li>
                </ul>

                <h2> Se loger : </h2>
                <p> De nombreux hotels sont disponibles à Valenciennes mais aussi à Artres. Des 
                  chambres d'hôtes sont également disponibles.
                </p>
              </div>
            </div>
            <section id='contact'>
              <p> Pour toutes questions n'hésitez pas à nous contacter par téléphone ou par le formulaire!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Formulaire de contact</h2>
                  <div>
                    <label className='input-form-contact'>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                    <button className = "button-contact" type="submit">Send</button>
                  </div>
                </form>
                
            </section>
            {submitted && <h2 > Message bien envoyé</h2>}
            <div className='contact-deco'>
                    
            </div>
        </div>
      );

}

export default Information