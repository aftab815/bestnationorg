import { digitsOnly } from '../utils/validation';
import { postPublicForm } from './formApi';

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'membership', label: 'Council Membership' },
  { value: 'volunteer', label: 'Volunteering & Committees' },
  { value: 'partnership', label: 'Corporate Partnership' },
  { value: 'donation', label: 'Donation Support' },
  { value: 'other', label: 'Other' },
];

export function contactSubjectLabel(value) {
  const subject = CONTACT_SUBJECTS.find((item) => item.value === value);
  return subject ? subject.label : String(value || '').trim();
}

export function buildContactPayload(form, honeypot) {
  return {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: digitsOnly(form.phone),
    subject: contactSubjectLabel(form.subject),
    message: form.message.trim(),
    honeypot: String(honeypot || '').trim(),
  };
}

export async function submitContact(payload, idempotencyKey) {
  const data = await postPublicForm('/api/v1/public/contact', payload, idempotencyKey);
  return {
    ok: true,
    referenceId: data.reference_no,
    referenceNo: data.reference_no,
    message: data.message,
  };
}
