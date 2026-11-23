import React from 'react';
import ActionButton from '../common/ActionButton';
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
            <ActionButton
              to="/join"
              variant="dark"
              size="md"
              className="cta-join-btn"
              icon="fas fa-user-plus"
            >
              Join / Register
            </ActionButton>
            <ActionButton
              variant="secondary"
              size="md"
              className="cta-volunteer-btn"
              icon="fas fa-hand-holding-heart"
              onClick={() => openForm('volunteer', 'cta-volunteer')}
            >
              Apply as Volunteer
            </ActionButton>
            <ActionButton
              to="/contact"
              variant="ghost"
              size="md"
              className="cta-contact-btn"
              icon="fas fa-arrow-right"
            >
              Contact Us
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;