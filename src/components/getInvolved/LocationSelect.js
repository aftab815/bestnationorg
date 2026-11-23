import React from 'react';
import FormField from './FormField';
import { NOT_LISTED_VALUE } from '../../data/locations';

const LocationSelect = ({
  id,
  label,
  required,
  value,
  options,
  onChange,
  error,
  hint,
  customValue,
  onCustomChange,
  customLabel,
  disabled,
  placeholder,
}) => {
  const isNotListed = value === NOT_LISTED_VALUE;
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <FormField id={id} label={label} required={required} error={error} hint={hint}>
      <select
        id={id}
        className="gi-control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={required ? 'true' : undefined}
        aria-describedby={describedBy}
        disabled={disabled}
      >
        <option value="">{placeholder || `Select ${label}`}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
        <option value={NOT_LISTED_VALUE}>My area is not listed</option>
      </select>
      {isNotListed && (
        <input
          id={`${id}-custom`}
          type="text"
          className="gi-control gi-control--custom"
          value={customValue}
          onChange={(event) => onCustomChange(event.target.value)}
          placeholder={`Enter your ${customLabel || label.toLowerCase()}`}
          aria-label={`Enter your ${customLabel || label.toLowerCase()}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={describedBy}
        />
      )}
    </FormField>
  );
};

export default LocationSelect;
