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
      {/* ── Bespoke Modern Committees Hero ─────────── */}
      <section className="cmte-hero-modern">
        <div className="cmte-hero-bg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="BNWO Committees" />
          <div className="cmte-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="cmte-hero-content">
            <div className="cmte-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>24 Specialized Project Committees &bull; Nationwide Deployment</span>
            </div>
            <h1>Thematic Project Committees</h1>
            <p>
              The direct execution and technical delivery arm of BNWO &mdash; specialized committees
              replicated across Divisional, District, and Tehsil Parliaments.
            </p>
            <div className="cmte-hero-actions">
              <a href="#formation-composition" className="btn-donate">
                Formation &amp; Rules <i className="fas fa-tasks"></i>
              </a>
              <a href="#accountability-chain" className="btn-glass">
                8.3 Reporting Chain <i className="fas fa-project-diagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Committees Formation & Composition Section ─ */}
      <section className="cmte-formation-sec" id="formation-composition">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker accent">Operational Charter</span>
            <h2>Committees Formation &amp; Composition</h2>
            <div className="underline"></div>
            <p>The operational framework governing every thematic committee across all local Parliament tiers</p>
          </div>

          <div className="cmte-rules-grid">
            <div className="cmte-rule-card">
              <div className="cmte-rule-num">01</div>
              <div className="cmte-rule-icon"><i className="fas fa-sitemap"></i></div>
              <h3>Local Tier Subordination</h3>
              <p>
                Each Committee is formed under, and reports directly to, the <strong>Divisional, District,
                or Tehsil Parliament</strong> of its area &mdash; the same committee structure is systematically
                replicated at every local tier.
              </p>
            </div>

            <div className="cmte-rule-card">
              <div className="cmte-rule-num">02</div>
              <div className="cmte-rule-icon"><i className="fas fa-user-md"></i></div>
              <h3>Professional Convenorship</h3>
              <p>
                Committees are chaired by a <strong>Convenor appointed by the respective Parliament&rsquo;s Chairman</strong>,
                typically a subject-matter volunteer or professional (e.g. a doctor for Doctors Empowerment, an
                Ulema scholar for Quran Sunnah Agahi, a lawyer for Legal Support).
              </p>
            </div>

            <div className="cmte-rule-card">
              <div className="cmte-rule-num">03</div>
              <div className="cmte-rule-icon"><i className="fas fa-users"></i></div>
              <h3>5&ndash;11 Member Quorum</h3>
              <p>
                Each Committee is composed of <strong>5&ndash;11 active members</strong>, combining dedicated local volunteers
                with relevant technical, professional, or grassroots community expertise.
              </p>
            </div>

            <div className="cmte-rule-card">
              <div className="cmte-rule-num">04</div>
              <div className="cmte-rule-icon"><i className="fas fa-check-double"></i></div>
              <h3>Formal Parliament Endorsement</h3>
              <p>
                A Committee becomes officially active once its <strong>Convenor and at least five members</strong> are
                confirmed, vetted, and formally endorsed by the respective local Parliament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8.3 Reporting & Accountability Chain Section ── */}
      <section className="cmte-reporting-sec" id="accountability-chain">
        <div className="container">
          <div className="reporting-card-wrap">
            <div className="section-title text-left">
              <span className="section-kicker">Section 8.3 Charter</span>
              <h2>8.3 Reporting &amp; Accountability</h2>
              <div className="underline-left"></div>
              <p className="reporting-lead-text">
                Committees submit progress reports to their local Parliament on a <strong>monthly basis</strong>, which are
                consolidated and escalated <strong>quarterly</strong> to the Divisional and, where relevant, World Cities/States
                Parliament for strategic visibility and donor reporting. This creates a single accountability chain:
              </p>
            </div>

            {/* Visual 4-Stage Single Accountability Chain */}
            <div className="single-chain-grid">
              <div className="single-chain-step">
                <div className="chain-badge-tag">Stage 1</div>
                <div className="chain-step-icon"><i className="fas fa-globe"></i></div>
                <h4>International Parliaments</h4>
                <span className="chain-step-role">Strategy &amp; Fundraising</span>
                <p>Strategic decision-making, global MOUs, and flagship financing.</p>
              </div>

              <div className="chain-arrow-divider">
                <i className="fas fa-arrow-right"></i>
              </div>

              <div className="single-chain-step">
                <div className="chain-badge-tag">Stage 2</div>
                <div className="chain-step-icon"><i className="fas fa-landmark"></i></div>
                <h4>Regional &amp; Local Parliaments</h4>
                <span className="chain-step-role">Governance &amp; Oversight</span>
                <p>Divisional, District, Tehsil &amp; UC Parliaments monitoring progress.</p>
              </div>

              <div className="chain-arrow-divider">
                <i className="fas fa-arrow-right"></i>
              </div>

              <div className="single-chain-step">
                <div className="chain-badge-tag">Stage 3</div>
                <div className="chain-step-icon"><i className="fas fa-cogs"></i></div>
                <h4>Thematic Project Committees</h4>
                <span className="chain-step-role">Field Execution</span>
                <p>24 Committees delivering core programs on ground.</p>
              </div>

              <div className="chain-arrow-divider">
                <i className="fas fa-arrow-right"></i>
              </div>

              <div className="single-chain-step highlight">
                <div className="chain-badge-tag accent">Stage 4</div>
                <div className="chain-step-icon"><i className="fas fa-hands-helping"></i></div>
                <h4>Communities &amp; Beneficiaries</h4>
                <span className="chain-step-role">Direct Impact</span>
                <p>Deserving families receiving sustainable welfare support.</p>
              </div>
            </div>

            <div className="reporting-footer-box">
              <i className="fas fa-shield-alt"></i>
              <p>
                <strong>Accountability Guarantee:</strong> This structure keeps strategic decision-making and fundraising
                concentrated at the international level, while ensuring every rupee raised is translated into monitored,
                locally accountable action through the Parliament-Committee chain.
              </p>
            </div>
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
                    {item.logos && item.logos.length === 1 ? (
                      <img src={item.logos[0]} alt={item.title} className="chain-flow-logo" />
                    ) : item.logos && item.logos.length > 1 ? (
                      <div className="chain-flow-logo-group">
                        {item.logos.map((logo, lIdx) => (
                          <img key={lIdx} src={logo} alt={item.title} className="chain-flow-logo-sub" />
                        ))}
                      </div>
                    ) : (
                      <i className={item.icon}></i>
                    )}
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
