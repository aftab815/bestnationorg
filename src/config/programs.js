/**
 * BNWO 12 Programs and 24 Projects Configuration
 * 
 * Instructions for administrators / developers:
 * - Replace the placeholder titles and descriptions below with the official BNWO program and project titles.
 * - Each program must maintain exactly 2 projects.
 * - Each program and project has a unique 'id' used for database storage and CRM synchronization.
 */

export const programsConfig = [
  {
    id: 'prog-1',
    name: 'Program 1: Quality Education & Literacy Support',
    description: 'Universal basic education, primary school adoption, and free learning materials.',
    projects: [
      { id: 'proj-1-a', name: 'Project A: Model Community Primary Schools' },
      { id: 'proj-1-b', name: 'Project B: Youth After-School Tuition & Literacy Drives' }
    ]
  },
  {
    id: 'prog-2',
    name: 'Program 2: Community Healthcare & Medical Relief',
    description: 'Free medical camps, basic diagnostics, and essential medicines distribution.',
    projects: [
      { id: 'proj-2-a', name: 'Project A: Mobile Health Clinics & Screening Camps' },
      { id: 'proj-2-b', name: 'Project B: Subsidized Diagnostic & Medicine Aid Center' }
    ]
  },
  {
    id: 'prog-3',
    name: 'Program 3: Hunger Alleviation & Rashan Support',
    description: 'Monthly ration package distribution to destitute families and widows.',
    projects: [
      { id: 'proj-3-a', name: 'Project A: Monthly Family Rashan Packs' },
      { id: 'proj-3-b', name: 'Project B: Community Kitchens & Emergency Food Relief' }
    ]
  },
  {
    id: 'prog-4',
    name: 'Program 4: Clean Drinking Water & Filtration',
    description: 'Installation of reverse osmosis filtration plants and hand pumps in underserved areas.',
    projects: [
      { id: 'proj-4-a', name: 'Project A: Community Water Filtration Plants' },
      { id: 'proj-4-b', name: 'Project B: Solar-Powered Village Deep Tube Wells' }
    ]
  },
  {
    id: 'prog-5',
    name: 'Program 5: Technical & Vocational Skill Development',
    description: 'Market-oriented skill training, sewing, computer basics, and vocational certification.',
    projects: [
      { id: 'proj-5-a', name: 'Project A: Technical Skills & Digital Training Academy' },
      { id: 'proj-5-b', name: 'Project B: Women Sewing & Handicrafts Centers' }
    ]
  },
  {
    id: 'prog-6',
    name: 'Program 6: Orphan Support & Child Welfare',
    description: 'Holistic care, education sponsorships, healthcare, and psychological support for orphans.',
    projects: [
      { id: 'proj-6-a', name: 'Project A: Orphan Educational Sponsorship Program' },
      { id: 'proj-6-b', name: 'Project B: Child Nutrition & Healthcare Support' }
    ]
  },
  {
    id: 'prog-7',
    name: 'Program 7: Women Empowerment & Micro-Livelihoods',
    description: 'Interest-free micro-support, livelihood grants, and economic independence for women.',
    projects: [
      { id: 'proj-7-a', name: 'Project A: Female Entrepreneurship & Tool Grants' },
      { id: 'proj-7-b', name: 'Project B: Financial Literacy & Self-Help Groups' }
    ]
  },
  {
    id: 'prog-8',
    name: 'Program 8: Disaster Management & Emergency Response',
    description: 'Rapid response during floods, earthquakes, and winter crises across Pakistan.',
    projects: [
      { id: 'proj-8-a', name: 'Project A: Disaster Rapid Emergency Relief Team' },
      { id: 'proj-8-b', name: 'Project B: Post-Crisis Shelter & Livelihood Rehabilitation' }
    ]
  },
  {
    id: 'prog-9',
    name: 'Program 9: Legal Aid & Human Rights Protection',
    description: 'Pro-bono legal representation, fundamental rights advocacy, and citizen counseling.',
    projects: [
      { id: 'proj-9-a', name: 'Project A: Citizen Legal Rights & Counseling Desk' },
      { id: 'proj-9-b', name: 'Project B: Pro-Bono Prisoner & Indigent Support' }
    ]
  },
  {
    id: 'prog-10',
    name: 'Program 10: Environmental Protection & Green Pakistan',
    description: 'Urban forestry, tree plantation, clean energy awareness, and waste reduction.',
    projects: [
      { id: 'proj-10-a', name: 'Project A: Urban Forest & Tree Plantation Drives' },
      { id: 'proj-10-b', name: 'Project B: Clean Neighborhoods & Waste Recycling Campaigns' }
    ]
  },
  {
    id: 'prog-11',
    name: 'Program 11: Youth Leadership & Community Volunteers',
    description: 'Youth development, community volunteer corps, and social work mentorship.',
    projects: [
      { id: 'proj-11-a', name: 'Project A: BNWO Youth Parliamentary Fellowship' },
      { id: 'proj-11-b', name: 'Project B: Grassroots Community Volunteer Corps' }
    ]
  },
  {
    id: 'prog-12',
    name: 'Program 12: Special Needs & Disability Inclusion',
    description: 'Assistive devices, rehabilitation support, and barrier-free community access.',
    projects: [
      { id: 'proj-12-a', name: 'Project A: Wheelchair & Assistive Equipment Distribution' },
      { id: 'proj-12-b', name: 'Project B: Inclusive Education & Physical Rehabilitation' }
    ]
  }
];

export function getProgramById(programId) {
  return programsConfig.find(p => p.id === programId) || null;
}

export function getProjectsForProgram(programId) {
  const prog = getProgramById(programId);
  return prog ? prog.projects : [];
}
