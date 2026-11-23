import React from 'react';
import { useParams } from 'react-router-dom';
import { MEMBERS_PER_COUNCIL } from '../../config/councils';
import { getInternationalCountryById } from '../../data/internationalCouncils';
import {
  CouncilPage,
  CouncilHero,
  ComingSoonBlock,
  CouncilNotFound,
} from './CouncilShared';

const InternationalWorldCouncilDetail = () => {
  const { countrySlug } = useParams();
  const country = getInternationalCountryById(countrySlug);

  if (!country) {
    return (
      <CouncilPage>
        <CouncilHero
          kicker="International Councils"
          title="World Council Not Found"
          subtitle="The world council you requested could not be found."
          breadcrumbItems={[
            { label: 'Home', to: '/' },
            { label: 'Councils', to: '/councils' },
            { label: 'World Councils', to: '/councils/international/world' },
            { label: 'Not found' },
          ]}
        />
        <section className="council-section">
          <div className="container">
            <CouncilNotFound
              title="We could not find this world council"
              backTo="/councils/international/world"
              backLabel="View All World Councils"
            />
          </div>
        </section>
      </CouncilPage>
    );
  }

  return (
    <CouncilPage>
      <CouncilHero
        kicker={country.continentName}
        title={`${country.name} World Council`}
        subtitle={`${country.continentName} · ${country.divisionType}`}
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Councils', to: '/councils' },
          { label: 'World Councils', to: '/councils/international/world' },
          { label: `${country.name} World Council` },
        ]}
        meta={
          <>
            <span>
              <strong>{MEMBERS_PER_COUNCIL}</strong> members
            </span>
            <span>{country.continentName}</span>
            <span>{country.divisionType}</span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <ComingSoonBlock
            title="Activity & stats — coming soon"
            message={`Events, member activity and statistics for ${country.name} World Council will be published here.`}
          />
        </div>
      </section>
    </CouncilPage>
  );
};

export default InternationalWorldCouncilDetail;
