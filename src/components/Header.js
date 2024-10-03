import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Importing styles

const Header = () => {
  return (
    <div className="headerBackBoard">
      <header className="header">
        <h1>Welcome!</h1>
        <div className="titles-container">
          <div className="title camera-legacy">
            <h1>
              <Link to="/Camera">Camera Legacy</Link>
            </h1>
            <ul className="sub-list">
              <li>
                <Link to="/camera-legacy/VideoCarousel">Video</Link>
              </li>
              <li>
                <Link to="/camera-legacy/FotoCarousel">Foto</Link>
              </li>
            </ul>
          </div>
          <div className="title matthias-polen">
            <h1>
              <Link to="/">Matthias Polen</Link>
            </h1>
            <ul className="sub-list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
