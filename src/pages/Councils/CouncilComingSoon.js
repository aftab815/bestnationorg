import React from 'react';
import { CouncilPage, CouncilHero, ComingSoonBlock } from './CouncilShared';

const CouncilComingSoon = ({ title, kicker, subtitle }) => (
  <CouncilPage>
    <CouncilHero
      kicker={kicker}
      title={title}
      subtitle={subtitle}
      breadcrumbItems={[
        { label: 'Home', to: '/' },
        { label: 'Councils', to: '/councils' },
        { label: title },
      ]}
    />
    <section className="council-section">
      <div className="container">
        <ComingSoonBlock
          title={`${title} are being prepared`}
          message="This council section is coming soon. Past events and member information will be published here later."
        />
      </div>
    </section>
  </CouncilPage>
);

export default CouncilComingSoon;
