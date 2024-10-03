import React from "react";
import "../styles/LandingPage.css"; // Importing styles
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero">
        <div className="backboard">
          <h2>Your Vision, My Passion</h2>
          <p>Capturing moments that matter.</p>
        </div>
      </section>
      <section id="about" className="about">
        <About />
      </section>
      <footer className="footer">
        <Contact />
        <p>&copy; 2024 Camera Legacy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
