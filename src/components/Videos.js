import React from "react";
import "../styles/Videos.css";

import Video1 from "../videocollection/Final Web.mp4";
import thumbnail1 from "../videocollection/Timeline 1_01_00_09_19.jpg";
import Video2 from "../videocollection/fall run.mp4";
import thumbnail2 from "../videocollection/Timeline 1_01_00_09_19.jpg";
import Video3 from "../videocollection/final .mp4";
import thumbnail3 from "../videocollection/Timeline 1_01_00_09_19.jpg";
import Video4 from "../videocollection/arm day.mp4";
import thumbnail4 from "../videocollection/Timeline 1_01_00_09_19.jpg";

const Videos = () => {
  return (
    <section id="videos" className="videos">
      <h2>Videos</h2>
      <div className="video-gallery-wide">        
        <video src={Video1}  poster={thumbnail1} controls></video>
      </div>
      <h2></h2>

      <div className="video-gallery">
        <video src={Video4} poster={thumbnail2} controls></video>
        <video src={Video2} poster={thumbnail3} controls></video>
        <video src={Video3} poster={thumbnail4} controls></video>
      </div>
      
    </section>
  );
};

export default Videos;