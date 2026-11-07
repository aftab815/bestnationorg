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
import { submitBeneficiary } from '../../services/beneficiaryService';
import { resolveLocationValue, resolveProvinceFromDivision, isMissingCustomLocation } from '../../utils/locationPayload';
import {
  digitsOnly,
  formatCell,
  formatCnic,
  isPositiveInteger,
  isRequired,
  isValidAge,
  isValidCell,
  isValidCnic,
} from '../../utils/validation';

const HELP_TYPES = [
  { id: 'financial', label: 'Financial assistance' },
  { id: 'food', label: 'Food / Rashan' },
  { id: 'medical', label: 'Medical treatment' },
  { id: 'education', label: 'Education support' },
  { id: 'legal', label: 'Legal support' },
  { id: 'shelter', label: 'Shelter / Housing' },
  { id: 'employment', label: 'Employment / Skills' },
  { id: 'other', label: 'Other' },
];

const INCOME_RANGES = [
  { id: 'no-income', label: 'No income' },
  { id: 'below-15000', label: 'Below PKR 15,000' },
  { id: '15001-30000', label: 'PKR 15,001 - 30,000' },
  { id: '30001-50000', label: 'PKR 30,001 - 50,000' },
  { id: '50001-80000', label: 'PKR 50,001 - 80,000' },
  { id: 'above-80000', label: 'Above PKR 80,000' },
  { id: 'prefer-not-to-say', label: 'Prefer not to say' },
];

const INITIAL_FORM = {
  fullName: '',
  guardianName: '',
  cnic: '',
  gender: '',
  age: '',
  cell: '',
  alternativeContact: '',
  address: '',
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
  helpType: '',
  helpDetails: '',
  familyMembers: '',
  beneficiaryCount: '',
  incomeRange: '',
  situation: '',
  consent: false,
};

const BeneficiaryForm = ({ source = 'home-beneficiary', onClose }) => {
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

  const validate = () => {
    const next = {};

    if (!isRequired(form.fullName)) next.fullName = 'Full name is required.';
    if (!isRequired(form.guardianName)) {
      next.guardianName = "Father's / husband's name is required.";
    }

    if (!isRequired(form.cnic)) {
      next.cnic = 'CNIC is required.';
    } else if (!isValidCnic(form.cnic)) {
      next.cnic = 'Enter a valid CNIC (XXXXX-XXXXXXX-X).';
    }

    if (!form.gender) next.gender = 'Gender is required.';
    if (!isValidAge(form.age)) next.age = 'Enter a valid age between 1 and 120.';

    if (!isRequired(form.cell)) {
      next.cell = 'Cell number is required.';
    } else if (!isValidCell(form.cell)) {
      next.cell = 'Enter a valid cell number (03XX-XXXXXXX).';
    }

    if (form.alternativeContact.trim() && !isValidCell(form.alternativeContact)) {
      next.alternativeContact = 'Enter a valid cell number (03XX-XXXXXXX).';
    }

    if (!isRequired(form.address)) next.address = 'Home address is required.';

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
    if (!form.helpType) next.helpType = 'Select the type of help needed.';
    if (!isPositiveInteger(form.familyMembers)) {
      next.familyMembers = 'Enter a valid number of family members.';
    }
    if (!isPositiveInteger(form.beneficiaryCount)) {
      next.beneficiaryCount = 'Enter a valid number of people who will benefit.';
    }
    if (!form.consent) next.consent = 'You must confirm and agree before submitting.';

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
      formType: 'beneficiary',
      person: {
        fullName: form.fullName.trim(),
        guardianName: form.guardianName.trim(),
        cnic: form.cnic.trim(),
        gender: form.gender,
        age: Number(form.age),
        cell: form.cell.trim(),
        alternativeContact: form.alternativeContact.trim(),
        address: form.address.trim(),
        consent: form.consent,
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
        helpType: form.helpType,
        helpDetails: form.helpDetails.trim(),
        familyMembers: Number(form.familyMembers),
        beneficiaryCount: Number(form.beneficiaryCount),
        incomeRange: form.incomeRange,
        situation: form.situation.trim(),
      },
      meta: {
        submittedAt: new Date().toISOString(),
        source,
      },
    };

    setSubmitting(true);
    setFormError('');
    try {
      const submission = await submitBeneficiary(payload);
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
        title="Your support application has been received"
        referenceId={result.referenceId}
        onClose={onClose}
      >
        <p className="gi-success__text">
          Our verification team will review the information and contact you. Please keep your
          reference ID for follow-up.
        </p>
      </SuccessMessage>
    );
  }

  return (
    <form className="gi-form" onSubmit={handleSubmit} noValidate>
      <p className="gi-form-intro">
        Please provide accurate details so our team can verify your case and plan the right support.
      </p>
      <p className="gi-note">
        Privacy note: the information you provide is used only for verification and aid
        distribution. It is never shared for marketing.
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

        <FormField id="guardianName" label="Father's / Husband's name" required error={errors.guardianName}>
          <input
            id="guardianName"
            className="gi-control"
            type="text"
            value={form.guardianName}
            onChange={(event) => handleChange('guardianName', event.target.value)}
            aria-invalid={errors.guardianName ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.guardianName ? 'guardianName-error' : undefined}
          />
        </FormField>

        <FormField id="cnic" label="CNIC" required error={errors.cnic}>
          <input
            id="cnic"
            className="gi-control"
            type="text"
            inputMode="numeric"
            value={form.cnic}
            onChange={(event) => handleChange('cnic', formatCnic(event.target.value))}
            placeholder="XXXXX-XXXXXXX-X"
            aria-invalid={errors.cnic ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.cnic ? 'cnic-error' : undefined}
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

        <FormField id="cell" label="Cell number" required error={errors.cell}>
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

        <FormField id="alternativeContact" label="Alternative contact" error={errors.alternativeContact} hint="Optional">
          <input
            id="alternativeContact"
            className="gi-control"
            type="tel"
            inputMode="tel"
            value={form.alternativeContact}
            onChange={(event) => handleChange('alternativeContact', formatCell(event.target.value))}
            placeholder="03XX-XXXXXXX"
            aria-invalid={errors.alternativeContact ? 'true' : 'false'}
            aria-describedby={errors.alternativeContact ? 'alternativeContact-error' : undefined}
          />
        </FormField>

        <FormField id="address" label="Home address" required error={errors.address} className="gi-field--full">
          <textarea
            id="address"
            className="gi-control"
            rows="2"
            value={form.address}
            onChange={(event) => handleChange('address', event.target.value)}
            autoComplete="street-address"
            aria-invalid={errors.address ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.address ? 'address-error' : undefined}
          ></textarea>
        </FormField>

        <div className="gi-form-section">Location</div>

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

        <div className="gi-form-section">Support requested</div>

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

        <FormField id="helpType" label="Type of help needed" required error={errors.helpType}>
          <select
            id="helpType"
            className="gi-control"
            value={form.helpType}
            onChange={(event) => handleChange('helpType', event.target.value)}
            aria-invalid={errors.helpType ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.helpType ? 'helpType-error' : undefined}
          >
            <option value="">Select type of help</option>
            {HELP_TYPES.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="helpDetails" label="Help details" error={errors.helpDetails} hint="Optional">
          <input
            id="helpDetails"
            className="gi-control"
            type="text"
            value={form.helpDetails}
            onChange={(event) => handleChange('helpDetails', event.target.value)}
          />
        </FormField>

        <FormField id="familyMembers" label="Number of family members" required error={errors.familyMembers}>
          <input
            id="familyMembers"
            className="gi-control"
            type="number"
            min="1"
            step="1"
            value={form.familyMembers}
            onChange={(event) => handleChange('familyMembers', digitsOnly(event.target.value))}
            aria-invalid={errors.familyMembers ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.familyMembers ? 'familyMembers-error' : undefined}
          />
        </FormField>

        <FormField id="beneficiaryCount" label="Number of people who will benefit" required error={errors.beneficiaryCount}>
          <input
            id="beneficiaryCount"
            className="gi-control"
            type="number"
            min="1"
            step="1"
            value={form.beneficiaryCount}
            onChange={(event) => handleChange('beneficiaryCount', digitsOnly(event.target.value))}
            aria-invalid={errors.beneficiaryCount ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.beneficiaryCount ? 'beneficiaryCount-error' : undefined}
          />
        </FormField>

        <FormField id="incomeRange" label="Household monthly income" error={errors.incomeRange} hint="Optional" className="gi-field--full">
          <select
            id="incomeRange"
            className="gi-control"
            value={form.incomeRange}
            onChange={(event) => handleChange('incomeRange', event.target.value)}
          >
            <option value="">Select income range</option>
            {INCOME_RANGES.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="situation" label="Short description of the situation" className="gi-field--full" hint="Optional">
          <textarea
            id="situation"
            className="gi-control"
            rows="3"
            value={form.situation}
            onChange={(event) => handleChange('situation', event.target.value)}
          ></textarea>
        </FormField>

        <div className={`gi-check gi-field--full ${errors.consent ? 'has-error' : ''}`}>
          <input
            id="consent"
            type="checkbox"
            checked={form.consent}
            onChange={(event) => handleChange('consent', event.target.checked)}
            aria-invalid={errors.consent ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <label htmlFor="consent">
            I confirm the information is correct and agree to BNWO verifying it.
            <span className="gi-required" aria-hidden="true"> *</span>
          </label>
        </div>
        {errors.consent && (
          <p className="gi-error gi-field--full" id="consent-error" role="alert">
            {errors.consent}
          </p>
        )}

        <div className="gi-honeypot" aria-hidden="true">
          <label htmlFor="beneficiary-website">Website</label>
          <input
            id="beneficiary-website"
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
                Apply for Support <i className="fas fa-hands-helping" aria-hidden="true"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BeneficiaryForm;
