import React from "react";
import "../styles/Videos.css";

import Video1 from "../videocollection/Final Web.mp4";
import thumbnail1 from "../videocollection/kouterclinic-thumbnail.jpg";
import Video2 from "../videocollection/fall run.mp4";
import thumbnail2 from "../videocollection/seba reel thumbnail.jpg";
import Video3 from "../videocollection/final .mp4";
import thumbnail3 from "../videocollection/autumn thumbnail.jpg";
import Video4 from "../videocollection/arm day.mp4";
import thumbnail4 from "../videocollection/jaimin thumbnail.jpg";
import Video5 from "../videocollection/Promo Vide Me 2.0.mp4";
import thumbnail5 from "../videocollection/promo vid me .jpg";
import Video6 from "../videocollection/Bas After.mp4";
import thumbnail6 from "../videocollection/Bas After thumbnail.jpg";
import Video7 from "../videocollection/Cinematic Edit.mp4";
import thumbnail7 from "../videocollection/Bas After thumbnail.jpg";

const Videos = () => {
  return (
    <section id="videos" className="videos">
      <h2>professionele videos</h2>
      <div className="video-gallery-wide">    
        <video src={Video6}  poster={thumbnail6} controls></video>    
        <video src={Video5}  poster={thumbnail5} controls></video>
        <video src={Video1}  poster={thumbnail1} controls></video>
      </div>
      <h2>Recreationele/social media videos</h2>

      <div className="video-gallery">
        <video src={Video7} poster={thumbnail2} controls></video>
        <video src={Video2} poster={thumbnail3} controls></video>
        <video src={Video3} poster={thumbnail4} controls></video>
      </div>
      
    </section>
  );
};

export default Videos;