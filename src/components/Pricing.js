import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h1>Photography & Videography Services – Pricing Overview</h1>

      <h3>Photography Packages</h3>
      <ul>
        <li>
          <strong>Event Photography</strong>
          <ul>
            <li>
              <strong>Basic:</strong> 4 hours, 200–300 photos, basic editing, 1
              location - €450
            </li>
            <li>
              <strong>Standard:</strong> 8 hours, 400–600 photos, advanced
              editing, 2 locations - €800
            </li>
            <li>
              <strong>Premium:</strong> 10–12 hours, 600+ photos, full event
              coverage, advanced retouching - €1,500
            </li>
          </ul>
        </li>
        <li>
          <strong>Real Estate Photography</strong>
          <ul>
            <li>
              2–3 hours, 25–30 photos, interior/exterior shots, basic editing -
              €350
            </li>
          </ul>
        </li>
      </ul>

      <h3>Videography Packages</h3>
      <ul>
        <li>
          <strong>Event Videography</strong>
          <ul>
            <li>
              <strong>Basic:</strong> 4 hours, 3–5 min video, basic editing, 1
              location - €500–€700
            </li>
            <li>
              <strong>Standard:</strong> 8 hours, 5–7 min video, advanced
              editing, 2 locations, teasers - €1,000–€1,500
            </li>
            <li>
              <strong>Premium:</strong> 10–12 hours, full-length video, drone
              footage, cinematic editing - €2,500–€5,000
            </li>
          </ul>
        </li>
        <li>
          <strong>Music Videos</strong>
          <ul>
            <li>
              1–2 locations, 4–6 hours, cinematic editing, drone footage -
              €1,000–€2,000
            </li>
          </ul>
        </li>
      </ul>

      <h3>Add-Ons & Extras</h3>
      <ul>
        <li>Drone Footage: €120</li>
        <li>Extended Hours: €85/hour</li>
        <li>Raw Footage: €100–€300</li>
        <li>Rush Editing: +20% of package price</li>
        <li>Additional Revisions: €75/hour</li>
        <li>Night Shooting: +30% surcharge</li>
      </ul>

      <h3>Custom Video Packages</h3>
      <p>
        *voor een offerte op maat, neem contact op via
        het contactformulier.*
      </p>
      
          
    </section>
  );
};

export default Pricing;
