// Jenilkumar Goti and Jay barot
import React from 'react';
import '../components/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or partnership inquiries, we’d love to hear from you.</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: support@applearcade.com</p>
          <p>Phone: +1 (800) 555‑2025</p>
          <p>Location: Waterloo, ON</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
