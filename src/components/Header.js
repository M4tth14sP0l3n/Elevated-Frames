import React from "react";
import "../styles/Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("fotos")}>Photos</li>
          <li onClick={() => scrollToSection("videos")}>Videos</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("pricing")}>Pricing</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
