import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { corePrograms } from '../../data/siteData';
import programsHero from '../../assets/hero5.jpeg';
import './Programs.css';

const categories = [
  { key: 'trainingEducation', title: 'Training & Education', icon: 'fas fa-graduation-cap', color: '#0284C7', count: '4 Programs' },
  { key: 'healthFacilities', title: 'Health Awareness & Facilities', icon: 'fas fa-heartbeat', color: '#EC4899', count: '4 Programs' },
  { key: 'humanRights', title: 'Human Rights & Social Welfare', icon: 'fas fa-balance-scale', color: '#F59E0B', count: '4 Programs' },
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter((cat) => cat.key === activeTab);

  return (
    <div className="programs-page">
      {/* ── Bespoke Modern Programs Hero ───────────── */}
      <section className="prog-hero-modern">
        <div className="prog-hero-bg">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80" alt="BNWO Programs" />
          <div className="prog-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="prog-hero-content">
            <div className="prog-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>12 Flagship Welfare Programs &bull; Nationwide Impact</span>
            </div>
            <h1>BNWO Core Welfare Programs</h1>
            <p>
              Delivering structured, sustainable social transformation across Education, Healthcare,
              and Human Rights &mdash; executed locally through our 24 Project Committees.
            </p>

            {/* Quick Hero Interactive Filter Tabs */}
            <div className="prog-hero-tabs">
              <button
                className={`prog-hero-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                <i className="fas fa-th-large"></i> All Programs (12)
              </button>
              <button
                className={`prog-hero-tab ${activeTab === 'trainingEducation' ? 'active' : ''}`}
                onClick={() => setActiveTab('trainingEducation')}
              >
                <i className="fas fa-graduation-cap"></i> Education &amp; Skills (4)
              </button>
              <button
                className={`prog-hero-tab ${activeTab === 'healthFacilities' ? 'active' : ''}`}
                onClick={() => setActiveTab('healthFacilities')}
              >
                <i className="fas fa-heartbeat"></i> Health &amp; Medical (4)
              </button>
              <button
                className={`prog-hero-tab ${activeTab === 'humanRights' ? 'active' : ''}`}
                onClick={() => setActiveTab('humanRights')}
              >
                <i className="fas fa-balance-scale"></i> Human Rights (4)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Stats Bar ────────────────────────── */}
      <section className="prog-stats-bar">
        <div className="container">
          <div className="prog-stats-grid">
            <div className="prog-stat-item">
              <strong>12</strong>
              <span>Core Programs</span>
            </div>
            <div className="prog-stat-item">
              <strong>3</strong>
              <span>Thematic Pillars</span>
            </div>
            <div className="prog-stat-item">
              <strong>100%</strong>
              <span>Audit Backed</span>
            </div>
            <div className="prog-stat-item">
              <strong>24</strong>
              <span>Project Committees</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Pills Bar ─────────────── */}
      <section className="prog-filter-sec">
        <div className="container">
          <div className="prog-filter-pills">
            <button
              className={`prog-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <i className="fas fa-th-large"></i> All 12 Programs
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`prog-filter-btn ${activeTab === cat.key ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.key)}
                style={
                  activeTab === cat.key
                    ? { background: cat.color, color: '#FFFFFF', borderColor: cat.color }
                    : {}
                }
              >
                <i className={cat.icon}></i> {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Categories Showcase ─────────────────── */}
      {filteredCategories.map((cat) => (
        <section key={cat.key} className="prog-category">
          <div className="container">
            <div className="prog-cat-header">
              <div className="prog-cat-icon" style={{ background: cat.color }}>
                <i className={cat.icon}></i>
              </div>
              <h2>{cat.title}</h2>
              <span className="prog-cat-pill" style={{ color: cat.color, borderColor: cat.color, background: `${cat.color}15` }}>
                {cat.count}
              </span>
              <div className="underline"></div>
            </div>
            <div className="prog-grid">
              {corePrograms[cat.key].map((prog) => (
                <div
                  key={prog.id}
                  className="prog-card"
                  style={{ backgroundImage: `url(${prog.bgImage})` }}
                >
                  <div
                    className="prog-card__overlay"
                    style={{
                      background: `linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.65) 40%, ${cat.color}EA 100%)`,
                    }}
                  ></div>
                  <div className="prog-card__content">
                    <div className="prog-card__top">
                      <span className="prog-number">Program 0{prog.id}</span>
                      <div className="prog-badge-icon">
                        <i className={prog.icon}></i>
                      </div>
                    </div>
                    <div className="prog-card__body">
                      <h3>{prog.title}</h3>
                      <p>{prog.description}</p>
                    </div>
                    <div className="prog-card__footer">
                      <span className="prog-action-link">
                        Impact & Outreach <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Delivery Framework Section ────────────────────── */}
      <section className="prog-framework">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Transparent Delivery</span>
            <h2>Program Execution Framework</h2>
            <div className="underline"></div>
            <p>Ensuring every rupee and resource translates into monitored, locally accountable community impact</p>
          </div>
          <div className="framework-grid">
            <div className="framework-card">
              <div className="framework-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3>1. Field Needs Survey</h3>
              <p>Union Council Parliaments conduct on-ground surveys to identify genuine beneficiaries and priorities.</p>
            </div>
            <div className="framework-card">
              <div className="framework-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h3>2. Committee Execution</h3>
              <p>Specialized Project Committees led by domain experts handle technical execution and logistics.</p>
            </div>
            <div className="framework-card">
              <div className="framework-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>3. Audit & Reporting</h3>
              <p>Monthly progress reports and financial audits are submitted to Divisional Parliaments and published.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Newsletter />
    </div>
  );
};

export default Programs;
