import React, { useState, useEffect } from 'react';

export function formatPakCell(val) {
  // Extract numbers
  const digits = val.replace(/\D/g, '');
  // If user enters 923001234567, normalize to 03001234567
  let normalized = digits;
  if (normalized.startsWith('92') && normalized.length > 2) {
    normalized = '0' + normalized.slice(2);
  }
  normalized = normalized.slice(0, 11);

  if (normalized.length <= 4) {
    return normalized;
  }
  return `${normalized.slice(0, 4)}-${normalized.slice(4)}`;
}

const Step2Contact = ({ data, onChange, errors }) => {
  const [sameAsCell, setSameAsCell] = useState(
    Boolean(data.cell && data.whatsapp && data.cell === data.whatsapp)
  );

  const handleCellChange = (e) => {
    const formatted = formatPakCell(e.target.value);
    onChange('cell', formatted);
    if (sameAsCell) {
      onChange('whatsapp', formatted);
    }
  };

  const handleSameAsCellToggle = (checked) => {
    setSameAsCell(checked);
    if (checked) {
      onChange('whatsapp', data.cell || '');
    }
  };

  const handleWhatsappChange = (e) => {
    const formatted = formatPakCell(e.target.value);
    onChange('whatsapp', formatted);
  };

  const handleReferralCellChange = (e) => {
    const formatted = formatPakCell(e.target.value);
    onChange('referralCell', formatted);
  };

  return (
    <div className="reg-step-card">
      <div className="reg-step-header">
        <div className="reg-step-number-badge">Step 2 of 6</div>
        <h2 className="reg-step-title">Contact & Communication</h2>
        <p className="reg-step-desc">
          Provide your direct contact details so the BNWO executive secretariat can reach you for verification, membership updates, and project assignments.
        </p>
      </div>

      <div className="reg-grid reg-grid-2">
        {/* Cell Number */}
        <div className="reg-field">
          <label htmlFor="reg-cell" className="reg-label">
            Cell Number (Pakistan) <span className="text-danger">*</span>
          </label>
          <div className="reg-input-group">
            <span className="reg-input-prefix"><i className="fas fa-phone-alt"></i></span>
            <input
              id="reg-cell"
              type="tel"
              inputMode="tel"
              className={`reg-input has-prefix ${errors.cell ? 'has-error' : ''}`}
              placeholder="0300-1234567"
              value={data.cell || ''}
              onChange={handleCellChange}
              maxLength={12}
              aria-invalid={Boolean(errors.cell)}
              aria-describedby={errors.cell ? 'error-cell' : 'cell-hint'}
              required
            />
          </div>
          <small id="cell-hint" className="reg-hint">Format: 03XX-XXXXXXX (11 digits)</small>
          {errors.cell && (
            <p id="error-cell" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.cell}
            </p>
          )}
        </div>

        {/* WhatsApp Number */}
        <div className="reg-field">
          <div className="reg-label-row">
            <label htmlFor="reg-whatsapp" className="reg-label">
              WhatsApp Number <span className="reg-optional">(Optional)</span>
            </label>
            <label className="reg-same-check">
              <input
                type="checkbox"
                checked={sameAsCell}
                onChange={(e) => handleSameAsCellToggle(e.target.checked)}
              />
              <span>Same as cell</span>
            </label>
          </div>
          <div className="reg-input-group">
            <span className="reg-input-prefix text-success"><i className="fab fa-whatsapp"></i></span>
            <input
              id="reg-whatsapp"
              type="tel"
              inputMode="tel"
              className="reg-input has-prefix"
              placeholder="0300-1234567"
              value={data.whatsapp || ''}
              onChange={handleWhatsappChange}
              disabled={sameAsCell}
              maxLength={12}
            />
          </div>
        </div>
      </div>

      <div className="reg-grid reg-grid-2">
        {/* Email */}
        <div className="reg-field">
          <label htmlFor="reg-email" className="reg-label">
            Email Address <span className="text-danger">*</span>
          </label>
          <div className="reg-input-group">
            <span className="reg-input-prefix"><i className="fas fa-envelope"></i></span>
            <input
              id="reg-email"
              type="email"
              className={`reg-input has-prefix ${errors.email ? 'has-error' : ''}`}
              placeholder="you@example.com"
              value={data.email || ''}
              onChange={(e) => onChange('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'error-email' : undefined}
              required
            />
          </div>
          {errors.email && (
            <p id="error-email" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.email}
            </p>
          )}
        </div>

        {/* Website (optional) */}
        <div className="reg-field">
          <label htmlFor="reg-website" className="reg-label">
            Personal / Organization Website <span className="reg-optional">(Optional)</span>
          </label>
          <div className="reg-input-group">
            <span className="reg-input-prefix"><i className="fas fa-globe"></i></span>
            <input
              id="reg-website"
              type="url"
              className="reg-input has-prefix"
              placeholder="https://example.com"
              value={data.website || ''}
              onChange={(e) => onChange('website', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="reg-divider-heading">
        <span>Referral / Reference Information (Optional)</span>
      </div>

      <div className="reg-grid reg-grid-2">
        {/* Referral Name */}
        <div className="reg-field">
          <label htmlFor="reg-ref-name" className="reg-label">
            Referral / Reference Name <span className="reg-optional">(Optional)</span>
          </label>
          <input
            id="reg-ref-name"
            type="text"
            className="reg-input"
            placeholder="Name of BNWO member who referred you"
            value={data.referralName || ''}
            onChange={(e) => onChange('referralName', e.target.value)}
          />
        </div>

        {/* Referral Cell */}
        <div className="reg-field">
          <label htmlFor="reg-ref-cell" className="reg-label">
            Referral Cell Number <span className="reg-optional">(Optional)</span>
          </label>
          <div className="reg-input-group">
            <span className="reg-input-prefix"><i className="fas fa-user-friends"></i></span>
            <input
              id="reg-ref-cell"
              type="tel"
              inputMode="tel"
              className="reg-input has-prefix"
              placeholder="0300-1234567"
              value={data.referralCell || ''}
              onChange={handleReferralCellChange}
              maxLength={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Contact;
