import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-wrapper">
      <div className="container">
        <div className="cta-card">
          <div className="cta-card-aura"></div>
          <h2>Ready to Make a Difference?</h2>
          <p>
            Join our community of advocates and help create lasting change for
            families across Pakistan.
          </p>
          <div className="cta-buttons">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXi85A_I_uNrSSjnpusCfGi0A0qpGcsZYkm2bIXQ8I1zvxEA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-volunteer-btn"
            >
              Apply as Volunteer <i className="fas fa-hand-holding-heart"></i>
            </a>
            <Link to="/contact" className="cta-contact-btn">
              Contact Us <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;