/**
 * Beneficiary application service.
 *
 * TODO: Replace the mock below with a real POST to the CRM API when it is ready.
 * Future endpoint: POST {REACT_APP_API_BASE_URL}/beneficiaries (see src/config/api.js).
 *
 * PAYLOAD CONTRACT
 * {
 *   formType: 'beneficiary',
 *   person: {
 *     fullName, guardianName, cnic, gender, age: number, cell,
 *     alternativeContact, address, consent: boolean
 *   },
 *   location: {
 *     province: { id: string|null, label: string, notListed: boolean } | null,
 *     division: { id: string|null, label: string, notListed: boolean },
 *     district: { id: string|null, label: string, notListed: boolean },
 *     tehsil: { id: string|null, label: string, notListed: boolean },
 *     uc: { id: string|null, label: string, notListed: boolean } | null
 *   },
 *   participation: {
 *     programId, projectId, helpType, helpDetails,
 *     familyMembers: number, beneficiaryCount: number,
 *     incomeRange, situation
 *   },
 *   meta: {
 *     submittedAt: ISO string,
 *     source: string // e.g. 'home-beneficiary', 'program-page-beneficiary'
 *   }
 * }
 *
 * Location levels use { id, label, notListed }. When the user picks
 * "My area is not listed", id is null, label contains the typed text, and
 * notListed is true. Optional levels that were left blank are null.
 *
 * SUCCESS RESPONSE
 * { ok: true, formType: 'beneficiary', referenceId: string, submittedAt: ISO string }
 *
 * ERROR RESPONSE (when the real API is connected)
 * The service should reject with an Error carrying { code, message } so the form can
 * display an inline error without losing the user's typed data.
 */

const MOCK_DELAY_MS = 900;

function createReferenceId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BNWO-BEN-${stamp}-${random}`;
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function submitBeneficiary(payload) {
  await delay(MOCK_DELAY_MS);

  return {
    ok: true,
    formType: payload?.formType || 'beneficiary',
    referenceId: createReferenceId(),
    submittedAt: new Date().toISOString(),
  };
}
