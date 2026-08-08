import React from 'react';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { membershipTiers } from '../../data/siteData';
import memHero from '../../assets/hero1.jpeg';
import './Membership.css';

const Membership = () => {
  const intlTiers = membershipTiers.filter((t) => t.level === 'international');
  const localTiers = membershipTiers.filter((t) => t.level === 'national');

  return (
    <div className="membership-page">
      {/* ── Modern Hero Banner ───────────────── */}
      <section className="parl-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80" alt="BNWO Membership" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="parl-hero-content">
            <span className="about-hero-badge">
              <i className="fas fa-id-card"></i> Join BNWO Network
            </span>
            <h1>Membership & Fee Structure</h1>
            <p>Contribute your expertise, time, and resources to BNWO's mission across 7 parliament tiers.</p>
          </div>
        </div>
      </section>

      {/* ── International Tiers ─────────── */}
      <section className="mem-section">
        <div className="container">
          <div className="section-title">
            <h2>International Tiers</h2>
            <div className="underline"></div>
            <p>Strategic leadership, policy direction, and flagship fundraising</p>
          </div>
          <div className="mem-grid mem-grid--intl">
            {intlTiers.map((tier) => (
              <div key={tier.id} className={`mem-card ${tier.featured ? 'mem-card--featured' : ''}`}>
                {tier.featured && <div className="mem-featured-badge">Most Impactful</div>}
                <div className="mem-card-header">
                  <h3>{tier.tier}</h3>
                  <span className="mem-role">{tier.role}</span>
                </div>
                <div className="mem-price">
                  <span className="mem-price-amount">{tier.fee}</span>
                  <span className="mem-price-period">Registration Fee</span>
                </div>
                <p className="mem-contribution">{tier.contribution}</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScTCOHr6lbZqFPfnY826H8ecU0mJ14d12FFlVG-Q6PuLCisjQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.featured ? 'btn-primary' : 'btn-outline'}
                >
                  Apply Now <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Tiers ────────────────── */}
      <section className="mem-section mem-section--alt">
        <div className="container">
          <div className="section-title">
            <h2>National / Local Tiers</h2>
            <div className="underline"></div>
            <p>Execution oversight, project delivery, and grassroots community outreach</p>
          </div>
          <div className="mem-grid">
            {localTiers.map((tier) => (
              <div key={tier.id} className="mem-card mem-card--local">
                <div className="mem-card-header">
                  <h3>{tier.tier}</h3>
                  <span className="mem-role">{tier.role}</span>
                </div>
                <div className="mem-price">
                  <span className="mem-price-amount">{tier.fee}</span>
                  <span className="mem-price-period">Registration Fee</span>
                </div>
                <p className="mem-contribution">{tier.contribution}</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScTCOHr6lbZqFPfnY826H8ecU0mJ14d12FFlVG-Q6PuLCisjQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Apply Now <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notes ──────────────────────── */}
      <section className="mem-notes">
        <div className="container">
          <div className="section-title">
            <h2>Important Notes</h2>
            <div className="underline"></div>
          </div>
          <div className="notes-grid">
            <div className="note-card">
              <i className="fas fa-info-circle"></i>
              <p><strong>International-tier fees</strong> are strategic buy-in reflecting members' role in fundraising, partnerships, and governance.</p>
            </div>
            <div className="note-card">
              <i className="fas fa-hand-holding-heart"></i>
              <p><strong>Local-tier fees</strong> are kept modest since these members primarily contribute oversight time.</p>
            </div>
            <div className="note-card">
              <i className="fas fa-user-md"></i>
              <p><strong>Committee fees</strong> may be waived for verified professional volunteers (doctors, lawyers, Ulema) whose in-kind contribution outweighs a cash subscription.</p>
            </div>
            <div className="note-card">
              <i className="fas fa-chart-pie"></i>
              <p><strong>All collected fees</strong> are recorded by the Finance Secretary and reported transparently through quarterly reporting cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
    </div>
  );
};

export default Membership;
