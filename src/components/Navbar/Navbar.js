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

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
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
                      <small>World to Union Council tiers</small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/committees" className="dropdown-link">
                    <div className="dropdown-icon dropdown-icon--green"><i className="fas fa-users-cog"></i></div>
                    <div>
                      <strong>24 Project Committees</strong>
                      <small>Execution & implementation</small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="dropdown-link">
                    <div className="dropdown-icon dropdown-icon--amber"><i className="fas fa-id-card"></i></div>
                    <div>
                      <strong>Membership Structure</strong>
                      <small>Tiers & fee breakdown</small>
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
                      <strong>Training & Education</strong>
                      <small>IT, Vocations, Schools</small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="dropdown-link">
                    <div className="dropdown-icon dropdown-icon--pink"><i className="fas fa-heartbeat"></i></div>
                    <div>
                      <strong>Health & Facilities</strong>
                      <small>Free Clinics, Clean Water</small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="dropdown-link">
                    <div className="dropdown-icon dropdown-icon--amber"><i className="fas fa-balance-scale"></i></div>
                    <div>
                      <strong>Human Rights & Welfare</strong>
                      <small>Legal Aid, Orphan Care</small>
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

            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                <i className="fas fa-info-circle"></i> About Us
              </Link>
            </li>
            <li>
              <div
                className={`mobile-dropdown-header ${activeDropdown === 'gov-mob' ? 'active' : ''}`}
                onClick={() => toggleDropdown('gov-mob')}
              >
                <span><i className="fas fa-landmark"></i> Governance System</span>
                <i className={`fas fa-chevron-${activeDropdown === 'gov-mob' ? 'up' : 'down'}`}></i>
              </div>
              {activeDropdown === 'gov-mob' && (
                <ul className="mobile-sub-menu">
                  <li><Link to="/parliament"><i className="fas fa-building"></i> 7-Tier Parliament</Link></li>
                  <li><Link to="/committees"><i className="fas fa-users-cog"></i> 24 Project Committees</Link></li>
                  <li><Link to="/membership"><i className="fas fa-id-card"></i> Membership Structure</Link></li>
                </ul>
              )}
            </li>
            <li>
              <div
                className={`mobile-dropdown-header ${activeDropdown === 'prog-mob' ? 'active' : ''}`}
                onClick={() => toggleDropdown('prog-mob')}
              >
                <span><i className="fas fa-project-diagram"></i> Core Programs</span>
                <i className={`fas fa-chevron-${activeDropdown === 'prog-mob' ? 'up' : 'down'}`}></i>
              </div>
              {activeDropdown === 'prog-mob' && (
                <ul className="mobile-sub-menu">
                  <li><Link to="/programs"><i className="fas fa-hand-holding-heart"></i> 12 Welfare Programs</Link></li>
                  <li><Link to="/what-we-do"><i className="fas fa-tasks"></i> Delivery Approach</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/events" className={isActive('/events') ? 'active' : ''}>
                <i className="fas fa-calendar-alt"></i> Events & Gatherings
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                <i className="fas fa-envelope"></i> Contact Us
              </Link>
            </li>
          </ul>

          <div className="mobile-drawer-actions">
            <Link to="/donate" className="btn-primary mobile-donate-btn">
              <i className="fas fa-heart"></i> Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;