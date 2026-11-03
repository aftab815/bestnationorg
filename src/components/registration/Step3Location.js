import React from 'react';
import {
  locationsData,
  getProvinces,
  getDivisions,
  getDistricts,
  getTehsils,
  getUnionCouncils
} from '../../data/locations';

const Step3Location = ({ data, onChange, errors }) => {
  const location = data.location || {};
  const isPakistan = (location.country || 'Pakistan') === 'Pakistan';

  const provinces = getProvinces(location.country || 'Pakistan');
  const divisions = getDivisions(location.country || 'Pakistan', location.province);
  const districts = getDistricts(location.country || 'Pakistan', location.province, location.division);
  const tehsils = getTehsils(location.country || 'Pakistan', location.province, location.division, location.district);
  const unionCouncils = getUnionCouncils(
    location.country || 'Pakistan',
    location.province,
    location.division,
    location.district,
    location.tehsil
  );

  const updateLocationField = (field, value) => {
    const updated = { ...location, [field]: value };

    // Reset dependent downstream fields
    if (field === 'country') {
      updated.province = '';
      updated.division = '';
      updated.district = '';
      updated.tehsil = '';
      updated.uc = '';
    } else if (field === 'province') {
      updated.division = '';
      updated.district = '';
      updated.tehsil = '';
      updated.uc = '';
    } else if (field === 'division') {
      updated.district = '';
      updated.tehsil = '';
      updated.uc = '';
    } else if (field === 'district') {
      updated.tehsil = '';
      updated.uc = '';
      if (!updated.city) {
        // Helpful default: autofill city with district name if empty
        updated.city = value.replace(' District', '');
      }
    } else if (field === 'tehsil') {
      updated.uc = '';
    }

    onChange('location', updated);
  };

  return (
    <div className="reg-step-card">
      <div className="reg-step-header">
        <div className="reg-step-number-badge">Step 3 of 6</div>
        <h2 className="reg-step-title">Location Hierarchy</h2>
        <p className="reg-step-desc">
          Select your administrative tier. Each dropdown dynamically populates based on your previous selection to connect you with your local BNWO parliamentary chapter.
        </p>
      </div>

      <div className="reg-grid reg-grid-2">
        {/* Country */}
        <div className="reg-field">
          <label htmlFor="reg-country" className="reg-label">
            Country <span className="text-danger">*</span>
          </label>
          <select
            id="reg-country"
            className={`reg-select ${errors['location.country'] ? 'has-error' : ''}`}
            value={location.country || 'Pakistan'}
            onChange={(e) => updateLocationField('country', e.target.value)}
            aria-invalid={Boolean(errors['location.country'])}
            aria-describedby={errors['location.country'] ? 'error-country' : undefined}
            required
          >
            {locationsData.countries.map((c) => (
              <option key={c.code} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors['location.country'] && (
            <p id="error-country" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors['location.country']}
            </p>
          )}
        </div>

        {/* City */}
        <div className="reg-field">
          <label htmlFor="reg-city" className="reg-label">
            City / Town <span className="text-danger">*</span>
          </label>
          <input
            id="reg-city"
            type="text"
            className={`reg-input ${errors['location.city'] ? 'has-error' : ''}`}
            placeholder="e.g. Lahore, Karachi, Rawalpindi"
            value={location.city || ''}
            onChange={(e) => updateLocationField('city', e.target.value)}
            aria-invalid={Boolean(errors['location.city'])}
            aria-describedby={errors['location.city'] ? 'error-city' : undefined}
            required
          />
          {errors['location.city'] && (
            <p id="error-city" className="reg-error-text" role="alert">
              <i className="fas fa-exclamation-circle"></i> {errors['location.city']}
            </p>
          )}
        </div>
      </div>

      {isPakistan ? (
        <>
          <div className="reg-grid reg-grid-2">
            {/* Province */}
            <div className="reg-field">
              <label htmlFor="reg-province" className="reg-label">
                Province / Region <span className="reg-optional">(Pakistan)</span>
              </label>
              <select
                id="reg-province"
                className="reg-select"
                value={location.province || ''}
                onChange={(e) => updateLocationField('province', e.target.value)}
              >
                <option value="">-- Select Province / Region --</option>
                {provinces.map((prov) => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>

            {/* Division */}
            <div className="reg-field">
              <label htmlFor="reg-division" className="reg-label">
                Division
              </label>
              <select
                id="reg-division"
                className="reg-select"
                value={location.division || ''}
                onChange={(e) => updateLocationField('division', e.target.value)}
                disabled={!location.province || divisions.length === 0}
              >
                <option value="">
                  {!location.province
                    ? '-- Select Province First --'
                    : divisions.length === 0
                    ? '-- No Divisions in Dataset --'
                    : '-- Select Division --'}
                </option>
                {divisions.map((div) => (
                  <option key={div} value={div}>{div}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="reg-grid reg-grid-2">
            {/* District */}
            <div className="reg-field">
              <label htmlFor="reg-district" className="reg-label">
                District
              </label>
              <select
                id="reg-district"
                className="reg-select"
                value={location.district || ''}
                onChange={(e) => updateLocationField('district', e.target.value)}
                disabled={!location.division || districts.length === 0}
              >
                <option value="">
                  {!location.division
                    ? '-- Select Division First --'
                    : districts.length === 0
                    ? '-- No Districts in Dataset --'
                    : '-- Select District --'}
                </option>
                {districts.map((dist) => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </select>
            </div>

            {/* Tehsil */}
            <div className="reg-field">
              <label htmlFor="reg-tehsil" className="reg-label">
                Tehsil / Sub-District
              </label>
              <select
                id="reg-tehsil"
                className="reg-select"
                value={location.tehsil || ''}
                onChange={(e) => updateLocationField('tehsil', e.target.value)}
                disabled={!location.district || tehsils.length === 0}
              >
                <option value="">
                  {!location.district
                    ? '-- Select District First --'
                    : tehsils.length === 0
                    ? '-- No Tehsils in Dataset --'
                    : '-- Select Tehsil --'}
                </option>
                {tehsils.map((teh) => (
                  <option key={teh} value={teh}>{teh}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Union Council (UC) */}
          <div className="reg-field">
            <label htmlFor="reg-uc" className="reg-label">
              Union Council (UC) / Ward
            </label>
            <select
              id="reg-uc"
              className="reg-select"
              value={location.uc || ''}
              onChange={(e) => updateLocationField('uc', e.target.value)}
              disabled={!location.tehsil || unionCouncils.length === 0}
            >
              <option value="">
                {!location.tehsil
                  ? '-- Select Tehsil First --'
                  : unionCouncils.length === 0
                  ? '-- No UCs in Dataset (Can type or leave blank) --'
                  : '-- Select Union Council --'}
              </option>
              {unionCouncils.map((uc) => (
                <option key={uc} value={uc}>{uc}</option>
              ))}
            </select>
            <small className="reg-hint">
              Cascading dependent dropdowns populated from dataset. If your local UC is not listed yet, you can leave this blank or add it via your profile later.
            </small>
          </div>
        </>
      ) : (
        <div className="reg-grid reg-grid-2">
          <div className="reg-field">
            <label htmlFor="reg-intl-state" className="reg-label">
              State / Province / County <span className="reg-optional">(International)</span>
            </label>
            <input
              id="reg-intl-state"
              type="text"
              className="reg-input"
              placeholder="e.g. Greater London, California, Dubai"
              value={location.province || ''}
              onChange={(e) => updateLocationField('province', e.target.value)}
            />
          </div>
          <div className="reg-field">
            <label htmlFor="reg-intl-postal" className="reg-label">
              Postal / Zip Code <span className="reg-optional">(Optional)</span>
            </label>
            <input
              id="reg-intl-postal"
              type="text"
              className="reg-input"
              placeholder="e.g. SW1A 1AA, 90210"
              value={location.division || ''}
              onChange={(e) => updateLocationField('division', e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3Location;
