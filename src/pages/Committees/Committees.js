import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { projectCommittees, accountabilityChain } from '../../data/siteData';
import cmteHero from '../../assets/hero2.jpeg';
import './Committees.css';

const Committees = () => {
  return (
    <div className="committees-page">
      {/* ── Modern Hero Banner ───────────────── */}
      <section className="parl-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="BNWO Committees" />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="parl-hero-content">
            <span className="about-hero-badge">
              <i className="fas fa-layer-group"></i> 24 Project Committees
            </span>
            <h1>Thematic Project Committees</h1>
            <p>
              The technical execution arm of BNWO — 24 specialized committees
              replicated across Divisional, District, Tehsil, and Union Council Parliaments.
            </p>
          </div>
        </div>
      </section>

      {/* ── Committee Groups ───────────── */}
      <section className="cmte-groups">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Specialized Leadership</span>
            <h2>24 Thematic Committees</h2>
            <div className="underline"></div>
            <p>
              Chaired by subject-matter Convenors and expert members across Pakistan
            </p>
          </div>

          {projectCommittees.map((group, gi) => (
            <div key={gi} className="cmte-group">
              <div className="cmte-group-header">
                <div className="cmte-group-icon" style={{ background: group.color }}>
                  <i className={group.icon}></i>
                </div>
                <h3>{group.category}</h3>
                <span
                  className="cmte-count"
                  style={{
                    borderColor: group.color,
                    color: group.color,
                    background: `${group.color}15`,
                  }}
                >
                  {group.committees.length} Specialized Committees
                </span>
              </div>
              <div className="cmte-list">
                {group.committees.map((c) => (
                  <div
                    key={c.id}
                    className="cmte-card"
                    style={{ backgroundImage: `url(${c.bgImage})` }}
                  >
                    <div
                      className="cmte-card__overlay"
                      style={{
                        background: `linear-gradient(180deg, rgba(15, 23, 42, 0.25) 0%, rgba(15, 23, 42, 0.65) 40%, ${group.color}EA 100%)`,
                      }}
                    ></div>
                    <div className="cmte-card__content">
                      <div className="cmte-card__top">
                        <span className="cmte-number">#{String(c.id).padStart(2, '0')}</span>
                        <div className="cmte-badge-icon">
                          <i className={group.icon}></i>
                        </div>
                      </div>
                      <h4 className="cmte-name">{c.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Formation Info ─────────────── */}
      <section className="cmte-formation">
        <div className="container">
          <div className="formation-grid">
            <div className="formation-text">
              <span className="section-kicker">Operational Model</span>
              <h2>How Committees Operate</h2>
              <div className="underline-left"></div>
              <p>
                Every committee integrates local subject-matter experts with elected
                Parliament leadership to guarantee technical rigor, audit transparency, and community trust.
              </p>
              <div className="formation-highlights">
                <div className="formation-pill">
                  <i className="fas fa-user-shield"></i> SECP & Audit Compliant
                </div>
                <div className="formation-pill">
                  <i className="fas fa-chart-line"></i> Quarterly Impact Reporting
                </div>
              </div>
            </div>
            <div className="formation-cards">
              <div className="formation-card">
                <div className="formation-card-bar"></div>
                <div className="formation-card-head">
                  <span className="formation-step">Step 01</span>
                  <div className="formation-icon"><i className="fas fa-landmark"></i></div>
                </div>
                <h3>Chartered Under Parliament</h3>
                <p>Reports directly to the local Divisional, District, Tehsil, or UC Parliament.</p>
              </div>
              <div className="formation-card">
                <div className="formation-card-bar"></div>
                <div className="formation-card-head">
                  <span className="formation-step">Step 02</span>
                  <div className="formation-icon"><i className="fas fa-user-tie"></i></div>
                </div>
                <h3>Expert Convenor Chair</h3>
                <p>Chaired by doctors, lawyers, educators, scholars, or business leaders.</p>
              </div>
              <div className="formation-card">
                <div className="formation-card-bar"></div>
                <div className="formation-card-head">
                  <span className="formation-step">Step 03</span>
                  <div className="formation-icon"><i className="fas fa-users"></i></div>
                </div>
                <h3>5–11 Active Members</h3>
                <p>Combining field volunteers with professional technical domain advisors.</p>
              </div>
              <div className="formation-card">
                <div className="formation-card-bar"></div>
                <div className="formation-card-head">
                  <span className="formation-step">Step 04</span>
                  <div className="formation-icon"><i className="fas fa-file-alt"></i></div>
                </div>
                <h3>Monthly Audit Reports</h3>
                <p>Consolidated progress reports submitted quarterly for strategic visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparency Workflow ─────────────── */}
      <section className="parl-chain">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Transparency Workflow</span>
            <h2>Accountability Chain</h2>
            <div className="underline"></div>
            <p>Every committee operates within a single transparent chain of command</p>
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

      <CTA />
      <Newsletter />
    </div>
  );
};

export default Committees;
