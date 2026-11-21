import { getProgramById, getProjectById } from '../config/programs';
import { resolveLocationValue } from '../utils/locationPayload';
import { digitsOnly } from '../utils/validation';
import { postPublicForm } from './formApi';

export function buildBeneficiaryPayload(form, honeypot) {
  const program = getProgramById(form.programId);
  const project = getProjectById(form.programId, form.projectId);

  return {
    fullName: form.fullName.trim(),
    guardianName: form.guardianName.trim(),
    cnic: digitsOnly(form.cnic),
    gender: form.gender,
    age: Number(form.age),
    cell: digitsOnly(form.cell),
    alternativeContact: digitsOnly(form.alternativeContact),
    address: form.address.trim(),
    division: resolveLocationValue('division', form.division, form.customDivision),
    district: resolveLocationValue('district', form.district, form.customDistrict),
    tehsil: resolveLocationValue('tehsil', form.tehsil, form.customTehsil),
    uc: resolveLocationValue('uc', form.uc, form.customUc),
    customDivision: form.customDivision.trim(),
    customDistrict: form.customDistrict.trim(),
    customTehsil: form.customTehsil.trim(),
    customUc: form.customUc.trim(),
    programId: form.programId,
    programName: program ? program.name : '',
    projectId: form.projectId,
    projectName: project ? project.name : '',
    helpType: form.helpType,
    helpDetails: form.helpDetails.trim(),
    familyMembers: Number(form.familyMembers),
    beneficiaryCount: Number(form.beneficiaryCount),
    incomeRange: form.incomeRange,
    situation: form.situation.trim(),
    consent: Boolean(form.consent),
    honeypot: String(honeypot || '').trim(),
  };
}

export async function submitBeneficiary(payload, idempotencyKey) {
  const data = await postPublicForm(
    '/api/v1/public/beneficiaries',
    payload,
    idempotencyKey,
  );
  return {
    ok: true,
    formType: 'beneficiary',
    referenceId: data.reference_no,
    referenceNo: data.reference_no,
    message: data.message,
  };
}
