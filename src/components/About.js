import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
      Hoi, ik ben Matthias, een gepassioneerde foto- en videograaf met een specialisatie in dronebeelden. Met oog voor detail en creativiteit leg ik unieke momenten vast, van sfeervolle evenementen en adembenemende landschappen tot professionele commerciële projecten.

Mijn kracht ligt in het combineren van dynamische dronebeelden met hoogwaardige fotografie en videografie, waardoor ik altijd nét dat beetje extra kan bieden. Met de hoogwaardige apparatuur en een persoonlijke aanpak werk ik samen om jouw visie tot leven te brengen.

Laat me weten hoe ik jouw project mag vastleggen – samen maken we iets bijzonders!

</p>
      <div className="introduction video">
        <video src="/path-to-video1.mp4" controls></video>
      </div>
    </section>
  );
};

export default About;
