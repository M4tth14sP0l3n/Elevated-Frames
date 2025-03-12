import React, { useState, useEffect } from "react";
import "../styles/Fotos.css";

const importAll = (r) => r.keys().map(r);

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Fotos = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const importedImages = importAll(require.context('../fotocollection', false, /\.(png|jpe?g|svg)$/));
    setImages(shuffleArray(importedImages));
  }, []);

  const closeModal = (e) => {
    if (e.target.classList.contains("fullscreen-modal") || e.key === "Escape") {
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal(e);
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="fotos" className="fotos">
      <h2>Photos</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => setSelectedIndex(index)}>
            <img src={image} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {selectedIndex !== null && (
        <div className="fullscreen-modal" onClick={closeModal}>
          <button className="arrow left fixed" onClick={prevImage}>&#10094;</button>
          <img src={images[selectedIndex]} alt="Fullscreen" className="fullscreen-image" onClick={(e) => e.stopPropagation()} />
          <button className="arrow right fixed" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </section>
  );
};

export default Fotos;
