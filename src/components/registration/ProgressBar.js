import React from 'react';
import './RegistrationForm.css';

const steps = [
  { id: 1, label: 'Personal', title: 'Personal Information' },
  { id: 2, label: 'Contact', title: 'Contact Information' },
  { id: 3, label: 'Location', title: 'Location Details' },
  { id: 4, label: 'Role', title: 'BNWO Role & Interests' },
  { id: 5, label: 'Programs', title: 'Programs & Projects' },
  { id: 6, label: 'Review', title: 'Review & Submit' }
];

const ProgressBar = ({ currentStep, onStepClick, maxStepReached }) => {
  return (
    <div className="reg-progress-container" aria-label="Registration Progress">
      <div className="reg-progress-bar">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isClickable = step.id <= maxStepReached;

          return (
            <div
              key={step.id}
              className={`reg-progress-step ${isActive ? 'is-active' : ''} ${
                isCompleted ? 'is-completed' : ''
              } ${isClickable ? 'is-clickable' : ''}`}
            >
              <button
                type="button"
                className="reg-progress-circle"
                onClick={() => isClickable && onStepClick(step.id)}
                disabled={!isClickable}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Step ${step.id}: ${step.title}${
                  isCompleted ? ' (Completed)' : isActive ? ' (Current)' : ''
                }`}
              >
                {isCompleted ? <i className="fas fa-check" aria-hidden="true"></i> : step.id}
              </button>
              <span className="reg-progress-label">{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
