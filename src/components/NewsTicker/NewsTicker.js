import React from 'react';
import { Link } from 'react-router-dom';
import './NewsTicker.css';

const NewsTicker = () => {
  const tickerItems = [
    {
      category: 'PARLIAMENTS',
      text: 'Best Nation Parliaments: World, World States, World Cities, Divisional, District & Tehsil Tiers',
      link: '/parliament',
      icon: 'fas fa-landmark',
    },
    {
      category: '12 CORE PROGRAMS',
      text: 'Free Eye Hospitals & Camps • Mobile Health Units • IT & Skills Labs • Women Vocational Centers • Rozgar Micro-Grants',
      link: '/programs',
      icon: 'fas fa-hand-holding-heart',
    },
    {
      category: '24 COMMITTEES',
      text: '24 Specialized Thematic Project Committees Active Across Pakistan for Grassroots Execution',
      link: '/committees',
      icon: 'fas fa-tasks',
    },
    {
      category: 'HUMANITARIAN IMPACT',
      text: 'Over 12,000+ Direct Beneficiary Lives Reached Across Healthcare, Clean Water, and Free Education',
      link: '/what-we-do',
      icon: 'fas fa-users',
    },
    {
      category: 'TRUST & COMPLIANCE',
      text: '100% Tax Exempt • SECP Registered Non-Profit • Shariah-Compliant Zakat & Sadaqah Distribution',
      link: '/donate',
      icon: 'fas fa-shield-alt',
    },
    {
      category: 'CIVIC MEMBERSHIP',
      text: 'Join BNWO Parliaments: International Tiers ($) & National Tiers (PKR 5,000) Now Open',
      link: '/membership',
      icon: 'fas fa-id-card',
    },
  ];

  return (
    <div className="news-ticker-bar" aria-label="Live updates ticker">
      <div className="ticker-badge">
        <span className="live-dot-pulse"></span>
        <i className="fas fa-bolt ticker-badge-icon"></i>
        <span className="ticker-badge-title">DISPATCH</span>
      </div>

      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {/* Double mapped for seamless infinite loop */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <Link key={idx} to={item.link} className="ticker-item">
              <span className="ticker-item-cat">
                <i className={item.icon}></i> {item.category}:
              </span>
              <span className="ticker-item-text">{item.text}</span>
              <span className="ticker-separator">
                <i className="fas fa-star-of-life"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
