/**
 * BNWO official regions and their divisions.
 *
 * Region ids are permanent. Division ids below are the permanent ids from
 * src/data/locations.js and must never change. If a division is not in this
 * map, it has no region and the helpers return null.
 */

export const REGIONS = [
  { id: 'region-1', name: 'South Punjab' },
  { id: 'region-2', name: 'Central Punjab' },
  { id: 'region-3', name: 'North Punjab' },
  { id: 'region-4', name: 'Islamabad Region' },
  { id: 'region-5', name: 'Azad Jammu & Kashmir' },
  { id: 'region-6', name: 'Gilgit-Baltistan' },
  { id: 'region-7', name: 'KPK 1 Peshawar' },
  { id: 'region-8', name: 'KPK 2 Hazara' },
  { id: 'region-9', name: 'Sindh 1 Karachi' },
  { id: 'region-10', name: 'Sindh 2 Sukkur' },
  { id: 'region-11', name: 'Balochistan 1 Quetta' },
  { id: 'region-12', name: 'Balochistan 2 Gwadar' },
];

export const REGION_DISPLAY_ORDER = [
  'region-2',
  'region-3',
  'region-4',
  'region-1',
  'region-5',
  'region-6',
  'region-7',
  'region-8',
  'region-9',
  'region-10',
  'region-11',
  'region-12',
];

export const DIVISION_REGION_IDS = {
  'pk-prov-punjab-div-bahawalpur-division': 'region-1',
  'pk-prov-punjab-div-multan-division': 'region-1',
  'pk-prov-punjab-div-dera-ghazi-khan-division': 'region-1',

  'pk-prov-punjab-div-lahore-division': 'region-2',
  'pk-prov-punjab-div-sahiwal-division': 'region-2',
  'pk-prov-punjab-div-gujranwala-division': 'region-2',

  'pk-prov-punjab-div-faisalabad-division': 'region-3',
  'pk-prov-punjab-div-sargodha-division': 'region-3',
  'pk-prov-punjab-div-gujrat-division': 'region-3',

  'pk-prov-islamabad-capital-territory-div-islamabad-division': 'region-4',
  'pk-prov-punjab-div-rawalpindi-division': 'region-4',

  'pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division': 'region-5',
  'pk-prov-azad-jammu-and-kashmir-div-poonch-division': 'region-5',
  'pk-prov-azad-jammu-and-kashmir-div-mirpur-division': 'region-5',

  'pk-prov-gilgit-baltistan-div-baltistan-division': 'region-6',
  'pk-prov-gilgit-baltistan-div-diamer-division': 'region-6',
  'pk-prov-gilgit-baltistan-div-gilgit-division': 'region-6',

  'pk-prov-khyber-pakhtunkhwa-div-peshawar-division': 'region-7',
  'pk-prov-khyber-pakhtunkhwa-div-kohat-division': 'region-7',
  'pk-prov-khyber-pakhtunkhwa-div-bannu-division': 'region-7',
  'pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division': 'region-7',

  'pk-prov-khyber-pakhtunkhwa-div-hazara-division': 'region-8',
  'pk-prov-khyber-pakhtunkhwa-div-mardan-division': 'region-8',
  'pk-prov-khyber-pakhtunkhwa-div-malakand-division': 'region-8',

  'pk-prov-sindh-div-karachi-division': 'region-9',
  'pk-prov-sindh-div-hyderabad-division': 'region-9',
  'pk-prov-sindh-div-mirpur-khas-division': 'region-9',

  'pk-prov-sindh-div-sukkur-division': 'region-10',
  'pk-prov-sindh-div-larkana-division': 'region-10',
  'pk-prov-sindh-div-shaheed-benazirabad-division': 'region-10',

  'pk-prov-balochistan-div-quetta-division': 'region-11',
  'pk-prov-balochistan-div-pishin-division': 'region-11',
  'pk-prov-balochistan-div-sibi-division': 'region-11',
  'pk-prov-balochistan-div-naseerabad-division': 'region-11',
  'pk-prov-balochistan-div-loralai-division': 'region-11',
  'pk-prov-balochistan-div-zhob-division': 'region-11',

  'pk-prov-balochistan-div-koh-e-sulaiman-division': 'region-12',
  'pk-prov-balochistan-div-rakhshan-division': 'region-12',
  'pk-prov-balochistan-div-lasbela-division': 'region-12',
  'pk-prov-balochistan-div-kalat-division': 'region-12',
  'pk-prov-balochistan-div-makran-division': 'region-12',
};

const REGION_DISPLAY_INDEX = REGION_DISPLAY_ORDER.reduce((index, regionId, position) => {
  index[regionId] = position;
  return index;
}, {});

const DIVISION_DISPLAY_INDEX = Object.keys(DIVISION_REGION_IDS).reduce(
  (index, divisionId, position) => {
    index[divisionId] = position;
    return index;
  },
  {}
);

export function getRegions() {
  return REGIONS;
}

export function getRegionById(regionId) {
  return REGIONS.find((region) => region.id === regionId) || null;
}

export function getRegionForDivision(divisionId) {
  if (!divisionId) return null;
  const regionId = DIVISION_REGION_IDS[divisionId];
  return regionId ? getRegionById(regionId) : null;
}

export function getDivisionLabel(division) {
  if (!division) return '';
  const region = getRegionForDivision(division.id);
  return region ? `${division.name} (${region.name})` : division.name;
}

export function sortDivisionsByRegion(divisions) {
  if (!Array.isArray(divisions)) return [];

  return divisions
    .map((division, position) => {
      const region = getRegionForDivision(division.id);
      const regionRank =
        region && REGION_DISPLAY_INDEX[region.id] !== undefined
          ? REGION_DISPLAY_INDEX[region.id]
          : REGION_DISPLAY_ORDER.length;
      const divisionRank =
        DIVISION_DISPLAY_INDEX[division.id] !== undefined
          ? DIVISION_DISPLAY_INDEX[division.id]
          : Number.MAX_SAFE_INTEGER;

      return { division, position, regionRank, divisionRank };
    })
    .sort((a, b) => {
      if (a.regionRank !== b.regionRank) return a.regionRank - b.regionRank;
      if (a.divisionRank !== b.divisionRank) return a.divisionRank - b.divisionRank;
      return a.position - b.position;
    })
    .map((item) => item.division);
}
