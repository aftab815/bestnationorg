import React, { useMemo, useState } from 'react';
import ActionButton from '../../components/common/ActionButton';
import { MEMBERS_PER_COUNCIL } from '../../config/councils';
import {
  internationalCouncils,
  getAllInternationalCountries,
} from '../../data/internationalCouncils';
import { CouncilPage, CouncilHero, CouncilListCard } from './CouncilShared';
import './InternationalCouncils.css';

const CONTINENTS = internationalCouncils.continents;
const ALL_COUNTRIES = getAllInternationalCountries();
const INITIAL_VISIBLE = 24;

const normalizeSearch = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const InternationalWorldCouncils = () => {
  const [continentId, setContinentId] = useState('all');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredCountries = useMemo(() => {
    const search = normalizeSearch(query.trim());
    return ALL_COUNTRIES.filter((country) => {
      if (continentId !== 'all' && country.continentId !== continentId) return false;
      if (!search) return true;
      return (
        normalizeSearch(country.name).includes(search) ||
        normalizeSearch(country.continentName).includes(search)
      );
    });
  }, [continentId, query]);

  const visibleCountries = filteredCountries.slice(0, visibleCount);
  const groups = CONTINENTS.map((continent) => ({
    ...continent,
    total: filteredCountries.filter((country) => country.continentId === continent.id).length,
    countries: visibleCountries.filter((country) => country.continentId === continent.id),
  })).filter((group) => group.countries.length > 0);

  const selectContinent = (nextContinentId) => {
    setContinentId(nextContinentId);
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
        title="World Councils"
        subtitle="Explore BNWO's country-level World Councils across every continent."
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'World Councils' },
        ]}
        meta={
          <>
            <span>
              <strong>{CONTINENTS.length}</strong> continents
            </span>
            <span>
              <strong>{ALL_COUNTRIES.length}</strong> world councils
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
                placeholder="Search country or continent"
              />
            </label>

            <p className="council-filter-result" role="status" aria-live="polite">
              Showing <strong>{visibleCountries.length}</strong> of {filteredCountries.length} world councils
            </p>
          </div>

          {groups.length === 0 ? (
            <div className="council-empty">
              <div className="council-empty__icon" aria-hidden="true">
                <i className="fas fa-search"></i>
              </div>
              <h2>No world councils match your search</h2>
              <p>Try another country name or continent.</p>
            </div>
          ) : (
            groups.map((group) => (
              <div key={group.id} className="intl-council-group">
                <div className="intl-council-group-heading">
                  <h2>{group.name}</h2>
                  <span>{group.total} countries</span>
                </div>
                <div className="council-grid">
                  {group.countries.map((country) => (
                    <CouncilListCard
                      key={country.id}
                      to={`/councils/international/world/${country.id}`}
                      title={`${country.name} World Council`}
                      subtitle={country.continentName}
                      badge={`${MEMBERS_PER_COUNCIL} members`}
                    />
                  ))}
                </div>
              </div>
            ))
          )}

          {visibleCount < filteredCountries.length ? (
            <div className="intl-council-more">
              <ActionButton
                variant="secondary"
                size="md"
                onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}
              >
                Show more world councils
              </ActionButton>
            </div>
          ) : null}
        </div>
      </section>
    </CouncilPage>
  );
};

export default InternationalWorldCouncils;
