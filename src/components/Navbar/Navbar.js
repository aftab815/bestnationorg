import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteLogo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <div className="logo-img-wrapper">
                <img src={siteLogo} alt="BNWO Logo" />
              </div>
              <div className="logo-text">
                <span className="logo-title">BEST NATION</span>
                <span className="logo-subtitle">WELFARE ORGANISATION</span>
              </div>
            </Link>

            {/* Desktop Nav Items */}
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>

              {/* Governance Dropdown */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'governance' ? 'open' : ''}`}
                onMouseEnter={() => setActiveDropdown('governance')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-link dropdown-toggle">
                  Governance <i className="fas fa-chevron-down dropdown-arrow"></i>
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/parliament" className="dropdown-link">
                      <div className="dropdown-icon dropdown-icon--blue"><i className="fas fa-landmark"></i></div>
                      <div>
                        <strong>7-Tier Parliament</strong>
                        <small>World to local tiers</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/committees" className="dropdown-link">
                      <div className="dropdown-icon dropdown-icon--green"><i className="fas fa-users-cog"></i></div>
                      <div>
                        <strong>24 Project Committees</strong>
                        <small>Execution &amp; implementation</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/membership" className="dropdown-link">
                      <div className="dropdown-icon dropdown-icon--amber"><i className="fas fa-id-card"></i></div>
                      <div>
                        <strong>Membership Structure</strong>
                        <small>Tiers &amp; fee breakdown</small>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Programs Dropdown */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'programs' ? 'open' : ''}`}
                onMouseEnter={() => setActiveDropdown('programs')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/programs" className={`nav-link dropdown-toggle ${isActive('/programs') ? 'active' : ''}`}>
                  Programs <i className="fas fa-chevron-down dropdown-arrow"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/programs" className="dropdown-link">
                      <div className="dropdown-icon dropdown-icon--blue"><i className="fas fa-graduation-cap"></i></div>
                      <div>
                        <strong>12 Core Programs</strong>
                        <small>Education, Health &amp; Rights</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/what-we-do" className="dropdown-link">
                      <div className="dropdown-icon dropdown-icon--green"><i className="fas fa-tasks"></i></div>
                      <div>
                        <strong>What We Do</strong>
                        <small>Strategic Delivery Model</small>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`}>
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="navbar-actions">
              <Link to="/donate" className="nav-donate-btn">
                <i className="fas fa-heart"></i> Donate
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer (Rendered outside header for true full viewport coverage) */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          {/* Drawer Header with Organization Branding */}
          <div className="mobile-drawer-header">
            <div className="mobile-header-brand">
              <img src={siteLogo} alt="BNWO" className="mobile-drawer-logo-img" />
              <div className="mobile-drawer-titles">
                <strong className="mobile-drawer-brand-name">BEST NATION</strong>
                <small className="mobile-drawer-brand-tag">Welfare Organisation</small>
              </div>
            </div>
            <button
              className="mobile-close-btn"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Drawer Nav Links with Official BNWO Logo on all items */}
          <ul className="mobile-nav-list">
            <li>
              <Link
                to="/"
                className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="Home" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>Home</span>
                </div>
                <i className="fas fa-chevron-right mobile-item-arrow"></i>
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`mobile-nav-item ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="About Us" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>About Us</span>
                </div>
                <i className="fas fa-chevron-right mobile-item-arrow"></i>
              </Link>
            </li>

            {/* Governance Accordion */}
            <li>
              <div
                className={`mobile-dropdown-header ${activeDropdown === 'gov-mob' ? 'active' : ''}`}
                onClick={() => toggleDropdown('gov-mob')}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="Governance" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>Governance System</span>
                </div>
                <i className={`fas fa-chevron-${activeDropdown === 'gov-mob' ? 'up' : 'down'} mobile-accordion-arrow`}></i>
              </div>
              {activeDropdown === 'gov-mob' && (
                <ul className="mobile-sub-menu">
                  <li>
                    <Link to="/parliament" onClick={closeMobileMenu} className={isActive('/parliament') ? 'active' : ''}>
                      <img src={siteLogo} alt="Parliament" className="mobile-sub-logo-thumb" />
                      <span>7-Tier Parliament</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/committees" onClick={closeMobileMenu} className={isActive('/committees') ? 'active' : ''}>
                      <img src={siteLogo} alt="Committees" className="mobile-sub-logo-thumb" />
                      <span>24 Project Committees</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/membership" onClick={closeMobileMenu} className={isActive('/membership') ? 'active' : ''}>
                      <img src={siteLogo} alt="Membership" className="mobile-sub-logo-thumb" />
                      <span>Membership Structure</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Programs Accordion */}
            <li>
              <div
                className={`mobile-dropdown-header ${activeDropdown === 'prog-mob' ? 'active' : ''}`}
                onClick={() => toggleDropdown('prog-mob')}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="Programs" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>Core Programs</span>
                </div>
                <i className={`fas fa-chevron-${activeDropdown === 'prog-mob' ? 'up' : 'down'} mobile-accordion-arrow`}></i>
              </div>
              {activeDropdown === 'prog-mob' && (
                <ul className="mobile-sub-menu">
                  <li>
                    <Link to="/programs" onClick={closeMobileMenu} className={isActive('/programs') ? 'active' : ''}>
                      <img src={siteLogo} alt="12 Programs" className="mobile-sub-logo-thumb" />
                      <span>12 Welfare Programs</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/what-we-do" onClick={closeMobileMenu} className={isActive('/what-we-do') ? 'active' : ''}>
                      <img src={siteLogo} alt="Delivery" className="mobile-sub-logo-thumb" />
                      <span>Strategic Delivery Model</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/events"
                className={`mobile-nav-item ${isActive('/events') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="Events" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>Events &amp; Gatherings</span>
                </div>
                <i className="fas fa-chevron-right mobile-item-arrow"></i>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`mobile-nav-item ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="Contact" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>Contact Us</span>
                </div>
                <i className="fas fa-chevron-right mobile-item-arrow"></i>
              </Link>
            </li>
          </ul>

          {/* Drawer Footer Actions */}
          <div className="mobile-drawer-actions">
            <Link to="/donate" className="btn-donate mobile-donate-btn" onClick={closeMobileMenu}>
              <i className="fas fa-heart"></i> Donate Now
            </Link>
            <div className="mobile-compliance-tag">
              <i className="fas fa-shield-alt"></i>
              <span>100% Tax Exempt &bull; SECP Registered</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;