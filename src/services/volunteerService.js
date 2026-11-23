import { getProgramById, getProjectById } from '../config/programs';
import { resolveLocationValue } from '../utils/locationPayload';
import { digitsOnly } from '../utils/validation';
import { postPublicForm } from './formApi';

export function buildVolunteerPayload(form, honeypot) {
  const program = getProgramById(form.programId);
  const project = getProjectById(form.programId, form.projectId);

  return {
    fullName: form.fullName.trim(),
    gender: form.gender,
    age: Number(form.age),
    cell: digitsOnly(form.cell),
    email: form.email.trim(),
    cnic: digitsOnly(form.cnic),
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
    skills: form.skills,
    availabilityHours: Number(form.availabilityHours),
    availabilityType: form.availabilityType,
    profession: form.profession.trim(),
    message: form.message.trim(),
    honeypot: String(honeypot || '').trim(),
  };
}

export async function submitVolunteer(payload, idempotencyKey) {
  const data = await postPublicForm('/api/v1/public/volunteers', payload, idempotencyKey);
  return {
    ok: true,
    formType: 'volunteer',
    referenceId: data.reference_no,
    referenceNo: data.reference_no,
    message: data.message,
  };
}
