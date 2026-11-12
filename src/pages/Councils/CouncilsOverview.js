import React from 'react';
import { CouncilPage, CouncilHero, CouncilListCard } from './CouncilShared';
import {
  getDivisionCouncils,
  getTehsilCouncils,
  MEMBERS_PER_COUNCIL,
} from '../../config/councils';

const CouncilsOverview = () => {
  const divisionCount = getDivisionCouncils().length;
  const tehsilCount = getTehsilCouncils().length;

  return (
    <CouncilPage>
      <CouncilHero
        kicker="BNWO Governance Network"
        title="BNWO Councils"
        subtitle="Explore the council structure that connects communities from the union level to the international level."
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Councils' }]}
        meta={
          <>
            <span>
              <strong>{divisionCount}</strong> division councils
            </span>
            <span>
              <strong>{tehsilCount}</strong> tehsil councils
            </span>
            <span>
              <strong>{MEMBERS_PER_COUNCIL}</strong> members per council
            </span>
          </>
        }
      />

      <section className="council-section">
        <div className="container">
          <div className="council-overview-block">
            <div className="council-section-heading">
              <span className="council-section-heading__kicker">Global network</span>
              <h2>International Councils</h2>
              <p>Councils connecting BNWO communities across cities, states and the world.</p>
            </div>
            <div className="council-grid council-grid--3">
              <CouncilListCard
                to="/councils/international/city"
                title="City Councils"
                subtitle="Council activity in major cities"
                badge="Coming soon"
              />
              <CouncilListCard
                to="/councils/international/state"
                title="State Councils"
                subtitle="Council activity at state level"
                badge="Coming soon"
              />
              <CouncilListCard
                to="/councils/international/world"
                title="World Councils"
                subtitle="Council activity across the world"
                badge="Coming soon"
              />
            </div>
          </div>

          <div className="council-overview-block">
            <div className="council-section-heading">
              <span className="council-section-heading__kicker">Pakistan network</span>
              <h2>National Councils</h2>
              <p>Every division and every tehsil has its own council.</p>
            </div>
            <div className="council-grid council-grid--3">
              <CouncilListCard
                to="/councils/national/division"
                title="Division Councils"
                subtitle={`${divisionCount} councils across the divisions`}
                badge={`${MEMBERS_PER_COUNCIL} members each`}
              />
              <CouncilListCard
                to="/councils/national/tehsil"
                title="Tehsil Councils"
                subtitle={`${tehsilCount} councils across the tehsils`}
                badge={`${MEMBERS_PER_COUNCIL} members each`}
              />
              <CouncilListCard
                to="/councils/national/union"
                title="Union Councils"
                subtitle="Women and men councils at union level"
                badge="Coming soon"
              />
            </div>

            <div className="council-grid council-grid--2 council-grid--tight">
              <CouncilListCard
                to="/councils/national/union/women"
                title="Women Councils"
                subtitle="Union-level women council activity"
                badge="Coming soon"
              />
              <CouncilListCard
                to="/councils/national/union/men"
                title="Men Councils"
                subtitle="Union-level men council activity"
                badge="Coming soon"
              />
            </div>
          </div>
        </div>
      </section>
    </CouncilPage>
  );
};

export default CouncilsOverview;
