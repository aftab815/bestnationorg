/**
 * BNWO Registration Service
 * 
 * Single point of contact for submitting membership, volunteer, donor, and beneficiary
 * registration payloads to the backend API.
 * 
 * TODO for CRM integration:
 * When connecting to your CRM backend (e.g. Salesforce, HubSpot, or custom CRM API),
 * update REGISTRATION_ENDPOINT or add the CRM authorization headers here.
 */

const REGISTRATION_ENDPOINT = '/api/registrations';

/**
 * Submits the registration payload to the server.
 * 
 * @param {Object} payload The registration payload containing person and participations
 * @returns {Promise<Object>} The API response object
 */
export async function submitRegistration(payload) {
  const response = await fetch(REGISTRATION_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new Error(`Server returned status ${response.status} with non-JSON response.`);
  }

  if (!response.ok || !data.success) {
    const message = data.error || data.message || `Submission failed with status code ${response.status}`;
    throw new Error(message);
  }

  return data;
}
