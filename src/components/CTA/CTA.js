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
          <Link to="/contact" className="hero-btn">Join Best Nation Today</Link>
          <Link to="/contact" className="hero-btn outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;