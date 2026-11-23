import React from 'react';

const SuccessMessage = ({ title, referenceId, onClose, children }) => (
  <div className="gi-success" role="status" aria-live="polite">
    <div className="gi-success__icon" aria-hidden="true">
      <i className="fas fa-check"></i>
    </div>
    <h3 className="gi-success__title">{title}</h3>
    {children}
    <div className="gi-success__ref">
      <span>Reference ID</span>
      <strong>{referenceId}</strong>
    </div>
    <div className="gi-success__actions">
      <button type="button" className="btn-primary" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default SuccessMessage;
