/**
 * BNWO Hierarchical Location Dataset
 *
 * Hierarchy: Country -> Province -> Division -> District -> Tehsil -> Union Council (UC)
 *
 * IMPORTANT — STABLE IDS:
 * Every id below is permanent once published. Never rename, reuse, or delete an id.
 * When correcting a label or adding full Pakistan data later, keep the existing id and
 * only change the "name" / label. New entries may be added with new ids.
 *
 * Each node stores both a stable "id" and a human-readable "name". Forms store both in
 * submitted payloads so the CRM can group and count records reliably even if a label
 * is corrected later.
 *
 * Instructions for adding full Pakistan data:
 * - Add provinces to the "pakistan" array below.
 * - Add divisions to the relevant province's "divisions" array.
 * - Add districts to the relevant division's "districts" array.
 * - Add tehsils to the relevant district's "tehsils" array.
 * - Add union councils as { id, name } objects under the relevant tehsil.
 * - Follow the existing id prefixes (pk, prov, div, dist, teh, uc) and keep ids unique.
 * - Form logic reads this hierarchy dynamically and does NOT depend on its size.
 *
 * "My area is not listed" is a form-level fallback. Use NOT_LISTED_VALUE as the select
 * value; the form then stores { id: null, label: <typed text>, notListed: true }.
 */

export const NOT_LISTED_VALUE = '__not_listed__';

export const locationsData = {
  countries: [
    { code: "PK", name: "Pakistan" },
    { code: "UK", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "CA", name: "Canada" },
    { code: "OTHER", name: "Other Country" }
  ],

  pakistan: [
    {
      id: "pk-prov-punjab",
      name: "Punjab",
      divisions: [
        {
          id: "pk-prov-punjab-div-lahore-division",
          name: "Lahore Division",
          districts: [
            {
              id: "pk-prov-punjab-div-lahore-division-dist-lahore-district",
              name: "Lahore District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-city-tehsil",
                  name: "City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-city-tehsil-uc-uc-50-anarkali", name: "UC 50 (Anarkali)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-city-tehsil-uc-uc-51-gawalmandi", name: "UC 51 (Gawalmandi)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-city-tehsil-uc-uc-52-walled-city", name: "UC 52 (Walled City)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-city-tehsil-uc-uc-53-mozang", name: "UC 53 (Mozang)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-lahore-cantt-tehsil",
                  name: "Lahore Cantt Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-lahore-cantt-tehsil-uc-uc-201-cantt-north", name: "UC 201 (Cantt North)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-lahore-cantt-tehsil-uc-uc-202-cantt-south", name: "UC 202 (Cantt South)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-lahore-cantt-tehsil-uc-uc-203-dha-phase-1-5", name: "UC 203 (DHA Phase 1-5)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-lahore-cantt-tehsil-uc-uc-204-walton", name: "UC 204 (Walton)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-model-town-tehsil",
                  name: "Model Town Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-model-town-tehsil-uc-uc-180-model-town", name: "UC 180 (Model Town)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-model-town-tehsil-uc-uc-181-garden-town", name: "UC 181 (Garden Town)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-model-town-tehsil-uc-uc-182-faisal-town", name: "UC 182 (Faisal Town)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-model-town-tehsil-uc-uc-183-kot-lakhpat", name: "UC 183 (Kot Lakhpat)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-shalimar-tehsil",
                  name: "Shalimar Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-shalimar-tehsil-uc-uc-70-shalimar", name: "UC 70 (Shalimar)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-shalimar-tehsil-uc-uc-71-baghbanpura", name: "UC 71 (Baghbanpura)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-shalimar-tehsil-uc-uc-72-singh-pura", name: "UC 72 (Singh Pura)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-raiwind-tehsil",
                  name: "Raiwind Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-raiwind-tehsil-uc-uc-250-raiwind-city", name: "UC 250 (Raiwind City)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-raiwind-tehsil-uc-uc-251-pajia", name: "UC 251 (Pajia)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-raiwind-tehsil-uc-uc-252-ali-raza-abad", name: "UC 252 (Ali Raza Abad)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-nishtar-tehsil",
                  name: "Nishtar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-wagah-tehsil",
                  name: "Wagah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-iqbal-town-tehsil",
                  name: "Iqbal Town Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-ravi-tehsil",
                  name: "Ravi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-lahore-district-teh-saddar-tehsil",
                  name: "Saddar Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-lahore-division-dist-kasur-district",
              name: "Kasur District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kasur-tehsil",
                  name: "Kasur Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kasur-tehsil-uc-uc-01-kasur-city-1", name: "UC 01 (Kasur City 1)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kasur-tehsil-uc-uc-02-kasur-city-2", name: "UC 02 (Kasur City 2)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kasur-tehsil-uc-uc-03-khara", name: "UC 03 (Khara)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-chunian-tehsil",
                  name: "Chunian Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-chunian-tehsil-uc-uc-10-chunian-urban", name: "UC 10 (Chunian Urban)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-chunian-tehsil-uc-uc-11-chunian-rural", name: "UC 11 (Chunian Rural)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-chunian-tehsil-uc-uc-12-kanganpur", name: "UC 12 (Kanganpur)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-pattoki-tehsil",
                  name: "Pattoki Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-pattoki-tehsil-uc-uc-20-pattoki-city", name: "UC 20 (Pattoki City)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-pattoki-tehsil-uc-uc-21-habibabad", name: "UC 21 (Habibabad)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-pattoki-tehsil-uc-uc-22-hallah", name: "UC 22 (Hallah)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kot-radha-kishan-tehsil",
                  name: "Kot Radha Kishan Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kot-radha-kishan-tehsil-uc-uc-30-kot-radha-kishan", name: "UC 30 (Kot Radha Kishan)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-kasur-district-teh-kot-radha-kishan-tehsil-uc-uc-31-raja-jang", name: "UC 31 (Raja Jang)" },
                  ],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district",
              name: "Sheikhupura District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-sheikhupura-tehsil",
                  name: "Sheikhupura Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-sheikhupura-tehsil-uc-uc-01-city-center", name: "UC 01 (City Center)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-sheikhupura-tehsil-uc-uc-02-civil-lines", name: "UC 02 (Civil Lines)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-sheikhupura-tehsil-uc-uc-03-farooqabad", name: "UC 03 (Farooqabad)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-ferozewala-tehsil",
                  name: "Ferozewala Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-ferozewala-tehsil-uc-uc-15-shahdara", name: "UC 15 (Shahdara)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-ferozewala-tehsil-uc-uc-16-muridke-rural", name: "UC 16 (Muridke Rural)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-ferozewala-tehsil-uc-uc-17-kala-shah-kaku", name: "UC 17 (Kala Shah Kaku)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-muridke-tehsil",
                  name: "Muridke Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-muridke-tehsil-uc-uc-25-muridke-city", name: "UC 25 (Muridke City)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-muridke-tehsil-uc-uc-26-narang-mandi", name: "UC 26 (Narang Mandi)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-sharaqpur-tehsil",
                  name: "Sharaqpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-sheikhupura-district-teh-safdarabad-tehsil",
                  name: "Safdarabad Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district",
              name: "Nankana Sahib District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-nankana-sahib-tehsil",
                  name: "Nankana Sahib Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-nankana-sahib-tehsil-uc-uc-01-nankana-city", name: "UC 01 (Nankana City)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-nankana-sahib-tehsil-uc-uc-02-bucheki", name: "UC 02 (Bucheki)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-nankana-sahib-tehsil-uc-uc-03-warburton", name: "UC 03 (Warburton)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-shah-kot-tehsil",
                  name: "Shah Kot Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-shah-kot-tehsil-uc-uc-20-shah-kot-1", name: "UC 20 (Shah Kot 1)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-shah-kot-tehsil-uc-uc-21-shah-kot-2", name: "UC 21 (Shah Kot 2)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-sangla-hill-tehsil",
                  name: "Sangla Hill Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-sangla-hill-tehsil-uc-uc-10-sangla-hill-urban", name: "UC 10 (Sangla Hill Urban)" },
                    { id: "pk-prov-punjab-div-lahore-division-dist-nankana-sahib-district-teh-sangla-hill-tehsil-uc-uc-11-sangla-hill-rural", name: "UC 11 (Sangla Hill Rural)" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-gujranwala-division",
          name: "Gujranwala Division",
          districts: [
            {
              id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district",
              name: "Gujranwala District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-gujranwala-city-tehsil",
                  name: "Gujranwala City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-gujranwala-city-tehsil-uc-uc-01-model-town", name: "UC 01 (Model Town)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-gujranwala-city-tehsil-uc-uc-02-civil-lines", name: "UC 02 (Civil Lines)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-gujranwala-city-tehsil-uc-uc-03-wapda-town", name: "UC 03 (Wapda Town)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-gujranwala-saddar-tehsil",
                  name: "Gujranwala Saddar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-kamoke-tehsil",
                  name: "Kamoke Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-kamoke-tehsil-uc-uc-15-kamoke-city", name: "UC 15 (Kamoke City)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-kamoke-tehsil-uc-uc-16-eminabad", name: "UC 16 (Eminabad)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-nowshera-virkan-tehsil",
                  name: "Nowshera Virkan Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district",
              name: "Sialkot District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-sialkot-tehsil",
                  name: "Sialkot Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-sialkot-tehsil-uc-uc-01-cantt", name: "UC 01 (Cantt)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-sialkot-tehsil-uc-uc-02-model-town", name: "UC 02 (Model Town)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-sialkot-tehsil-uc-uc-03-sambrial-road", name: "UC 03 (Sambrial Road)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-daska-tehsil",
                  name: "Daska Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-daska-tehsil-uc-uc-15-daska-city", name: "UC 15 (Daska City)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-daska-tehsil-uc-uc-16-jamke-cheema", name: "UC 16 (Jamke Cheema)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-pasrur-tehsil",
                  name: "Pasrur Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-pasrur-tehsil-uc-uc-25-pasrur-city", name: "UC 25 (Pasrur City)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-pasrur-tehsil-uc-uc-26-chawinda", name: "UC 26 (Chawinda)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-sialkot-district-teh-sambrial-tehsil",
                  name: "Sambrial Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-gujranwala-division-dist-narowal-district",
              name: "Narowal District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-narowal-district-teh-narowal-tehsil",
                  name: "Narowal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-narowal-district-teh-shakargarh-tehsil",
                  name: "Shakargarh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-narowal-district-teh-zafarwal-tehsil",
                  name: "Zafarwal Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-gujrat-division",
          name: "Gujrat Division",
          districts: [
            {
              id: "pk-prov-punjab-div-gujrat-division-dist-gujrat-district",
              name: "Gujrat District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-gujrat-district-teh-gujrat-tehsil",
                  name: "Gujrat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-gujrat-district-teh-kharian-tehsil",
                  name: "Kharian Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-gujrat-district-teh-sarai-alamgir-tehsil",
                  name: "Sarai Alamgir Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-gujrat-division-dist-mandi-bahauddin-district",
              name: "Mandi Bahauddin District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-mandi-bahauddin-district-teh-mandi-bahauddin-tehsil",
                  name: "Mandi Bahauddin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-mandi-bahauddin-district-teh-malakwal-tehsil",
                  name: "Malakwal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-mandi-bahauddin-district-teh-phalia-tehsil",
                  name: "Phalia Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-gujrat-division-dist-hafizabad-district",
              name: "Hafizabad District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-hafizabad-district-teh-hafizabad-tehsil",
                  name: "Hafizabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-hafizabad-district-teh-pindi-bhattian-tehsil",
                  name: "Pindi Bhattian Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-gujrat-division-dist-wazirabad-district",
              name: "Wazirabad District",
              tehsils: [
                // Stable id keeps its original parent prefix; current parent comes from the tree.
                {
                  id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-wazirabad-tehsil",
                  name: "Wazirabad Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-wazirabad-tehsil-uc-uc-25-wazirabad-city", name: "UC 25 (Wazirabad City)" },
                    { id: "pk-prov-punjab-div-gujranwala-division-dist-gujranwala-district-teh-wazirabad-tehsil-uc-uc-26-ali-pur-chatta", name: "UC 26 (Ali Pur Chatta)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-gujrat-division-dist-wazirabad-district-teh-ali-pur-chattha-tehsil",
                  name: "Ali Pur Chattha Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-rawalpindi-division",
          name: "Rawalpindi Division",
          districts: [
            {
              id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district",
              name: "Rawalpindi District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-city-tehsil",
                  name: "Rawalpindi City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-city-tehsil-uc-uc-01-raja-bazar", name: "UC 01 (Raja Bazar)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-city-tehsil-uc-uc-02-satellite-town", name: "UC 02 (Satellite Town)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-city-tehsil-uc-uc-03-westridge", name: "UC 03 (Westridge)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-saddar-tehsil",
                  name: "Saddar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-cantt-tehsil",
                  name: "Rawalpindi Cantt Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-cantt-tehsil-uc-uc-10-cantt-ward-1", name: "UC 10 (Cantt Ward 1)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-cantt-tehsil-uc-uc-11-cantt-ward-2", name: "UC 11 (Cantt Ward 2)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-rawalpindi-cantt-tehsil-uc-uc-12-chaklala", name: "UC 12 (Chaklala)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-gujar-khan-tehsil",
                  name: "Gujar Khan Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-gujar-khan-tehsil-uc-uc-20-gujar-khan-urban", name: "UC 20 (Gujar Khan Urban)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-gujar-khan-tehsil-uc-uc-21-bewal", name: "UC 21 (Bewal)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-gujar-khan-tehsil-uc-uc-22-mandra", name: "UC 22 (Mandra)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-taxila-tehsil",
                  name: "Taxila Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-taxila-tehsil-uc-uc-30-taxila-urban", name: "UC 30 (Taxila Urban)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-taxila-tehsil-uc-uc-31-wah-cantt", name: "UC 31 (Wah Cantt)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-taxila-tehsil-uc-uc-32-usman-khattar", name: "UC 32 (Usman Khattar)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-kahuta-tehsil",
                  name: "Kahuta Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-rawalpindi-district-teh-kallar-syedan-tehsil",
                  name: "Kallar Syedan Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district",
              name: "Jhelum District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-jhelum-tehsil",
                  name: "Jhelum Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-jhelum-tehsil-uc-uc-01-jhelum-city", name: "UC 01 (Jhelum City)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-jhelum-tehsil-uc-uc-02-kala-gujran", name: "UC 02 (Kala Gujran)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-jhelum-tehsil-uc-uc-03-dina-border", name: "UC 03 (Dina Border)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-dina-tehsil",
                  name: "Dina Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-sohawa-tehsil",
                  name: "Sohawa Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-pind-dadan-khan-tehsil",
                  name: "Pind Dadan Khan Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-pind-dadan-khan-tehsil-uc-uc-10-pind-dadan-khan-city", name: "UC 10 (Pind Dadan Khan City)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-jhelum-district-teh-pind-dadan-khan-tehsil-uc-uc-11-khewra-salt-mines", name: "UC 11 (Khewra Salt Mines)" },
                  ],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district",
              name: "Chakwal District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-chakwal-tehsil",
                  name: "Chakwal Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-chakwal-tehsil-uc-uc-01-chakwal-city-1", name: "UC 01 (Chakwal City 1)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-chakwal-tehsil-uc-uc-02-chakwal-city-2", name: "UC 02 (Chakwal City 2)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-chakwal-tehsil-uc-uc-03-balkassar", name: "UC 03 (Balkassar)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-choa-saidan-shah-tehsil",
                  name: "Choa Saidan Shah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-kallar-kahar-tehsil",
                  name: "Kallar Kahar Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district",
              name: "Attock District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-attock-tehsil",
                  name: "Attock Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-attock-tehsil-uc-uc-01-attock-city", name: "UC 01 (Attock City)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-attock-tehsil-uc-uc-02-attock-rural", name: "UC 02 (Attock Rural)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-attock-tehsil-uc-uc-03-haji-shah", name: "UC 03 (Haji Shah)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-fateh-jang-tehsil",
                  name: "Fateh Jang Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-fateh-jang-tehsil-uc-uc-10-fateh-jang-city", name: "UC 10 (Fateh Jang City)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-fateh-jang-tehsil-uc-uc-11-bahtar", name: "UC 11 (Bahtar)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-fateh-jang-tehsil-uc-uc-12-gheb", name: "UC 12 (Gheb)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-hasan-abdal-tehsil",
                  name: "Hasan Abdal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-hazro-tehsil",
                  name: "Hazro Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-jand-tehsil",
                  name: "Jand Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-attock-district-teh-pindi-gheb-tehsil",
                  name: "Pindi Gheb Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-rawalpindi-division-dist-murree-district",
              name: "Murree District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-murree-district-teh-murree-tehsil",
                  name: "Murree Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-murree-district-teh-kotli-sattian-tehsil",
                  name: "Kotli Sattian Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-rawalpindi-division-dist-talagang-district",
              name: "Talagang District",
              tehsils: [
                // Stable id keeps its original parent prefix; current parent comes from the tree.
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-talagang-tehsil",
                  name: "Talagang Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-talagang-tehsil-uc-uc-10-talagang-urban", name: "UC 10 (Talagang Urban)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-talagang-tehsil-uc-uc-11-lawa", name: "UC 11 (Lawa)" },
                    { id: "pk-prov-punjab-div-rawalpindi-division-dist-chakwal-district-teh-talagang-tehsil-uc-uc-12-tamman", name: "UC 12 (Tamman)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-rawalpindi-division-dist-talagang-district-teh-lawa-tehsil",
                  name: "Lawa Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-faisalabad-division",
          name: "Faisalabad Division",
          districts: [
            {
              id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district",
              name: "Faisalabad District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-city-tehsil",
                  name: "Faisalabad City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-city-tehsil-uc-uc-01-d-ground", name: "UC 01 (D-Ground)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-city-tehsil-uc-uc-02-clock-tower", name: "UC 02 (Clock Tower)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-city-tehsil-uc-uc-03-madina-town", name: "UC 03 (Madina Town)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-sadar-tehsil",
                  name: "Faisalabad Sadar Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-sadar-tehsil-uc-uc-20-narwala", name: "UC 20 (Narwala)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-faisalabad-sadar-tehsil-uc-uc-21-jaranwala-road", name: "UC 21 (Jaranwala Road)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-chak-jhumra-tehsil",
                  name: "Chak Jhumra Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-jaranwala-tehsil",
                  name: "Jaranwala Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-jaranwala-tehsil-uc-uc-40-jaranwala-city", name: "UC 40 (Jaranwala City)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-jaranwala-tehsil-uc-uc-41-khurrianwala", name: "UC 41 (Khurrianwala)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-samundri-tehsil",
                  name: "Samundri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-faisalabad-district-teh-tandlianwala-tehsil",
                  name: "Tandlianwala Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district",
              name: "Jhang District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-jhang-tehsil",
                  name: "Jhang Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-jhang-tehsil-uc-uc-01-jhang-saddar", name: "UC 01 (Jhang Saddar)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-jhang-tehsil-uc-uc-02-jhang-city", name: "UC 02 (Jhang City)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-jhang-tehsil-uc-uc-03-haveli-bahadur-shah", name: "UC 03 (Haveli Bahadur Shah)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-shorkot-tehsil",
                  name: "Shorkot Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-shorkot-tehsil-uc-uc-10-shorkot-city", name: "UC 10 (Shorkot City)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-shorkot-tehsil-uc-uc-11-shorkot-cantt", name: "UC 11 (Shorkot Cantt)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-ahmadpur-sial-tehsil",
                  name: "Ahmadpur Sial Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-jhang-district-teh-athara-hazari-tehsil",
                  name: "Athara Hazari Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district",
              name: "Toba Tek Singh District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-toba-tek-singh-tehsil",
                  name: "Toba Tek Singh Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-toba-tek-singh-tehsil-uc-uc-01-toba-city", name: "UC 01 (Toba City)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-toba-tek-singh-tehsil-uc-uc-02-gojra", name: "UC 02 (Gojra)" },
                    { id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-toba-tek-singh-tehsil-uc-uc-03-kamalia", name: "UC 03 (Kamalia)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-gojra-tehsil",
                  name: "Gojra Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-kamalia-tehsil",
                  name: "Kamalia Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-toba-tek-singh-district-teh-pir-mahal-tehsil",
                  name: "Pir Mahal Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-faisalabad-division-dist-chiniot-district",
              name: "Chiniot District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-chiniot-district-teh-chiniot-tehsil",
                  name: "Chiniot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-chiniot-district-teh-bhawana-tehsil",
                  name: "Bhawana Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-faisalabad-division-dist-chiniot-district-teh-lalian-tehsil",
                  name: "Lalian Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-sargodha-division",
          name: "Sargodha Division",
          districts: [
            {
              id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district",
              name: "Sargodha District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-bhera-tehsil",
                  name: "Bhera Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-bhalwal-tehsil",
                  name: "Bhalwal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-kot-momin-tehsil",
                  name: "Kot Momin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-sahiwal-tehsil",
                  name: "Sahiwal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-sargodha-tehsil",
                  name: "Sargodha Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-shahpur-tehsil",
                  name: "Shahpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-sargodha-district-teh-sillanwali-tehsil",
                  name: "Sillanwali Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-sargodha-division-dist-khushab-district",
              name: "Khushab District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-khushab-district-teh-khushab-tehsil",
                  name: "Khushab Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-khushab-district-teh-noorpur-thal-tehsil",
                  name: "Noorpur Thal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-khushab-district-teh-quaidabad-tehsil",
                  name: "Quaidabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-khushab-district-teh-naushera-tehsil",
                  name: "Naushera Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-sargodha-division-dist-mianwali-district",
              name: "Mianwali District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-mianwali-district-teh-mianwali-tehsil",
                  name: "Mianwali Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-mianwali-district-teh-isakhel-tehsil",
                  name: "Isakhel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-mianwali-district-teh-piplan-tehsil",
                  name: "Piplan Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-sargodha-division-dist-bhakkar-district",
              name: "Bhakkar District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-bhakkar-district-teh-bhakkar-tehsil",
                  name: "Bhakkar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-bhakkar-district-teh-darya-khan-tehsil",
                  name: "Darya Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-bhakkar-district-teh-kallur-kot-tehsil",
                  name: "Kallur Kot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sargodha-division-dist-bhakkar-district-teh-mankera-tehsil",
                  name: "Mankera Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-sahiwal-division",
          name: "Sahiwal Division",
          districts: [
            {
              id: "pk-prov-punjab-div-sahiwal-division-dist-sahiwal-district",
              name: "Sahiwal District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-sahiwal-district-teh-sahiwal-tehsil",
                  name: "Sahiwal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-sahiwal-district-teh-chichawatni-tehsil",
                  name: "Chichawatni Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-sahiwal-division-dist-pakpattan-district",
              name: "Pakpattan District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-pakpattan-district-teh-arifwala-tehsil",
                  name: "Arifwala Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-pakpattan-district-teh-pakpattan-tehsil",
                  name: "Pakpattan Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-sahiwal-division-dist-okara-district",
              name: "Okara District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-okara-district-teh-depalpur-tehsil",
                  name: "Depalpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-okara-district-teh-okara-tehsil",
                  name: "Okara Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-sahiwal-division-dist-okara-district-teh-renala-khurd-tehsil",
                  name: "Renala Khurd Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-multan-division",
          name: "Multan Division",
          districts: [
            {
              id: "pk-prov-punjab-div-multan-division-dist-multan-district",
              name: "Multan District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-city-tehsil",
                  name: "Multan City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-city-tehsil-uc-uc-01-haram-gate", name: "UC 01 (Haram Gate)" },
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-city-tehsil-uc-uc-02-cantt", name: "UC 02 (Cantt)" },
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-city-tehsil-uc-uc-03-shah-rukn-e-alam", name: "UC 03 (Shah Rukn-e-Alam)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-sadar-tehsil",
                  name: "Multan Sadar Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-sadar-tehsil-uc-uc-20-boson-road", name: "UC 20 (Boson Road)" },
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-multan-sadar-tehsil-uc-uc-21-shujabad-road", name: "UC 21 (Shujabad Road)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-shujabad-tehsil",
                  name: "Shujabad Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-shujabad-tehsil-uc-uc-30-shujabad-city", name: "UC 30 (Shujabad City)" },
                    { id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-shujabad-tehsil-uc-uc-31-raja-ram", name: "UC 31 (Raja Ram)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-multan-district-teh-jalalpur-pirwala-tehsil",
                  name: "Jalalpur Pirwala Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-multan-division-dist-khanewal-district",
              name: "Khanewal District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-khanewal-tehsil",
                  name: "Khanewal Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-khanewal-tehsil-uc-uc-01-khanewal-city", name: "UC 01 (Khanewal City)" },
                    { id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-khanewal-tehsil-uc-uc-02-mian-channu", name: "UC 02 (Mian Channu)" },
                    { id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-khanewal-tehsil-uc-uc-03-kabirwala", name: "UC 03 (Kabirwala)" },
                  ],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-mian-channu-tehsil",
                  name: "Mian Channu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-jahanian-tehsil",
                  name: "Jahanian Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-khanewal-district-teh-kabirwala-tehsil",
                  name: "Kabirwala Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-multan-division-dist-lodhran-district",
              name: "Lodhran District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-multan-division-dist-lodhran-district-teh-lodhran-tehsil",
                  name: "Lodhran Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-lodhran-district-teh-kahror-pacca-tehsil",
                  name: "Kahror Pacca Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-lodhran-district-teh-dunyapur-tehsil",
                  name: "Dunyapur Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-multan-division-dist-vehari-district",
              name: "Vehari District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-multan-division-dist-vehari-district-teh-vehari-tehsil",
                  name: "Vehari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-vehari-district-teh-burewala-tehsil",
                  name: "Burewala Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-multan-division-dist-vehari-district-teh-mailsi-tehsil",
                  name: "Mailsi Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-bahawalpur-division",
          name: "Bahawalpur Division",
          districts: [
            {
              id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district",
              name: "Bahawalpur District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district-teh-ahmadpur-east-tehsil",
                  name: "Ahmadpur East Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district-teh-bahawalpur-city-tehsil",
                  name: "Bahawalpur City Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district-teh-bahawalpur-saddar-tehsil",
                  name: "Bahawalpur Saddar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district-teh-hasilpur-tehsil",
                  name: "Hasilpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district-teh-khairpur-tamewali-tehsil",
                  name: "Khairpur Tamewali Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalpur-district-teh-yazman-tehsil",
                  name: "Yazman Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalnagar-district",
              name: "Bahawalnagar District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalnagar-district-teh-bahawalnagar-tehsil",
                  name: "Bahawalnagar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalnagar-district-teh-chishtian-tehsil",
                  name: "Chishtian Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalnagar-district-teh-fort-abbas-tehsil",
                  name: "Fort Abbas Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalnagar-district-teh-haroonabad-tehsil",
                  name: "Haroonabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-bahawalnagar-district-teh-minchinabad-tehsil",
                  name: "Minchinabad Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-bahawalpur-division-dist-rahim-yar-khan-district",
              name: "Rahim Yar Khan District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-rahim-yar-khan-district-teh-khanpur-tehsil",
                  name: "Khanpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-rahim-yar-khan-district-teh-liaquatpur-tehsil",
                  name: "Liaquatpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-rahim-yar-khan-district-teh-rahim-yar-khan-tehsil",
                  name: "Rahim Yar Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-bahawalpur-division-dist-rahim-yar-khan-district-teh-sadiqabad-tehsil",
                  name: "Sadiqabad Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
        {
          id: "pk-prov-punjab-div-dera-ghazi-khan-division",
          name: "Dera Ghazi Khan Division",
          districts: [
            {
              id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-dera-ghazi-khan-district",
              name: "Dera Ghazi Khan District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-dera-ghazi-khan-district-teh-dera-ghazi-khan-tehsil",
                  name: "Dera Ghazi Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-dera-ghazi-khan-district-teh-kot-chutta-tehsil",
                  name: "Kot Chutta Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-dera-ghazi-khan-district-teh-taunsa-sharif-tehsil",
                  name: "Taunsa Sharif Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-muzaffargarh-district",
              name: "Muzaffargarh District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-muzaffargarh-district-teh-alipur-tehsil",
                  name: "Alipur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-muzaffargarh-district-teh-jatoi-tehsil",
                  name: "Jatoi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-muzaffargarh-district-teh-muzaffargarh-tehsil",
                  name: "Muzaffargarh Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-rajanpur-district",
              name: "Rajanpur District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-rajanpur-district-teh-jampur-tehsil",
                  name: "Jampur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-rajanpur-district-teh-rajanpur-tehsil",
                  name: "Rajanpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-rajanpur-district-teh-rojhan-tehsil",
                  name: "Rojhan Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-layyah-district",
              name: "Layyah District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-layyah-district-teh-layyah-tehsil",
                  name: "Layyah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-layyah-district-teh-karor-lal-esan-tehsil",
                  name: "Karor Lal Esan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-layyah-district-teh-chaubara-tehsil",
                  name: "Chaubara Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-taunsa-district",
              name: "Taunsa District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-taunsa-district-teh-koh-e-suleman-tehsil",
                  name: "Koh-e-Suleman Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-taunsa-district-teh-taunsa-tehsil",
                  name: "Taunsa Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-taunsa-district-teh-vehowa-tehsil",
                  name: "Vehowa Tehsil",
                  unionCouncils: [],
                },
              ],
            },
            {
              id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-kot-addu-district",
              name: "Kot Addu District",
              tehsils: [
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-kot-addu-district-teh-kot-addu-tehsil",
                  name: "Kot Addu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-punjab-div-dera-ghazi-khan-division-dist-kot-addu-district-teh-chowk-sarwar-shaheed-tehsil",
                  name: "Chowk Sarwar Shaheed Tehsil",
                  unionCouncils: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pk-prov-sindh",
      name: "Sindh",
      divisions: [
        {
          id: "pk-prov-sindh-div-karachi-division",
          name: "Karachi Division",
          districts: [
            {
              id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district",
              name: "Karachi Central District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-gulberg-tehsil",
                  name: "Gulberg Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-gulberg-tehsil-uc-uc-01-federal-b-area", name: "UC 01 (Federal B Area)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-gulberg-tehsil-uc-uc-02-gulberg", name: "UC 02 (Gulberg)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-gulberg-tehsil-uc-uc-03-naseerabad", name: "UC 03 (Naseerabad)" }
                  ],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-north-nazimabad-tehsil",
                  name: "North Nazimabad Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-north-nazimabad-tehsil-uc-uc-08-hyderi", name: "UC 08 (Hyderi)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-north-nazimabad-tehsil-uc-uc-09-buffer-zone", name: "UC 09 (Buffer Zone)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-central-district-teh-north-nazimabad-tehsil-uc-uc-10-khandu-goth", name: "UC 10 (Khandu Goth)" }
                  ],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district",
              name: "Karachi East District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-gulshan-e-iqbal-tehsil",
                  name: "Gulshan-e-Iqbal Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-gulshan-e-iqbal-tehsil-uc-uc-20-civic-center", name: "UC 20 (Civic Center)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-gulshan-e-iqbal-tehsil-uc-uc-21-nipa", name: "UC 21 (NIPA)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-gulshan-e-iqbal-tehsil-uc-uc-22-pehlwan-goth", name: "UC 22 (Pehlwan Goth)" }
                  ],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-jamshed-quarters-tehsil",
                  name: "Jamshed Quarters Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-jamshed-quarters-tehsil-uc-uc-28-pechs", name: "UC 28 (PECHS)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-jamshed-quarters-tehsil-uc-uc-29-soldier-bazar", name: "UC 29 (Soldier Bazar)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-east-district-teh-jamshed-quarters-tehsil-uc-uc-30-jamshed-road", name: "UC 30 (Jamshed Road)" }
                  ],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district",
              name: "Karachi South District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-saddar-tehsil",
                  name: "Saddar Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-saddar-tehsil-uc-uc-01-saddar", name: "UC 01 (Saddar)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-saddar-tehsil-uc-uc-02-clifton", name: "UC 02 (Clifton)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-saddar-tehsil-uc-uc-03-defence-phase-1-6", name: "UC 03 (Defence Phase 1-6)" }
                  ],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-civil-lines-tehsil",
                  name: "Civil Lines Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-civil-lines-tehsil-uc-uc-05-civil-lines", name: "UC 05 (Civil Lines)" },
                    { id: "pk-prov-sindh-div-karachi-division-dist-karachi-south-district-teh-civil-lines-tehsil-uc-uc-06-hijrat-colony", name: "UC 06 (Hijrat Colony)" }
                  ],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-sindh-div-hyderabad-division",
          name: "Hyderabad Division",
          districts: [
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district",
              name: "Hyderabad District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-hyderabad-city-tehsil",
                  name: "Hyderabad City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-hyderabad-city-tehsil-uc-uc-01-city", name: "UC 01 (City)" },
                    { id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-hyderabad-city-tehsil-uc-uc-02-saddar", name: "UC 02 (Saddar)" },
                    { id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-hyderabad-city-tehsil-uc-uc-03-qasimabad", name: "UC 03 (Qasimabad)" }
                  ],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-latifabad-tehsil",
                  name: "Latifabad Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-latifabad-tehsil-uc-uc-08-unit-1-6", name: "UC 08 (Unit 1-6)" },
                    { id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-latifabad-tehsil-uc-uc-09-unit-7-12", name: "UC 09 (Unit 7-12)" }
                  ],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-sindh-div-sukkur-division",
          name: "Sukkur Division",
          districts: [
            {
              id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district",
              name: "Sukkur District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-sukkur-city-tehsil",
                  name: "Sukkur City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-sukkur-city-tehsil-uc-uc-01-barrage-colony", name: "UC 01 (Barrage Colony)" },
                    { id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-sukkur-city-tehsil-uc-uc-02-old-sukkur", name: "UC 02 (Old Sukkur)" },
                    { id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-sukkur-city-tehsil-uc-uc-03-rohri", name: "UC 03 (Rohri)" }
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      id: "pk-prov-khyber-pakhtunkhwa",
      name: "Khyber Pakhtunkhwa",
      divisions: [
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division",
          name: "Peshawar Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district",
              name: "Peshawar District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-peshawar-city-tehsil",
                  name: "Peshawar City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-peshawar-city-tehsil-uc-uc-01-hayatabad", name: "UC 01 (Hayatabad)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-peshawar-city-tehsil-uc-uc-02-university-town", name: "UC 02 (University Town)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-peshawar-city-tehsil-uc-uc-03-cantt", name: "UC 03 (Cantt)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-peshawar-city-tehsil-uc-uc-04-city-circular", name: "UC 04 (City Circular)" }
                  ],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district",
              name: "Charsadda District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district-teh-charsadda-tehsil",
                  name: "Charsadda Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district-teh-charsadda-tehsil-uc-uc-01-charsadda-city", name: "UC 01 (Charsadda City)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district-teh-charsadda-tehsil-uc-uc-02-tangi", name: "UC 02 (Tangi)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district-teh-charsadda-tehsil-uc-uc-03-shabqadar", name: "UC 03 (Shabqadar)" }
                  ],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division",
          name: "Mardan Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district",
              name: "Mardan District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-mardan-tehsil",
                  name: "Mardan Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-mardan-tehsil-uc-uc-01-mardan-city", name: "UC 01 (Mardan City)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-mardan-tehsil-uc-uc-02-takht-bhai", name: "UC 02 (Takht Bhai)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-mardan-tehsil-uc-uc-03-katlang", name: "UC 03 (Katlang)" }
                  ],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division",
          name: "Hazara Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district",
              name: "Abbottabad District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-abbottabad-tehsil",
                  name: "Abbottabad Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-abbottabad-tehsil-uc-uc-01-abbottabad-central", name: "UC 01 (Abbottabad Central)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-abbottabad-tehsil-uc-uc-02-havelian", name: "UC 02 (Havelian)" },
                    { id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-abbottabad-tehsil-uc-uc-03-nathiagali", name: "UC 03 (Nathiagali)" }
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      id: "pk-prov-balochistan",
      name: "Balochistan",
      divisions: [
        {
          id: "pk-prov-balochistan-div-quetta-division",
          name: "Quetta Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-quetta-division-dist-quetta-district",
              name: "Quetta District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-district-teh-quetta-city-tehsil",
                  name: "Quetta City Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-balochistan-div-quetta-division-dist-quetta-district-teh-quetta-city-tehsil-uc-uc-01-zarghoon", name: "UC 01 (Zarghoon)" },
                    { id: "pk-prov-balochistan-div-quetta-division-dist-quetta-district-teh-quetta-city-tehsil-uc-uc-02-chiltan", name: "UC 02 (Chiltan)" },
                    { id: "pk-prov-balochistan-div-quetta-division-dist-quetta-district-teh-quetta-city-tehsil-uc-uc-03-cantt", name: "UC 03 (Cantt)" },
                    { id: "pk-prov-balochistan-div-quetta-division-dist-quetta-district-teh-quetta-city-tehsil-uc-uc-04-sariab", name: "UC 04 (Sariab)" }
                  ],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-makran-division",
          name: "Makran Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district",
              name: "Gwadar District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-gwadar-tehsil",
                  name: "Gwadar Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-gwadar-tehsil-uc-uc-01-gwadar-port-and-central", name: "UC 01 (Gwadar Port & Central)" },
                    { id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-gwadar-tehsil-uc-uc-02-ormara", name: "UC 02 (Ormara)" },
                    { id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-gwadar-tehsil-uc-uc-03-pasni", name: "UC 03 (Pasni)" }
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      id: "pk-prov-islamabad-capital-territory",
      name: "Islamabad Capital Territory",
      divisions: [
        {
          id: "pk-prov-islamabad-capital-territory-div-islamabad-division",
          name: "Islamabad Division",
          districts: [
            {
              id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district",
              name: "Islamabad District",
              tehsils: [
                {
                  id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-urban-tehsil",
                  name: "Islamabad Urban Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-urban-tehsil-uc-sector-f-6-f-7", name: "Sector F-6 / F-7" },
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-urban-tehsil-uc-sector-g-8-g-9", name: "Sector G-8 / G-9" },
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-urban-tehsil-uc-sector-i-8-i-9", name: "Sector I-8 / I-9" },
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-urban-tehsil-uc-sector-e-7-e-11", name: "Sector E-7 / E-11" }
                  ],
                },
                {
                  id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-rural-tehsil",
                  name: "Islamabad Rural Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-rural-tehsil-uc-bhara-kahu", name: "Bhara Kahu" },
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-rural-tehsil-uc-tarlai-kalan", name: "Tarlai Kalan" },
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-rural-tehsil-uc-sihala", name: "Sihala" },
                    { id: "pk-prov-islamabad-capital-territory-div-islamabad-division-dist-islamabad-district-teh-islamabad-rural-tehsil-uc-rawat", name: "Rawat" }
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      id: "pk-prov-azad-jammu-and-kashmir",
      name: "Azad Jammu & Kashmir",
      divisions: [
        {
          id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division",
          name: "Muzaffarabad Division",
          districts: [
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-muzaffarabad-district",
              name: "Muzaffarabad District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-muzaffarabad-district-teh-muzaffarabad-tehsil",
                  name: "Muzaffarabad Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-muzaffarabad-district-teh-muzaffarabad-tehsil-uc-uc-01-central-city", name: "UC 01 (Central City)" },
                    { id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-muzaffarabad-district-teh-muzaffarabad-tehsil-uc-uc-02-chehla-bandi", name: "UC 02 (Chehla Bandi)" },
                    { id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-muzaffarabad-district-teh-muzaffarabad-tehsil-uc-uc-03-pattika", name: "UC 03 (Pattika)" }
                  ],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division",
          name: "Mirpur Division",
          districts: [
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district",
              name: "Mirpur District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district-teh-mirpur-tehsil",
                  name: "Mirpur Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district-teh-mirpur-tehsil-uc-uc-01-sector-f-1", name: "UC 01 (Sector F-1)" },
                    { id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district-teh-mirpur-tehsil-uc-uc-02-sector-f-2", name: "UC 02 (Sector F-2)" },
                    { id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district-teh-mirpur-tehsil-uc-uc-03-islamgarh", name: "UC 03 (Islamgarh)" }
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      id: "pk-prov-gilgit-baltistan",
      name: "Gilgit-Baltistan",
      divisions: [
        {
          id: "pk-prov-gilgit-baltistan-div-gilgit-division",
          name: "Gilgit Division",
          districts: [
            {
              id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district",
              name: "Gilgit District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district-teh-gilgit-tehsil",
                  name: "Gilgit Tehsil",
                  unionCouncils: [
                    { id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district-teh-gilgit-tehsil-uc-uc-01-gilgit-town", name: "UC 01 (Gilgit Town)" },
                    { id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district-teh-gilgit-tehsil-uc-uc-02-jutial", name: "UC 02 (Jutial)" },
                    { id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district-teh-gilgit-tehsil-uc-uc-03-danyore", name: "UC 03 (Danyore)" }
                  ],
                }
              ],
            }
          ],
        }
      ],
    }
  ],
};

/**
 * Accessor helpers for dependent dropdowns.
 * Each helper accepts the parent's stable id and returns child nodes ({ id, name }).
 */

const PAKISTAN = locationsData.pakistan;

export function getCountries() {
  return locationsData.countries;
}

export function getProvinces() {
  return PAKISTAN;
}

export function getDivisions(provinceId) {
  const province = PAKISTAN.find((item) => item.id === provinceId);
  return province ? province.divisions : [];
}

export function getDistricts(divisionId) {
  for (const province of PAKISTAN) {
    const division = province.divisions.find((item) => item.id === divisionId);
    if (division) return division.districts;
  }
  return [];
}

export function getTehsils(districtId) {
  for (const province of PAKISTAN) {
    for (const division of province.divisions) {
      const district = division.districts.find((item) => item.id === districtId);
      if (district) return district.tehsils;
    }
  }
  return [];
}

export function getUnionCouncils(tehsilId) {
  for (const province of PAKISTAN) {
    for (const division of province.divisions) {
      for (const district of division.districts) {
        const tehsil = district.tehsils.find((item) => item.id === tehsilId);
        if (tehsil) return tehsil.unionCouncils;
      }
    }
  }
  return [];
}

/**
 * Flat list of every division with its parent province.
 * Used by forms that only ask for Division and derive Province automatically.
 */
export function getAllDivisions() {
  return PAKISTAN.flatMap((province) =>
    province.divisions.map((division) => ({
      id: division.id,
      name: division.name,
      provinceId: province.id,
      provinceName: province.name,
    }))
  );
}

export function getProvinceByDivisionId(divisionId) {
  for (const province of PAKISTAN) {
    if (province.divisions.some((division) => division.id === divisionId)) {
      return province;
    }
  }
  return null;
}

export function getProvinceById(provinceId) {
  return PAKISTAN.find((province) => province.id === provinceId) || null;
}

export function getDivisionById(divisionId) {
  for (const province of PAKISTAN) {
    const division = province.divisions.find((item) => item.id === divisionId);
    if (division) return division;
  }
  return null;
}

export function getDistrictById(districtId) {
  for (const province of PAKISTAN) {
    for (const division of province.divisions) {
      const district = division.districts.find((item) => item.id === districtId);
      if (district) return district;
    }
  }
  return null;
}

export function getTehsilById(tehsilId) {
  for (const province of PAKISTAN) {
    for (const division of province.divisions) {
      for (const district of division.districts) {
        const tehsil = district.tehsils.find((item) => item.id === tehsilId);
        if (tehsil) return tehsil;
      }
    }
  }
  return null;
}

export function getUnionCouncilById(ucId) {
  for (const province of PAKISTAN) {
    for (const division of province.divisions) {
      for (const district of division.districts) {
        for (const tehsil of district.tehsils) {
          const uc = tehsil.unionCouncils.find((item) => item.id === ucId);
          if (uc) return uc;
        }
      }
    }
  }
  return null;
}

/** Convert a data node into the payload shape used by forms. */
export function makeLocationEntry(node) {
  if (!node) return null;
  return { id: node.id, label: node.name, notListed: false };
}

/** Convert free text from a "My area is not listed" input into the payload shape. */
export function makeNotListedEntry(label) {
  return { id: null, label: String(label || '').trim(), notListed: true };
}
