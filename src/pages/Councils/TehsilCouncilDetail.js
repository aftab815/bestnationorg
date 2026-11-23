import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CouncilPage,
  CouncilHero,
  CouncilEventsGrid,
  CouncilNotFound,
} from './CouncilShared';
import { getTehsilCouncilById, getCouncilEvents } from '../../config/councils';

const TehsilCouncilDetail = () => {
  const { tehsilId } = useParams();
  const council = getTehsilCouncilById(tehsilId);

  if (!council) {
    return (
      <CouncilPage>
        <CouncilHero
          kicker="National Councils"
          title="Tehsil Council Not Found"
          subtitle="The tehsil council you requested could not be found."
          breadcrumbItems={[
            { label: 'Home', to: '/' },
            { label: 'Councils', to: '/councils' },
            { label: 'Tehsil Councils', to: '/councils/national/tehsil' },
            { label: 'Not found' },
          ]}
        />
        <section className="council-section">
          <div className="container">
            <CouncilNotFound
              title="We could not find this tehsil council"
              backTo="/councils/national/tehsil"
              backLabel="View All Tehsil Councils"
            />
          </div>
        </section>
      </CouncilPage>
    );
  }

  const events = getCouncilEvents('tehsil', council.id);

  return (
    <CouncilPage>
      <CouncilHero
        kicker={council.regionName || council.provinceName}
        title={council.name}
        subtitle={`Past events and activities of the ${council.name} council.`}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'Tehsil Councils', to: '/councils/national/tehsil' },
          { label: council.name },
        ]}
        meta={
          <>
            <span>
              <strong>{council.memberCount}</strong> members
            </span>
            <span>{council.districtName}</span>
            <span>
              {council.divisionName}
              {council.regionName ? ` (${council.regionName})` : ''}
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

export default TehsilCouncilDetail;
