import React from 'react';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { getPrograms } from '../../config/programs';
import './Programs.css';

const Programs = () => {
  const programs = getPrograms();
  const programCount = programs.length;
  const projectCount = programs.reduce((total, program) => total + program.projects.length, 0);

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
              <span>Structured Welfare Delivery</span>
            </div>
            <h1>BNWO Core Welfare Programs</h1>
            <p>
              Delivering structured, sustainable social transformation through our programs and their projects.
            </p>
          </div>
        </div>
      </section>

      {/* ── Programs & Projects Grid ───────────────── */}
      <section className="programs-catalogue" aria-label="All programs and their projects">
        <div className="container">
          <p className="programs-intro">
            {programCount} Programs &middot; {projectCount} Projects
          </p>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <article key={program.id} id={program.id} className="program-card">
                <span className="program-card__number">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="program-card__title">{program.name}</h2>
                {program.summary ? <p className="program-card__summary">{program.summary}</p> : null}
                <ul className="program-card__projects">
                  {program.projects.map((project) => (
                    <li key={project.id} className="program-card__project">
                      <span className="program-card__project-marker" aria-hidden="true"></span>
                      <span>{project.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

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
