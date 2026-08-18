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
      {/* ── Bespoke Modern About Hero ───────────────── */}
      <section className="about-hero-modern">
        <div className="about-hero-bg">
          <img src={aboutHero} alt="BNWO Leadership & Team" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="about-hero-split">
            <div className="about-hero-text">
              <div className="about-hero-badge">
                <span className="live-pulse-dot"></span>
                <span>SECP Registered NPO &bull; Est. 2020 &bull; Lahore, Pakistan</span>
              </div>
              <h1>Translating Compassion into National Uplift</h1>
              <p>
                Best Nation Welfare Organisation (BNWO) is a faith-inspired civic-empowerment
                platform delivering structured welfare, education, healthcare, and human-rights
                support to underserved communities across Pakistan.
              </p>
              <div className="about-hero-actions">
                <a href="#executive-summary" className="btn-donate">
                  Executive Summary <i className="fas fa-file-alt"></i>
                </a>
                <Link to="/parliament" className="btn-glass">
                  7-Tier Parliament <i className="fas fa-landmark"></i>
                </Link>
              </div>
            </div>

            <div className="about-hero-card-side">
              <div className="about-hero-metric-card">
                <div className="metric-header">
                  <i className="fas fa-award"></i>
                  <span>Nationwide Framework</span>
                </div>
                <div className="metric-grid-mini">
                  <div className="metric-mini-item">
                    <strong>7</strong>
                    <small>Parliament Tiers</small>
                  </div>
                  <div className="metric-mini-item">
                    <strong>12</strong>
                    <small>Core Programs</small>
                  </div>
                  <div className="metric-mini-item">
                    <strong>24</strong>
                    <small>Project Committees</small>
                  </div>
                  <div className="metric-mini-item">
                    <strong>100%</strong>
                    <small>Audit Accountability</small>
                  </div>
                </div>
                <div className="metric-card-footer">
                  <i className="fas fa-check-circle"></i>
                  <span>Serving All Provinces of Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Executive Summary Section ──────────────── */}
      <section className="about-exec-summary" id="executive-summary">
        <div className="container">
          <div className="exec-summary-card">
            <div className="exec-summary-header">
              <div className="exec-badge-wrap">
                <span className="section-kicker accent">Concept Note &amp; Governance Charter</span>
              </div>
              <h2>Executive Summary</h2>
              <div className="underline-left"></div>
            </div>
            
            <div className="exec-summary-content">
              <div className="exec-quote-bar"></div>
              <div className="exec-paragraphs">
                <p className="exec-lead-para">
                  <strong>Best Nation Welfare Organization (BNWO)</strong> is a Pakistan-based, faith-inspired
                  welfare and civic-empowerment platform established in 2020 and headquartered in Lahore.
                  BNWO exists to translate individual compassion into collective national uplift &mdash;
                  organizing volunteers, professionals, and community leaders into a structured,
                  multi-tier network that delivers education, health, livelihood, and human-rights support
                  to underprivileged families across Pakistan.
                </p>
                <p className="exec-sub-para">
                  The organization operates through a nationwide governance structure of selected and
                  appointed leadership bodies (&ldquo;Parliaments&rdquo;) at the International, divisional,
                  district, tehsil, and union council levels, supported by twelve core welfare programs
                  and a network of twenty-four thematic welfare project committees. This concept note
                  presents BNWO&rsquo;s vision, mission, governance architecture, and program portfolio
                  in a consolidated, professional format for use with partners, donors, and government
                  stakeholders.
                </p>
              </div>
            </div>

            <div className="exec-pillars-grid">
              <div className="exec-pillar-item">
                <div className="exec-pillar-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <strong>Headquarters</strong>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
              <div className="exec-pillar-item">
                <div className="exec-pillar-icon"><i className="fas fa-sitemap"></i></div>
                <div>
                  <strong>Governance</strong>
                  <span>7 Parliament Tiers</span>
                </div>
              </div>
              <div className="exec-pillar-item">
                <div className="exec-pillar-icon"><i className="fas fa-hands-helping"></i></div>
                <div>
                  <strong>Welfare Delivery</strong>
                  <span>12 Core Programs</span>
                </div>
              </div>
              <div className="exec-pillar-item">
                <div className="exec-pillar-icon"><i className="fas fa-users-cog"></i></div>
                <div>
                  <strong>Implementation</strong>
                  <span>24 Project Committees</span>
                </div>
              </div>
            </div>
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