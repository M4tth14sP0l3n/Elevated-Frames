import React from "react";
import "../styles/Fotos.css";
import photo1 from "../fotocollection/DSC00920.jpg";
import photo2 from "../fotocollection/DSC05566.jpg";
import photo3 from "../fotocollection/DSC00163.jpg";
import photo4 from "../fotocollection/DSC04801.jpg";
import photo5 from "../fotocollection/DSC01594.jpg";
import photo6 from "../fotocollection/DSC01578.jpg";

const Fotos = () => {
  return (
    <section id="fotos" className="fotos">
      <h2>Photos</h2>
      <div className="gallery">      
        <img src={photo1} alt="Sample 1" />
        <img src={photo2} alt="Sample 2" />
        <img src={photo3} alt="Sample 3" />        
      </div>
      <h2></h2>
      <div className="gallery">
      <img src={photo4} alt="Sample 4" />
      <img src={photo5} alt="Sample 5" />
      <img src={photo6} alt="Sample 6" />
      </div>
    </section>
  );
};

export default Fotos;