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
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-nazimabad-district",
              name: "Nazimabad District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-nazimabad-district-teh-gulberg-tehsil",
                  name: "Gulberg Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-nazimabad-district-teh-liaquatabad-tehsil",
                  name: "Liaquatabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-nazimabad-district-teh-new-karachi-tehsil",
                  name: "New Karachi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-nazimabad-district-teh-north-nazimabad-tehsil",
                  name: "North Nazimabad Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-gulshan-district",
              name: "Gulshan District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-gulshan-district-teh-ferozabad-tehsil",
                  name: "Ferozabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-gulshan-district-teh-gulshan-e-iqbal-tehsil",
                  name: "Gulshan-e-Iqbal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-gulshan-district-teh-gulzar-e-hijri-tehsil",
                  name: "Gulzar-e-Hijri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-gulshan-district-teh-jamshed-town-tehsil",
                  name: "Jamshed Town Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-gulshan-district-teh-gulshan-town-tehsil",
                  name: "Gulshan Town Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-orangi-district",
              name: "Orangi District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-orangi-district-teh-orangi-town-tehsil",
                  name: "Orangi Town Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-orangi-district-teh-mominabad-tehsil",
                  name: "Mominabad Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-karachi-district",
              name: "Karachi District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-district-teh-saddar-tehsil",
                  name: "Saddar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-district-teh-arambagh-tehsil",
                  name: "Arambagh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-district-teh-civil-lines-tehsil",
                  name: "Civil Lines Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-district-teh-garden-tehsil",
                  name: "Garden Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-karachi-district-teh-lyari-tehsil",
                  name: "Lyari Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-keamari-district",
              name: "Keamari District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-keamari-district-teh-keamari-harbour-tehsil",
                  name: "Keamari (Harbour) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-keamari-district-teh-baldia-tehsil",
                  name: "Baldia Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-keamari-district-teh-site-tehsil",
                  name: "SITE Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-keamari-district-teh-mauripur-tehsil",
                  name: "Mauripur Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-korangi-district",
              name: "Korangi District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-korangi-district-teh-korangi-tehsil",
                  name: "Korangi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-korangi-district-teh-landhi-tehsil",
                  name: "Landhi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-korangi-district-teh-model-colony-tehsil",
                  name: "Model Colony Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-korangi-district-teh-shah-faisal-tehsil",
                  name: "Shah Faisal Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-karachi-division-dist-malir-district",
              name: "Malir District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-malir-district-teh-malir-tehsil",
                  name: "Malir Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-malir-district-teh-gadap-tehsil",
                  name: "Gadap Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-malir-district-teh-bin-qasim-tehsil",
                  name: "Bin Qasim Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-malir-district-teh-ibrahim-hyderi-tehsil",
                  name: "Ibrahim Hyderi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-malir-district-teh-murad-memon-tehsil",
                  name: "Murad Memon Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-karachi-division-dist-malir-district-teh-shah-mureed-tehsil",
                  name: "Shah Mureed Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-hyderabad-rural-hyderabad-taluka-tehsil",
                  name: "Hyderabad Rural (Hyderabad Taluka) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-hyderabad-district-teh-qasimabad-tehsil",
                  name: "Qasimabad Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-jamshoro-district",
              name: "Jamshoro District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-jamshoro-district-teh-kotri-tehsil",
                  name: "Kotri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-jamshoro-district-teh-sehwan-sharif-tehsil",
                  name: "Sehwan Sharif Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-jamshoro-district-teh-manjhand-tehsil",
                  name: "Manjhand Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-jamshoro-district-teh-thano-bula-khan-tehsil",
                  name: "Thano Bula Khan Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-dadu-district",
              name: "Dadu District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-dadu-district-teh-dadu-tehsil",
                  name: "Dadu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-dadu-district-teh-johi-tehsil",
                  name: "Johi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-dadu-district-teh-khairpur-nathan-shah-tehsil",
                  name: "Khairpur Nathan Shah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-dadu-district-teh-mehar-tehsil",
                  name: "Mehar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-badin-district",
              name: "Badin District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-badin-district-teh-badin-tehsil",
                  name: "Badin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-badin-district-teh-matli-tehsil",
                  name: "Matli Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-badin-district-teh-shaheed-fazil-rahu-golarchi-tehsil",
                  name: "Shaheed Fazil Rahu (Golarchi) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-badin-district-teh-talhar-tehsil",
                  name: "Talhar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-badin-district-teh-tando-bago-tehsil",
                  name: "Tando Bago Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-matiari-district",
              name: "Matiari District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-matiari-district-teh-hala-tehsil",
                  name: "Hala Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-matiari-district-teh-matiari-tehsil",
                  name: "Matiari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-matiari-district-teh-saeedabad-tehsil",
                  name: "Saeedabad Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-tando-allahyar-district",
              name: "Tando Allahyar District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-tando-allahyar-district-teh-chamber-tehsil",
                  name: "Chamber Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-tando-allahyar-district-teh-jhando-mari-tehsil",
                  name: "Jhando Mari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-tando-allahyar-district-teh-tando-allahyar-tehsil",
                  name: "Tando Allahyar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-tando-muhammad-khan-district",
              name: "Tando Muhammad Khan District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-tando-muhammad-khan-district-teh-bulri-shah-karim-tehsil",
                  name: "Bulri Shah Karim Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-tando-muhammad-khan-district-teh-tando-ghulam-hyder-tehsil",
                  name: "Tando Ghulam Hyder Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-tando-muhammad-khan-district-teh-tando-muhammad-khan-tehsil",
                  name: "Tando Muhammad Khan Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-thatta-district",
              name: "Thatta District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-thatta-district-teh-ghorabari-tehsil",
                  name: "Ghorabari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-thatta-district-teh-keti-bunder-tehsil",
                  name: "Keti Bunder Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-thatta-district-teh-mirpur-sakro-tehsil",
                  name: "Mirpur Sakro Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-thatta-district-teh-thatta-tehsil",
                  name: "Thatta Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-hyderabad-division-dist-sujawal-district",
              name: "Sujawal District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-sujawal-district-teh-jati-tehsil",
                  name: "Jati Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-sujawal-district-teh-kharo-chan-tehsil",
                  name: "Kharo Chan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-sujawal-district-teh-mirpur-bathoro-tehsil",
                  name: "Mirpur Bathoro Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-sujawal-district-teh-shah-bunder-tehsil",
                  name: "Shah Bunder Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-hyderabad-division-dist-sujawal-district-teh-sujawal-tehsil",
                  name: "Sujawal Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-sindh-div-mirpur-khas-division",
          name: "Mirpur Khas Division",
          districts: [
            {
              id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district",
              name: "Mirpur Khas District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-digri-tehsil",
                  name: "Digri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-hussain-bux-mari-tehsil",
                  name: "Hussain Bux Mari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-jhuddo-tehsil",
                  name: "Jhuddo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-kot-ghulam-muhammad-tehsil",
                  name: "Kot Ghulam Muhammad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-mirpur-khas-tehsil",
                  name: "Mirpur Khas Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-shujaabad-tehsil",
                  name: "Shujaabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-mirpur-khas-district-teh-sindhri-tehsil",
                  name: "Sindhri Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district",
              name: "Tharparkar District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-chachro-tehsil",
                  name: "Chachro Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-dahli-tehsil",
                  name: "Dahli Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-diplo-tehsil",
                  name: "Diplo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-islamkot-tehsil",
                  name: "Islamkot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-kaloi-tehsil",
                  name: "Kaloi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-mithi-tehsil",
                  name: "Mithi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-tharparkar-district-teh-nagarparkar-tehsil",
                  name: "Nagarparkar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-mirpur-khas-division-dist-umerkot-district",
              name: "Umerkot District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-umerkot-district-teh-kunri-tehsil",
                  name: "Kunri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-umerkot-district-teh-pithoro-tehsil",
                  name: "Pithoro Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-umerkot-district-teh-samaro-tehsil",
                  name: "Samaro Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-mirpur-khas-division-dist-umerkot-district-teh-umerkot-tehsil",
                  name: "Umerkot Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-sindh-div-larkana-division",
          name: "Larkana Division",
          districts: [
            {
              id: "pk-prov-sindh-div-larkana-division-dist-larkana-district",
              name: "Larkana District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-larkana-district-teh-bakrani-tehsil",
                  name: "Bakrani Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-larkana-district-teh-dokri-tehsil",
                  name: "Dokri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-larkana-district-teh-larkana-tehsil",
                  name: "Larkana Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-larkana-district-teh-ratodero-tehsil",
                  name: "Ratodero Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district",
              name: "Qamber Shahdadkot District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-miro-khan-tehsil",
                  name: "Miro Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-nasirabad-tehsil",
                  name: "Nasirabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-qambar-tehsil",
                  name: "Qambar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-qubo-saeed-khan-tehsil",
                  name: "Qubo Saeed Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-shahdadkot-tehsil",
                  name: "Shahdadkot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-sijawal-junejo-tehsil",
                  name: "Sijawal Junejo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-qamber-shahdadkot-district-teh-warah-tehsil",
                  name: "Warah Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-larkana-division-dist-shikarpur-district",
              name: "Shikarpur District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-shikarpur-district-teh-garhi-yasin-tehsil",
                  name: "Garhi Yasin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-shikarpur-district-teh-khanpur-tehsil",
                  name: "Khanpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-shikarpur-district-teh-lakhi-tehsil",
                  name: "Lakhi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-shikarpur-district-teh-shikarpur-tehsil",
                  name: "Shikarpur Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-larkana-division-dist-jacobabad-district",
              name: "Jacobabad District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-jacobabad-district-teh-garhi-khairo-tehsil",
                  name: "Garhi Khairo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-jacobabad-district-teh-jacobabad-tehsil",
                  name: "Jacobabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-jacobabad-district-teh-thul-tehsil",
                  name: "Thul Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-larkana-division-dist-kashmore-district",
              name: "Kashmore District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-kashmore-district-teh-kandhkot-tehsil",
                  name: "Kandhkot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-kashmore-district-teh-kashmore-tehsil",
                  name: "Kashmore Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-larkana-division-dist-kashmore-district-teh-tangwani-tehsil",
                  name: "Tangwani Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-sindh-div-shaheed-benazirabad-division",
          name: "Shaheed Benazirabad Division",
          districts: [
            {
              id: "pk-prov-sindh-div-shaheed-benazirabad-division-dist-shaheed-benazirabad-district",
              name: "Shaheed Benazirabad District",
              tehsils: [],
            },
            {
              id: "pk-prov-sindh-div-shaheed-benazirabad-division-dist-naushahro-feroze-district",
              name: "Naushahro Feroze District",
              tehsils: [],
            },
            {
              id: "pk-prov-sindh-div-shaheed-benazirabad-division-dist-sanghar-district",
              name: "Sanghar District",
              tehsils: [],
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
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-new-sukkur-tehsil",
                  name: "New Sukkur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-rohri-tehsil",
                  name: "Rohri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-saleh-pat-tehsil",
                  name: "Saleh Pat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-sukkur-district-teh-pano-akil-tehsil",
                  name: "Pano Akil Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district",
              name: "Khairpur District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-faiz-ganj-tehsil",
                  name: "Faiz Ganj Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-gambat-tehsil",
                  name: "Gambat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-khairpur-tehsil",
                  name: "Khairpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-kingri-tehsil",
                  name: "Kingri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-kot-diji-tehsil",
                  name: "Kot Diji Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-nara-tehsil",
                  name: "Nara Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-sobho-dero-tehsil",
                  name: "Sobho Dero Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-khairpur-district-teh-thari-mirwah-mirwah-tehsil",
                  name: "Thari Mirwah (Mirwah) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-sindh-div-sukkur-division-dist-ghotki-district",
              name: "Ghotki District",
              tehsils: [
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-ghotki-district-teh-daharki-tehsil",
                  name: "Daharki Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-ghotki-district-teh-ghotki-tehsil",
                  name: "Ghotki Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-ghotki-district-teh-khangarh-khanpur-mahar-tehsil",
                  name: "Khangarh (Khanpur Mahar) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-ghotki-district-teh-mirpur-mathelo-tehsil",
                  name: "Mirpur Mathelo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-sindh-div-sukkur-division-dist-ghotki-district-teh-ubauro-tehsil",
                  name: "Ubauro Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-badhber-badhaber-tehsil",
                  name: "Badhber (Badhaber) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-chamkani-tehsil",
                  name: "Chamkani Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-hassan-khel-tehsil",
                  name: "Hassan Khel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-shah-alam-tehsil",
                  name: "Shah Alam Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-pishtakhara-tehsil",
                  name: "Pishtakhara Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-peshawar-district-teh-mathra-tehsil",
                  name: "Mathra Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district-teh-tangi-tehsil",
                  name: "Tangi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-charsadda-district-teh-shabqadar-tehsil",
                  name: "Shabqadar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-khyber-district",
              name: "Khyber District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-khyber-district-teh-bara-tehsil",
                  name: "Bara Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-khyber-district-teh-jamrud-tehsil",
                  name: "Jamrud Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-khyber-district-teh-landi-kotal-tehsil",
                  name: "Landi Kotal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-khyber-district-teh-mula-gori-tehsil",
                  name: "Mula Gori Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district",
              name: "Mohmand District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-ambar-utman-khel-tehsil",
                  name: "Ambar Utman Khel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-halim-zai-tehsil",
                  name: "Halim Zai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-pindiali-tehsil",
                  name: "Pindiali Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-pran-ghar-pranghar-tehsil",
                  name: "Pran Ghar (Pranghar) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-safi-tehsil",
                  name: "Safi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-upper-mohmand-mohmand-bala-tehsil",
                  name: "Upper Mohmand (Mohmand Bala) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-mohmand-district-teh-yake-ghund-lower-mohmand-tehsil",
                  name: "Yake Ghund (Lower Mohmand) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-nowshera-district",
              name: "Nowshera District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-nowshera-district-teh-nowshera-tehsil",
                  name: "Nowshera Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-nowshera-district-teh-pabbi-tehsil",
                  name: "Pabbi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-peshawar-division-dist-nowshera-district-teh-jehangira-tehsil",
                  name: "Jehangira Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division",
          name: "Kohat Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-hangu-and-karak-district",
              name: "Hangu & Karak District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-hangu-and-karak-district-teh-hangu-tehsil",
                  name: "Hangu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-hangu-and-karak-district-teh-thall-tehsil",
                  name: "Thall Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-hangu-and-karak-district-teh-banda-daud-shah-tehsil",
                  name: "Banda Daud Shah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-hangu-and-karak-district-teh-karak-tehsil",
                  name: "Karak Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-hangu-and-karak-district-teh-takht-e-nasrati-tehsil",
                  name: "Takht-e-Nasrati Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kohat-district",
              name: "Kohat District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kohat-district-teh-kohat-tehsil",
                  name: "Kohat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kohat-district-teh-lachi-tehsil",
                  name: "Lachi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kohat-district-teh-gumbat-tehsil",
                  name: "Gumbat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kohat-district-teh-dara-adam-khel-tehsil",
                  name: "Dara Adam Khel Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district",
              name: "Kurram & Orakzai District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-central-kurram-tehsil",
                  name: "Central Kurram Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-lower-kurram-tehsil",
                  name: "Lower Kurram Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-upper-kurram-tehsil",
                  name: "Upper Kurram Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-central-orakzai-tehsil",
                  name: "Central Orakzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-ismailzai-ismail-zai-tehsil",
                  name: "Ismailzai (Ismail Zai) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-lower-orakzai-tehsil",
                  name: "Lower Orakzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-kohat-division-dist-kurram-and-orakzai-district-teh-upper-orakzai-tehsil",
                  name: "Upper Orakzai Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division",
          name: "Bannu Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district",
              name: "Bannu District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district-teh-baka-khel-tehsil",
                  name: "Baka Khel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district-teh-bannu-tehsil",
                  name: "Bannu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district-teh-domel-tehsil",
                  name: "Domel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district-teh-kakki-tehsil",
                  name: "Kakki Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district-teh-miryan-tehsil",
                  name: "Miryan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-bannu-district-teh-wazir-tehsil",
                  name: "Wazir Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-lakki-marwat-district",
              name: "Lakki Marwat District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-lakki-marwat-district-teh-bettani-tehsil",
                  name: "Bettani Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-lakki-marwat-district-teh-ghazni-khel-tehsil",
                  name: "Ghazni Khel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-lakki-marwat-district-teh-lakki-marwat-tehsil",
                  name: "Lakki Marwat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-lakki-marwat-district-teh-sarai-naurang-tehsil",
                  name: "Sarai Naurang Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district",
              name: "North Waziristan District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-datta-khel-tehsil",
                  name: "Datta Khel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-dossali-tehsil",
                  name: "Dossali Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-gharyum-tehsil",
                  name: "Gharyum Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-ghulam-khan-tehsil",
                  name: "Ghulam Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-mir-ali-tehsil",
                  name: "Mir Ali Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-miran-shah-tehsil",
                  name: "Miran Shah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-razmak-tehsil",
                  name: "Razmak Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-shewa-tehsil",
                  name: "Shewa Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-bannu-division-dist-north-waziristan-district-teh-spinwam-tehsil",
                  name: "Spinwam Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division",
          name: "Dera Ismail Khan Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-dera-ismail-khan-district",
              name: "Dera Ismail Khan District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-dera-ismail-khan-district-teh-daraban-tehsil",
                  name: "Daraban Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-dera-ismail-khan-district-teh-dera-ismail-khan-tehsil",
                  name: "Dera Ismail Khan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-dera-ismail-khan-district-teh-kulachi-tehsil",
                  name: "Kulachi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-dera-ismail-khan-district-teh-paharpur-tehsil",
                  name: "Paharpur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-dera-ismail-khan-district-teh-paroa-tehsil",
                  name: "Paroa Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-tank-district",
              name: "Tank District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-tank-district-teh-tank-tehsil",
                  name: "Tank Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district",
              name: "South Waziristan Upper District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-ladha-tehsil",
                  name: "Ladha Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-makin-tehsil",
                  name: "Makin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-sararogha-tehsil",
                  name: "Sararogha Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-sarwakai-tehsil",
                  name: "Sarwakai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-shaktoi-tehsil",
                  name: "Shaktoi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-shawal-tehsil",
                  name: "Shawal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-upper-district-teh-tiarza-tehsil",
                  name: "Tiarza Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-lower-district",
              name: "South Waziristan Lower District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-lower-district-teh-narowal-tehsil",
                  name: "Narowal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-lower-district-teh-wana-tehsil",
                  name: "Wana Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-lower-district-teh-shakai-tehsil",
                  name: "Shakai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-lower-district-teh-toi-khulla-tolkhela-tehsil",
                  name: "Toi Khulla (Tolkhela) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-dera-ismail-khan-division-dist-south-waziristan-lower-district-teh-birmal-barmal-tehsil",
                  name: "Birmal (Barmal) Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-garhi-kapura-tehsil",
                  name: "Garhi Kapura Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-katlang-tehsil",
                  name: "Katlang Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-rustam-tehsil",
                  name: "Rustam Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-mardan-district-teh-takht-bhai-tehsil",
                  name: "Takht Bhai Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-mardan-division-dist-swabi-district",
              name: "Swabi District",
              tehsils: [],
            }
          ],
        },
        {
          id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division",
          name: "Malakand Division",
          districts: [
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district",
              name: "Swat District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-babuzai-tehsil",
                  name: "Babuzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-bahrain-tehsil",
                  name: "Bahrain Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-barikot-tehsil",
                  name: "Barikot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-charbagh-tehsil",
                  name: "Charbagh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-kabal-tehsil",
                  name: "Kabal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-khwazakhela-tehsil",
                  name: "Khwazakhela Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-swat-district-teh-matta-tehsil",
                  name: "Matta Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-malakand-district",
              name: "Malakand District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-malakand-district-teh-swat-ranizai-tehsil",
                  name: "Swat Ranizai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-malakand-district-teh-sam-ranizai-tehsil",
                  name: "Sam Ranizai Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district",
              name: "Lower Dir District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-adenzai-tehsil",
                  name: "Adenzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-balambat-tehsil",
                  name: "Balambat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-khall-tehsil",
                  name: "Khall Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-lal-qilla-maidan-tehsil",
                  name: "Lal Qilla (Maidan) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-munda-tehsil",
                  name: "Munda Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-samar-bagh-tehsil",
                  name: "Samar Bagh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-lower-dir-district-teh-timergara-tehsil",
                  name: "Timergara Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district",
              name: "Upper Dir District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district-teh-barawal-tehsil",
                  name: "Barawal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district-teh-chapar-chaper-tehsil",
                  name: "Chapar (Chaper) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district-teh-dir-tehsil",
                  name: "Dir Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district-teh-kalkot-tehsil",
                  name: "Kalkot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district-teh-khal-khall-tehsil",
                  name: "Khal (Khall) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-upper-dir-district-teh-wari-tehsil",
                  name: "Wari Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-chitral-lower-district",
              name: "Chitral Lower District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-chitral-lower-district-teh-chitral-tehsil",
                  name: "Chitral Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-chitral-lower-district-teh-drosh-tehsil",
                  name: "Drosh Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-chitral-upper-district",
              name: "Chitral Upper District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-chitral-upper-district-teh-mastuj-tehsil",
                  name: "Mastuj Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-chitral-upper-district-teh-mulkhow-torkhow-tehsil",
                  name: "Mulkhow-Torkhow Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district",
              name: "Buner District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district-teh-daggar-tehsil",
                  name: "Daggar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district-teh-gadezai-tehsil",
                  name: "Gadezai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district-teh-gagra-tehsil",
                  name: "Gagra Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district-teh-chagharzai-tehsil",
                  name: "Chagharzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district-teh-chamla-tehsil",
                  name: "Chamla Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-buner-district-teh-totalai-khudu-khel-tehsil",
                  name: "Totalai (Khudu Khel) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-shangla-district",
              name: "Shangla District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-shangla-district-teh-alpuri-tehsil",
                  name: "Alpuri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-shangla-district-teh-besham-tehsil",
                  name: "Besham Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-shangla-district-teh-chakesar-tehsil",
                  name: "Chakesar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-shangla-district-teh-puran-tehsil",
                  name: "Puran Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-shangla-district-teh-martung-tehsil",
                  name: "Martung Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district",
              name: "Bajaur District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-bar-chamarkand-tehsil",
                  name: "Bar Chamarkand Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-barang-tehsil",
                  name: "Barang Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-khar-bajaur-tehsil",
                  name: "Khar Bajaur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-mamund-tehsil",
                  name: "Mamund Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-nawagai-tehsil",
                  name: "Nawagai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-salarzai-tehsil",
                  name: "Salarzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-malakand-division-dist-bajaur-district-teh-utmankhel-tehsil",
                  name: "Utmankhel Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-havelian-tehsil",
                  name: "Havelian Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-lora-tehsil",
                  name: "Lora Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-abbottabad-district-teh-lower-tanawal-tehsil",
                  name: "Lower Tanawal Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-battagram-district",
              name: "Battagram District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-battagram-district-teh-battagram-tehsil",
                  name: "Battagram Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-battagram-district-teh-allai-tehsil",
                  name: "Allai Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-haripur-district",
              name: "Haripur District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-haripur-district-teh-haripur-tehsil",
                  name: "Haripur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-haripur-district-teh-ghazi-tehsil",
                  name: "Ghazi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-haripur-district-teh-khanpur-tehsil",
                  name: "Khanpur Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-kolai-palas-and-lower-kohistan-district",
              name: "Kolai Palas & Lower Kohistan District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-kolai-palas-and-lower-kohistan-district-teh-battera-kolai-tehsil",
                  name: "Battera Kolai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-kolai-palas-and-lower-kohistan-district-teh-palas-tehsil",
                  name: "Palas Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-kolai-palas-and-lower-kohistan-district-teh-bankand-ranolia-tehsil",
                  name: "Bankand / Ranolia Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-kolai-palas-and-lower-kohistan-district-teh-pattan-tehsil",
                  name: "Pattan Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-mansehra-district",
              name: "Mansehra District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-mansehra-district-teh-balakot-tehsil",
                  name: "Balakot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-mansehra-district-teh-baffa-pakhal-baffa-tehsil",
                  name: "Baffa Pakhal (Baffa) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-mansehra-district-teh-darband-tehsil",
                  name: "Darband Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-mansehra-district-teh-mansehra-tehsil",
                  name: "Mansehra Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-mansehra-district-teh-oghi-tehsil",
                  name: "Oghi Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district",
              name: "Torghar & Upper Kohistan District",
              tehsils: [
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-wazirabad-tehsil",
                  name: "Wazirabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-daur-maira-tehsil",
                  name: "Daur Maira Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-hasanzai-khander-tehsil",
                  name: "Hasanzai (Khander) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-judba-tehsil",
                  name: "Judba Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-dassu-tehsil",
                  name: "Dassu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-harban-basha-tehsil",
                  name: "Harban Basha Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-kandia-tehsil",
                  name: "Kandia Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-khyber-pakhtunkhwa-div-hazara-division-dist-torghar-and-upper-kohistan-district-teh-seo-tehsil",
                  name: "Seo Tehsil",
                  unionCouncils: [],
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
            },
            {
              id: "pk-prov-balochistan-div-quetta-division-dist-quetta-east-district",
              name: "Quetta East District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-east-district-teh-saddar-tehsil",
                  name: "Saddar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-east-district-teh-city-tehsil",
                  name: "City Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-east-district-teh-sariab-tehsil",
                  name: "Sariab Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-quetta-division-dist-quetta-west-district",
              name: "Quetta West District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-west-district-teh-kuchlak-tehsil",
                  name: "Kuchlak Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-west-district-teh-brewery-tehsil",
                  name: "Brewery Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-quetta-west-district-teh-panjpai-tehsil",
                  name: "Panjpai Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-quetta-division-dist-mastung-district",
              name: "Mastung District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-mastung-district-teh-dasht-tehsil",
                  name: "Dasht Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-mastung-district-teh-kardigap-tehsil",
                  name: "Kardigap Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-mastung-district-teh-khad-koocha-tehsil",
                  name: "Khad Koocha Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-quetta-division-dist-mastung-district-teh-mastung-tehsil",
                  name: "Mastung Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-pishin-division",
          name: "Pishin Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-pishin-division-dist-pishin-district",
              name: "Pishin District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-pishin-district-teh-barshore-tehsil",
                  name: "Barshore Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-pishin-district-teh-bostan-tehsil",
                  name: "Bostan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-pishin-district-teh-hurramzai-tehsil",
                  name: "Hurramzai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-pishin-district-teh-pishin-tehsil",
                  name: "Pishin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-pishin-district-teh-saranan-tehsil",
                  name: "Saranan Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-pishin-division-dist-chaman-district",
              name: "Chaman District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-chaman-district-teh-chaman-city-chaman-tehsil",
                  name: "Chaman (City Chaman) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-chaman-district-teh-chaman-saddar-tehsil",
                  name: "Chaman Saddar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-pishin-division-dist-killa-abdullah-district",
              name: "Killa Abdullah District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-killa-abdullah-district-teh-chaman-tehsil",
                  name: "Chaman Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-killa-abdullah-district-teh-dobandi-tehsil",
                  name: "Dobandi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-killa-abdullah-district-teh-gulistan-tehsil",
                  name: "Gulistan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-pishin-division-dist-killa-abdullah-district-teh-killa-abdullah-tehsil",
                  name: "Killa Abdullah Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-sibi-division",
          name: "Sibi Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-sibi-division-dist-sibi-district",
              name: "Sibi District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-sibi-district-teh-sibi-tehsil",
                  name: "Sibi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-sibi-district-teh-kutmandai-tehsil",
                  name: "Kutmandai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-sibi-district-teh-sangan-tehsil",
                  name: "Sangan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-sibi-district-teh-lehri-tehsil",
                  name: "Lehri Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-sibi-division-dist-dera-bugti-district",
              name: "Dera Bugti District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-dera-bugti-district-teh-dera-bugti-tehsil",
                  name: "Dera Bugti Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-dera-bugti-district-teh-sui-tehsil",
                  name: "Sui Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-dera-bugti-district-teh-phelawagh-tehsil",
                  name: "Phelawagh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-dera-bugti-district-teh-sangsila-tehsil",
                  name: "Sangsila Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-sibi-division-dist-harnai-district",
              name: "Harnai District",
              tehsils: [],
            },
            {
              id: "pk-prov-balochistan-div-sibi-division-dist-ziarat-district",
              name: "Ziarat District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-ziarat-district-teh-ziarat-tehsil",
                  name: "Ziarat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-ziarat-district-teh-sanjawi-sinjawi-tehsil",
                  name: "Sanjawi (Sinjawi) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-sibi-division-dist-kohlu-district",
              name: "Kohlu District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-kohlu-district-teh-kahan-tehsil",
                  name: "Kahan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-kohlu-district-teh-maiwand-tehsil",
                  name: "Maiwand Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-kohlu-district-teh-tamboo-tehsil",
                  name: "Tamboo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-kohlu-district-teh-grisani-tehsil",
                  name: "Grisani Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-sibi-division-dist-kohlu-district-teh-shaheed-jahangir-abad-tehsil",
                  name: "Shaheed Jahangir Abad Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-naseerabad-division",
          name: "Naseerabad Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-naseerabad-division-dist-naseerabad-district",
              name: "Naseerabad District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-naseerabad-district-teh-baba-kot-tehsil",
                  name: "Baba Kot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-naseerabad-district-teh-chattar-tehsil",
                  name: "Chattar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-naseerabad-district-teh-dera-murad-jamali-tehsil",
                  name: "Dera Murad Jamali Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-naseerabad-district-teh-tamboo-tehsil",
                  name: "Tamboo Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-naseerabad-division-dist-jaffarabad-district",
              name: "Jaffarabad District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-jaffarabad-district-teh-dera-allah-yar-tehsil",
                  name: "Dera Allah Yar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-jaffarabad-district-teh-gandakha-tehsil",
                  name: "Gandakha Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district",
              name: "Sohbatpur District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district-teh-faridabad-tehsil",
                  name: "Faridabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district-teh-hairdin-tehsil",
                  name: "Hairdin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district-teh-manjipur-tehsil",
                  name: "Manjipur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district-teh-saeed-muhammad-kanrani-tehsil",
                  name: "Saeed Muhammad Kanrani Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district-teh-panhwar-tehsil",
                  name: "Panhwar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-sohbatpur-district-teh-sohbatpur-tehsil",
                  name: "Sohbatpur Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-naseerabad-division-dist-jhal-magsi-district",
              name: "Jhal Magsi District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-jhal-magsi-district-teh-jhal-magsi-tehsil",
                  name: "Jhal Magsi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-jhal-magsi-district-teh-gandawa-tehsil",
                  name: "Gandawa Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-jhal-magsi-district-teh-mirpur-tehsil",
                  name: "Mirpur Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district",
              name: "Kachhi District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district-teh-balanari-tehsil",
                  name: "Balanari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district-teh-bhag-tehsil",
                  name: "Bhag Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district-teh-dhadar-tehsil",
                  name: "Dhadar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district-teh-khattan-tehsil",
                  name: "Khattan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district-teh-mach-tehsil",
                  name: "Mach Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-kachhi-district-teh-sanni-tehsil",
                  name: "Sanni Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-naseerabad-division-dist-usta-muhammad-district",
              name: "Usta Muhammad District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-usta-muhammad-district-teh-usta-muhammad-tehsil",
                  name: "Usta Muhammad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-naseerabad-division-dist-usta-muhammad-district-teh-gandakha-tehsil",
                  name: "Gandakha Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-loralai-division",
          name: "Loralai Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-loralai-division-dist-loralai-district",
              name: "Loralai District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-loralai-district-teh-bori-tehsil",
                  name: "Bori Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-loralai-district-teh-mekhtar-tehsil",
                  name: "Mekhtar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-loralai-division-dist-duki-district",
              name: "Duki District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-duki-district-teh-duki-tehsil",
                  name: "Duki Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-duki-district-teh-luni-tehsil",
                  name: "Luni Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-duki-district-teh-talao-tehsil",
                  name: "Talao Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-duki-district-teh-thal-chutyali-tehsil",
                  name: "Thal Chutyali Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-loralai-division-dist-musakhail-district",
              name: "Musakhail District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-musakhail-district-teh-darug-drug-tehsil",
                  name: "Darug (Drug) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-musakhail-district-teh-kingri-tehsil",
                  name: "Kingri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-musakhail-district-teh-musakhel-tehsil",
                  name: "Musakhel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-musakhail-district-teh-toisar-tehsil",
                  name: "Toisar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-loralai-division-dist-barkhan-district",
              name: "Barkhan District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-loralai-division-dist-barkhan-district-teh-barkhan-tehsil",
                  name: "Barkhan Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-zhob-division",
          name: "Zhob Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-zhob-division-dist-zhob-district",
              name: "Zhob District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-zhob-district-teh-zhob-tehsil",
                  name: "Zhob Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-zhob-district-teh-ashwat-tehsil",
                  name: "Ashwat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-zhob-district-teh-qamar-din-karez-kakar-khurasan-tehsil",
                  name: "Qamar Din Karez (Kakar Khurasan) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-zhob-district-teh-sambaza-tehsil",
                  name: "Sambaza Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-zhob-district-teh-kashatu-tehsil",
                  name: "Kashatu Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-zhob-division-dist-killa-saifullah-district",
              name: "Killa Saifullah District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-killa-saifullah-district-teh-killa-saifullah-tehsil",
                  name: "Killa Saifullah Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-killa-saifullah-district-teh-muslim-bagh-tehsil",
                  name: "Muslim Bagh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-killa-saifullah-district-teh-loi-band-tehsil",
                  name: "Loi Band Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-zhob-division-dist-sherani-district",
              name: "Sherani District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-sherani-district-teh-sherani-tehsil",
                  name: "Sherani Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-zhob-division-dist-musakhel-district",
              name: "Musakhel District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-musakhel-district-teh-musakhel-tehsil",
                  name: "Musakhel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-musakhel-district-teh-drug-tehsil",
                  name: "Drug Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-musakhel-district-teh-kingri-tehsil",
                  name: "Kingri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-zhob-division-dist-musakhel-district-teh-toisar-tehsil",
                  name: "Toisar Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-koh-e-sulaiman-division",
          name: "Koh-e-Sulaiman Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-dera-bugti-district",
              name: "Dera Bugti District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-dera-bugti-district-teh-qadirabad-phelawagh-tehsil",
                  name: "Qadirabad (Phelawagh) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-dera-bugti-district-teh-chief-ali-muhammad-tehsil",
                  name: "Chief Ali Muhammad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-dera-bugti-district-teh-nabi-dad-tehsil",
                  name: "Nabi Dad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-dera-bugti-district-teh-sar-loop-tehsil",
                  name: "Sar Loop Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-kohlu-district",
              name: "Kohlu District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-kohlu-district-teh-kahan-tehsil",
                  name: "Kahan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-kohlu-district-teh-kohlu-tehsil",
                  name: "Kohlu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-kohlu-district-teh-maiwand-tehsil",
                  name: "Maiwand Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-barkhan-district",
              name: "Barkhan District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-koh-e-sulaiman-division-dist-barkhan-district-teh-barkhan-tehsil",
                  name: "Barkhan Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-rakhshan-division",
          name: "Rakhshan Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-rakhshan-division-dist-kharan-district",
              name: "Kharan District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-kharan-district-teh-kharan-tehsil",
                  name: "Kharan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-kharan-district-teh-sar-kharan-tehsil",
                  name: "Sar-Kharan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-kharan-district-teh-tohumulk-tehsil",
                  name: "Tohumulk Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-kharan-district-teh-patkain-tehsil",
                  name: "Patkain Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-rakhshan-division-dist-nushki-district",
              name: "Nushki District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-nushki-district-teh-nushki-tehsil",
                  name: "Nushki Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-nushki-district-teh-dak-tehsil",
                  name: "Dak Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district",
              name: "Chagai District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-dalbandin-tehsil",
                  name: "Dalbandin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-chagai-tehsil",
                  name: "Chagai Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-nok-kundi-tehsil",
                  name: "Nok Kundi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-taftan-tehsil",
                  name: "Taftan Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-amuri-tehsil",
                  name: "Amuri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-chilgazi-tehsil",
                  name: "Chilgazi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-chagai-district-teh-yakmach-tehsil",
                  name: "Yakmach Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-rakhshan-division-dist-washuk-district",
              name: "Washuk District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-washuk-district-teh-besima-tehsil",
                  name: "Besima Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-washuk-district-teh-mashkel-tehsil",
                  name: "Mashkel Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-washuk-district-teh-nag-tehsil",
                  name: "Nag Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-rakhshan-division-dist-washuk-district-teh-shahgori-tehsil",
                  name: "Shahgori Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-lasbela-division",
          name: "Lasbela Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-lasbela-division-dist-lasbela-district",
              name: "Lasbela District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-lasbela-district-teh-bela-tehsil",
                  name: "Bela Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-lasbela-district-teh-kanraj-tehsil",
                  name: "Kanraj Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-lasbela-district-teh-lakhra-tehsil",
                  name: "Lakhra Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-lasbela-district-teh-liari-tehsil",
                  name: "Liari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-lasbela-district-teh-uthal-tehsil",
                  name: "Uthal Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-lasbela-division-dist-hub-district",
              name: "Hub District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-hub-district-teh-dureji-tehsil",
                  name: "Dureji Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-hub-district-teh-gaddani-gadani-tehsil",
                  name: "Gaddani (Gadani) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-hub-district-teh-hub-tehsil",
                  name: "Hub Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-hub-district-teh-sakran-tehsil",
                  name: "Sakran Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-hub-district-teh-sonmiani-winder-tehsil",
                  name: "Sonmiani (Winder) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-lasbela-division-dist-awaran-district",
              name: "Awaran District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-awaran-district-teh-awaran-tehsil",
                  name: "Awaran Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-awaran-district-teh-gishkore-gishkaur-tehsil",
                  name: "Gishkore (Gishkaur) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-awaran-district-teh-jhal-jhao-tehsil",
                  name: "Jhal Jhao Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-awaran-district-teh-korak-jhao-tehsil",
                  name: "Korak Jhao Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-lasbela-division-dist-awaran-district-teh-mashkai-tehsil",
                  name: "Mashkai Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-balochistan-div-kalat-division",
          name: "Kalat Division",
          districts: [
            {
              id: "pk-prov-balochistan-div-kalat-division-dist-khuzdar-district",
              name: "Khuzdar District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-khuzdar-district-teh-khuzdar-tehsil",
                  name: "Khuzdar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-khuzdar-district-teh-moola-tehsil",
                  name: "Moola Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-khuzdar-district-teh-nal-tehsil",
                  name: "Nal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-khuzdar-district-teh-wadh-tehsil",
                  name: "Wadh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-khuzdar-district-teh-zehri-tehsil",
                  name: "Zehri Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-kalat-division-dist-kalat-district",
              name: "Kalat District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-kalat-district-teh-kalat-tehsil",
                  name: "Kalat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-kalat-district-teh-mangochar-tehsil",
                  name: "Mangochar Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-kalat-district-teh-gazg-tehsil",
                  name: "Gazg Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-kalat-district-teh-johan-tehsil",
                  name: "Johan Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-kalat-division-dist-mastung-district",
              name: "Mastung District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-mastung-district-teh-dasht-tehsil",
                  name: "Dasht Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-mastung-district-teh-kardigap-tehsil",
                  name: "Kardigap Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-mastung-district-teh-mastung-tehsil",
                  name: "Mastung Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-kalat-division-dist-awaran-district",
              name: "Awaran District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-awaran-district-teh-awaran-tehsil",
                  name: "Awaran Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-awaran-district-teh-gishkore-gishkaur-tehsil",
                  name: "Gishkore (Gishkaur) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-awaran-district-teh-jhal-jhao-tehsil",
                  name: "Jhal Jhao Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-awaran-district-teh-korak-jahoo-korak-jhao-tehsil",
                  name: "Korak Jahoo (Korak Jhao) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-awaran-district-teh-mashkai-mashkay-tehsil",
                  name: "Mashkai (Mashkay) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-kalat-division-dist-surab-district",
              name: "Surab District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-surab-district-teh-balanari-tehsil",
                  name: "Balanari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-surab-district-teh-dasht-e-goran-tehsil",
                  name: "Dasht-e-Goran Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-surab-district-teh-gidder-tehsil",
                  name: "Gidder Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-surab-district-teh-shaheed-meharabad-zehri-tehsil",
                  name: "Shaheed Meharabad Zehri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-surab-district-teh-surab-tehsil",
                  name: "Surab Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-kalat-division-dist-shaheed-sikandarabad-district",
              name: "Shaheed Sikandarabad District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-kalat-division-dist-shaheed-sikandarabad-district-teh-surab-tehsil",
                  name: "Surab Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-jiwani-tehsil",
                  name: "Jiwani Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-ormara-tehsil",
                  name: "Ormara Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-pasni-tehsil",
                  name: "Pasni Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-gwadar-district-teh-suntsar-tehsil",
                  name: "Suntsar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-makran-division-dist-kech-turbat-district",
              name: "Kech (Turbat) District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-kech-turbat-district-teh-turbat-tehsil",
                  name: "Turbat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-kech-turbat-district-teh-hoshab-tehsil",
                  name: "Hoshab Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-kech-turbat-district-teh-tump-tehsil",
                  name: "Tump Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-kech-turbat-district-teh-buleda-tehsil",
                  name: "Buleda Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-kech-turbat-district-teh-dasht-tehsil",
                  name: "Dasht Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-balochistan-div-makran-division-dist-panjgur-district",
              name: "Panjgur District",
              tehsils: [
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-panjgur-district-teh-gowargo-tehsil",
                  name: "Gowargo Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-panjgur-district-teh-gichk-tehsil",
                  name: "Gichk Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-panjgur-district-teh-panjgur-tehsil",
                  name: "Panjgur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-balochistan-div-makran-division-dist-panjgur-district-teh-paroom-tehsil",
                  name: "Paroom Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-muzaffarabad-district-teh-pattika-naseerabad-tehsil",
                  name: "Pattika (Naseerabad) Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-jhelum-valley-district",
              name: "Jhelum Valley District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-jhelum-valley-district-teh-hattian-bala-tehsil",
                  name: "Hattian Bala Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-jhelum-valley-district-teh-leepa-tehsil",
                  name: "Leepa Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-jhelum-valley-district-teh-chikar-tehsil",
                  name: "Chikar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-neelum-district",
              name: "Neelum District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-neelum-district-teh-athmuqam-tehsil",
                  name: "Athmuqam Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-muzaffarabad-division-dist-neelum-district-teh-sharda-tehsil",
                  name: "Sharda Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division",
          name: "Poonch Division",
          districts: [
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-poonch-district",
              name: "Poonch District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-poonch-district-teh-abbaspur-tehsil",
                  name: "Abbaspur Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-poonch-district-teh-hajira-tehsil",
                  name: "Hajira Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-poonch-district-teh-rawalakot-tehsil",
                  name: "Rawalakot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-poonch-district-teh-thorar-tehsil",
                  name: "Thorar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-bagh-district",
              name: "Bagh District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-bagh-district-teh-bagh-tehsil",
                  name: "Bagh Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-bagh-district-teh-dhirkot-tehsil",
                  name: "Dhirkot Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-bagh-district-teh-hari-ghe-tehsil",
                  name: "Hari Ghe Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-sudhnoti-pallandri-district",
              name: "Sudhnoti (Pallandri) District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-sudhnoti-pallandri-district-teh-pallandri-tehsil",
                  name: "Pallandri Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-sudhnoti-pallandri-district-teh-balouch-tehsil",
                  name: "Balouch Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-sudhnoti-pallandri-district-teh-mang-tehsil",
                  name: "Mang Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-sudhnoti-pallandri-district-teh-trarkhel-tehsil",
                  name: "Trarkhel Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-haveli-district",
              name: "Haveli District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-haveli-district-teh-haveli-tehsil",
                  name: "Haveli Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-haveli-district-teh-khurshidabad-tehsil",
                  name: "Khurshidabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-poonch-division-dist-haveli-district-teh-mumtazabad-tehsil",
                  name: "Mumtazabad Tehsil",
                  unionCouncils: [],
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
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district-teh-chakswari-tehsil",
                  name: "Chakswari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-mirpur-district-teh-dadyal-tehsil",
                  name: "Dadyal Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-kotli-district",
              name: "Kotli District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-kotli-district-teh-kotli-tehsil",
                  name: "Kotli Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-kotli-district-teh-charhoi-tehsil",
                  name: "Charhoi Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-kotli-district-teh-sehnsa-tehsil",
                  name: "Sehnsa Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-kotli-district-teh-fatehpur-thakiala-nakyal-tehsil",
                  name: "Fatehpur Thakiala (Nakyal) Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-kotli-district-teh-khuiratta-tehsil",
                  name: "Khuiratta Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-bhimber-district",
              name: "Bhimber District",
              tehsils: [
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-bhimber-district-teh-barnala-tehsil",
                  name: "Barnala Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-bhimber-district-teh-bhimber-tehsil",
                  name: "Bhimber Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-azad-jammu-and-kashmir-div-mirpur-division-dist-bhimber-district-teh-samahni-tehsil",
                  name: "Samahni Tehsil",
                  unionCouncils: [],
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
          id: "pk-prov-gilgit-baltistan-div-baltistan-division",
          name: "Baltistan Division",
          districts: [
            {
              id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-skardu-district",
              name: "Skardu District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-skardu-district-teh-skardu-tehsil",
                  name: "Skardu Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-skardu-district-teh-gamba-tehsil",
                  name: "Gamba Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-skardu-district-teh-gultari-tehsil",
                  name: "Gultari Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-ghanche-district",
              name: "Ghanche District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-ghanche-district-teh-daghoni-tehsil",
                  name: "Daghoni Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-ghanche-district-teh-masherbrum-tehsil",
                  name: "Masherbrum Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-ghanche-district-teh-chorbat-tehsil",
                  name: "Chorbat Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-ghanche-district-teh-ghowari-tehsil",
                  name: "Ghowari Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-ghanche-district-teh-keris-tehsil",
                  name: "Keris Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-shigar-district",
              name: "Shigar District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-shigar-district-teh-shigar-tehsil",
                  name: "Shigar Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-kharmang-district",
              name: "Kharmang District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-baltistan-division-dist-kharmang-district-teh-kharmang-tehsil",
                  name: "Kharmang Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
        {
          id: "pk-prov-gilgit-baltistan-div-diamer-division",
          name: "Diamer Division",
          districts: [
            {
              id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-astore-district",
              name: "Astore District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-astore-district-teh-astore-tehsil",
                  name: "Astore Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-astore-district-teh-shounter-tehsil",
                  name: "Shounter Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-diamer-district",
              name: "Diamer District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-diamer-district-teh-chilas-tehsil",
                  name: "Chilas Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-diamer-district-teh-gor-tehsil",
                  name: "Gor Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-darel-district",
              name: "Darel District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-darel-district-teh-darel-tehsil",
                  name: "Darel Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-tangir-district",
              name: "Tangir District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-diamer-division-dist-tangir-district-teh-tangir-tehsil",
                  name: "Tangir Tehsil",
                  unionCouncils: [],
                }
              ],
            }
          ],
        },
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
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district-teh-danyor-tehsil",
                  name: "Danyor Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-gilgit-district-teh-juglot-tehsil",
                  name: "Juglot Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-hunza-district",
              name: "Hunza District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-hunza-district-teh-aliabad-tehsil",
                  name: "Aliabad Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-hunza-district-teh-gojal-tehsil",
                  name: "Gojal Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-hunza-district-teh-shinaki-tehsil",
                  name: "Shinaki Tehsil",
                  unionCouncils: [],
                }
              ],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-nagar-district",
              name: "Nagar District",
              tehsils: [],
            },
            {
              id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-ghizer-district",
              name: "Ghizer District",
              tehsils: [
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-ghizer-district-teh-ishkoman-tehsil",
                  name: "Ishkoman Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-ghizer-district-teh-punial-tehsil",
                  name: "Punial Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-ghizer-district-teh-yasin-tehsil",
                  name: "Yasin Tehsil",
                  unionCouncils: [],
                },
                {
                  id: "pk-prov-gilgit-baltistan-div-gilgit-division-dist-ghizer-district-teh-gupis-tehsil",
                  name: "Gupis Tehsil",
                  unionCouncils: [],
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
