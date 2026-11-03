import React from 'react';

const MAIN_ROLES = [
  {
    id: 'Donor',
    title: 'Donor / Philanthropist',
    icon: 'fa-hand-holding-usd',
    desc: 'Support BNWO causes financially through Zakat, Sadaqah, or goods donations.'
  },
  {
    id: 'Beneficiary',
    title: 'Beneficiary / Applicant',
    icon: 'fa-hands-helping',
    desc: 'Apply for assistance, ration support, education grants, or community medical aid.'
  },
  {
    id: 'Volunteer/Member',
    title: 'Volunteer / Parliamentary Member',
    icon: 'fa-users',
    desc: 'Contribute your time, leadership, expertise, or ground execution to the movement.'
  }
];

const VOLUNTEER_SUB_ROLES = [
  'Organizer',
  'Patron',
  'Advisor',
  'Coordinator',
  'IT Expert',
  'Media Representative'
];

const INTEREST_AREAS = [
  'Primary & Secondary Education Support',
  'Healthcare & Free Medical Camps',
  'Food Security & Monthly Rashan Drives',
  'Clean Drinking Water & Tube Wells',
  'Women Skill Training & Micro-Livelihoods',
  'Orphan Support & Care Centers',
  'Disaster Management & Flood Relief',
  'Youth Leadership & Civic Engagement',
  'Legal Rights & Social Justice Advocacy',
  'Green Pakistan & Urban Tree Plantation'
];

const Step4Role = ({ data, onChange, errors }) => {
  const selectedRoles = Array.isArray(data.selectedRoles) ? data.selectedRoles : [];
  const volunteerSubRoles = Array.isArray(data.volunteerSubRoles) ? data.volunteerSubRoles : [];

  const handleRoleToggle = (roleId) => {
    const current = [...selectedRoles];
    const index = current.indexOf(roleId);
    if (index === -1) {
      current.push(roleId);
    } else {
      current.splice(index, 1);
    }
    onChange('selectedRoles', current);
  };

  const handleSubRoleToggle = (subRole) => {
    const current = [...volunteerSubRoles];
    const index = current.indexOf(subRole);
    if (index === -1) {
      current.push(subRole);
    } else {
      current.splice(index, 1);
    }
    onChange('volunteerSubRoles', current);
  };

  const isVolunteerSelected = selectedRoles.includes('Volunteer/Member');

  return (
    <div className="reg-step-card">
      <div className="reg-step-header">
        <div className="reg-step-number-badge">Step 4 of 6</div>
        <h2 className="reg-step-title">Your Role in BNWO</h2>
        <p className="reg-step-desc">
          Choose how you would like to participate in Best Nation Welfare Organization. You may select more than one role.
        </p>
      </div>

      {/* Main Roles */}
      <div className="reg-field">
        <label className="reg-label">
          Select Your Participation Role(s) <span className="text-danger">*</span>
        </label>
        <div className="reg-roles-grid" role="group" aria-label="BNWO Roles">
          {MAIN_ROLES.map((role) => {
            const isSelected = selectedRoles.includes(role.id);
            return (
              <div
                key={role.id}
                className={`reg-role-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleRoleToggle(role.id)}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleRoleToggle(role.id);
                  }
                }}
              >
                <div className="reg-role-card-top">
                  <div className="reg-role-icon">
                    <i className={`fas ${role.icon}`}></i>
                  </div>
                  <div className="reg-role-check">
                    <i className={`fas ${isSelected ? 'fa-check-circle' : 'fa-circle'}`}></i>
                  </div>
                </div>
                <h3 className="reg-role-title">{role.title}</h3>
                <p className="reg-role-desc">{role.desc}</p>
              </div>
            );
          })}
        </div>
        {errors.selectedRoles && (
          <p className="reg-error-text" role="alert">
            <i className="fas fa-exclamation-circle"></i> {errors.selectedRoles}
          </p>
        )}
      </div>

      {/* Volunteer Sub-roles (Appears if Volunteer/Member is selected) */}
      {isVolunteerSelected && (
        <div className="reg-subroles-box animate-fade-in">
          <label className="reg-label">
            Volunteer / Member Functional Capacity
            <span className="reg-hint-inline">(Select the designations that match your expertise)</span>
          </label>
          <div className="reg-checkbox-group">
            {VOLUNTEER_SUB_ROLES.map((subRole) => {
              const isChecked = volunteerSubRoles.includes(subRole);
              return (
                <label
                  key={subRole}
                  className={`reg-chip-checkbox ${isChecked ? 'is-selected' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleSubRoleToggle(subRole)}
                  />
                  <span className="reg-chip-indicator">
                    <i className={`fas ${isChecked ? 'fa-check-circle' : 'fa-circle'}`}></i>
                  </span>
                  <span className="reg-chip-text">{subRole}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Area of Interest */}
      <div className="reg-field">
        <label htmlFor="reg-interest" className="reg-label">
          Area of Interest in Best Nation <span className="text-danger">*</span>
        </label>
        <select
          id="reg-interest"
          className={`reg-select ${errors.areaOfInterest ? 'has-error' : ''}`}
          value={data.areaOfInterest || ''}
          onChange={(e) => onChange('areaOfInterest', e.target.value)}
          aria-invalid={Boolean(errors.areaOfInterest)}
          aria-describedby={errors.areaOfInterest ? 'error-interest' : undefined}
          required
        >
          <option value="">-- Select Primary Area of Interest --</option>
          {INTEREST_AREAS.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
          <option value="General Community Welfare & All Programs">General Community Welfare &amp; All Programs</option>
        </select>
        {errors.areaOfInterest && (
          <p id="error-interest" className="reg-error-text" role="alert">
            <i className="fas fa-exclamation-circle"></i> {errors.areaOfInterest}
          </p>
        )}
      </div>

      {/* Hobbies / Social Activities */}
      <div className="reg-field">
        <label htmlFor="reg-hobbies" className="reg-label">
          Hobbies &amp; Social Activities <span className="reg-optional">(Optional)</span>
        </label>
        <textarea
          id="reg-hobbies"
          rows={2}
          className="reg-textarea"
          placeholder="e.g. Sports, reading, social counseling, organizing community events"
          value={data.hobbies || ''}
          onChange={(e) => onChange('hobbies', e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Step4Role;
