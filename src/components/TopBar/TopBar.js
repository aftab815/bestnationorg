import React from 'react';
import { siteInfo, socialLinks } from '../../data/siteData';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <span className="top-slogan-badge">
            <i className="fas fa-heart"></i>
            <strong>Let's Pay Back to Pakistan</strong>
          </span>
          <span className="top-divider">|</span>
          <span className="top-appeal-badge">
            <span className="live-pulse-dot live-pulse-dot--urgent"></span>
            <strong>URGENT APPEAL:</strong>
            <span className="top-appeal-text">Support Clean Water &amp; Education in Pakistan</span>
          </span>
          <span className="top-divider">|</span>
          <span className="top-reg-badge">
            <i className="fas fa-shield-alt"></i> Registered Non-Profit NGO
          </span>
        </div>
        <span className="top-bar-center top-volunteer">
          <i className="fas fa-hands-helping"></i> Volunteers Welcome
        </span>
        <div className="top-bar-right">
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="social-btn"
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;