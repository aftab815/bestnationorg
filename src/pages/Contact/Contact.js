import React, { useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import { siteInfo, socialLinks } from '../../data/siteData';
import './Contact.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"faq-item " + (isOpen ? "open" : "")}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <i className={"fas fa-" + (isOpen ? "minus" : "plus")}></i>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card"><div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div><h3>Our Address</h3><p>{siteInfo.address}</p></div>
            <div className="contact-info-card"><div className="contact-info-icon"><i className="fas fa-phone"></i></div><h3>Phone</h3><p>{siteInfo.phone}</p></div>
            <div className="contact-info-card"><div className="contact-info-icon"><i className="fas fa-envelope"></i></div><h3>Email</h3><p>{siteInfo.email}</p></div>
            <div className="contact-info-card"><div className="contact-info-icon"><i className="fas fa-clock"></i></div><h3>Hours</h3><p>{siteInfo.hours}</p></div>
          </div>
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <div className="underline-left"></div>
              <p>Have a question? Fill out the form below.</p>
              {submitted && <div className="success-message"><i className="fas fa-check-circle"></i> Thank you! Your message has been sent.</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label>Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required /></div>
                  <div className="form-group"><label>Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" /></div>
                  <div className="form-group"><label>Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group"><label>Message *</label><textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Type your message..." required></textarea></div>
                <button type="submit" className="btn-primary"><i className="fas fa-paper-plane"></i> Send Message</button>
              </form>
            </div>
            <div className="contact-sidebar">
              <div className="map-wrapper">
                <h3>Find Us on Map</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.9896830233374!2d74.31117507560954!3d31.469469974237352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzEwLjEiTiA3NMKwMTgnNDkuNSJF!5e0!3m2!1sen!2s!4v1772651848671!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
              <div className="contact-social-box">
                <h3>Follow Us</h3>
                <p>Stay connected through social media</p>
                <div className="contact-social-links">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} aria-label={link.label}><i className={link.icon}></i></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <div className="section-title"><h2>Frequently Asked Questions</h2><div className="underline"></div></div>
          <div className="faq-grid">
            <FaqItem question="How can I become a member?" answer="Fill out the membership form on our website or contact us directly. Membership is free." />
            <FaqItem question="Are there membership fees?" answer="No, membership of UKCAB is completely free." />
            <FaqItem question="How can I volunteer?" answer="Contact us through the form above. We have various volunteering opportunities." />
            <FaqItem question="Can I attend events?" answer="Yes, most events are open to the public. Check our Events page for details." />
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Contact;