import React, { useMemo, useState } from 'react';
import { CouncilPage, CouncilHero, CouncilListCard } from './CouncilShared';
import { getTehsilCouncils, MEMBERS_PER_COUNCIL } from '../../config/councils';
import { sortDivisionsByRegion } from '../../data/regions';

const TehsilCouncils = () => {
  const councils = getTehsilCouncils();
  const [divisionId, setDivisionId] = useState('all');
  const [districtId, setDistrictId] = useState('all');

  const divisionOptions = useMemo(() => {
    const seen = new Map();
    councils.forEach((council) => {
      if (!seen.has(council.divisionId)) {
        seen.set(council.divisionId, {
          id: council.divisionId,
          name: council.regionName
            ? `${council.divisionName} (${council.regionName})`
            : council.divisionName,
        });
      }
    });
    return sortDivisionsByRegion(Array.from(seen.values()));
  }, [councils]);

  const districtOptions = useMemo(() => {
    const seen = new Map();
    councils
      .filter((council) => divisionId === 'all' || council.divisionId === divisionId)
      .forEach((council) => {
        if (!seen.has(council.districtId)) {
          seen.set(council.districtId, {
            id: council.districtId,
            name: council.districtName,
          });
        }
      });
    return Array.from(seen.values());
  }, [councils, divisionId]);

  const filtered = councils.filter(
    (council) =>
      (divisionId === 'all' || council.divisionId === divisionId) &&
      (districtId === 'all' || council.districtId === districtId)
  );

  const handleDivisionChange = (event) => {
    const nextDivisionId = event.target.value;
    setDivisionId(nextDivisionId);

    if (districtId !== 'all') {
      const districtStillMatches = councils.some(
        (council) =>
          council.divisionId === nextDivisionId && council.districtId === districtId
      );
      if (!districtStillMatches) {
        setDistrictId('all');
      }
    }
  };

  return (
    <CouncilPage>
      <CouncilHero
        kicker="National Councils"
        title="Tehsil Councils"
        subtitle="Every tehsil has its own council. Filter by division or district, then open a council to see its past events."
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'Tehsil Councils' },
        ]}
        meta={
          <>
            <span>
              <strong>{councils.length}</strong> tehsil councils
            </span>
            <span>
              <strong>{MEMBERS_PER_COUNCIL}</strong> members each
            </span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <div className="council-filters">
            <label className="council-filter">
              <span>Division</span>
              <select value={divisionId} onChange={handleDivisionChange}>
                <option value="all">All divisions</option>
                {divisionOptions.map((division) => (
                  <option key={division.id} value={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="council-filter">
              <span>District</span>
              <select value={districtId} onChange={(event) => setDistrictId(event.target.value)}>
                <option value="all">All districts</option>
                {districtOptions.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </label>

            <p className="council-filter-result" role="status" aria-live="polite">
              Showing <strong>{filtered.length}</strong> of {councils.length} tehsil councils
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="council-empty">
              <div className="council-empty__icon" aria-hidden="true">
                <i className="fas fa-filter"></i>
              </div>
              <h2>No councils match these filters</h2>
              <p>Try choosing a different division or district.</p>
            </div>
          ) : (
            <div className="council-grid">
              {filtered.map((council) => (
                <CouncilListCard
                  key={council.id}
                  to={`/councils/national/tehsil/${council.id}`}
                  title={council.name}
                  subtitle={`${council.districtName} \u00B7 ${council.divisionName}${council.regionName ? ` (${council.regionName})` : ''}`}
                  badge={`${council.memberCount} members`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </CouncilPage>
  );
};

export default TehsilCouncils;
