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
            <strong>Basis:</strong> 4 uur, 200–300 foto’s, basisbewerking, 1 locatie - €325
          </p>
          <p>
            <strong>Standaard:</strong> 8 uur, 400–600 foto’s, geavanceerde bewerking, 2 locaties - €600
          </p>
          <p>
            <strong>Premium:</strong> 10–12 uur, 600+ foto’s, volledige evenement, geavanceerde retouching - €1.100
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
            <strong>Basis:</strong> 4 uur, 3–5 minuten video, basisbewerking, 1 locatie - €450–€550 <br/>
            *Inclusief 1 revisie.*
          </p>
          <p>
            <strong>Standaard:</strong> 8 uur, 5–7 minuten video, geavanceerde bewerking, 2 locaties, teasers - €800–€1.000 <br />
            *Inclusief 2 revisies.*
          </p>
          <p>
            <strong>Premium:</strong> 10–12 uur, volledige video, dronebeelden, cinematische bewerking - €1.500–€2.000 <br />
            *Inclusief 2 revisies.*
          </p>
        </div>
      </div>

      <h3>Extra Opties & Toevoegingen</h3>
      <div>
        <p>Dronebeelden: €120-€300</p>
        <p>Extra uren: €85/uur</p>
        <p>Snel levering: +20% van de pakketprijs</p>
        <p>Extra revisies: €75/uur</p>
        <p>Nachtopnames: +30% toeslag</p>
      </div>

      <h3>Aangepaste Videopakketten</h3>
      <p>
        *Voor een offerte op maat, neem contact op via
        de contactpagina.*
        {/* *Voor een offerte op maat, neem contact op via
        het contactformulier.* */}
      </p>
      <p>*Alle prijzen exclusief btw*</p>
    </section>
  );
};

export default Pricing;
