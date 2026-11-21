import { API_BASE_URL } from '../config/api';

const FIELD_BY_LOCATION = {
  full_name: 'fullName',
  guardian_name: 'guardianName',
  alternative_contact: 'alternativeContact',
  program_id: 'programId',
  program_name: 'programName',
  project_id: 'projectId',
  project_name: 'projectName',
  availability_hours: 'availabilityHours',
  availability_type: 'availabilityType',
  help_type: 'helpType',
  help_details: 'helpDetails',
  family_members: 'familyMembers',
  beneficiary_count: 'beneficiaryCount',
  income_range: 'incomeRange',
  custom_division: 'customDivision',
  custom_district: 'customDistrict',
  custom_tehsil: 'customTehsil',
  custom_uc: 'customUc',
};

export class FormSubmissionError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.name = 'FormSubmissionError';
    this.status = status;
    this.code = code;
    this.details = Array.isArray(details) ? details : [];
  }
}

function firstDetailMessage(error) {
  if (!error || !Array.isArray(error.details) || error.details.length === 0) return null;
  const [detail] = error.details;
  return detail && typeof detail.message === 'string' ? detail.message : null;
}

function friendlyMessage(status, error) {
  const detail = firstDetailMessage(error);
  if (status === 429) {
    return 'Too many submissions right now. Please wait a minute and try again.';
  }
  if (status === 422) {
    return detail || error?.message || 'Some details are invalid. Please check and try again.';
  }
  if (status >= 500) {
    return 'The server is unavailable right now. Please try again shortly.';
  }
  return error?.message || 'Your submission could not be sent. Please try again.';
}

function locationField(raw) {
  if (typeof raw !== 'string' || !raw) return null;
  if (FIELD_BY_LOCATION[raw]) return FIELD_BY_LOCATION[raw];
  return raw.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function fieldErrorsFrom(error) {
  const errors = {};
  if (!error || !Array.isArray(error.details)) return errors;
  for (const detail of error.details) {
    const location = Array.isArray(detail?.loc) ? detail.loc : [];
    const parts = location.filter(
      (part) => typeof part === 'string' && !['body', 'query', 'path'].includes(part),
    );
    const field = locationField(parts[parts.length - 1]);
    if (field && !errors[field]) {
      errors[field] = detail?.message || 'Invalid value';
    }
  }
  return errors;
}

export function newIdempotencyKey() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `sub-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function submissionKey(ref, signature) {
  if (!ref.current || ref.current.signature !== signature) {
    ref.current = { signature, key: newIdempotencyKey() };
  }
  return ref.current.key;
}

export async function postPublicForm(path, payload, idempotencyKey) {
  const headers = { 'Content-Type': 'application/json' };
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });
  } catch {
    throw new FormSubmissionError(
      0,
      'network_error',
      'Could not reach the server. Please check your connection and try again.',
    );
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const error = data?.error;
    throw new FormSubmissionError(
      response.status,
      error?.code || 'request_failed',
      friendlyMessage(response.status, error),
      error?.details,
    );
  }

  return data;
}
