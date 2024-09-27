import React from 'react';
import '../styles/LandingPage.css'; // Importing styles
import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <Header />
            </header>
            <section className="hero">
                <div className='backboard'>
                    <h2>Your Vision, Our Passion</h2>
                    <p>Capturing moments that matter.</p>
                </div>
                <a href="#portfolio" className="cta-button">View Portfolio</a>
            </section>
            <section id="about" className="about">

                <About />
                <h2>About Us</h2>
                <p>We are a photography studio dedicated to providing high-quality images that capture the essence of every moment. Our team of experienced photographers uses the latest equipment and techniques to deliver stunning results.</p>
            </section>
            <footer className="footer">
                <Contact />
                <p>&copy; 2024 Camera Legacy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
