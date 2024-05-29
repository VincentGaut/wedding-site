import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ya0lytw', "template_r43wxss", e.target,
        'KLJjF-GwwxrCwghFo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset();
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      );

}

export default Contact