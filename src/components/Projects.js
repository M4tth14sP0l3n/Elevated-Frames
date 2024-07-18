// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>Keursoft   <a href='https://q-s-keursoft-i4hn4s.flutterflow.app/loginPage' target='blank'>Demo</a> 
        <p>Keursoft is a sophisticated project developed during my internship as part of a team of three. Built using FlutterFlow, Keursoft is designed to streamline and automate various processes through the integration of multiple third-party services. The platform is packed with automated features that enhance efficiency and accuracy, making it a powerful tool for potential future users.</p>
        <p>Our team focused on creating a user-friendly interface and ensuring seamless functionality, leveraging the capabilities of FlutterFlow to accelerate development while maintaining high standards of performance and reliability. The use of third-party services allows Keursoft to offer a range of automated solutions, reducing manual effort and minimizing errors.</p>
        <p>Keursoft is a testament to our ability to work collaboratively and deliver a high-quality product within a professional setting. The project highlights our proficiency in modern development tools and our commitment to creating innovative solutions.</p></li>
        <li>Project 2: [Description]</li>
        <li>Project 3: [Description]</li>
      </ul>
    </div>
  );
};

export default Projects;
