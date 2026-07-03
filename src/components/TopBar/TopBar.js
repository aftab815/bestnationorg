import React from 'react';
import { siteInfo, socialLinks } from '../../data/siteData';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <a href={"mailto:" + siteInfo.email}>
            <i className="fas fa-envelope"></i> {siteInfo.email}
          </a>
          <a href={"tel:" + siteInfo.phone}>
            <i className="fas fa-phone"></i> {siteInfo.phone}
          </a>
          <span className="top-pill">
            <i className="fas fa-map-marker-alt"></i> Lahore, Pakistan
          </span>
        </div>
        <span className="top-bar-center top-volunteer">
          <i className="fas fa-hands-helping"></i> Volunteers Welcome
        </span>
        <div className="top-bar-right">
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} aria-label={link.label} target="_blank" rel="noreferrer">
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