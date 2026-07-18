import React from 'react';
import { Link } from 'react-router-dom';
import { siteInfo, socialLinks } from '../../data/siteData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta glass-card">
          <div>
            <p className="footer-cta-kicker">Support the Mission</p>
            <h3>Together, we can create lasting change for families across Pakistan.</h3>
          </div>
          <Link to="/donate" className="btn-primary">Donate to BNWO</Link>
        </div>
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3>About BNWO</h3>
            <p>BNWO works with communities, volunteers, and partners to deliver education, health support, emergency response, and livelihood pathways for underserved families.</p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} aria-label={link.label} target="_blank" rel="noreferrer"><i className={link.icon}></i></a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
              <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
              <li><Link to="/what-we-do"><i className="fas fa-chevron-right"></i> What We Do</Link></li>
              <li><Link to="/donate"><i className="fas fa-chevron-right"></i> Donate</Link></li>
              <li><Link to="/news"><i className="fas fa-chevron-right"></i> News</Link></li>
              <li><Link to="/events"><i className="fas fa-chevron-right"></i> Events</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Get Involved</h3>
            <ul className="footer-links">
              <li><Link to="/donate"><i className="fas fa-chevron-right"></i> Donate</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
              <li><Link to="/events"><i className="fas fa-chevron-right"></i> Community Events</Link></li>
              <li><Link to="/what-we-do"><i className="fas fa-chevron-right"></i> Ongoing Projects</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i><span>{siteInfo.address}</span></li>
              <li><i className="fas fa-phone"></i><span>{siteInfo.phone}</span></li>
              <li><i className="fas fa-envelope"></i><span>{siteInfo.email}</span></li>
              <li><i className="fas fa-clock"></i><span>{siteInfo.hours}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} BNWO - Best Nation Welfare Organization. All Rights Reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Use</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;