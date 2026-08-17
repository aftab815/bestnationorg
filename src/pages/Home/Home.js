import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import Partners from '../../components/Partners/Partners';
import {
  visionStatement,
  focusAreas,
  allPrograms,
  accountabilityChain,
  eventsData,
} from '../../data/siteData';
import flettisEventImage from '../../assets/flettis/3.jpg';
import bnwoParlimentImage from '../../assets/parliaments.png';
import './Home.css';

const chamberEvent =
  eventsData.find((e) => e.title.toLowerCase().includes('chamber')) || eventsData[0];

const Home = () => {
  return (
    <div className="home-page">
      <HeroSlider />

      {/* ── Motto Banner ──────────────────── */}
      <section className="home-motto">
        <div className="container">
          <div className="motto-inner">
            <i className="fas fa-quote-left"></i>
            <p>Training and Education, Health Awareness/Facilities, Skills &amp; Opportunities for All</p>
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
      </section>

      {/* ── Impact Stats Bar ──────────────── */}
      <Stats />

      {/* ── About Section ─────────────────── */}
      <section className="home-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-kicker">About BNWO</span>
              <h2>Best Nation Welfare Organisation</h2>
              <div className="underline-left"></div>
              <p>{visionStatement}</p>
              <div className="about-features">
                {focusAreas.map((area) => (
                  <div key={area.id} className="about-feature-item">
                    <div className="about-feature-icon">
                      <i className={area.icon}></i>
                    </div>
                    <div>
                      <h4>{area.title}</h4>
                      <p>{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Read More About Us <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="about-side">
              <div className="modern-frame-wrapper">
                <div className="modern-frame__glow"></div>
                <div className="modern-frame__ring">
                  <div className="side-card">
                    <img src={flettisEventImage} alt="BNWO Community Event" className="side-card__img" />
                    <div className="side-card__overlay"></div>
                    <div className="side-card__badge badge-est">
                      <i className="fas fa-award"></i>
                      <div>
                        <span className="side-card__badge-number">2020</span>
                        <span className="side-card__badge-text">Established</span>
                      </div>
                    </div>
                    <div className="side-card__badge badge-impact">
                      <i className="fas fa-shield-alt"></i>
                      <div>
                        <span className="side-card__badge-number">100%</span>
                        <span className="side-card__badge-text">Transparent Welfare</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12 Core Programs Preview ───────────── */}
      <section className="home-services">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Welfare Initiatives</span>
            <h2>Our Core Flagship Programs</h2>
            <div className="underline"></div>
            <p>12 structured welfare programs delivering real, grassroots impact across Pakistan</p>
          </div>
          <div className="services-grid">
            {allPrograms.slice(0, 6).map((p) => (
              <ServiceCard
                key={p.id}
                icon={p.icon}
                title={p.title}
                description={p.description}
                bgImage={p.bgImage}
              />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/programs" className="btn-outline">
              Explore All 12 Programs <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7-Tier Governance System ────────────── */}
      <section className="home-parliament">
        <div className="container">
          <div className="parliament-grid">
            <div className="parliament-image">
              <img src={bnwoParlimentImage} alt="Best Nation Parliaments" />
            </div>
            <div className="parliament-content">
              <span className="section-kicker">Structured Governance</span>
              <h2>7-Tier Parliament Framework</h2>
              <div className="underline-left"></div>
              <p className="parliament-tagline">Grassroots Leadership & Accountability</p>
              <p className="parliament-description">
                BNWO operates through a 7-tiered leadership structure — the "Best Nation Parliaments" — ensuring
                transparent governance from International levels down to local Union Councils, aligned with 24 project committees.
              </p>
              <div className="parliament-chain">
                {accountabilityChain.map((item) => (
                  <div key={item.step} className="chain-step">
                    <div className="chain-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="parliament-actions">
                <Link to="/parliament" className="btn-primary">
                  Explore Governance <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/membership" className="btn-outline">
                  Join Membership <i className="fas fa-user-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparency Section ────────────── */}
      <section className="home-transparency">
        <div className="container">
          <div className="transparency-card">
            <div className="transparency-content">
              <span className="section-kicker" style={{ background: '#F0FDF4', color: '#15803D', borderColor: 'rgba(34,197,94,0.3)' }}>
                <i className="fas fa-shield-alt"></i> Financial Integrity
              </span>
              <h2>Where Your Donations Go</h2>
              <p>We take full accountability for every rupee donated. Here is how your support creates direct impact in Pakistan.</p>

              <div className="allocation-bars">
                <div className="alloc-item">
                  <div className="alloc-head">
                    <span><i className="fas fa-[#0EA5E9] fa-hand-holding-heart"></i> Direct Field Welfare Programs</span>
                    <strong>85%</strong>
                  </div>
                  <div className="alloc-bar-track">
                    <div className="alloc-bar-fill alloc-blue" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="alloc-item">
                  <div className="alloc-head">
                    <span><i className="fas fa-[#F97316] fa-users"></i> Community Empowerment &amp; Support</span>
                    <strong>10%</strong>
                  </div>
                  <div className="alloc-bar-track">
                    <div className="alloc-bar-fill alloc-orange" style={{ width: '10%' }}></div>
                  </div>
                </div>

                <div className="alloc-item">
                  <div className="alloc-head">
                    <span><i className="fas fa-[#22C55E] fa-chart-line"></i> Audit, Operations &amp; Transparency</span>
                    <strong>5%</strong>
                  </div>
                  <div className="alloc-bar-track">
                    <div className="alloc-bar-fill alloc-green" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="transparency-badge-box">
              <div className="t-badge-circle">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>100% Verifiable</h3>
              <p>Audit reports and field receipts are logged transparently for all parliament members.</p>
              <Link to="/donate" className="btn-primary" style={{ marginTop: '16px' }}>
                Support A Cause <i className="fas fa-heart"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Stories Showcase ─────────── */}
      <section className="home-stories">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker" style={{ background: '#F0FDF4', color: '#166534', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              Real Impact
            </span>
            <h2>Success Stories &amp; Events</h2>
            <div className="underline"></div>
            <p>Ground-level transformation brought to life through community unity and active welfare projects.</p>
          </div>

          <article className="home-event-feature">
            <div className="home-event-feature-image">
              <img src={chamberEvent.image} alt={chamberEvent.title} />
            </div>
            <div className="home-event-feature-body">
              <span className="event-badge">Featured Event</span>
              <h3>{chamberEvent.title}</h3>
              <div className="home-event-feature-meta">
                <span><i className="fas fa-calendar-alt"></i> {chamberEvent.date}</span>
                <span><i className="fas fa-clock"></i> {chamberEvent.time}</span>
                <span><i className="fas fa-map-marker-alt"></i> {chamberEvent.location}</span>
              </div>
              <p>{chamberEvent.description}</p>
              <Link to="/events" className="btn-primary">
                View All Events <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ── 3 Get Involved CTA Cards ──────────── */}
      <section className="home-involved">
        <div className="container">
          <div className="section-title">
            <span className="section-kicker">Get Involved</span>
            <h2>Three Ways You Can Make A Difference</h2>
            <div className="underline"></div>
          </div>

          <div className="involved-grid">
            <div className="involved-card card-donate">
              <div className="involved-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Donate Fund</h3>
              <p>Your contribution directly provides food, medical aid, clean water, and education to deserving families.</p>
              <Link to="/donate" className="btn-primary">
                Donate Now <i className="fas fa-heart"></i>
              </Link>
            </div>

            <div className="involved-card card-volunteer">
              <div className="involved-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Become a Volunteer</h3>
              <p>Join our 24 project committees or local parliament tier to actively serve your community.</p>
              <Link to="/contact" className="btn-outline">
                Join Volunteers <i className="fas fa-user-plus"></i>
              </Link>
            </div>

            <div className="involved-card card-partner">
              <div className="involved-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Partner With Us</h3>
              <p>Corporate organisations and institutions can collaborate with BNWO for CSR initiatives.</p>
              <Link to="/contact" className="btn-outline">
                Become a Partner <i className="fas fa-building"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Partners />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Home;