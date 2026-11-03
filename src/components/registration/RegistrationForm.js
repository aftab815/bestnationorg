import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './ProgressBar';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2Contact from './Step2Contact';
import Step3Location from './Step3Location';
import Step4Role from './Step4Role';
import Step5Programs from './Step5Programs';
import Step6Review from './Step6Review';
import SuccessScreen from './SuccessScreen';
import { submitRegistration } from '../../services/registrationService';
import './RegistrationForm.css';

const STORAGE_KEY = 'bnwo_registration_draft';

const initialFormData = {
  // Step 1: Personal
  name: '',
  fatherOrHusbandName: '',
  cnic: '',
  gender: '',
  age: '',
  religion: '',
  nationality: 'Pakistani',
  bloodGroup: '',
  education: '',
  maritalStatus: '',
  professionTypes: [],
  homeAddress: '',
  officeAddress: '',

  // Step 2: Contact
  cell: '',
  whatsapp: '',
  email: '',
  website: '',
  referralName: '',
  referralCell: '',

  // Step 3: Location
  location: {
    country: 'Pakistan',
    province: '',
    division: '',
    district: '',
    tehsil: '',
    uc: '',
    city: ''
  },

  // Step 4: Role & Interests
  selectedRoles: ['Volunteer/Member'],
  volunteerSubRoles: [],
  areaOfInterest: '',
  hobbies: '',

  // Step 5: Participations
  participations: [
    {
      role: 'Volunteer/Member',
      programId: '',
      projectId: '',
      contributionType: 'Zakat',
      amount: '',
      hours: '',
      helpNeeded: '',
      beneficiaryCount: '1'
    }
  ]
};

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submittedId, setSubmittedId] = useState(null);

  // Hidden Honeypot for bot/spam prevention
  const [honeypot, setHoneypot] = useState('');

  const formTopRef = useRef(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          if (parsed.formData) {
            setFormData((prev) => ({ ...prev, ...parsed.formData }));
          }
          if (parsed.currentStep && parsed.currentStep >= 1 && parsed.currentStep <= 6) {
            setCurrentStep(parsed.currentStep);
          }
          if (parsed.maxStepReached && parsed.maxStepReached >= 1) {
            setMaxStepReached(parsed.maxStepReached);
          }
        }
      }
    } catch (e) {
      // Ignore localStorage parse errors
    }
  }, []);

  // Save draft to localStorage whenever formData or step changes
  useEffect(() => {
    if (submittedId) return; // Don't persist once successfully completed
    try {
      const draft = {
        formData,
        currentStep,
        maxStepReached
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch (e) {
      // Storage quota or private browsing mode
    }
  }, [formData, currentStep, maxStepReached, submittedId]);

  const scrollToFormTop = () => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    // Clear error for field if fixed
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Step-by-step validations
  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.name?.trim()) newErrors.name = 'Full name is required.';
      if (!formData.fatherOrHusbandName?.trim()) {
        newErrors.fatherOrHusbandName = "Father's or Husband's name is required.";
      }
      const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
      if (!formData.cnic?.trim()) {
        newErrors.cnic = 'CNIC is required.';
      } else if (!cnicRegex.test(formData.cnic.trim())) {
        newErrors.cnic = 'CNIC must be 13 digits in format 12345-1234567-1.';
      }

      if (!formData.gender) newErrors.gender = 'Please select your gender.';

      const ageNum = Number(formData.age);
      if (!formData.age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        newErrors.age = 'Please enter a valid age between 1 and 120.';
      }

      if (!formData.religion?.trim()) newErrors.religion = 'Religion is required.';
      if (!formData.nationality?.trim()) newErrors.nationality = 'Nationality is required.';
      if (!formData.education?.trim()) newErrors.education = 'Education level is required.';
      if (!formData.maritalStatus?.trim()) newErrors.maritalStatus = 'Marital status is required.';

      if (!Array.isArray(formData.professionTypes) || formData.professionTypes.length === 0) {
        newErrors.professionTypes = 'Please select at least one profession type.';
      }

      if (!formData.homeAddress?.trim()) newErrors.homeAddress = 'Home address is required.';
    }

    if (stepNumber === 2) {
      const cleanCell = (formData.cell || '').replace(/[\s-]/g, '');
      const cellRegex = /^(\+92|0092|0)?3[0-9]{9}$/;
      if (!formData.cell?.trim()) {
        newErrors.cell = 'Cell number is required.';
      } else if (!cellRegex.test(cleanCell)) {
        newErrors.cell = 'Please enter a valid Pakistani cell number (e.g. 0300-1234567).';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email?.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (stepNumber === 3) {
      if (!formData.location?.country?.trim()) {
        newErrors['location.country'] = 'Country is required.';
      }
      if (!formData.location?.city?.trim()) {
        newErrors['location.city'] = 'City is required.';
      }
    }

    if (stepNumber === 4) {
      if (!Array.isArray(formData.selectedRoles) || formData.selectedRoles.length === 0) {
        newErrors.selectedRoles = 'Please select at least one participation role.';
      }
      if (!formData.areaOfInterest?.trim()) {
        newErrors.areaOfInterest = 'Please select your primary area of interest.';
      }
    }

    if (stepNumber === 5) {
      if (!Array.isArray(formData.participations) || formData.participations.length === 0) {
        newErrors.participations = 'Please add at least one program/project entry.';
      } else {
        formData.participations.forEach((p, idx) => {
          if (!p.programId) {
            newErrors[`participations.${idx}.programId`] = 'Please select a program.';
          }
          if (!p.projectId) {
            newErrors[`participations.${idx}.projectId`] = 'Please select a project.';
          }
        });
      }
    }

    if (stepNumber === 6) {
      if (!consent) {
        setConsentError('You must agree and confirm the declaration before submitting.');
        return false;
      }
      setConsentError('');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateStep(currentStep);
    if (isValid) {
      setServerError('');
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setMaxStepReached((prev) => Math.max(prev, nextStep));
      scrollToFormTop();
    } else {
      scrollToFormTop();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setServerError('');
      setCurrentStep(currentStep - 1);
      scrollToFormTop();
    }
  };

  const handleStepJump = (stepNumber) => {
    // Only allow jumping if target step is reachable or if current step is validated
    if (stepNumber < currentStep) {
      setServerError('');
      setCurrentStep(stepNumber);
      scrollToFormTop();
    } else if (stepNumber <= maxStepReached) {
      if (validateStep(currentStep)) {
        setServerError('');
        setCurrentStep(stepNumber);
        scrollToFormTop();
      }
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Prevent duplicate submits
    if (isSubmitting) return;

    // Validate review step
    if (!validateStep(6)) {
      scrollToFormTop();
      return;
    }

    // Re-validate all prior steps
    for (let s = 1; s <= 5; s++) {
      if (!validateStep(s)) {
        setCurrentStep(s);
        setServerError(`Please resolve the required information in Step ${s}.`);
        scrollToFormTop();
        return;
      }
    }

    setIsSubmitting(true);
    setServerError('');

    // Prepare exact payload structure as specified
    const payload = {
      hp_field: honeypot, // hidden honeypot field
      person: {
        name: formData.name?.trim(),
        fatherOrHusbandName: formData.fatherOrHusbandName?.trim(),
        cnic: formData.cnic?.trim(),
        gender: formData.gender,
        age: Number(formData.age),
        religion: formData.religion?.trim(),
        nationality: formData.nationality?.trim(),
        bloodGroup: formData.bloodGroup || '',
        education: formData.education?.trim(),
        maritalStatus: formData.maritalStatus?.trim(),
        professionTypes: formData.professionTypes || [],
        homeAddress: formData.homeAddress?.trim(),
        officeAddress: formData.officeAddress?.trim() || '',
        cell: formData.cell?.trim(),
        whatsapp: formData.whatsapp?.trim() || '',
        email: formData.email?.trim().toLowerCase(),
        website: formData.website?.trim() || '',
        referralName: formData.referralName?.trim() || '',
        referralCell: formData.referralCell?.trim() || '',
        location: {
          country: formData.location?.country || 'Pakistan',
          province: formData.location?.province || '',
          division: formData.location?.division || '',
          district: formData.location?.district || '',
          tehsil: formData.location?.tehsil || '',
          uc: formData.location?.uc || '',
          city: formData.location?.city?.trim() || ''
        },
        areaOfInterest: formData.areaOfInterest || '',
        hobbies: formData.hobbies || ''
      },
      participations: (formData.participations || []).map((p) => ({
        role: p.role || (formData.selectedRoles && formData.selectedRoles[0]) || 'Member',
        programId: p.programId || '',
        projectId: p.projectId || '',
        contributionType: p.contributionType || '',
        amount: p.amount || '',
        hours: p.hours || '',
        helpNeeded: p.helpNeeded || '',
        beneficiaryCount: p.beneficiaryCount || ''
      }))
    };

    try {
      const response = await submitRegistration(payload);
      // Clear localStorage draft upon successful submission
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        // ignore
      }

      setSubmittedId(response.registrationId || 'BNWO-SUCCESS');
      scrollToFormTop();
    } catch (err) {
      setServerError(
        err.message || 'An error occurred while submitting your registration. Please try again.'
      );
      scrollToFormTop();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartNew = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      // ignore
    }
    setFormData(initialFormData);
    setCurrentStep(1);
    setMaxStepReached(1);
    setConsent(false);
    setConsentError('');
    setSubmittedId(null);
    setServerError('');
    setErrors({});
  };

  if (submittedId) {
    return (
      <div className="reg-wrapper" ref={formTopRef}>
        <SuccessScreen registrationId={submittedId} onStartNew={handleStartNew} />
      </div>
    );
  }

  return (
    <div className="reg-wrapper" ref={formTopRef}>
      {/* Visual Step Progress Bar */}
      <ProgressBar
        currentStep={currentStep}
        onStepClick={handleStepJump}
        maxStepReached={maxStepReached}
      />

      {/* Global Server/Submission Error Alert */}
      {serverError && (
        <div className="reg-alert-error" role="alert">
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>Submission Notice:</strong> {serverError}
          </div>
        </div>
      )}

      {/* Hidden Honeypot Field for Spam Protection */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        <label htmlFor="reg-honeypot">Leave this field blank</label>
        <input
          id="reg-honeypot"
          type="text"
          name="website_url_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Step Components */}
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {currentStep === 1 && (
          <Step1PersonalInfo
            data={formData}
            onChange={updateField}
            errors={errors}
          />
        )}

        {currentStep === 2 && (
          <Step2Contact
            data={formData}
            onChange={updateField}
            errors={errors}
          />
        )}

        {currentStep === 3 && (
          <Step3Location
            data={formData}
            onChange={updateField}
            errors={errors}
          />
        )}

        {currentStep === 4 && (
          <Step4Role
            data={formData}
            onChange={updateField}
            errors={errors}
          />
        )}

        {currentStep === 5 && (
          <Step5Programs
            data={formData}
            onChange={updateField}
            errors={errors}
          />
        )}

        {currentStep === 6 && (
          <Step6Review
            data={formData}
            onEditStep={handleStepJump}
            consent={consent}
            onConsentChange={(val) => {
              setConsent(val);
              if (val) setConsentError('');
            }}
            errorConsent={consentError}
          />
        )}

        {/* Navigation Buttons (Back / Next / Submit) */}
        <div className="reg-nav-actions">
          {currentStep > 1 && (
            <button
              type="button"
              className="reg-btn-back"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
          )}

          <div className="reg-nav-spacer"></div>

          {currentStep < 6 ? (
            <button
              type="button"
              className="reg-btn-next"
              onClick={handleNext}
            >
              Next Step <i className="fas fa-arrow-right"></i>
            </button>
          ) : (
            <button
              type="button"
              className="reg-btn-submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Submitting Registration...
                </>
              ) : (
                <>
                  <i className="fas fa-check-circle"></i> Submit Final Registration
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
