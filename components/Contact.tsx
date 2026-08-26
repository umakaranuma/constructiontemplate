'use client';

import { FormEvent, useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/data';

const SERVICE_OPTIONS = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation & Remodeling',
  'Architecture & Planning',
  'Interior Fit-Out',
  'Other',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      `Hi ApexBuild! I'd like to enquire about a project.\n\n` +
      `*Name:* ${name}\n*Phone:* ${phone}\n*Project Type:* ${service}\n*Details:* ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow eyebrow-dark">
            <i className="fa-solid fa-envelope"></i> Get In Touch
          </span>
          <h2 className="section-title">
            Start Your <span className="text-accent">Project</span> Today
          </h2>
          <p className="section-text">Send us your project details and timeline — we&apos;ll take it from there.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-info-card">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Site Office</h4>
                <p>142 Galle Road, Colombo 03, Sri Lanka</p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fa-brands fa-whatsapp"></i>
              <div>
                <h4>WhatsApp / Phone</h4>
                <p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener">
                    +94 76 921 4278
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@apexbuild.lk">info@apexbuild.lk</a>
                </p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fa-solid fa-clock"></i>
              <div>
                <h4>Working Hours</h4>
                <p>Mon – Sat: 8:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="contact-social">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" id="contactForm" data-aos="fade-left" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Full Name</label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="John Silva"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cf-phone">Phone Number</label>
                <input
                  type="tel"
                  id="cf-phone"
                  name="phone"
                  placeholder="+94 7X XXX XXXX"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cf-service">Project Type</label>
              <select id="cf-service" name="service" value={service} onChange={(e) => setService(e.target.value)}>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">Project Details</label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                placeholder="Tell us about your project, location and estimated budget..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              <i className="fa-brands fa-whatsapp"></i> Send via WhatsApp
            </button>
            <p className="form-note">
              <i className="fa-solid fa-lock"></i> Your details are safe with us. We usually reply within a few hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
