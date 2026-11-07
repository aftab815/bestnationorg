/**
 * Shared form validation and input formatting helpers.
 * These never log, store, or transmit the values they receive.
 */

export function digitsOnly(value) {
  return String(value || '').replace(/\D/g, '');
}

export function formatCell(value) {
  const digits = digitsOnly(value).slice(0, 11);
  if (digits.length <= 4) return digits;
  return `${digits.slice(0, 4)}-${digits.slice(4)}`;
}

export function formatCnic(value) {
  const digits = digitsOnly(value).slice(0, 13);
  if (digits.length <= 5) return digits;
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
}

export function isValidCell(value) {
  return /^03\d{2}-\d{7}$/.test(String(value || '').trim());
}

export function isValidCnic(value) {
  return /^\d{5}-\d{7}-\d$/.test(String(value || '').trim());
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

export function isRequired(value) {
  if (typeof value === 'string') return value.trim().length > 0;
  return value !== null && value !== undefined;
}

export function isPositiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0;
}

export function isPositiveInteger(value) {
  const number = Number(value);
  return Number.isInteger(number) && number > 0;
}

export function isValidAge(value) {
  const number = Number(value);
  return Number.isInteger(number) && number >= 1 && number <= 120;
}

export function isValidName(value) {
  return String(value || '').trim().length >= 2;
}
