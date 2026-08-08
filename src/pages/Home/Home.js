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
  motto,
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
            <p>{motto}</p>
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
      </section>

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

      {/* ── Programs Quick View ───────────── */}
      <section className="home-services">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Programs</h2>
            <div className="underline"></div>
            <p>12 flagship welfare programs delivering real impact across Pakistan</p>
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
              View All 12 Programs <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      {/* ── Parliament Section ────────────── */}
      <section className="home-parliament">
        <div className="container">
          <div className="parliament-grid">
            <div className="parliament-image">
              <img src={bnwoParlimentImage} alt="Best Nation Parliaments" />
            </div>
            <div className="parliament-content">
              <span className="section-kicker">Governance</span>
              <h2>Best Nation Parliaments</h2>
              <div className="underline-left"></div>
              <p className="parliament-tagline">7-Tier Governance for Grassroots Impact</p>
              <p className="parliament-description">
                BNWO operates through a tiered leadership system — the "Best Nation Parliaments" — ensuring
                representation and program delivery from the international level down to the Union Council,
                with each tier holding its own leadership body and aligned thematic committees.
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
                  Explore Parliament <i className="fas fa-arrow-right"></i>
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScTCOHr6lbZqFPfnY826H8ecU0mJ14d12FFlVG-Q6PuLCisjQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Join Membership <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events Showcase ───────────────── */}
      <section className="home-news">
        <div className="container">
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

      <Partners />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Home;