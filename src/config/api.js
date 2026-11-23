/**
 * Central API configuration for the website -> CRM form submissions.
 *
 * Set REACT_APP_API_BASE_URL in .env (for example http://localhost:8000).
 */

export const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/+$/, '');

export const API_ENDPOINTS = {
  volunteers: '/api/v1/public/volunteers',
  beneficiaries: '/api/v1/public/beneficiaries',
  contact: '/api/v1/public/contact',
  newsletter: '/api/v1/public/newsletter/subscribe',
};

export function buildApiUrl(endpoint) {
  return `${API_BASE_URL}${endpoint}`;
}
