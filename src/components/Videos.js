import React, { useEffect, useState } from "react";
//import { collection, getDocs } from "firebase/firestore";
import "../styles/Videos.css";

const Videos = ({ firestore }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch videos from Firestore
  const fetchVideos = async () => {
    try {
      const videosCollection = collection(firestore, "videos"); // Replace "videos" with your Firestore collection name
      const videosSnapshot = await getDocs(videosCollection);
      const videosList = videosSnapshot.docs.map((doc) => doc.data());
      setVideos(videosList);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error fetching videos: {error}</div>;

  return (
    <section id="videos" className="videos">
      <h2>Videos</h2>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-item ${
              video.orientation === "vertical" ? "vertical" : "horizontal"
            }`}
          >
            <video
              src={video.url}
              controls
              className="video-element"
              alt={`Video ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
