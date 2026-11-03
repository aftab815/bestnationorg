import React from 'react';
import RegistrationForm from '../../components/registration/RegistrationForm';
import Newsletter from '../../components/Newsletter/Newsletter';
import heroImg from '../../assets/hero2.jpeg';
import './Join.css';

const Join = () => {
  return (
    <div className="join-page">
      {/* ── Bespoke Hero Banner ─────────── */}
      <section className="join-hero-modern">
        <div className="join-hero-bg">
          <img src={heroImg} alt="Join Best Nation Welfare Organization" />
          <div className="join-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="join-hero-content">
            <div className="join-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>Official Registration &bull; SECP Registered &bull; Civic Movement</span>
            </div>
            <h1>Join Best Nation Welfare Organization</h1>
            <p>
              Register as a Donor, Beneficiary, or Volunteer Member. Become an active part of our 12 transformative programs and grassroots parliamentary assemblies across Pakistan.
            </p>
            <div className="join-hero-trust-chips">
              <span className="trust-chip"><i className="fas fa-shield-alt"></i> Verified Membership</span>
              <span className="trust-chip"><i className="fas fa-hand-holding-heart"></i> Transparent Accountability</span>
              <span className="trust-chip"><i className="fas fa-sitemap"></i> Cascading Local Chapters</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form Section ─────────── */}
      <section className="join-form-section">
        <div className="container">
          <RegistrationForm />
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Join;
