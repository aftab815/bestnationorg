import React, { useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import { siteInfo, socialLinks } from '../../data/siteData';
import contactHero from '../../assets/hero4.jpeg';
import './Contact.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <div className="faq-toggle-icon">
          <i className={`fas fa-${isOpen ? 'chevron-up' : 'chevron-down'}`}></i>
        </div>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* ── Bespoke Modern Contact Hero ────────────── */}
      <section className="contact-hero-modern">
        <div className="contact-hero-bg">
          <img src={contactHero} alt="BNWO contact support and community outreach" />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="contact-hero-split">
            <div className="contact-hero-text">
              <div className="contact-hero-badge">
                <span className="live-pulse-dot"></span>
                <span>Central Secretariat &bull; Lahore Headquarters</span>
              </div>
              <h1>Direct Connect &amp; Inquiry Portal</h1>
              <p>
                Reach out to our leadership, provincial secretariats, and project committees for
                memberships, volunteering, partnerships, or beneficiary support across Pakistan.
              </p>
              <div className="contact-quick-chips">
                <a href="tel:03214190008" className="quick-chip">
                  <i className="fas fa-phone-alt"></i> 0321-4190008
                </a>
                <a href="mailto:info@bestnationorg.com" className="quick-chip">
                  <i className="fas fa-envelope"></i> info@bestnationorg.com
                </a>
                <span className="quick-chip status-chip">
                  <i className="fas fa-clock"></i> Mon &ndash; Sat: 9AM &ndash; 6PM
                </span>
              </div>
            </div>

            <div className="contact-hero-card-side">
              <div className="contact-card-glass">
                <div className="glass-card-header">
                  <i className="fas fa-landmark"></i>
                  <span>National Secretariat</span>
                </div>
                <h4>Best Nation Welfare Organisation</h4>
                <p className="glass-card-address">
                  60-A, Street No. 5, Model Town Link Road, G.E.C.H.S. Phase 2, Lahore, Pakistan
                </p>
                <div className="glass-card-meta">
                  <div>
                    <strong>100%</strong>
                    <small>Response Rate</small>
                  </div>
                  <div>
                    <strong>24/7</strong>
                    <small>Emergency Desk</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership & Governance Section ───────────── */}
      <section className="contact-leadership-sec">
        <div className="container">
          <div className="leadership-card">
            <div className="leadership-badge-wrap">
              <span className="section-kicker accent">Executive Direction</span>
            </div>
            <h2>Leadership &amp; Governance</h2>
            <div className="underline-left"></div>
            
            <div className="leadership-content-grid">
              <div className="leadership-lead-box">
                <p className="leadership-lead-para">
                  <strong>Best Nation Welfare Organization (BNWO)</strong> is led by a national Chairman
                  supported by a network of international, divisional, district, tehsil, and union council
                  leadership across all Parliament tiers. The Chairman’s office holds overall responsibility
                  for strategic direction, partnerships, and organizational integrity, while committee and
                  parliament leadership at each level is responsible for local program design, delivery, and
                  monitoring.
                </p>
                <p className="leadership-sub-para">
                  The organization is committed to transparency, accountability, and excellence in all its
                  endeavors, upholding the values of compassion, integrity, and responsibility in service to the
                  deprived communities of Pakistan.
                </p>
              </div>

              <div className="leadership-pillars-col">
                <div className="leadership-pill-item">
                  <i className="fas fa-user-shield"></i>
                  <div>
                    <strong>National Chairman's Office</strong>
                    <span>Strategic Direction &amp; Global MOUs</span>
                  </div>
                </div>
                <div className="leadership-pill-item">
                  <i className="fas fa-sitemap"></i>
                  <div>
                    <strong>7-Tier Parliament Leadership</strong>
                    <span>Decentralized Oversight &amp; Audit</span>
                  </div>
                </div>
                <div className="leadership-pill-item">
                  <i className="fas fa-balance-scale"></i>
                  <div>
                    <strong>24 Thematic Committees</strong>
                    <span>Local Program Design &amp; Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Info & Form Section ───────── */}
      <section className="contact-section">
        <div className="container">
          {/* Quick Info Grid */}
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Headquarters Address</h3>
              <p>{siteInfo.address}</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Contact Numbers</h3>
              <p>
                {siteInfo.phone}
                <br />
                {siteInfo.phone2}
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Official Email</h3>
              <p>{siteInfo.email}</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Operating Hours</h3>
              <p>{siteInfo.hours}</p>
            </div>
          </div>

          {/* Form & Map Grid */}
          <div className="contact-grid">
            {/* Contact Form Wrapper */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <span className="section-kicker">Send an Inquiry</span>
                <h2>Send Us a Message</h2>
                <div className="underline-left"></div>
                <p>Have a question or proposal? Complete the form below and our leadership team will respond promptly.</p>
              </div>

              {submitted && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you! Your message has been sent successfully. We will reach out shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <div className="input-with-icon">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Muhammad Ali"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <div className="input-with-icon">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <div className="input-with-icon">
                      <i className="fas fa-phone"></i>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Inquiry Subject *</label>
                    <div className="input-with-icon">
                      <i className="fas fa-tag"></i>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="membership">Parliament Membership</option>
                        <option value="volunteer">Volunteering & Committees</option>
                        <option value="partnership">Corporate Partnership</option>
                        <option value="donation">Donation Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <div className="input-with-icon textarea-icon">
                    <i className="fas fa-comment-alt"></i>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your message details here..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-primary contact-submit-btn">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

            {/* Sidebar Map & Social */}
            <div className="contact-sidebar">
              <div className="map-wrapper">
                <div className="map-header">
                  <h3><i className="fas fa-map-marked-alt"></i> Find Us on Map</h3>
                  <span>Lahore Secretariat</span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.9896830233374!2d74.31117507560954!3d31.469469974237352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzEwLjEiTiA3NMKwMTgnNDkuNSJF!5e0!3m2!1sen!2s!4v1772651848671!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BNWO Location Map"
                ></iframe>
              </div>

              <div className="contact-social-box">
                <h3>Connect With Us</h3>
                <p>Follow BNWO across social platforms for real-time outreach updates</p>
                <div className="contact-social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────── */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Knowledge Base</span>
            <h2>Frequently Asked Questions</h2>
            <div className="underline"></div>
            <p>Everything you need to know about membership, volunteering, and governance</p>
          </div>
          <div className="faq-grid">
            <FaqItem
              question="How can I become a BNWO Parliament member?"
              answer="You can apply for membership through our Parliament Membership form (available on the Membership page) or contact us directly. Membership fees vary depending on the tier (World, Divisional, District, Tehsil, or UC Parliament)."
            />
            <FaqItem
              question="Are there membership contribution fees?"
              answer="Yes. International tiers range from $100–$300 USD annually, while local tiers range from PKR 3,000–12,000 annually. Committee membership fees are nominal and may be waived for voluntary technical advisors."
            />
            <FaqItem
              question="How can I join as a volunteer?"
              answer="Contact us through the form above or apply directly via our Volunteer Application link. We welcome volunteers across all 24 thematic project committees in health, education, rights, and environment."
            />
            <FaqItem
              question="Can I attend BNWO events and sessions?"
              answer="Yes! Most BNWO events, seminars, and community welfare drives are open to the public. Check our Events page for upcoming sessions in your district."
            />
            <FaqItem
              question="How is BNWO structured for accountability?"
              answer="BNWO operates through a 7-tier Parliament structure from World Parliament down to Union Council, supported by 24 thematic project committees delivering 12 core welfare programs under strict audit oversight."
            />
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Contact;