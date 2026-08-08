import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import {
  visionStatement,
  missionStatement,
  aboutOrganization,
  focusAreas,
} from '../../data/siteData';
import aboutHero from '../../assets/about-hero.png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* ── Modern Hero Banner ─────────────────── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={aboutHero} alt="BNWO Team" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <span className="about-hero-badge">
              <i className="fas fa-shield-alt"></i> Registered NPO with SECP • Est. 2020
            </span>
            <h1>Empowering Communities Across Pakistan</h1>
            <p>
              Best Nation Welfare Organisation (BNWO) is dedicated to translating
              compassion into structured, sustainable grassroots transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Modern Organization Overview ──────────── */}
      <section className="about-org">
        <div className="container">
          <div className="about-org-grid">
            <div className="about-org-text">
              <span className="section-kicker">Who We Are</span>
              <h2>About the Organisation</h2>
              <div className="underline-left"></div>
              <p className="org-lead">{aboutOrganization}</p>
              <p className="org-body">
                Our initiatives operate across four key pillars:{' '}
                <strong style={{ color: 'var(--primary-dark)' }}>
                  Training, Education, Health Facilities & Awareness,
                </strong>{' '}
                and <strong style={{ color: 'var(--primary-dark)' }}>Skills & Opportunities for All</strong>.
              </p>
              <div className="org-highlights">
                <div className="org-highlight-pill">
                  <i className="fas fa-check-circle"></i> 100% Transparent Governance
                </div>
                <div className="org-highlight-pill">
                  <i className="fas fa-check-circle"></i> 7-Tier Parliament Model
                </div>
                <div className="org-highlight-pill">
                  <i className="fas fa-check-circle"></i> 24 Specialized Committees
                </div>
              </div>
            </div>

            <div className="about-org-features">
              {focusAreas.map((area) => (
                <div key={area.id} className="org-feature-card">
                  <div className="org-feature-icon">
                    <i className={area.icon}></i>
                  </div>
                  <div className="org-feature-content">
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Modern Vision & Mission ───────────── */}
      <section className="about-vm">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div className="vm-card-aura"></div>
              <div className="vm-card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <span className="vm-card-tag">Our Future Outlook</span>
              <h3>Our Vision</h3>
              <p>{visionStatement}</p>
            </div>

            <div className="vm-card vm-card--mission">
              <div className="vm-card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <span className="vm-card-tag">Our Daily Commitment</span>
              <h3>Our Mission</h3>
              <p>{missionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modern Core Values ────────────────── */}
      <section className="about-values">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Guiding Principles</span>
            <h2>Our Core Values</h2>
            <div className="underline"></div>
            <p>The foundational ethics driving every decision and community engagement</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-bar"></div>
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>Putting human dignity and empathy at the center of all outreach programs.</p>
            </div>
            <div className="value-card">
              <div className="value-card-bar"></div>
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Integrity</h3>
              <p>Complete financial transparency, audit backing, and ethical accountability.</p>
            </div>
            <div className="value-card">
              <div className="value-card-bar"></div>
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Collaboration</h3>
              <p>Uniting volunteers, institutions, and community leaders for shared impact.</p>
            </div>
            <div className="value-card">
              <div className="value-card-bar"></div>
              <div className="value-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Responsibility</h3>
              <p>Dedicated to long-term generational uplift across underserved regions.</p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* ── Modern Timeline / Journey ───────────────────── */}
      <section className="about-history" id="history">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Growth & Milestones</span>
            <h2>Our Journey</h2>
            <div className="underline"></div>
            <p>Key achievements defining BNWO's evolution since establishment</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2020</span>
                <h4>BNWO Founded & SECP Registered</h4>
                <p>
                  Established in Lahore as a faith-inspired welfare platform and
                  formally registered with SECP as a non-profit organisation.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2021</span>
                <h4>Grassroots Welfare Drives Launched</h4>
                <p>
                  Initiated initial food support, literacy drives, and community health
                  awareness campaigns across Punjab districts.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2023</span>
                <h4>7-Tier Parliament Model Chartered</h4>
                <p>
                  Formed the structured leadership model — Best Nation Parliaments —
                  extending governance from international to Union Council tiers.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2024</span>
                <h4>24 Project Committees Activated</h4>
                <p>
                  All 24 thematic project committees deployed to oversee execution
                  and technical delivery of 12 core welfare programs.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2025–26</span>
                <h4>Nationwide Alliances & Institutional Growth</h4>
                <p>
                  Forged Lahore Chamber of Commerce partnerships, expanded divisional
                  parliaments, and crossed 12,000+ direct beneficiary lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modern Governance Banner CTA ─────── */}
      <section className="about-parliament-cta">
        <div className="container">
          <div className="parliament-cta-inner">
            <div className="parliament-cta-text">
              <h2>Explore Our Governance & Committee Network</h2>
              <p>
                Discover how BNWO operates through transparent 7-tier Parliaments
                and 24 thematic Project Committees to ensure local accountability.
              </p>
            </div>
            <div className="parliament-cta-actions">
              <Link to="/parliament" className="btn-primary">
                Explore Parliaments <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/committees" className="btn-outline">
                24 Committees <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
    </div>
  );
};

export default About;