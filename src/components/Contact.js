import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle the form submission, e.g., sending data to a backend
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Your Phone Number (Optional)"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          placeholder="Company (Optional)"
          onChange={handleChange}
        />
        <select
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
        >
          <option value="">Interested in Services</option>
          <option value="photography">Photography</option>
          <option value="videography">Videography</option>
          <option value="both">Both</option>
        </select>
        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Your Location (Optional)"
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          required
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
