// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: matthias.polen@gmail.com</p>
      <p>Phone: +32 470 66 82 64</p>
      <p>LinkedIn: <a href='https://www.linkedin.com/in/matthias-polen/' target='blank'>https://www.linkedin.com/in/matthias-polen/</a></p>
      <p>GitHub: <a href='https://github.com/M4tth14sP0l3n' target='blank'>https://github.com/M4tth14sP0l3n</a></p>
      <p>Pexels: <a href='https://www.pexels.com/@matthias-polen-725714564/'>https://www.pexels.com/@matthias-polen</a></p>
    </div>
  );
};

export default Contact;
