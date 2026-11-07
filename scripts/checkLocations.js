const fs = require('fs');
const path = require('path');
const vm = require('vm');

const file = path.resolve(__dirname, '..', 'src', 'data', 'locations.js');
const source = fs.readFileSync(file, 'utf8').replace(/export (const|function)/g, '$1');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(source + '\nthis.locationsData = locationsData;', sandbox);
const punjab = sandbox.locationsData.pakistan.find((province) => province.id === 'pk-prov-punjab');

console.log('Punjab location hierarchy\n');

let totalDistricts = 0;
let totalTehsils = 0;

for (const division of punjab.divisions) {
  const districtCount = division.districts.length;
  const tehsilCount = division.districts.reduce((sum, district) => sum + district.tehsils.length, 0);
  totalDistricts += districtCount;
  totalTehsils += tehsilCount;
  console.log(`${division.name}: ${districtCount} districts, ${tehsilCount} tehsils`);
  for (const district of division.districts) {
    console.log(`  ${district.name}: ${district.tehsils.length} tehsils`);
  }
}

console.log(
  `\nTotals: ${punjab.divisions.length} divisions, ${totalDistricts} districts, ${totalTehsils} tehsils`
);

const idCounts = new Map();
function visit(node) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach(visit);
    return;
  }
  if (node.id) {
    if (!idCounts.has(node.id)) idCounts.set(node.id, []);
    idCounts.get(node.id).push(node.name);
  }
  for (const key of ['divisions', 'districts', 'tehsils', 'unionCouncils']) {
    if (node[key]) visit(node[key]);
  }
}
visit(punjab);

const duplicateIds = [...idCounts.entries()].filter(([, names]) => names.length > 1);
console.log(`\nDuplicate ids: ${duplicateIds.length}`);
for (const [id, names] of duplicateIds) {
  console.log(`  ${id} -> ${names.join(', ')}`);
}

const tehsilLocations = new Map();
for (const division of punjab.divisions) {
  for (const district of division.districts) {
    for (const tehsil of district.tehsils) {
      if (!tehsilLocations.has(tehsil.id)) tehsilLocations.set(tehsil.id, []);
      tehsilLocations.get(tehsil.id).push(`${division.name} > ${district.name}`);
    }
  }
}

const sharedTehsilIds = [...tehsilLocations.entries()].filter(
  ([, locations]) => new Set(locations).size > 1
);
console.log(`Tehsil ids appearing under more than one district: ${sharedTehsilIds.length}`);
for (const [id, locations] of sharedTehsilIds) {
  console.log(`  ${id} -> ${locations.join('; ')}`);
}

if (duplicateIds.length || sharedTehsilIds.length) process.exitCode = 1;
