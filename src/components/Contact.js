// import React, { useState } from "react";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     serviceInterest: "",
//     location: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Here you can handle the form submission, e.g., sending data to a backend
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           placeholder="Your Name"
//           required
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           placeholder="Your Email"
//           required
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           placeholder="Your Phone Number (Optional)"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="company"
//           value={formData.company}
//           placeholder="Company (Optional)"
//           onChange={handleChange}
//         />
//         <select
//           name="serviceInterest"
//           value={formData.serviceInterest}
//           onChange={handleChange}
//         >
//           <option value="">Interested in Services</option>
//           <option value="photography">Photography</option>
//           <option value="videography">Videography</option>
//           <option value="both">Both</option>
//         </select>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           placeholder="Your Location (Optional)"
//           onChange={handleChange}
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           placeholder="Your Message"
//           required
//           onChange={handleChange}
//         ></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import "../styles/Contact.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact & Socials</h2>
      <p>
        Hoi, ik ben Matthias. Neem contact op via een van de onderstaande kanalen of socials. Ik kijk ernaar uit om samen te werken aan jouw volgende project!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FiMail className="icon" />
          <a href="mailto:matthias@elevatedframes.be">matthias@elevatedframes.be</a>
        </div>
        <div className="contact-item">
          <FaFacebook className="icon" />
          <a href="https://www.facebook.com/matthias.polen/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <a href="https://www.instagram.com/elevated_frames/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaYoutube className="icon" />
          <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className="personal-info">
        <p>
          📍 Gevestigd in: Belgie/Gent<br />
          📞 Telefoon: <a href="tel:+32 470 66 82 64">+32 470 66 82 64</a><br />
          📧 E-mail: <a href="mailto:matthias@elevatedframes.be">matthias@elevatedframes.be</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
