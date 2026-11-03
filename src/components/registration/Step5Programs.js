import React from 'react';
import { programsConfig, getProjectsForProgram } from '../../config/programs';

const CONTRIBUTION_TYPES = [
  'Zakat',
  'Sadqa',
  'Time',
  'Other item/goods'
];

const TIME_COMMITMENTS = [
  '2-4 hours / week',
  '5-10 hours / week',
  '10-20 hours / week',
  'Monthly event basis (8-10 hours/month)',
  'On-call emergency response'
];

const Step5Programs = ({ data, onChange, errors }) => {
  const participations = Array.isArray(data.participations) && data.participations.length > 0
    ? data.participations
    : [
        {
          role: (data.selectedRoles && data.selectedRoles[0]) || 'Donor',
          programId: '',
          projectId: '',
          contributionType: 'Zakat',
          amount: '',
          hours: '',
          helpNeeded: '',
          beneficiaryCount: '1'
        }
      ];

  const availableRoles = Array.isArray(data.selectedRoles) && data.selectedRoles.length > 0
    ? data.selectedRoles
    : ['Donor', 'Beneficiary', 'Volunteer/Member'];

  const handleUpdateEntry = (index, field, value) => {
    const nextParticipations = participations.map((item, idx) => {
      if (idx !== index) return item;
      const updated = { ...item, [field]: value };
      // When program changes, reset project
      if (field === 'programId') {
        updated.projectId = '';
      }
      return updated;
    });
    onChange('participations', nextParticipations);
  };

  const handleAddEntry = () => {
    const newEntry = {
      role: availableRoles[0] || 'Donor',
      programId: '',
      projectId: '',
      contributionType: 'Zakat',
      amount: '',
      hours: '',
      helpNeeded: '',
      beneficiaryCount: '1'
    };
    onChange('participations', [...participations, newEntry]);
  };

  const handleRemoveEntry = (index) => {
    if (participations.length <= 1) return;
    const nextParticipations = participations.filter((_, idx) => idx !== index);
    onChange('participations', nextParticipations);
  };

  return (
    <div className="reg-step-card">
      <div className="reg-step-header">
        <div className="reg-step-number-badge">Step 5 of 6</div>
        <h2 className="reg-step-title">Programs &amp; Projects Participation</h2>
        <p className="reg-step-desc">
          Select the specific BNWO programs and projects you are engaging with. You can link multiple programs and projects using the &quot;Add another project&quot; button below.
        </p>
      </div>

      {errors.participations && typeof errors.participations === 'string' && (
        <div className="reg-alert-error" role="alert">
          <i className="fas fa-exclamation-triangle"></i> {errors.participations}
        </div>
      )}

      <div className="reg-participations-list">
        {participations.map((entry, idx) => {
          const currentProjects = entry.programId ? getProjectsForProgram(entry.programId) : [];
          const entryRole = entry.role || availableRoles[0] || 'Donor';
          const isDonor = entryRole === 'Donor';
          const isBeneficiary = entryRole === 'Beneficiary';
          const isVolunteer = entryRole === 'Volunteer/Member';

          return (
            <div key={idx} className="reg-participation-card">
              <div className="reg-participation-card-header">
                <div className="reg-participation-badge">
                  <i className="fas fa-project-diagram"></i> Project Entry #{idx + 1}
                </div>
                {participations.length > 1 && (
                  <button
                    type="button"
                    className="reg-btn-remove"
                    onClick={() => handleRemoveEntry(idx)}
                    aria-label={`Remove project entry #${idx + 1}`}
                  >
                    <i className="fas fa-trash-alt"></i> Remove
                  </button>
                )}
              </div>

              {/* Role for this participation */}
              {availableRoles.length > 1 && (
                <div className="reg-field">
                  <label htmlFor={`reg-entry-role-${idx}`} className="reg-label">
                    Participation Capacity For This Entry <span className="text-danger">*</span>
                  </label>
                  <select
                    id={`reg-entry-role-${idx}`}
                    className="reg-select"
                    value={entryRole}
                    onChange={(e) => handleUpdateEntry(idx, 'role', e.target.value)}
                    required
                  >
                    {availableRoles.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="reg-grid reg-grid-2">
                {/* Program Dropdown */}
                <div className="reg-field">
                  <label htmlFor={`reg-prog-${idx}`} className="reg-label">
                    BNWO Program <span className="text-danger">*</span>
                  </label>
                  <select
                    id={`reg-prog-${idx}`}
                    className={`reg-select ${
                      errors[`participations.${idx}.programId`] ? 'has-error' : ''
                    }`}
                    value={entry.programId || ''}
                    onChange={(e) => handleUpdateEntry(idx, 'programId', e.target.value)}
                    required
                  >
                    <option value="">-- Select One of 12 Programs --</option>
                    {programsConfig.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.name}
                      </option>
                    ))}
                  </select>
                  {errors[`participations.${idx}.programId`] && (
                    <p className="reg-error-text" role="alert">
                      <i className="fas fa-exclamation-circle"></i>{' '}
                      {errors[`participations.${idx}.programId`]}
                    </p>
                  )}
                </div>

                {/* Project Dropdown */}
                <div className="reg-field">
                  <label htmlFor={`reg-proj-${idx}`} className="reg-label">
                    Program Project <span className="text-danger">*</span>
                  </label>
                  <select
                    id={`reg-proj-${idx}`}
                    className={`reg-select ${
                      errors[`participations.${idx}.projectId`] ? 'has-error' : ''
                    }`}
                    value={entry.projectId || ''}
                    onChange={(e) => handleUpdateEntry(idx, 'projectId', e.target.value)}
                    disabled={!entry.programId}
                    required
                  >
                    <option value="">
                      {!entry.programId
                        ? '-- Select Program First --'
                        : '-- Select One of 2 Projects --'}
                    </option>
                    {currentProjects.map((proj) => (
                      <option key={proj.id} value={proj.id}>
                        {proj.name}
                      </option>
                    ))}
                  </select>
                  {errors[`participations.${idx}.projectId`] && (
                    <p className="reg-error-text" role="alert">
                      <i className="fas fa-exclamation-circle"></i>{' '}
                      {errors[`participations.${idx}.projectId`]}
                    </p>
                  )}
                </div>
              </div>

              {/* Conditional fields based on role */}
              {isDonor && (
                <div className="reg-donor-fields animate-fade-in">
                  <div className="reg-grid reg-grid-2">
                    <div className="reg-field">
                      <label htmlFor={`reg-contrib-type-${idx}`} className="reg-label">
                        Contribution Type <span className="text-danger">*</span>
                      </label>
                      <select
                        id={`reg-contrib-type-${idx}`}
                        className="reg-select"
                        value={entry.contributionType || 'Zakat'}
                        onChange={(e) => handleUpdateEntry(idx, 'contributionType', e.target.value)}
                      >
                        {CONTRIBUTION_TYPES.map((ct) => (
                          <option key={ct} value={ct}>{ct}</option>
                        ))}
                      </select>
                    </div>

                    {entry.contributionType === 'Time' ? (
                      <div className="reg-field">
                        <label htmlFor={`reg-hours-${idx}`} className="reg-label">
                          Time Commitment <span className="text-danger">*</span>
                        </label>
                        <select
                          id={`reg-hours-${idx}`}
                          className="reg-select"
                          value={entry.hours || TIME_COMMITMENTS[0]}
                          onChange={(e) => handleUpdateEntry(idx, 'hours', e.target.value)}
                        >
                          {TIME_COMMITMENTS.map((tc) => (
                            <option key={tc} value={tc}>{tc}</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="reg-field">
                        <label htmlFor={`reg-amount-${idx}`} className="reg-label">
                          Pledged Amount (PKR) / Item Estimate
                        </label>
                        <div className="reg-input-group">
                          <span className="reg-input-prefix font-bold">PKR</span>
                          <input
                            id={`reg-amount-${idx}`}
                            type="number"
                            min="0"
                            className="reg-input has-prefix"
                            placeholder="e.g. 10000"
                            value={entry.amount || ''}
                            onChange={(e) => handleUpdateEntry(idx, 'amount', e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {isBeneficiary && (
                <div className="reg-beneficiary-fields animate-fade-in">
                  <div className="reg-grid reg-grid-2">
                    <div className="reg-field">
                      <label htmlFor={`reg-help-needed-${idx}`} className="reg-label">
                        Type of Help Needed / Received <span className="text-danger">*</span>
                      </label>
                      <input
                        id={`reg-help-needed-${idx}`}
                        type="text"
                        className="reg-input"
                        placeholder="e.g. Monthly Rashan, School Fee Aid, Medicine Aid"
                        value={entry.helpNeeded || ''}
                        onChange={(e) => handleUpdateEntry(idx, 'helpNeeded', e.target.value)}
                      />
                    </div>
                    <div className="reg-field">
                      <label htmlFor={`reg-ben-count-${idx}`} className="reg-label">
                        Number of Beneficiaries in Family / Group <span className="text-danger">*</span>
                      </label>
                      <input
                        id={`reg-ben-count-${idx}`}
                        type="number"
                        min="1"
                        max="50"
                        className="reg-input"
                        placeholder="e.g. 5"
                        value={entry.beneficiaryCount || '1'}
                        onChange={(e) => handleUpdateEntry(idx, 'beneficiaryCount', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {isVolunteer && !isDonor && !isBeneficiary && (
                <div className="reg-volunteer-fields animate-fade-in">
                  <div className="reg-field">
                    <label htmlFor={`reg-vol-hours-${idx}`} className="reg-label">
                      Expected Time Contribution <span className="reg-optional">(Optional)</span>
                    </label>
                    <select
                      id={`reg-vol-hours-${idx}`}
                      className="reg-select"
                      value={entry.hours || TIME_COMMITMENTS[0]}
                      onChange={(e) => handleUpdateEntry(idx, 'hours', e.target.value)}
                    >
                      {TIME_COMMITMENTS.map((tc) => (
                        <option key={tc} value={tc}>{tc}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="reg-add-more-row">
        <button
          type="button"
          className="reg-btn-add-project"
          onClick={handleAddEntry}
        >
          <i className="fas fa-plus-circle"></i> Add Another Program / Project
        </button>
      </div>
    </div>
  );
};

export default Step5Programs;
