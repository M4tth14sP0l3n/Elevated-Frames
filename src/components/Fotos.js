import React from "react";
import "../styles/Fotos.css";

const importAll = (r) => r.keys().map(r);

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Fotos = () => {
  // Dynamically import all images from fotocollection
  const images = shuffleArray(importAll(require.context('../fotocollection', false, /\.(png|jpe?g|svg)$/)));

  return (
    <section id="fotos" className="fotos">
      <h2>Photos</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fotos;
