/**
 * Content repository for BNWO programs and projects.
 *
 * This file contains detailed descriptive content for each of the 12 programs
 * and their 24 projects (exactly 2 projects per program).
 *
 * SCHEMA:
 * - PROGRAM_DETAILS[programId]: {
 *     summary: string, // High-level overview of the program's vision and impact
 *   }
 *
 * - PROJECT_DETAILS[projectId]: {
 *     summary: string,        // Detailed summary of the project purpose
 *     objectives: string[],   // Key measurable targets / goals
 *     activities: string[],   // Core on-ground activities & services delivered
 *     beneficiaries: string,  // Target audience / demographic reached
 *   }
 *
 * Note: Empty fields will not render in the UI. When all fields of a project are empty,
 * the page displays a polite notice: "Detailed information about this project will be published soon."
 */

export const PROGRAM_DETAILS = {
  'prog-1': { summary: '' },
  'prog-2': { summary: '' },
  'prog-3': { summary: '' },
  'prog-4': { summary: '' },
  'prog-5': { summary: '' },
  'prog-6': { summary: '' },
  'prog-7': { summary: '' },
  'prog-8': { summary: '' },
  'prog-9': { summary: '' },
  'prog-10': { summary: '' },
  'prog-11': { summary: '' },
  'prog-12': { summary: '' },
};

export const PROJECT_DETAILS = {
  // Program 1: Islamic Education & Social Welfare Program
  'proj-1-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-1-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 2: Education & Skills Development Program
  'proj-2-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-2-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 3: Parents & Teachers Development Program
  'proj-3-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-3-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 4: Agriculture & Livestock Development Program
  'proj-4-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-4-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 5: Healthcare Awareness & Medical Empowerment Program
  'proj-5-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-5-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 6: Healthcare Services & Emergency Support Program
  'proj-6-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-6-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 7: Environmental Protection & Clean Water Program
  'proj-7-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-7-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 8: Sports & Cultural Development Program
  'proj-8-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-8-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 9: Justice, Legal Aid & Human Rights Program
  'proj-9-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-9-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 10: Trade & Industrial Development Program
  'proj-10-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-10-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 11: Youth & Women Empowerment Program
  'proj-11-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-11-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },

  // Program 12: Family Welfare & Entrepreneurship Development Program
  'proj-12-a': { summary: '', objectives: [], activities: [], beneficiaries: '' },
  'proj-12-b': { summary: '', objectives: [], activities: [], beneficiaries: '' },
};

/**
 * Returns project details object or an empty placeholder.
 */
export function getProjectDetails(projectId) {
  return PROJECT_DETAILS[projectId] || {
    summary: '',
    objectives: [],
    activities: [],
    beneficiaries: '',
  };
}

/**
 * Returns program details object or an empty placeholder.
 */
export function getProgramDetails(programId) {
  return PROGRAM_DETAILS[programId] || { summary: '' };
}
