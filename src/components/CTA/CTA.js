import React from 'react';
import { Link } from 'react-router-dom';
import { useFormModal } from '../getInvolved/FormModalProvider';
import './CTA.css';

const CTA = () => {
  const { openForm } = useFormModal();

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
            <button
              type="button"
              className="cta-volunteer-btn"
              onClick={() => openForm('volunteer', 'cta-volunteer')}
            >
              Apply as Volunteer <i className="fas fa-hand-holding-heart" aria-hidden="true"></i>
            </button>
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