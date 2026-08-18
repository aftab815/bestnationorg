import React from 'react';
import { Link } from 'react-router-dom';
import payproLogo from '../../assets/paypro.jpg';
import faysalBankLogo from '../../assets/faysal bank.png';
import uBankLogo from '../../assets/u bank.jpg';
import './Partners.css';

const paymentChannels = [
  {
    id: 1,
    name: 'PayPro Gateway',
    type: 'Instant Digital Payment',
    image: payproLogo,
    badgeColor: '#0052cc',
  },
  {
    id: 2,
    name: 'Faysal Bank',
    type: 'Corporate Account',
    image: faysalBankLogo,
    badgeColor: '#1d4ed8',
  },
  {
    id: 3,
    name: 'U Bank',
    type: 'Corporate Account',
    image: uBankLogo,
    badgeColor: '#b45309',
  },
  {
    id: 4,
    name: 'JazzCash',
    type: 'Mobile Wallet & QR',
    icon: 'fas fa-mobile-alt',
    customLogo: 'jazzcash',
    badgeColor: '#dc2626',
  },
  {
    id: 5,
    name: 'EasyPaisa',
    type: 'Mobile Wallet & 1-Link',
    icon: 'fas fa-wallet',
    customLogo: 'easypaisa',
    badgeColor: '#059669',
  },
  {
    id: 6,
    name: 'NayaPay',
    type: 'Digital App Transfer',
    icon: 'fas fa-paper-plane',
    customLogo: 'nayapay',
    badgeColor: '#ea580c',
  },
  {
    id: 7,
    name: 'Raast Instant',
    type: 'State Bank of Pakistan',
    icon: 'fas fa-bolt',
    customLogo: 'raast',
    badgeColor: '#0e6e5a',
  },
  {
    id: 8,
    name: 'Visa / Mastercard',
    type: 'Debit & Credit Cards',
    icon: 'fas fa-credit-card',
    customLogo: 'cards',
    badgeColor: '#4338ca',
  },
];

const renderPartnerLogo = (partner) => {
  if (partner.image) {
    return <img src={partner.image} alt={partner.name} className="partner-logo-img" />;
  }

  if (partner.customLogo === 'jazzcash') {
    return (
      <div className="custom-brand-badge brand--jazzcash">
        <span className="brand-dot"></span>
        <strong>Jazz<span className="brand-accent">Cash</span></strong>
      </div>
    );
  }

  if (partner.customLogo === 'easypaisa') {
    return (
      <div className="custom-brand-badge brand--easypaisa">
        <i className="fas fa-arrow-circle-right"></i>
        <strong>easy<span className="brand-accent">paisa</span></strong>
      </div>
    );
  }

  if (partner.customLogo === 'nayapay') {
    return (
      <div className="custom-brand-badge brand--nayapay">
        <i className="fas fa-compass"></i>
        <strong>Naya<span className="brand-accent">Pay</span></strong>
      </div>
    );
  }

  if (partner.customLogo === 'raast') {
    return (
      <div className="custom-brand-badge brand--raast">
        <i className="fas fa-bolt"></i>
        <strong>RAAST <span>SBP</span></strong>
      </div>
    );
  }

  return (
    <div className="custom-brand-badge brand--cards">
      <i className="fab fa-cc-visa"></i>
      <i className="fab fa-cc-mastercard"></i>
    </div>
  );
};

const Partners = () => {
  return (
    <section className="partners-ticker-section">
      <div className="container">
        <div className="partners-header">
          <span className="section-kicker">100% Tax Exempt &bull; Shariah Compliant</span>
          <h2>Donate Now &mdash; Official Payment Gateways</h2>
          <div className="underline"></div>
          <p>Support our 12 welfare programs instantly via verified digital channels, bank transfers &amp; mobile wallets</p>
        </div>
      </div>

      <div className="partners-marquee-wrapper">
        <div className="partners-marquee-track">
          {/* Double map for seamless continuous right-to-left loop */}
          {[...paymentChannels, ...paymentChannels].map((partner, index) => (
            <Link to="/donate" key={index} className="partner-marquee-card">
              <div className="partner-logo-box">
                {renderPartnerLogo(partner)}
              </div>
              <div className="partner-text-info">
                <h4>{partner.name}</h4>
                <span>{partner.type}</span>
              </div>
              <div className="partner-hover-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;