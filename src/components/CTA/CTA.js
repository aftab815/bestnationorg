import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Make a Difference?</h2>
        <p>Join our community of advocates and help shape the future of healthcare policy and treatment access across the pk.</p>
        <div className="cta-buttons">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXi85A_I_uNrSSjnpusCfGi0A0qpGcsZYkm2bIXQ8I1zvxEA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-volunteer-btn"
          >
            Apply as Volunteer
          </a>
          <Link to="/contact" className="hero-btn outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;