"use client";

import { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let&apos;s Plan Something Beautiful Together</h2>
            <div className="contact-lines">
              <div className="contact-line">
                <FaPhone />
                <span>+91 88883 99102</span>
              </div>
              <div className="contact-line">
                <FaWhatsapp />
                <span>+91 88883 99102 (WhatsApp)</span>
              </div>
              <div className="contact-line">
                <FaEnvelope />
                <span>akshdaevents@gmail.com</span>
              </div>
              <div className="contact-line">
                <FaInstagram />
                <span>@akshdaevents</span>
              </div>
              <div className="contact-line">
                <FaMapMarkerAlt />
                <span>No 1, Pune Nagar Rd, Yerawada, Pune, Maharashtra 411006</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {submitted && (
              <div className="alert-success">
                Thank you for your enquiry! We will contact you shortly on WhatsApp or call you back.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventType">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday / Celebration</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event requirements..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <FaPaperPlane /> Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
