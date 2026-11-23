import React, { useMemo, useState } from 'react';
import ActionButton from '../../components/common/ActionButton';
import { MEMBERS_PER_COUNCIL } from '../../config/councils';
import {
  internationalCouncils,
  getAllInternationalCountries,
  getAllInternationalStateCouncils,
} from '../../data/internationalCouncils';
import { CouncilPage, CouncilHero, CouncilListCard } from './CouncilShared';
import './InternationalCouncils.css';

const CONTINENTS = internationalCouncils.continents;
const ALL_COUNTRIES = getAllInternationalCountries();
const ALL_STATES = getAllInternationalStateCouncils();
const INITIAL_VISIBLE = 24;

const normalizeSearch = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const InternationalStateCouncils = () => {
  const [continentId, setContinentId] = useState('all');
  const [countryId, setCountryId] = useState('all');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const countryOptions = useMemo(
    () =>
      continentId === 'all'
        ? ALL_COUNTRIES
        : ALL_COUNTRIES.filter((country) => country.continentId === continentId),
    [continentId]
  );

  const filteredStates = useMemo(() => {
    const search = normalizeSearch(query.trim());
    return ALL_STATES.filter((state) => {
      if (continentId !== 'all' && state.continentId !== continentId) return false;
      if (countryId !== 'all' && state.countryId !== countryId) return false;
      if (!search) return true;
      return (
        normalizeSearch(state.name).includes(search) ||
        normalizeSearch(state.countryName).includes(search)
      );
    });
  }, [continentId, countryId, query]);

  const visibleStates = filteredStates.slice(0, visibleCount);

  const selectContinent = (nextContinentId) => {
    setContinentId(nextContinentId);
    setCountryId('all');
    setVisibleCount(INITIAL_VISIBLE);
  };

  const selectCountry = (nextCountryId) => {
    setCountryId(nextCountryId);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const updateQuery = (nextQuery) => {
    setQuery(nextQuery);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <CouncilPage>
      <CouncilHero
        kicker="International Councils"
        title="State Councils"
        subtitle="Browse state, province and regional councils by continent and country."
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'State Councils' },
        ]}
        meta={
          <>
            <span>
              <strong>{ALL_COUNTRIES.length}</strong> countries
            </span>
            <span>
              <strong>{ALL_STATES.length}</strong> state councils
            </span>
            <span>
              <strong>{MEMBERS_PER_COUNCIL}</strong> members each
            </span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <div className="intl-council-tabs" role="tablist" aria-label="Continents">
            <button
              type="button"
              role="tab"
              aria-selected={continentId === 'all'}
              className={`intl-council-tab ${continentId === 'all' ? 'active' : ''}`}
              onClick={() => selectContinent('all')}
            >
              All continents
            </button>
            {CONTINENTS.map((continent) => (
              <button
                key={continent.id}
                type="button"
                role="tab"
                aria-selected={continentId === continent.id}
                className={`intl-council-tab ${continentId === continent.id ? 'active' : ''}`}
                onClick={() => selectContinent(continent.id)}
              >
                {continent.name}
              </button>
            ))}
          </div>

          <div className="council-filters intl-council-filters">
            <label className="council-filter intl-council-search">
              <span>Search</span>
              <input
                type="search"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search country or state"
              />
            </label>

            <label className="council-filter">
              <span>Country</span>
              <select value={countryId} onChange={(event) => selectCountry(event.target.value)}>
                <option value="all">All countries</option>
                {countryOptions.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </label>

            <p className="council-filter-result" role="status" aria-live="polite">
              Showing <strong>{visibleStates.length}</strong> of {filteredStates.length} state councils
            </p>
          </div>

          {filteredStates.length === 0 ? (
            <div className="council-empty">
              <div className="council-empty__icon" aria-hidden="true">
                <i className="fas fa-search"></i>
              </div>
              <h2>No state councils match your search</h2>
              <p>Try another country, state name or continent.</p>
            </div>
          ) : (
            <div className="council-grid">
              {visibleStates.map((state) => (
                <CouncilListCard
                  key={`${state.countryId}-${state.id}`}
                  to={`/councils/international/state/${state.countryId}/${state.id}`}
                  title={`${state.name} State Council`}
                  subtitle={state.countryName}
                  badge={`${MEMBERS_PER_COUNCIL} members`}
                />
              ))}
            </div>
          )}

          {visibleCount < filteredStates.length ? (
            <div className="intl-council-more">
              <ActionButton
                variant="secondary"
                size="md"
                onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}
              >
                Show more state councils
              </ActionButton>
            </div>
          ) : null}
        </div>
      </section>
    </CouncilPage>
  );
};

export default InternationalStateCouncils;
