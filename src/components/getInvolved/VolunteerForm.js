import React, { useMemo, useState } from 'react';
import FormField from './FormField';
import LocationSelect from './LocationSelect';
import SuccessMessage from './SuccessMessage';
import {
  getAllDivisions,
  getDistricts,
  getTehsils,
  getUnionCouncils,
  NOT_LISTED_VALUE,
} from '../../data/locations';
import { getPrograms, getProjectsForProgram } from '../../config/programs';
import { submitVolunteer } from '../../services/volunteerService';
import { resolveLocationValue, resolveProvinceFromDivision, isMissingCustomLocation } from '../../utils/locationPayload';
import {
  digitsOnly,
  formatCell,
  formatCnic,
  isPositiveNumber,
  isRequired,
  isValidAge,
  isValidCell,
  isValidCnic,
  isValidEmail,
} from '../../utils/validation';

const SKILL_OPTIONS = [
  { id: 'teaching', label: 'Teaching' },
  { id: 'medical', label: 'Medical' },
  { id: 'fundraising', label: 'Fundraising' },
  { id: 'media', label: 'Media' },
  { id: 'it', label: 'IT' },
  { id: 'field-work', label: 'Field work' },
  { id: 'organizing', label: 'Organizing' },
  { id: 'other', label: 'Other' },
];

const INITIAL_FORM = {
  fullName: '',
  gender: '',
  age: '',
  cell: '',
  email: '',
  cnic: '',
  division: '',
  customDivision: '',
  district: '',
  customDistrict: '',
  tehsil: '',
  customTehsil: '',
  uc: '',
  customUc: '',
  programId: '',
  projectId: '',
  skills: [],
  availabilityHours: '',
  availabilityType: '',
  profession: '',
  message: '',
};

const VolunteerForm = ({ source = 'home-volunteer', onClose }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [honeypot, setHoneypot] = useState('');

  const divisionOptions = useMemo(
    () =>
      getAllDivisions().map((division) => ({
        id: division.id,
        name: `${division.name} (${division.provinceName})`,
      })),
    []
  );

  const districtOptions = useMemo(() => {
    if (!form.division || form.division === NOT_LISTED_VALUE) return [];
    return getDistricts(form.division);
  }, [form.division]);

  const tehsilOptions = useMemo(() => {
    if (!form.district || form.district === NOT_LISTED_VALUE) return [];
    return getTehsils(form.district);
  }, [form.district]);

  const ucOptions = useMemo(() => {
    if (!form.tehsil || form.tehsil === NOT_LISTED_VALUE) return [];
    return getUnionCouncils(form.tehsil);
  }, [form.tehsil]);

  const projectOptions = useMemo(
    () => getProjectsForProgram(form.programId),
    [form.programId]
  );

  const handleChange = (name, value) => {
    setForm((previous) => {
      const next = { ...previous, [name]: value };
      if (name === 'division') {
        next.district = '';
        next.customDistrict = '';
        next.tehsil = '';
        next.customTehsil = '';
        next.uc = '';
        next.customUc = '';
      }
      if (name === 'district') {
        next.tehsil = '';
        next.customTehsil = '';
        next.uc = '';
        next.customUc = '';
      }
      if (name === 'tehsil') {
        next.uc = '';
        next.customUc = '';
      }
      if (name === 'programId') next.projectId = '';
      return next;
    });

    setErrors((previous) => {
      const next = { ...previous };
      delete next[name];
      if (name === 'division') {
        delete next.customDivision;
        delete next.customDistrict;
        delete next.customTehsil;
        delete next.customUc;
      }
      if (name === 'district') {
        delete next.customDistrict;
        delete next.customTehsil;
        delete next.customUc;
      }
      if (name === 'tehsil') {
        delete next.customTehsil;
        delete next.customUc;
      }
      if (name === 'programId') delete next.projectId;
      return next;
    });
  };

  const toggleSkill = (skillId) => {
    setForm((previous) => ({
      ...previous,
      skills: previous.skills.includes(skillId)
        ? previous.skills.filter((item) => item !== skillId)
        : [...previous.skills, skillId],
    }));
    setErrors((previous) => {
      if (!previous.skills) return previous;
      const next = { ...previous };
      delete next.skills;
      return next;
    });
  };

  const validate = () => {
    const next = {};

    if (!isRequired(form.fullName)) next.fullName = 'Full name is required.';
    if (!form.gender) next.gender = 'Gender is required.';
    if (!isValidAge(form.age)) next.age = 'Enter a valid age between 1 and 120.';

    if (!isRequired(form.cell)) {
      next.cell = 'Cell number is required.';
    } else if (!isValidCell(form.cell)) {
      next.cell = 'Enter a valid cell number (03XX-XXXXXXX).';
    }

    if (form.email.trim() && !isValidEmail(form.email)) {
      next.email = 'Enter a valid email address.';
    }

    if (form.cnic.trim() && !isValidCnic(form.cnic)) {
      next.cnic = 'Enter a valid CNIC (XXXXX-XXXXXXX-X).';
    }

    if (!form.division) {
      next.division = 'Division is required.';
    } else if (isMissingCustomLocation(form.division, form.customDivision)) {
      next.customDivision = 'Please type your division name.';
    }

    if (!form.district) {
      next.district = 'District is required.';
    } else if (isMissingCustomLocation(form.district, form.customDistrict)) {
      next.customDistrict = 'Please type your district name.';
    }

    if (!form.tehsil) {
      next.tehsil = 'Tehsil is required.';
    } else if (isMissingCustomLocation(form.tehsil, form.customTehsil)) {
      next.customTehsil = 'Please type your tehsil name.';
    }

    if (form.uc === NOT_LISTED_VALUE && !form.customUc.trim()) {
      next.customUc = 'Please type your union council name.';
    }

    if (!form.programId) next.programId = 'Program is required.';
    if (!form.projectId) next.projectId = 'Project is required.';
    if (form.skills.length === 0) next.skills = 'Select at least one skill or area of interest.';
    if (!isPositiveNumber(form.availabilityHours)) {
      next.availabilityHours = 'Enter hours greater than 0.';
    }
    if (!form.availabilityType) next.availabilityType = 'Select your availability.';

    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    if (honeypot.trim()) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = {
      formType: 'volunteer',
      person: {
        fullName: form.fullName.trim(),
        gender: form.gender,
        age: Number(form.age),
        cell: form.cell.trim(),
        email: form.email.trim(),
        cnic: form.cnic.trim(),
        profession: form.profession.trim(),
        message: form.message.trim(),
      },
      location: {
        province: resolveProvinceFromDivision(form.division),
        division: resolveLocationValue('division', form.division, form.customDivision),
        district: resolveLocationValue('district', form.district, form.customDistrict),
        tehsil: resolveLocationValue('tehsil', form.tehsil, form.customTehsil),
        uc: resolveLocationValue('uc', form.uc, form.customUc),
      },
      participation: {
        programId: form.programId,
        projectId: form.projectId,
        skills: form.skills,
        availabilityHours: Number(form.availabilityHours),
        availabilityType: form.availabilityType,
      },
      meta: {
        submittedAt: new Date().toISOString(),
        source,
      },
    };

    setSubmitting(true);
    setFormError('');
    try {
      const submission = await submitVolunteer(payload);
      setResult(submission);
    } catch (error) {
      setFormError(error?.message || 'We could not submit your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <SuccessMessage
        title="Thank you for joining BNWO"
        referenceId={result.referenceId}
        onClose={onClose}
      >
        <p className="gi-success__text">
          Our volunteer team will contact you with the next steps. Please keep your reference ID
          for follow-up.
        </p>
      </SuccessMessage>
    );
  }

  return (
    <form className="gi-form" onSubmit={handleSubmit} noValidate>
      <p className="gi-form-intro">
        Tell us where and how you would like to serve. Fields marked * are required.
      </p>

      <div className="gi-form-grid">
        <FormField id="fullName" label="Full name" required error={errors.fullName}>
          <input
            id="fullName"
            className="gi-control"
            type="text"
            value={form.fullName}
            onChange={(event) => handleChange('fullName', event.target.value)}
            autoComplete="name"
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
        </FormField>

        <FormField id="gender" label="Gender" required error={errors.gender}>
          <select
            id="gender"
            className="gi-control"
            value={form.gender}
            onChange={(event) => handleChange('gender', event.target.value)}
            aria-invalid={errors.gender ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.gender ? 'gender-error' : undefined}
          >
            <option value="">Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </FormField>

        <FormField id="age" label="Age" required error={errors.age}>
          <input
            id="age"
            className="gi-control"
            type="number"
            min="1"
            max="120"
            step="1"
            value={form.age}
            onChange={(event) => handleChange('age', digitsOnly(event.target.value))}
            aria-invalid={errors.age ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.age ? 'age-error' : undefined}
          />
        </FormField>

        <FormField id="cell" label="Cell number" required error={errors.cell} hint="WhatsApp on the same number is fine.">
          <input
            id="cell"
            className="gi-control"
            type="tel"
            inputMode="tel"
            value={form.cell}
            onChange={(event) => handleChange('cell', formatCell(event.target.value))}
            placeholder="03XX-XXXXXXX"
            autoComplete="tel"
            aria-invalid={errors.cell ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.cell ? 'cell-error' : undefined}
          />
        </FormField>

        <FormField id="email" label="Email" error={errors.email} hint="Optional">
          <input
            id="email"
            className="gi-control"
            type="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </FormField>

        <FormField id="cnic" label="CNIC" error={errors.cnic} hint="Optional">
          <input
            id="cnic"
            className="gi-control"
            type="text"
            inputMode="numeric"
            value={form.cnic}
            onChange={(event) => handleChange('cnic', formatCnic(event.target.value))}
            placeholder="XXXXX-XXXXXXX-X"
            aria-invalid={errors.cnic ? 'true' : 'false'}
            aria-describedby={errors.cnic ? 'cnic-error' : undefined}
          />
        </FormField>

        <div className="gi-form-section">Volunteer location</div>

        <LocationSelect
          id="division"
          label="Division"
          required
          value={form.division}
          options={divisionOptions}
          onChange={(value) => handleChange('division', value)}
          error={errors.division || errors.customDivision}
          customValue={form.customDivision}
          onCustomChange={(value) => handleChange('customDivision', value)}
          customLabel="division"
        />

        <LocationSelect
          id="district"
          label="District"
          required
          value={form.district}
          options={districtOptions}
          onChange={(value) => handleChange('district', value)}
          error={errors.district || errors.customDistrict}
          customValue={form.customDistrict}
          onCustomChange={(value) => handleChange('customDistrict', value)}
          customLabel="district"
          disabled={!form.division}
        />

        <LocationSelect
          id="tehsil"
          label="Tehsil"
          required
          value={form.tehsil}
          options={tehsilOptions}
          onChange={(value) => handleChange('tehsil', value)}
          error={errors.tehsil || errors.customTehsil}
          customValue={form.customTehsil}
          onCustomChange={(value) => handleChange('customTehsil', value)}
          customLabel="tehsil"
          disabled={!form.district}
        />

        <LocationSelect
          id="uc"
          label="Union Council"
          value={form.uc}
          options={ucOptions}
          onChange={(value) => handleChange('uc', value)}
          error={errors.customUc}
          hint="Optional"
          customValue={form.customUc}
          onCustomChange={(value) => handleChange('customUc', value)}
          customLabel="union council"
          disabled={!form.tehsil}
        />

        <div className="gi-form-section">Program and skills</div>

        <FormField id="programId" label="Program" required error={errors.programId}>
          <select
            id="programId"
            className="gi-control"
            value={form.programId}
            onChange={(event) => handleChange('programId', event.target.value)}
            aria-invalid={errors.programId ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.programId ? 'programId-error' : undefined}
          >
            <option value="">Select program</option>
            {getPrograms().map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="projectId" label="Project" required error={errors.projectId}>
          <select
            id="projectId"
            className="gi-control"
            value={form.projectId}
            onChange={(event) => handleChange('projectId', event.target.value)}
            aria-invalid={errors.projectId ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.projectId ? 'projectId-error' : undefined}
            disabled={!form.programId}
          >
            <option value="">{form.programId ? 'Select project' : 'Select a program first'}</option>
            {projectOptions.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </FormField>

        <fieldset className="gi-fieldset gi-field--full" aria-describedby={errors.skills ? 'skills-error' : undefined}>
          <legend className="gi-label">
            Skills / area of interest
            <span className="gi-required" aria-hidden="true"> *</span>
          </legend>
          <div className="gi-chips">
            {SKILL_OPTIONS.map((skill) => {
              const selected = form.skills.includes(skill.id);
              return (
                <button
                  key={skill.id}
                  type="button"
                  className={`gi-chip ${selected ? 'is-selected' : ''}`}
                  aria-pressed={selected}
                  onClick={() => toggleSkill(skill.id)}
                >
                  {skill.label}
                </button>
              );
            })}
          </div>
          {errors.skills && (
            <p className="gi-error" id="skills-error" role="alert">
              {errors.skills}
            </p>
          )}
        </fieldset>

        <FormField id="availabilityHours" label="Availability (hours per week)" required error={errors.availabilityHours}>
          <input
            id="availabilityHours"
            className="gi-control"
            type="number"
            min="1"
            step="1"
            value={form.availabilityHours}
            onChange={(event) => handleChange('availabilityHours', digitsOnly(event.target.value))}
            aria-invalid={errors.availabilityHours ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.availabilityHours ? 'availabilityHours-error' : undefined}
          />
        </FormField>

        <FormField id="availabilityType" label="When are you available?" required error={errors.availabilityType}>
          <select
            id="availabilityType"
            className="gi-control"
            value={form.availabilityType}
            onChange={(event) => handleChange('availabilityType', event.target.value)}
            aria-invalid={errors.availabilityType ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.availabilityType ? 'availabilityType-error' : undefined}
          >
            <option value="">Select availability</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="flexible">Flexible</option>
          </select>
        </FormField>

        <div className="gi-form-section">About you</div>

        <FormField id="profession" label="Profession" className="gi-field--full" hint="Optional">
          <input
            id="profession"
            className="gi-control"
            type="text"
            value={form.profession}
            onChange={(event) => handleChange('profession', event.target.value)}
          />
        </FormField>

        <FormField id="message" label="Short message" className="gi-field--full" hint="Optional">
          <textarea
            id="message"
            className="gi-control"
            rows="3"
            value={form.message}
            onChange={(event) => handleChange('message', event.target.value)}
          ></textarea>
        </FormField>

        <div className="gi-honeypot" aria-hidden="true">
          <label htmlFor="volunteer-website">Website</label>
          <input
            id="volunteer-website"
            type="text"
            tabIndex="-1"
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        {formError && (
          <p className="gi-form-error" role="alert">
            {formError}
          </p>
        )}

        <div className="gi-actions">
          <button type="button" className="btn-outline" onClick={onClose} disabled={submitting}>
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? (
              <>
                <span className="gi-spinner" aria-hidden="true"></span>
                Submitting...
              </>
            ) : (
              <>
                Submit Application <i className="fas fa-user-plus" aria-hidden="true"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default VolunteerForm;
