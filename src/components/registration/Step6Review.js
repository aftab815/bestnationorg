import React from 'react';
import { getProgramById, getProjectsForProgram } from '../../config/programs';

const Step6Review = ({ data, onEditStep, consent, onConsentChange, errorConsent }) => {
  const person = data;
  const location = data.location || {};
  const participations = Array.isArray(data.participations) ? data.participations : [];
  const selectedRoles = Array.isArray(data.selectedRoles) ? data.selectedRoles : [];
  const volunteerSubRoles = Array.isArray(data.volunteerSubRoles) ? data.volunteerSubRoles : [];
  const professionTypes = Array.isArray(data.professionTypes) ? data.professionTypes : [];

  return (
    <div className="reg-step-card">
      <div className="reg-step-header">
        <div className="reg-step-number-badge">Step 6 of 6</div>
        <h2 className="reg-step-title">Review &amp; Final Confirmation</h2>
        <p className="reg-step-desc">
          Please review the details below before submitting. If you need to make any changes, click the &quot;Edit&quot; button on the respective section.
        </p>
      </div>

      <div className="reg-review-sections">
        {/* Section 1: Personal Information */}
        <div className="reg-review-card">
          <div className="reg-review-card-header">
            <h3><i className="fas fa-user-circle"></i> 1. Personal Information</h3>
            <button
              type="button"
              className="reg-btn-edit-step"
              onClick={() => onEditStep(1)}
              aria-label="Edit Personal Information"
            >
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
          <div className="reg-review-grid">
            <div className="reg-review-item">
              <span className="label">Full Name:</span>
              <span className="value">{person.name || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Father / Husband Name:</span>
              <span className="value">{person.fatherOrHusbandName || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">CNIC:</span>
              <span className="value font-mono">{person.cnic || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Gender:</span>
              <span className="value">{person.gender || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Age:</span>
              <span className="value">{person.age ? `${person.age} Years` : '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Religion:</span>
              <span className="value">{person.religion || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Nationality:</span>
              <span className="value">{person.nationality || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Blood Group:</span>
              <span className="value">{person.bloodGroup || 'Not specified'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Education:</span>
              <span className="value">{person.education || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Marital Status:</span>
              <span className="value">{person.maritalStatus || '—'}</span>
            </div>
            <div className="reg-review-item full-width">
              <span className="label">Profession Types:</span>
              <span className="value">
                {professionTypes.length > 0 ? (
                  <span className="reg-review-chips">
                    {professionTypes.map((p) => (
                      <span key={p} className="reg-review-chip">{p}</span>
                    ))}
                  </span>
                ) : '—'}
              </span>
            </div>
            <div className="reg-review-item full-width">
              <span className="label">Home Address:</span>
              <span className="value">{person.homeAddress || '—'}</span>
            </div>
            {person.officeAddress && (
              <div className="reg-review-item full-width">
                <span className="label">Office Address:</span>
                <span className="value">{person.officeAddress}</span>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Contact Information */}
        <div className="reg-review-card">
          <div className="reg-review-card-header">
            <h3><i className="fas fa-address-book"></i> 2. Contact Information</h3>
            <button
              type="button"
              className="reg-btn-edit-step"
              onClick={() => onEditStep(2)}
              aria-label="Edit Contact Information"
            >
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
          <div className="reg-review-grid">
            <div className="reg-review-item">
              <span className="label">Cell Number:</span>
              <span className="value font-mono">{person.cell || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">WhatsApp:</span>
              <span className="value font-mono">{person.whatsapp || '—'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">Email:</span>
              <span className="value">{person.email || '—'}</span>
            </div>
            {person.website && (
              <div className="reg-review-item">
                <span className="label">Website:</span>
                <span className="value">{person.website}</span>
              </div>
            )}
            {person.referralName && (
              <div className="reg-review-item">
                <span className="label">Referred By:</span>
                <span className="value">{person.referralName} {person.referralCell ? `(${person.referralCell})` : ''}</span>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Location Details */}
        <div className="reg-review-card">
          <div className="reg-review-card-header">
            <h3><i className="fas fa-map-marked-alt"></i> 3. Administrative Location</h3>
            <button
              type="button"
              className="reg-btn-edit-step"
              onClick={() => onEditStep(3)}
              aria-label="Edit Location Details"
            >
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
          <div className="reg-review-grid">
            <div className="reg-review-item">
              <span className="label">Country:</span>
              <span className="value">{location.country || 'Pakistan'}</span>
            </div>
            <div className="reg-review-item">
              <span className="label">City:</span>
              <span className="value">{location.city || '—'}</span>
            </div>
            {location.province && (
              <div className="reg-review-item">
                <span className="label">Province / State:</span>
                <span className="value">{location.province}</span>
              </div>
            )}
            {location.division && (
              <div className="reg-review-item">
                <span className="label">Division:</span>
                <span className="value">{location.division}</span>
              </div>
            )}
            {location.district && (
              <div className="reg-review-item">
                <span className="label">District:</span>
                <span className="value">{location.district}</span>
              </div>
            )}
            {location.tehsil && (
              <div className="reg-review-item">
                <span className="label">Tehsil:</span>
                <span className="value">{location.tehsil}</span>
              </div>
            )}
            {location.uc && (
              <div className="reg-review-item">
                <span className="label">Union Council (UC):</span>
                <span className="value">{location.uc}</span>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: Role & Interests */}
        <div className="reg-review-card">
          <div className="reg-review-card-header">
            <h3><i className="fas fa-user-tag"></i> 4. BNWO Role &amp; Focus</h3>
            <button
              type="button"
              className="reg-btn-edit-step"
              onClick={() => onEditStep(4)}
              aria-label="Edit Role & Interests"
            >
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
          <div className="reg-review-grid">
            <div className="reg-review-item full-width">
              <span className="label">Selected Role(s):</span>
              <span className="value">
                {selectedRoles.length > 0 ? (
                  <span className="reg-review-chips">
                    {selectedRoles.map((r) => (
                      <span key={r} className="reg-review-chip bg-accent-light">{r}</span>
                    ))}
                  </span>
                ) : '—'}
              </span>
            </div>
            {volunteerSubRoles.length > 0 && (
              <div className="reg-review-item full-width">
                <span className="label">Volunteer Capacities:</span>
                <span className="value">
                  <span className="reg-review-chips">
                    {volunteerSubRoles.map((sr) => (
                      <span key={sr} className="reg-review-chip">{sr}</span>
                    ))}
                  </span>
                </span>
              </div>
            )}
            <div className="reg-review-item full-width">
              <span className="label">Area of Interest:</span>
              <span className="value">{person.areaOfInterest || '—'}</span>
            </div>
            {person.hobbies && (
              <div className="reg-review-item full-width">
                <span className="label">Hobbies &amp; Activities:</span>
                <span className="value">{person.hobbies}</span>
              </div>
            )}
          </div>
        </div>

        {/* Section 5: Programs & Projects */}
        <div className="reg-review-card">
          <div className="reg-review-card-header">
            <h3><i className="fas fa-clipboard-list"></i> 5. Programs &amp; Projects ({participations.length})</h3>
            <button
              type="button"
              className="reg-btn-edit-step"
              onClick={() => onEditStep(5)}
              aria-label="Edit Programs & Projects"
            >
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>
          <div className="reg-review-participations">
            {participations.map((p, idx) => {
              const progObj = getProgramById(p.programId);
              const projects = progObj ? getProjectsForProgram(p.programId) : [];
              const projObj = projects.find((pr) => pr.id === p.projectId);

              return (
                <div key={idx} className="reg-review-part-card">
                  <div className="reg-review-part-title">
                    <strong>#{idx + 1}: {progObj ? progObj.name : p.programId || 'Program'}</strong>
                    <span className="badge">{p.role || 'Participant'}</span>
                  </div>
                  <p className="reg-review-part-proj">
                    <i className="fas fa-angle-right"></i> {projObj ? projObj.name : p.projectId || 'Project'}
                  </p>
                  <div className="reg-review-grid small">
                    {p.contributionType && (
                      <div className="reg-review-item">
                        <span className="label">Contribution:</span>
                        <span className="value">{p.contributionType}</span>
                      </div>
                    )}
                    {p.amount && (
                      <div className="reg-review-item">
                        <span className="label">Amount:</span>
                        <span className="value">PKR {Number(p.amount).toLocaleString()}</span>
                      </div>
                    )}
                    {p.hours && (
                      <div className="reg-review-item">
                        <span className="label">Time Commitment:</span>
                        <span className="value">{p.hours}</span>
                      </div>
                    )}
                    {p.helpNeeded && (
                      <div className="reg-review-item">
                        <span className="label">Assistance Required:</span>
                        <span className="value">{p.helpNeeded}</span>
                      </div>
                    )}
                    {p.beneficiaryCount && (
                      <div className="reg-review-item">
                        <span className="label">Beneficiary Count:</span>
                        <span className="value">{p.beneficiaryCount}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="reg-consent-wrapper">
        <label className={`reg-consent-label ${errorConsent ? 'has-error' : ''}`}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => onConsentChange(e.target.checked)}
            aria-invalid={Boolean(errorConsent)}
            aria-describedby={errorConsent ? 'error-consent' : undefined}
          />
          <span className="reg-consent-text">
            <strong>Declaration of Truth:</strong> I hereby solemnly declare and affirm that all the information provided in this registration form is true, correct, and complete to the best of my knowledge and belief, and I agree to abide by the principles and charter of Best Nation Welfare Organization. <span className="text-danger">*</span>
          </span>
        </label>
        {errorConsent && (
          <p id="error-consent" className="reg-error-text" role="alert">
            <i className="fas fa-exclamation-circle"></i> {errorConsent}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step6Review;
