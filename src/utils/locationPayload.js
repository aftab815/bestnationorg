import {
  NOT_LISTED_VALUE,
  getDistrictById,
  getDivisionById,
  getProvinceByDivisionId,
  getTehsilById,
  getUnionCouncilById,
  makeLocationEntry,
  makeNotListedEntry,
} from '../data/locations';

const FINDERS = {
  division: getDivisionById,
  district: getDistrictById,
  tehsil: getTehsilById,
  uc: getUnionCouncilById,
};

/**
 * Convert a select value + optional custom text into the payload location shape.
 * Returns null for optional levels that were left blank.
 */
export function resolveLocationValue(level, value, customText) {
  if (!value) return null;
  if (value === NOT_LISTED_VALUE) return makeNotListedEntry(customText);
  const finder = FINDERS[level];
  return makeLocationEntry(finder ? finder(value) : null);
}

export function resolveProvinceFromDivision(divisionValue) {
  if (!divisionValue || divisionValue === NOT_LISTED_VALUE) return null;
  return makeLocationEntry(getProvinceByDivisionId(divisionValue));
}

export function isMissingCustomLocation(value, customText) {
  return value === NOT_LISTED_VALUE && !String(customText || '').trim();
}
