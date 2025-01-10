import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h1>Photography & Videography Services – Pricing Overview</h1>

      <h3>Photography Packages</h3>
      <div>
        <p>
          <strong>Event Photography</strong>
        </p>
        <div>
          <p>
            <strong>Basic:</strong> 4 hours, 200–300 photos, basic editing, 1
            location - €350
          </p>
          <p>
            <strong>Standard:</strong> 8 hours, 400–600 photos, advanced
            editing, 2 locations - €600
          </p>
          <p>
            <strong>Premium:</strong> 10–12 hours, 600+ photos, full event
            coverage, advanced retouching - €1,100
          </p>
        </div>
      </div>

      <h3>Videography Packages</h3>
      <div>
        <p>
          <strong>Event Videography</strong>
        </p>
        <div>
          <p>
            <strong>Basic:</strong> 4 hours, 3–5 min video, basic editing, 1
            location - €450–€550 <br />
            *Includes 1 revision.*
          </p>
          <p>
            <strong>Standard:</strong> 8 hours, 5–7 min video, advanced
            editing, 2 locations, teasers - €800–€1000 <br />
            *Includes 2 revisions.*
          </p>
          <p>
            <strong>Premium:</strong> 10–12 hours, full-length video, drone
            footage, cinematic editing - €2,000–€3,000 <br />
            *Includes 2 revisions.*
          </p>
        </div>
      </div>

      <h3>Add-Ons & Extras</h3>
      <div>
        <p>Drone Footage: €120-€300</p>
        <p>Extended Hours: €85/hour</p>
        <p>Rush Editing: +20% of package price</p>
        <p>Additional Revisions: €75/hour</p>
        <p>Night Shooting: +30% surcharge</p>
      </div>

      <h3>Custom Video Packages</h3>
      <p>
        *voor een offerte op maat, neem contact op via
        het contactformulier.*
      </p>
    </section>
  );
};

export default Pricing;
