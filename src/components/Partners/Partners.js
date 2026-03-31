import React from 'react';
import { Link } from 'react-router-dom';
import { partners } from '../../data/siteData';
import './Partners.css';

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="section-title">
          <h2>Donate Via</h2>
          <div className="underline"></div>
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <Link key={partner.id} to="/donate" className="partner-item">{partner.logo}</Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;