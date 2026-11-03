import React from 'react';

const GENDER_OPTIONS = ['Male', 'Female', 'Other / Prefer not to say'];
const RELIGION_OPTIONS = ['Islam', 'Christianity', 'Hinduism', 'Sikhism', 'Other'];
const NATIONALITY_OPTIONS = ['Pakistani', 'Overseas Pakistani', 'Other'];
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown / Not tested'];
const EDUCATION_OPTIONS = [
  'Primary / Middle',
  'Matriculation / SSC / O-Levels',
  'Intermediate / HSSC / A-Levels / DAE',
  "Bachelor's Degree / Graduation (14/16 Years)",
  "Master's Degree / Postgraduate (16 Years)",
  'MPhil / MS (18 Years)',
  'PhD / Doctorate',
  'Islamic Education / Dars-e-Nizami',
  'Technical / Vocational Certification',
  'Other'
];
const MARITAL_STATUS_OPTIONS = ['Single', 'Married', 'Widowed', 'Divorced'];
const PROFESSION_OPTIONS = [
  'Govt service',
  'Private service',
  'Retired',
  'Business',
  'Agriculture land',
  'Other'
];

export function formatCnic(val) {
  const digits = val.replace(/\D/g, '').slice(0, 13);
  let formatted = '';
  if (digits.length > 0) {
    formatted = digits.slice(0, 5);
  }
  if (digits.length > 5) {
    formatted += '-' + digits.slice(5, 12);
  }
  if (digits.length > 12) {
    formatted += '-' + digits.slice(12, 13);
  }
  return formatted;
}

const Step1PersonalInfo = ({ data, onChange, errors }) => {
  const handleCnicChange = (e) => {
    const formatted = formatCnic(e.target.value);
    onChange('cnic', formatted);
  };

  const handleProfessionToggle = (profession) => {
    const current = Array.isArray(data.professionTypes) ? [...data.professionTypes] : [];
    const index = current.indexOf(profession);
    if (index === -1) {
      current.push(profession);
    } else {
      current.splice(index, 1);
    }
    onChange('professionTypes', current);
  };

  return (
    <div className="reg-step-card">
      <div className="reg-step-header">
        <div className="reg-step-number-badge">Step 1 of 6</div>
        <h2 className="reg-step-title">Personal Information</h2>
        <p className="reg-step-desc">
          Please provide your identity details as stated on your government-issued documents. Fields marked with an asterisk (<span className="text-danger">*</span>) are mandatory.
        </p>
      </div>

      <div className="reg-grid reg-grid-2">
        {/* Full Name */}
        <div className="reg-field">
          <label htmlFor="reg-name" className="reg-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            id="reg-name"
            type="text"
            className={`reg-input ${errors.name ? 'has-error' : ''}`}
            placeholder="e.g. Muhammad Ali Khan"
            value={data.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            required
          />
          {errors.name && (
            <p id="error-name" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.name}
            </p>
          )}
        </div>

        {/* Father's / Husband's Name */}
        <div className="reg-field">
          <label htmlFor="reg-father" className="reg-label">
            Father's / Husband's Name <span className="text-danger">*</span>
          </label>
          <input
            id="reg-father"
            type="text"
            className={`reg-input ${errors.fatherOrHusbandName ? 'has-error' : ''}`}
            placeholder="e.g. Tariq Mehmood"
            value={data.fatherOrHusbandName || ''}
            onChange={(e) => onChange('fatherOrHusbandName', e.target.value)}
            aria-invalid={Boolean(errors.fatherOrHusbandName)}
            aria-describedby={errors.fatherOrHusbandName ? 'error-father' : undefined}
            required
          />
          {errors.fatherOrHusbandName && (
            <p id="error-father" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.fatherOrHusbandName}
            </p>
          )}
        </div>
      </div>

      <div className="reg-grid reg-grid-3">
        {/* CNIC */}
        <div className="reg-field">
          <label htmlFor="reg-cnic" className="reg-label">
            CNIC Number <span className="text-danger">*</span>
          </label>
          <input
            id="reg-cnic"
            type="text"
            inputMode="numeric"
            className={`reg-input ${errors.cnic ? 'has-error' : ''}`}
            placeholder="12345-1234567-1"
            value={data.cnic || ''}
            onChange={handleCnicChange}
            maxLength={15}
            aria-invalid={Boolean(errors.cnic)}
            aria-describedby={errors.cnic ? 'error-cnic' : 'cnic-hint'}
            required
          />
          <small id="cnic-hint" className="reg-hint">13 digits with auto dashes</small>
          {errors.cnic && (
            <p id="error-cnic" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.cnic}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="reg-field">
          <label htmlFor="reg-gender" className="reg-label">
            Gender <span className="text-danger">*</span>
          </label>
          <select
            id="reg-gender"
            className={`reg-select ${errors.gender ? 'has-error' : ''}`}
            value={data.gender || ''}
            onChange={(e) => onChange('gender', e.target.value)}
            aria-invalid={Boolean(errors.gender)}
            aria-describedby={errors.gender ? 'error-gender' : undefined}
            required
          >
            <option value="">-- Select Gender --</option>
            {GENDER_OPTIONS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          {errors.gender && (
            <p id="error-gender" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.gender}
            </p>
          )}
        </div>

        {/* Age */}
        <div className="reg-field">
          <label htmlFor="reg-age" className="reg-label">
            Age (Years) <span className="text-danger">*</span>
          </label>
          <input
            id="reg-age"
            type="number"
            min={1}
            max={120}
            className={`reg-input ${errors.age ? 'has-error' : ''}`}
            placeholder="e.g. 28"
            value={data.age || ''}
            onChange={(e) => onChange('age', e.target.value)}
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? 'error-age' : undefined}
            required
          />
          {errors.age && (
            <p id="error-age" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.age}
            </p>
          )}
        </div>
      </div>

      <div className="reg-grid reg-grid-3">
        {/* Religion */}
        <div className="reg-field">
          <label htmlFor="reg-religion" className="reg-label">
            Religion <span className="text-danger">*</span>
          </label>
          <select
            id="reg-religion"
            className={`reg-select ${errors.religion ? 'has-error' : ''}`}
            value={data.religion || ''}
            onChange={(e) => onChange('religion', e.target.value)}
            aria-invalid={Boolean(errors.religion)}
            aria-describedby={errors.religion ? 'error-religion' : undefined}
            required
          >
            <option value="">-- Select Religion --</option>
            {RELIGION_OPTIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {errors.religion && (
            <p id="error-religion" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.religion}
            </p>
          )}
        </div>

        {/* Nationality */}
        <div className="reg-field">
          <label htmlFor="reg-nationality" className="reg-label">
            Nationality <span className="text-danger">*</span>
          </label>
          <select
            id="reg-nationality"
            className={`reg-select ${errors.nationality ? 'has-error' : ''}`}
            value={data.nationality || 'Pakistani'}
            onChange={(e) => onChange('nationality', e.target.value)}
            aria-invalid={Boolean(errors.nationality)}
            aria-describedby={errors.nationality ? 'error-nationality' : undefined}
            required
          >
            {NATIONALITY_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {errors.nationality && (
            <p id="error-nationality" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.nationality}
            </p>
          )}
        </div>

        {/* Blood Group */}
        <div className="reg-field">
          <label htmlFor="reg-blood" className="reg-label">
            Blood Group <span className="reg-optional">(Optional)</span>
          </label>
          <select
            id="reg-blood"
            className="reg-select"
            value={data.bloodGroup || ''}
            onChange={(e) => onChange('bloodGroup', e.target.value)}
          >
            <option value="">-- Select Blood Group --</option>
            {BLOOD_GROUPS.map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="reg-grid reg-grid-2">
        {/* Education */}
        <div className="reg-field">
          <label htmlFor="reg-education" className="reg-label">
            Education Qualification <span className="text-danger">*</span>
          </label>
          <select
            id="reg-education"
            className={`reg-select ${errors.education ? 'has-error' : ''}`}
            value={data.education || ''}
            onChange={(e) => onChange('education', e.target.value)}
            aria-invalid={Boolean(errors.education)}
            aria-describedby={errors.education ? 'error-education' : undefined}
            required
          >
            <option value="">-- Select Education Level --</option>
            {EDUCATION_OPTIONS.map((edu) => (
              <option key={edu} value={edu}>{edu}</option>
            ))}
          </select>
          {errors.education && (
            <p id="error-education" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.education}
            </p>
          )}
        </div>

        {/* Marital Status */}
        <div className="reg-field">
          <label htmlFor="reg-marital" className="reg-label">
            Marital Status <span className="text-danger">*</span>
          </label>
          <select
            id="reg-marital"
            className={`reg-select ${errors.maritalStatus ? 'has-error' : ''}`}
            value={data.maritalStatus || ''}
            onChange={(e) => onChange('maritalStatus', e.target.value)}
            aria-invalid={Boolean(errors.maritalStatus)}
            aria-describedby={errors.maritalStatus ? 'error-marital' : undefined}
            required
          >
            <option value="">-- Select Marital Status --</option>
            {MARITAL_STATUS_OPTIONS.map((ms) => (
              <option key={ms} value={ms}>{ms}</option>
            ))}
          </select>
          {errors.maritalStatus && (
            <p id="error-marital" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors.maritalStatus}
            </p>
          )}
        </div>
      </div>

      {/* Profession Type (Multi-select) */}
      <div className="reg-field">
        <label className="reg-label">
          Profession Type <span className="text-danger">*</span>
          <span className="reg-hint-inline">(Select all that apply)</span>
        </label>
        <div className="reg-checkbox-group" role="group" aria-label="Profession Types">
          {PROFESSION_OPTIONS.map((prof) => {
            const isChecked = Array.isArray(data.professionTypes) && data.professionTypes.includes(prof);
            return (
              <label
                key={prof}
                className={`reg-chip-checkbox ${isChecked ? 'is-selected' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleProfessionToggle(prof)}
                  aria-invalid={Boolean(errors.professionTypes)}
                />
                <span className="reg-chip-indicator">
                  <i className={`fas ${isChecked ? 'fa-check-circle' : 'fa-circle'}`}></i>
                </span>
                <span className="reg-chip-text">{prof}</span>
              </label>
            );
          })}
        </div>
        {errors.professionTypes && (
          <p className="reg-error-text" role="alert">
            <i className="fas fa-exclamation-circle"></i> {errors.professionTypes}
          </p>
        )}
      </div>

      {/* Home Address */}
      <div className="reg-field">
        <label htmlFor="reg-home-addr" className="reg-label">
          Home Address <span className="text-danger">*</span>
        </label>
        <textarea
          id="reg-home-addr"
          rows={2}
          className={`reg-textarea ${errors.homeAddress ? 'has-error' : ''}`}
          placeholder="House/Street/Mohallah, Area details"
          value={data.homeAddress || ''}
          onChange={(e) => onChange('homeAddress', e.target.value)}
          aria-invalid={Boolean(errors.homeAddress)}
          aria-describedby={errors.homeAddress ? 'error-home-addr' : undefined}
          required
        ></textarea>
        {errors.homeAddress && (
          <p id="error-home-addr" className="reg-error-text" role="alert">
            <i className="fas fa-exclamation-circle"></i> {errors.homeAddress}
          </p>
        )}
      </div>

      {/* Office Address (Optional) */}
      <div className="reg-field">
        <label htmlFor="reg-office-addr" className="reg-label">
          Office Address <span className="reg-optional">(Optional)</span>
        </label>
        <input
          id="reg-office-addr"
          type="text"
          className="reg-input"
          placeholder="Business / Workplace address if applicable"
          value={data.officeAddress || ''}
          onChange={(e) => onChange('officeAddress', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Step1PersonalInfo;
