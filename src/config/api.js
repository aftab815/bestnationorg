/**
 * Central API configuration for the form submission services.
 *
 * Set REACT_APP_API_BASE_URL in .env when the CRM API is ready.
 * Example: REACT_APP_API_BASE_URL=https://api.bestnationorg.com
 *
 * The endpoints below are the intended CRM routes. They are intentionally unused
 * for now because the forms are frontend-only and submit to mock services.
 */
export const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/+$/, '');

export const API_ENDPOINTS = {
  volunteers: '/volunteers',
  beneficiaries: '/beneficiaries',
};

export function buildApiUrl(endpoint) {
  return `${API_BASE_URL}${endpoint}`;
}
