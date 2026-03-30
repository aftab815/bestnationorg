import React from 'react';
import { Link } from 'react-router-dom';
import { siteInfo, socialLinks } from '../../data/siteData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3>About BNWO</h3>
            <p>At BNWO, our mission is to enable communities, promote social welfare, and alleviate poverty through holistic and sustainable interventions. Through our various programs and initiatives, we aim to address the root causes of inequality and injustice, while nurturing a culture of empathy, compassion, and solidarity. </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} aria-label={link.label}><i className={link.icon}></i></a>
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
            <h3>Support</h3>
            <ul className="footer-links">
              <li><Link to="/donate"><i className="fas fa-chevron-right"></i> Donate</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i> FAQs</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Support</Link></li>
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