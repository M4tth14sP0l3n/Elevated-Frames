import React, { useEffect, useState } from "react";
import { getStorage, ref } from "firebase/storage";
import storage from "./firebase";
import "../styles/Fotos.css";

const Fotos = ({ firestore }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch photos from Firestore
  const fetchPhotos = async () => {
    try {
      const fotosCollection = collection(firestore, "fotos"); // Replace "photos" with your Firestore collection name
      const fotosSnapshot = await getDocs(fotosCollection);
      const fotosList = fotosSnapshot.docs.map((doc) => doc.data());
      setPhotos(fotosList);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (loading) return <div>Loading photos...</div>;
  if (error) return <div>Error fetching photos: {error}</div>;

  return (
    <section id="fotos" className="fotos">
      <h2>Photos</h2>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img key={index} src={photo.url} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Fotos;
