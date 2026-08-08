import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import {
  parliamentTiers,
  eligibilityCriteria,
  accountabilityChain,
} from '../../data/siteData';
import bnwoParlimentImage from '../../assets/parliaments.png';
import parlHeroImg from '../../assets/hero1.jpeg';
import './Parliament.css';

const Parliament = () => {
  return (
    <div className="parliament-page">
      {/* ── Modern Hero Banner ─────────────────────── */}
      <section className="parl-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80" alt="Best Nation Parliaments" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="parl-hero-content">
            <div className="parl-hero-badge">
              <img src={bnwoParlimentImage} alt="BNWO Emblem" className="hero-emblem-img" />
              <span>Structured Governance Model</span>
            </div>
            <h1>Best Nation Parliaments</h1>
            <p>
              A 7-tier governance framework empowering grassroots communities, ensuring
              transparent program delivery from international leadership down to Union Councils.
            </p>
          </div>
        </div>
      </section>

      {/* ── International Tier ─────────── */}
      <section className="parl-tier-section">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Policy & Strategy</span>
            <h2>International & Sub-International Tiers</h2>
            <div className="underline"></div>
            <p>Strategic decision-making, policy direction, international MOUs, and flagship fundraising</p>
          </div>
          <div className="parl-tier-grid">
            {parliamentTiers.international.map((tier) => (
              <div key={tier.id} className="parl-tier-card parl-tier-card--strategic">
                <div className="parl-card-header">
                  <div className="parl-card-logo">
                    <img src={bnwoParlimentImage} alt={`${tier.name} Emblem`} />
                  </div>
                  <span className="parl-tier-badge">{tier.mandateType}</span>
                </div>
                <h3>{tier.name}</h3>
                <span className="parl-tier-level">
                  <i className="fas fa-layer-group"></i> {tier.level}
                </span>
                <p className="parl-tier-mandate">{tier.mandate}</p>
                <div className="parl-tier-meta">
                  <div className="meta-box">
                    <strong>{tier.minMembers}</strong>
                    <span>Min. Members</span>
                  </div>
                  <div className="meta-box">
                    <strong>{tier.term}</strong>
                    <span>Mandate Term</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── National/Local Tier ────────── */}
      <section className="parl-tier-section parl-tier-section--alt">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Grassroots Execution</span>
            <h2>Regional & Local Tiers</h2>
            <div className="underline"></div>
            <p>Direct project execution, community mobilization, and field-level beneficiary support</p>
          </div>
          <div className="parl-tier-grid">
            {parliamentTiers.national.map((tier) => (
              <div key={tier.id} className="parl-tier-card parl-tier-card--execution">
                <div className="parl-card-header">
                  <div className="parl-card-logo">
                    <img src={bnwoParlimentImage} alt={`${tier.name} Emblem`} />
                  </div>
                  <span className="parl-tier-badge parl-tier-badge--exec">{tier.mandateType}</span>
                </div>
                <h3>{tier.name}</h3>
                <span className="parl-tier-level">
                  <i className="fas fa-map-marker-alt"></i> {tier.level}
                </span>
                <p className="parl-tier-mandate">{tier.mandate}</p>
                <div className="parl-tier-meta">
                  <div className="meta-box">
                    <strong>{tier.minMembers}</strong>
                    <span>Min. Members</span>
                  </div>
                  <div className="meta-box">
                    <strong>{tier.term}</strong>
                    <span>Mandate Term</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency Workflow / Accountability Chain ────────── */}
      <section className="parl-chain">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Transparency Workflow</span>
            <h2>Accountability Chain</h2>
            <div className="underline"></div>
            <p>An unbroken chain of governance ensuring every resource translates into monitored, locally accountable action</p>
          </div>
          <div className="chain-flow">
            {accountabilityChain.map((item, i) => (
              <React.Fragment key={item.step}>
                <div className="chain-flow-item">
                  <div className="chain-step-badge">Step 0{item.step}</div>
                  <div className="chain-flow-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                {i < accountabilityChain.length - 1 && (
                  <div className="chain-flow-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility Criteria ────────────────── */}
      <section className="parl-eligibility">
        <div className="container">
          <div className="eligibility-grid">
            <div className="eligibility-text">
              <span className="section-kicker">Requirements</span>
              <h2>Eligibility Criteria for Office-Bearers</h2>
              <div className="underline-left"></div>
              <p>Candidates must meet rigorous standards of service and character to hold office in any Parliament tier.</p>
            </div>
            <div className="eligibility-list">
              {eligibilityCriteria.map((item, i) => (
                <div key={i} className="eligibility-item">
                  <div className="eligibility-check">
                    <i className="fas fa-check"></i>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA ───────────────────── */}
      <section className="parl-join">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join Best Nation Parliaments</h2>
          <p>Become a chartered member and shape strategic governance and grassroots impact in your region.</p>
          <div className="parl-join-actions">
            <Link to="/membership" className="btn-primary">
              View Membership Tiers <i className="fas fa-arrow-right"></i>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTCOHr6lbZqFPfnY826H8ecU0mJ14d12FFlVG-Q6PuLCisjQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Apply for Leadership <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
    </div>
  );
};

export default Parliament;
