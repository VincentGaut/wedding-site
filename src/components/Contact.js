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
        
        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, e.target,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset();
      };
    
      return (
        <div>
            <section id='contact'>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label className='input-form-contact'>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                    <button className = "button-contact" type="submit">Send</button>
                </form>
                
            </section>
            <div className='contact-deco'>
                    
            </div>
        </div>
      );

}

export default Contact