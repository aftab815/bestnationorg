import React from 'react';
import { MEMBERS_PER_COUNCIL } from '../../config/councils';
import { CouncilPage, CouncilHero, ComingSoonBlock } from './CouncilShared';

const InternationalCityCouncils = () => (
  <CouncilPage>
    <CouncilHero
      kicker="International Councils"
      title="City Councils"
      subtitle="City-level councils connecting BNWO communities in major cities."
      breadcrumbItems={[
        { label: 'Home', to: '/' },
        { label: 'Councils', to: '/councils' },
        { label: 'City Councils' },
      ]}
      meta={
        <span>
          <strong>{MEMBERS_PER_COUNCIL}</strong> members per council
        </span>
      }
    />

    <section className="council-section">
      <div className="container">
        <ComingSoonBlock
          title="City list coming soon"
          message="City-level council data is not available yet. Once cities are added, each will have its own council page here."
        />
      </div>
    </section>
  </CouncilPage>
);

export default InternationalCityCouncils;
