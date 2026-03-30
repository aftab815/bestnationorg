import React from 'react';
import { partners } from '../../data/siteData';
import './Partners.css';

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="section-title">
          <h2>Our Partners</h2>
          <div className="underline"></div>
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">{partner.logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;