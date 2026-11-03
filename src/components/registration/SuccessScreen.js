import React from 'react';
import { Link } from 'react-router-dom';

const SuccessScreen = ({ registrationId, onStartNew }) => {
  return (
    <div className="reg-success-card animate-fade-in">
      <div className="reg-success-icon-bubble">
        <i className="fas fa-check-circle"></i>
      </div>
      <h2 className="reg-success-title">Registration Submitted Successfully!</h2>
      <p className="reg-success-subtitle">
        Welcome to Best Nation Welfare Organization. Your submission has been securely recorded in our parliamentary member database.
      </p>

      <div className="reg-success-ref-box">
        <span className="ref-label">Official Registration Reference ID</span>
        <strong className="ref-value">{registrationId || 'BNWO-REG-CONFIRMED'}</strong>
        <small className="ref-hint">Please save this reference ID for any future correspondence with the BNWO Secretariat.</small>
      </div>

      <div className="reg-success-steps-summary">
        <h4><i className="fas fa-info-circle"></i> What Happens Next?</h4>
        <ul className="reg-next-steps-list">
          <li>
            <i className="fas fa-clipboard-check"></i>
            <div>
              <strong>Verification &amp; Profile Approval:</strong> The BNWO parliamentary secretariat will verify your administrative credentials.
            </div>
          </li>
          <li>
            <i className="fas fa-envelope-open-text"></i>
            <div>
              <strong>Official Welcome &amp; Orientation:</strong> You will receive a direct notification via WhatsApp or Email regarding local chapter meetings and orientation sessions.
            </div>
          </li>
          <li>
            <i className="fas fa-hand-holding-heart"></i>
            <div>
              <strong>Project Assignment:</strong> You will be formally linked to the chosen programs and parliamentary tier leadership.
            </div>
          </li>
        </ul>
      </div>

      <div className="reg-success-actions">
        <Link to="/" className="btn-primary">
          <i className="fas fa-home"></i> Return to Homepage
        </Link>
        <Link to="/programs" className="btn-outline">
          <i className="fas fa-th-list"></i> Explore All 12 Programs
        </Link>
        <button type="button" className="reg-btn-link" onClick={onStartNew}>
          Submit Another Registration
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
