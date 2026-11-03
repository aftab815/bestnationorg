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
            <Link to="/join" className="cta-volunteer-btn">
              Apply as Volunteer / Member <i className="fas fa-hand-holding-heart"></i>
            </Link>
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