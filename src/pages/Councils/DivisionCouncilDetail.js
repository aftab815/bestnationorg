import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CouncilPage,
  CouncilHero,
  CouncilEventsGrid,
  CouncilNotFound,
} from './CouncilShared';
import { getDivisionCouncilById, getCouncilEvents } from '../../config/councils';

const DivisionCouncilDetail = () => {
  const { divisionId } = useParams();
  const council = getDivisionCouncilById(divisionId);

  if (!council) {
    return (
      <CouncilPage>
        <CouncilHero
          kicker="National Councils"
          title="Division Council Not Found"
          subtitle="The division council you requested could not be found."
          breadcrumbItems={[
            { label: 'Home', to: '/' },
            { label: 'Councils', to: '/councils' },
            { label: 'Division Councils', to: '/councils/national/division' },
            { label: 'Not found' },
          ]}
        />
        <section className="council-section">
          <div className="container">
            <CouncilNotFound
              title="We could not find this division council"
              backTo="/councils/national/division"
              backLabel="View All Division Councils"
            />
          </div>
        </section>
      </CouncilPage>
    );
  }

  const events = getCouncilEvents('division', council.id);

  return (
    <CouncilPage>
      <CouncilHero
        kicker={council.regionName || council.provinceName}
        title={council.name}
        subtitle={`Past events and activities of the ${council.name} council.`}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'Division Councils', to: '/councils/national/division' },
          { label: council.name },
        ]}
        meta={
          <>
            <span>
              <strong>{council.memberCount}</strong> members
            </span>
            <span>
              {[council.provinceName, council.regionName]
                .filter((value, index, values) => value && values.indexOf(value) === index)
                .join(' \u00B7 ')}
            </span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <div className="council-section-heading">
            <span className="council-section-heading__kicker">Council activity</span>
            <h2>Past Events</h2>
            <p>Photos and highlights from this council.</p>
          </div>
          <CouncilEventsGrid events={events} />
        </div>
      </section>
    </CouncilPage>
  );
};

export default DivisionCouncilDetail;
