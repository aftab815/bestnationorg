import React from 'react';
import { useParams } from 'react-router-dom';
import { MEMBERS_PER_COUNCIL } from '../../config/councils';
import { getInternationalStateCouncilById } from '../../data/internationalCouncils';
import {
  CouncilPage,
  CouncilHero,
  ComingSoonBlock,
  CouncilNotFound,
} from './CouncilShared';

const InternationalStateCouncilDetail = () => {
  const { countrySlug, stateSlug } = useParams();
  const council = getInternationalStateCouncilById(countrySlug, stateSlug);

  if (!council) {
    return (
      <CouncilPage>
        <CouncilHero
          kicker="International Councils"
          title="State Council Not Found"
          subtitle="The state council you requested could not be found."
          breadcrumbItems={[
            { label: 'Home', to: '/' },
            { label: 'Councils', to: '/councils' },
            { label: 'State Councils', to: '/councils/international/state' },
            { label: 'Not found' },
          ]}
        />
        <section className="council-section">
          <div className="container">
            <CouncilNotFound
              title="We could not find this state council"
              backTo="/councils/international/state"
              backLabel="View All State Councils"
            />
          </div>
        </section>
      </CouncilPage>
    );
  }

  const { country } = council;

  return (
    <CouncilPage>
      <CouncilHero
        kicker={country.continentName}
        title={`${council.name} State Council`}
        subtitle={`${country.name} · ${country.divisionType}`}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'State Councils', to: '/councils/international/state' },
          { label: `${council.name} State Council` },
        ]}
        meta={
          <>
            <span>
              <strong>{MEMBERS_PER_COUNCIL}</strong> members
            </span>
            <span>{country.name}</span>
            <span>{country.continentName}</span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <ComingSoonBlock
            title="Activity & stats — coming soon"
            message={`Events, member activity and statistics for ${council.name} State Council will be published here.`}
          />
        </div>
      </section>
    </CouncilPage>
  );
};

export default InternationalStateCouncilDetail;
