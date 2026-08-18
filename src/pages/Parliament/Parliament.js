import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import {
  parliamentTiers,
  eligibilityCriteria,
  accountabilityChain,
  registrationFormUrl,
} from '../../data/siteData';
import parlHeroImg from '../../assets/hero1.jpeg';
import worldParliamentImg from '../../assets/world parliament.png';
import divisionalImg from '../../assets/divisional.png';
import districtImg from '../../assets/district.png';
import tehsilImg from '../../assets/tehsil.png';
import './Parliament.css';

const Parliament = () => {
  return (
    <div className="parliament-page">
      {/* ── Bespoke Modern Parliament Hero ───────────── */}
      <section className="parl-hero-modern">
        <div className="parl-hero-bg">
          <img src="https://i.tribune.com.pk/media/images/521840-islamabadnationalassemblyinterior-1363464536/521840-islamabadnationalassemblyinterior-1363464536.jpg" alt="Best Nation Parliaments" />
          <div className="parl-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="parl-hero-content">
            <div className="parl-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>Constitutional 7-Tier Governance System</span>
            </div>
            <h1>Best Nation Parliaments</h1>
            <p>
              A structured, multi-tier democratic welfare governance model extending from the global Pakistani diaspora
              down to grassroots Union Councils across all provinces.
            </p>
            <div className="parl-hero-tier-pills">
              <span className="tier-pill">World</span>
              <i className="fas fa-chevron-right"></i>
              <span className="tier-pill">States</span>
              <i className="fas fa-chevron-right"></i>
              <span className="tier-pill">Cities</span>
              <i className="fas fa-chevron-right"></i>
              <span className="tier-pill">Divisional</span>
              <i className="fas fa-chevron-right"></i>
              <span className="tier-pill">District</span>
              <i className="fas fa-chevron-right"></i>
              <span className="tier-pill">Tehsil</span>
              <i className="fas fa-chevron-right"></i>
              <span className="tier-pill">Union Council</span>
            </div>
            <div className="parl-hero-actions">
              <a href="#formation-composition" className="btn-donate">
                Formation &amp; Composition <i className="fas fa-sitemap"></i>
              </a>
              <a href="#office-bearers" className="btn-glass">
                Bearer Structure <i className="fas fa-user-tie"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-Tier Formation Architecture Section ───── */}
      <section className="parl-formation-sec" id="formation-composition">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Core Governance Structure</span>
            <h2>Two-Tier Formation Architecture</h2>
            <div className="underline"></div>
            <p className="formation-lead-desc">
              BNWO&rsquo;s governance architecture is built on a clear division of purpose between its international and local tiers:
            </p>
          </div>

          <div className="formation-cards-grid">
            {/* International-Level Parliaments with World Parliament Emblem */}
            <div className="formation-pillar-card formation-card--international">
              <div className="formation-card-header">
                <div className="formation-icon-wrap formation-icon-wrap--logo">
                  <img src={worldParliamentImg} alt="World Parliament Emblem" className="formation-tier-logo-img" />
                </div>
                <div>
                  <span className="formation-tier-tag">Top-Tier Governance</span>
                  <h3>International-Level Parliaments</h3>
                </div>
              </div>
              <p className="formation-subhead">
                World Parliament &bull; World States Parliament &bull; World Cities Parliament
              </p>
              <div className="formation-body-text">
                <p>
                  Constituted for <strong>strategic decision-making, policy direction, national/international partnerships</strong>,
                  and large-scale fundraising that finances BNWO&rsquo;s twelve core programs.
                </p>
              </div>
              <div className="formation-features">
                <div className="formation-feat-item"><i className="fas fa-check"></i> Strategic Vision &amp; Policy Direction</div>
                <div className="formation-feat-item"><i className="fas fa-check"></i> Global Partnerships &amp; Institutional MOUs</div>
                <div className="formation-feat-item"><i className="fas fa-check"></i> Flagship Financing for 12 Core Programs</div>
              </div>
            </div>

            {/* Local-Level Parliaments with Divisional, District & Tehsil Logos */}
            <div className="formation-pillar-card formation-card--local">
              <div className="formation-card-header">
                <div className="formation-icon-wrap formation-icon-wrap--local-group">
                  <img src={divisionalImg} alt="Divisional Parliament" title="Divisional Parliament" className="formation-local-logo" />
                  <img src={districtImg} alt="District Parliament" title="District Parliament" className="formation-local-logo" />
                  <img src={tehsilImg} alt="Tehsil Parliament" title="Tehsil Parliament" className="formation-local-logo" />
                </div>
                <div>
                  <span className="formation-tier-tag">Grassroots Execution</span>
                  <h3>Local-Level Parliaments</h3>
                </div>
              </div>
              <p className="formation-subhead">
                Divisional &bull; District &bull; Tehsil Parliaments
              </p>
              <div className="formation-body-text">
                <p>
                  Constituted alongside affiliated Project Committees for <strong>direct project execution</strong> &mdash;
                  translating strategy and funding into on-the-ground delivery, community mobilization, and beneficiary support.
                </p>
              </div>
              <div className="formation-features">
                <div className="formation-feat-item"><i className="fas fa-check"></i> Field-Level Program Delivery &amp; Execution</div>
                <div className="formation-feat-item"><i className="fas fa-check"></i> Community Mobilization &amp; Need Assessment</div>
                <div className="formation-feat-item"><i className="fas fa-check"></i> Direct Beneficiary Support &amp; Local Verification</div>
              </div>
            </div>
          </div>

          <div className="formation-strategic-callout">
            <i className="fas fa-info-circle"></i>
            <p>
              <strong>Division of Responsibility:</strong> This division ensures that strategic leadership is not burdened with day-to-day
              implementation, while execution-level bodies remain focused, accountable, and close to the communities they serve.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Office-Bearers Structure Section ──────── */}
      <section className="parl-bearers-sec" id="office-bearers">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Leadership Hierarchy</span>
            <h2>Core Office-Bearers Structure</h2>
            <div className="underline"></div>
            <p>
              Every Parliament, regardless of tier, is composed of the following core office-bearers, supplemented by tier-specific portfolios:
            </p>
          </div>

          <div className="bearers-grid">
            <div className="bearer-card">
              <div className="bearer-icon-box">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="bearer-content">
                <h3>Chairman / President</h3>
                <p>Overall leadership, institutional policy, and external organizational representation.</p>
              </div>
            </div>

            <div className="bearer-card">
              <div className="bearer-icon-box">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="bearer-content">
                <h3>Vice Chairman</h3>
                <p>Deputizes for the Chairman and oversees internal coordination across all functioning tiers.</p>
              </div>
            </div>

            <div className="bearer-card">
              <div className="bearer-icon-box">
                <i className="fas fa-file-signature"></i>
              </div>
              <div className="bearer-content">
                <h3>General Secretary</h3>
                <p>Administration, institutional records, formal communications, and correspondence.</p>
              </div>
            </div>

            <div className="bearer-card">
              <div className="bearer-icon-box">
                <i className="fas fa-coins"></i>
              </div>
              <div className="bearer-content">
                <h3>Finance Secretary</h3>
                <p>Fund management, annual budgeting, audit adherence, and transparent financial reporting.</p>
              </div>
            </div>

            <div className="bearer-card">
              <div className="bearer-icon-box">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="bearer-content">
                <h3>Coordination Secretary</h3>
                <p>Liaison and systematic communication with the next tier up and down the structure.</p>
              </div>
            </div>

            <div className="bearer-card">
              <div className="bearer-icon-box">
                <i className="fas fa-users-cog"></i>
              </div>
              <div className="bearer-content">
                <h3>Committee Convenors</h3>
                <p>Heads of the relevant thematic Project Committees operating actively under that Parliament.</p>
              </div>
            </div>
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
                    <img src={tier.logo} alt={`${tier.name} Emblem`} />
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
                    <img src={tier.logo} alt={`${tier.name} Emblem`} />
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

      {/* ── Registration Form Download — Premium Dark Section ─────────── */}
      <section className="parl-registration">
        <div className="reg-floating-orb reg-orb-1"></div>
        <div className="reg-floating-orb reg-orb-2"></div>
        <div className="reg-floating-orb reg-orb-3"></div>
        <div className="container">
          <div className="reg-hero-header">
            <div className="reg-badge">
              <i className="fas fa-file-pdf"></i>
              <span>Official Document</span>
            </div>
            <h2>Parliament Membership<br /><span>Registration Form</span></h2>
            <p>Download, fill, and submit your application to join BNWO's structured governance network</p>
          </div>

          <div className="reg-steps-row">
            <div className="reg-step-card">
              <div className="reg-step-glow"></div>
              <div className="reg-step-icon">
                <i className="fas fa-cloud-download-alt"></i>
              </div>
              <div className="reg-step-num">Step 01</div>
              <h4>Download Form</h4>
              <p>Click below to get the official PDF registration form</p>
            </div>

            <div className="reg-step-connector">
              <div className="reg-connector-line"></div>
              <div className="reg-connector-dot"></div>
            </div>

            <div className="reg-step-card">
              <div className="reg-step-glow"></div>
              <div className="reg-step-icon">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <div className="reg-step-num">Step 02</div>
              <h4>Fill Your Details</h4>
              <p>Complete all fields with accurate personal information</p>
            </div>

            <div className="reg-step-connector">
              <div className="reg-connector-line"></div>
              <div className="reg-connector-dot"></div>
            </div>

            <div className="reg-step-card">
              <div className="reg-step-glow"></div>
              <div className="reg-step-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="reg-step-num">Step 03</div>
              <h4>Submit at Headquarter</h4>
              <p>Bring your completed form to BNWO Headquarter, Lahore</p>
            </div>
          </div>

          <div className="reg-download-area">
            <a
              href={registrationFormUrl}
              download="BNWO_Registration_Form.pdf"
              className="reg-download-btn"
            >
              <span className="reg-btn-shimmer"></span>
              <i className="fas fa-download"></i>
              <span>Download Registration Form</span>
              <span className="reg-btn-tag">PDF</span>
            </a>
          </div>

          <div className="reg-hq-strip">
            <div className="reg-hq-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>60-A, Street No. 5, Model Town Link Road, G.E.C.H.S. Phase 2, Lahore</span>
            </div>
            <div className="reg-hq-divider"></div>
            <div className="reg-hq-item">
              <i className="fas fa-phone-alt"></i>
              <span>0321-4190008 &nbsp;|&nbsp; 0321-7777011</span>
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
