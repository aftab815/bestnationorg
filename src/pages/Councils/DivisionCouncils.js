import React from 'react';
import { CouncilPage, CouncilHero, CouncilListCard } from './CouncilShared';
import { getDivisionCouncils, MEMBERS_PER_COUNCIL } from '../../config/councils';
import { sortDivisionsByRegion } from '../../data/regions';

const DivisionCouncils = () => {
  const councils = sortDivisionsByRegion(getDivisionCouncils());

  return (
    <CouncilPage>
      <CouncilHero
        kicker="National Councils"
        title="Division Councils"
        subtitle="Every division has its own council. Open a council to see its past events."
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'Division Councils' },
        ]}
        meta={
          <>
            <span>
              <strong>{councils.length}</strong> division councils
            </span>
            <span>
              <strong>{MEMBERS_PER_COUNCIL}</strong> members each
            </span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <div className="council-grid">
            {councils.map((council) => (
              <CouncilListCard
                key={council.id}
                to={`/councils/national/division/${council.id}`}
                title={council.name}
                subtitle={council.regionName || council.provinceName}
                badge={`${council.memberCount} members`}
              />
            ))}
          </div>
        </div>
      </section>
    </CouncilPage>
  );
};

export default DivisionCouncils;
