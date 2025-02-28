import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h1>Fotografie & Videografie Diensten – Prijzenoverzicht</h1>

      <h3>Fotografie Pakketten</h3>
      <div>
        <p>
          <strong>Evenementfotografie</strong>
        </p>
        <div>
          <p>
            <strong>Basis:</strong> 4 uur, 200–300 foto’s, basisbewerking, 1 locatie - €199
          </p>
          <p>
            <strong>Standaard:</strong> 6 uur, 300–500 foto’s, geavanceerde bewerking, 2 locaties - €350
          </p>
          <p>
            <strong>Premium:</strong> 8 uur, 500+ foto’s, volledige evenement, geavanceerde retouching - €600
          </p>
        </div>
      </div>

      <h3>Videografie Pakketten</h3>
      <div>
        <p>
          <strong>Evenementvideografie</strong>
        </p>
        <div>
          <p>
            <strong>Basis:</strong> 4 uur, 2–4 minuten video, basisbewerking, 1 locatie - €250–€350 <br />
            *Inclusief 1 revisie.*
          </p>
          <p>
            <strong>Standaard:</strong> 6 uur, 4–6 minuten video, geavanceerde bewerking, 2 locaties, teasers - €450–€600 <br />
            *Inclusief 2 revisies.*
          </p>
          <p>
            <strong>Premium:</strong> 8–10 uur, volledige video, dronebeelden, cinematische bewerking - €800–€1.200 <br />
            *Inclusief 2 revisies.*
          </p>
        </div>
      </div>

      <h3>Extra Opties & Toevoegingen</h3>
      <div>
        <p>Dronebeelden: €100–€200</p>
        <p>Extra uren: €60/uur</p>
        <p>Snel levering: +15% van de pakketprijs</p>
        <p>Extra revisies: €50/uur</p>
        <p>Nachtopnames: +20% toeslag</p>
      </div>

      <h3>Aangepaste Videopakketten</h3>
      <p>
        *Voor een offerte op maat, neem contact op via de contactpagina.*
      </p>
      <p>*Alle prijzen exclusief btw*</p>
    </section>
  );
};

export default Pricing;
