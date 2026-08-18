import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { corePrograms, focusAreas, accountabilityChain } from '../../data/siteData';
import wwdHero from '../../assets/hero3.jpeg';
import './WhatWeDo.css';

const allProjects = [
  ...corePrograms.trainingEducation,
  ...corePrograms.healthFacilities,
  ...corePrograms.humanRights,
];

const WhatWeDo = () => {
  return (
    <div className="whatwedo-page">
      {/* ── Bespoke Modern WhatWeDo Hero ───────────── */}
      <section className="wwd-hero-modern">
        <div className="wwd-hero-bg">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80" alt="BNWO What We Do" />
          <div className="wwd-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="wwd-hero-content">
            <div className="wwd-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>Strategic Uplift &bull; 4 Pillars of Welfare</span>
            </div>
            <h1>Our Work &amp; National Impact</h1>
            <p>
              BNWO delivers 12 core welfare programs through 24 specialized project committees,
              building resilient communities, emergency medical care, and poverty-alleviation channels across Pakistan.
            </p>
            <div className="wwd-hero-actions">
              <a href="#focus-areas" className="btn-donate">
                Explore Focus Areas <i className="fas fa-arrow-down"></i>
              </a>
              <Link to="/programs" className="btn-glass">
                12 Core Programs <i className="fas fa-hand-holding-heart"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus Areas ────────────────── */}
      <section className="wwd-intro">
        <div className="container">
          <div className="section-title">
            <h2>Core Focus Areas</h2>
            <div className="underline"></div>
            <p>Our work is anchored in three pillars of community transformation</p>
          </div>
          <div className="wwd-focus-grid">
            {focusAreas.map((area) => (
              <article key={area.id} className="wwd-focus-card">
                <div className="wwd-focus-icon"><i className={area.icon}></i></div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── All 12 Programs ────────────── */}
      <section className="wwd-projects">
        <div className="container">
          <div className="section-title section-title-light">
            <h2>12 Core Welfare Programs</h2>
            <div className="underline"></div>
            <p>These programs are actively running and delivering measurable impact</p>
          </div>
          <div className="wwd-project-grid">
            {allProjects.map((project) => (
              <article key={project.id} className="wwd-project-card">
                <div className="wwd-project-icon"><i className={project.icon}></i></div>
                <div className="wwd-project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/programs" className="btn-primary" style={{ background: 'white', color: 'var(--primary-dark)' }}>
              View Detailed Programs <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Delivery Approach ──────────── */}
      <section className="wwd-approach">
        <div className="container">
          <div className="section-title">
            <h2>Our Delivery Approach</h2>
            <div className="underline"></div>
            <p>Program delivery through the Parliament–Committee accountability chain</p>
          </div>
          <div className="approach-grid">
            {accountabilityChain.map((item) => (
              <div key={item.step} className="approach-card">
                <div className="approach-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default WhatWeDo;