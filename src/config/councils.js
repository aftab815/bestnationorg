/**
 * BNWO Councils data and configuration.
 *
 * Council ids are the permanent ids from src/data/locations.js. They are used
 * directly as the council id and must never be renamed, reused or deleted.
 * Division councils use the division id; tehsil councils use the tehsil id.
 *
 * Note: only Punjab is fully populated in locations.js right now. The other
 * provinces contain sample data, so their councils will appear automatically
 * when the real locations are added there.
 *
 * Every council currently has the same member count. The real member list will
 * come later with the backend.
 */

import { locationsData, getAllDivisions } from '../data/locations';
import { getRegionForDivision } from '../data/regions';

export const MEMBERS_PER_COUNCIL = 120;

/**
 * All council events live here (single place).
 *
 * Event shape:
 * {
 *   id: 'unique-stable-event-id',       // choose once, never change it
 *   councilType: 'division',            // 'division' or 'tehsil' for now
 *   councilId: 'the permanent location id',
 *   title: 'Event title',
 *   date: 'March 15, 2026',
 *   description: 'Short description shown on the card.',
 *   image: '/images/councils/your-photo.webp',
 * }
 *
 * Put photos in public/images/councils/ and use a path that starts with
 * /images/councils/. See public/images/councils/README.txt for the full steps.
 *
 * EXAMPLE ONLY — this example is intentionally commented out so no fake event
 * appears on the site. Copy the block, remove the // marks, and fill it in.
 *
 * {
 *   id: 'div-lahore-2026-01',
 *   councilType: 'division',
 *   councilId: 'pk-prov-punjab-div-lahore-division',
 *   title: 'Lahore Division Community Drive',
 *   date: 'March 15, 2026',
 *   description: 'A short, friendly summary of what happened at this council event.',
 *   image: '/images/councils/lahore-1.webp',
 * },
 */
export const COUNCIL_EVENTS = [];

const PAKISTAN = locationsData.pakistan;

const divisionCouncils = getAllDivisions().map((division) => {
  const region = getRegionForDivision(division.id);
  return {
    id: division.id,
    name: division.name,
    provinceId: division.provinceId,
    provinceName: division.provinceName,
    regionId: region ? region.id : null,
    regionName: region ? region.name : '',
    memberCount: MEMBERS_PER_COUNCIL,
  };
});

const tehsilCouncils = [];

for (const province of PAKISTAN) {
  for (const division of province.divisions) {
    const region = getRegionForDivision(division.id);
    for (const district of division.districts) {
      for (const tehsil of district.tehsils) {
        tehsilCouncils.push({
          id: tehsil.id,
          name: tehsil.name,
          provinceId: province.id,
          provinceName: province.name,
          divisionId: division.id,
          divisionName: division.name,
          regionId: region ? region.id : null,
          regionName: region ? region.name : '',
          districtId: district.id,
          districtName: district.name,
          memberCount: MEMBERS_PER_COUNCIL,
        });
      }
    }
  }
}

export function getDivisionCouncils() {
  return divisionCouncils;
}

export function getTehsilCouncils() {
  return tehsilCouncils;
}

export function getDivisionCouncilById(divisionId) {
  return divisionCouncils.find((council) => council.id === divisionId) || null;
}

export function getTehsilCouncilById(tehsilId) {
  return tehsilCouncils.find((council) => council.id === tehsilId) || null;
}

export function getCouncilEvents(councilType, councilId) {
  return COUNCIL_EVENTS.filter(
    (event) => event.councilType === councilType && event.councilId === councilId
  ).sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    if (Number.isNaN(dateA) && Number.isNaN(dateB)) return 0;
    if (Number.isNaN(dateA)) return 1;
    if (Number.isNaN(dateB)) return -1;
    return dateB - dateA;
  });
}
