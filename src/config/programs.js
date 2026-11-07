/**
 * Program catalogue used by the Volunteer and Beneficiary forms.
 *
 * The program and project names below are final. The ids are permanent once published:
 * never rename, reuse, or delete an id; only correct a "name" when a label needs fixing.
 * Every program has exactly two projects (project ids use the -a / -b suffix).
 */
export const PROGRAMS = [
  {
    id: 'prog-1',
    name: 'Islamic Education & Social Welfare Program',
    projects: [
      { id: 'proj-1-a', name: 'Quran & Sunnah Awareness' },
      { id: 'proj-1-b', name: 'Dar-ul-Rehmat' },
    ],
  },
  {
    id: 'prog-2',
    name: 'Education & Skills Development Program',
    projects: [
      { id: 'proj-2-a', name: 'IT & Skills' },
      { id: 'proj-2-b', name: 'Literacy Program' },
    ],
  },
  {
    id: 'prog-3',
    name: 'Parents & Teachers Development Program',
    projects: [
      { id: 'proj-3-a', name: 'Parents' },
      { id: 'proj-3-b', name: 'Teachers Empowerment and Training Program' },
    ],
  },
  {
    id: 'prog-4',
    name: 'Agriculture & Livestock Development Program',
    projects: [
      { id: 'proj-4-a', name: 'Agricultural Promotion' },
      { id: 'proj-4-b', name: 'Livestock Promotion' },
    ],
  },
  {
    id: 'prog-5',
    name: 'Healthcare Awareness & Medical Empowerment Program',
    projects: [
      { id: 'proj-5-a', name: 'Health Awareness' },
      { id: 'proj-5-b', name: 'Doctors Empowerment' },
    ],
  },
  {
    id: 'prog-6',
    name: 'Healthcare Services & Emergency Support Program',
    projects: [
      { id: 'proj-6-a', name: 'Dialysis Centers' },
      { id: 'proj-6-b', name: 'Blood Bank & Ambulance Service' },
    ],
  },
  {
    id: 'prog-7',
    name: 'Environmental Protection & Clean Water Program',
    projects: [
      { id: 'proj-7-a', name: 'Green & Clean Pakistan' },
      { id: 'proj-7-b', name: 'Clean Water' },
    ],
  },
  {
    id: 'prog-8',
    name: 'Sports & Cultural Development Program',
    projects: [
      { id: 'proj-8-a', name: 'Sports' },
      { id: 'proj-8-b', name: 'Cultural Activities' },
    ],
  },
  {
    id: 'prog-9',
    name: 'Justice, Legal Aid & Human Rights Program',
    projects: [
      { id: 'proj-9-a', name: 'Rule of Law Empowerment' },
      { id: 'proj-9-b', name: 'Human Rights & Legal Support Program' },
    ],
  },
  {
    id: 'prog-10',
    name: 'Trade & Industrial Development Program',
    projects: [
      { id: 'proj-10-a', name: 'Traders' },
      { id: 'proj-10-b', name: 'Industrialists Empowerment Project' },
    ],
  },
  {
    id: 'prog-11',
    name: 'Youth & Women Empowerment Program',
    projects: [
      { id: 'proj-11-a', name: 'Youth Empowerment' },
      { id: 'proj-11-b', name: 'Women Empowerment' },
    ],
  },
  {
    id: 'prog-12',
    name: 'Family Welfare & Entrepreneurship Development Program',
    projects: [
      { id: 'proj-12-a', name: 'Nikah Falahi' },
      { id: 'proj-12-b', name: 'SME Program' },
    ],
  },
];

export function getPrograms() {
  return PROGRAMS;
}

export function getProjectsForProgram(programId) {
  const program = PROGRAMS.find((item) => item.id === programId);
  return program ? program.projects : [];
}

export function getProgramById(programId) {
  return PROGRAMS.find((item) => item.id === programId) || null;
}

export function getProjectById(programId, projectId) {
  const program = getProgramById(programId);
  if (!program) return null;
  return program.projects.find((item) => item.id === projectId) || null;
}
