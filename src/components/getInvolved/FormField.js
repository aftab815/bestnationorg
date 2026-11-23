import React from 'react';

const FormField = ({ id, label, required, error, hint, className = '', children }) => (
  <div className={`gi-field ${className}`.trim()}>
    <label htmlFor={id} className="gi-label">
      {label}
      {required && (
        <span className="gi-required" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
    {children}
    {hint && <p className="gi-hint">{hint}</p>}
    {error && (
      <p className="gi-error" id={`${id}-error`} role="alert">
        {error}
      </p>
    )}
  </div>
);

export default FormField;
