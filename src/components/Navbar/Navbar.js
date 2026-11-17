import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ActionButton from '../common/ActionButton';
import { useFormModal } from '../getInvolved/FormModalProvider';
import siteLogo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { openForm } = useFormModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setOpenSubmenus({});
    setScrolled(window.scrollY > 30);
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

  const toggleSubmenu = (name) => {
    setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const openSubmenu = (name) => {
    setOpenSubmenus((prev) => (prev[name] ? prev : { ...prev, [name]: true }));
  };

  const openOnlySubmenu = (name) => {
    setOpenSubmenus({ [name]: true });
  };

  const closeSubmenu = (...names) => {
    setOpenSubmenus((prev) => {
      if (!names.some((name) => prev[name])) return prev;
      const next = { ...prev };
      names.forEach((name) => {
        delete next[name];
      });
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setOpenSubmenus({});
  };

  const handleAccordionKeyDown = (event, name) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown(name);
    }
  };

  const handleSubmenuKeyDown = (event, name) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSubmenu(name);
    }
  };

  const isActive = (path) => location.pathname === path;
  const isSectionActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <>
      <header
        className={`navbar-header ${scrolled && !isHome ? 'scrolled' : ''} ${
          isHome ? 'navbar-header--home-solid' : ''
        }`}
      >
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

              {/* Councils Dropdown */}
              <li
                className={`nav-item has-dropdown ${activeDropdown === 'councils' ? 'open' : ''}`}
                onMouseEnter={() => setActiveDropdown('councils')}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setOpenSubmenus({});
                }}
                onFocus={() => setActiveDropdown('councils')}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActiveDropdown(null);
                    setOpenSubmenus({});
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setActiveDropdown(null);
                    setOpenSubmenus({});
                  }
                }}
              >
                <Link
                  to="/councils"
                  className={`nav-link dropdown-toggle ${isSectionActive('/councils') ? 'active' : ''}`}
                >
                  Councils <i className="fas fa-chevron-down dropdown-arrow"></i>
                </Link>
                <ul className="dropdown-menu councils-menu">
                  <li
                    className={`has-submenu ${openSubmenus.intl ? 'open' : ''}`}
                    onMouseEnter={() => openOnlySubmenu('intl')}
                    onMouseLeave={() => closeSubmenu('intl')}
                    onFocus={() => openSubmenu('intl')}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        closeSubmenu('intl');
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="dropdown-link submenu-toggle"
                      onClick={() => toggleSubmenu('intl')}
                      aria-haspopup="true"
                      aria-expanded={Boolean(openSubmenus.intl)}
                    >
                      <div className="dropdown-icon dropdown-icon--blue">
                        <i className="fas fa-globe" aria-hidden="true"></i>
                      </div>
                      <span className="submenu-toggle__text">
                        <strong>International Councils</strong>
                        <small>City, state &amp; world</small>
                      </span>
                      <i className="fas fa-chevron-right submenu-arrow" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-submenu">
                      <li>
                        <Link to="/councils/international/city" className="dropdown-link">
                          <div className="dropdown-icon dropdown-icon--green">
                            <i className="fas fa-city" aria-hidden="true"></i>
                          </div>
                          <span className="submenu-toggle__text">
                            <strong>City Councils</strong>
                            <small>Coming soon</small>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/councils/international/state" className="dropdown-link">
                          <div className="dropdown-icon dropdown-icon--amber">
                            <i className="fas fa-map-marked-alt" aria-hidden="true"></i>
                          </div>
                          <span className="submenu-toggle__text">
                            <strong>State Councils</strong>
                            <small>Coming soon</small>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/councils/international/world" className="dropdown-link">
                          <div className="dropdown-icon dropdown-icon--blue">
                            <i className="fas fa-globe-asia" aria-hidden="true"></i>
                          </div>
                          <span className="submenu-toggle__text">
                            <strong>World Councils</strong>
                            <small>Coming soon</small>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`has-submenu ${openSubmenus.nat ? 'open' : ''}`}
                    onMouseEnter={() => openOnlySubmenu('nat')}
                    onMouseLeave={() => closeSubmenu('nat', 'union')}
                    onFocus={() => openSubmenu('nat')}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        closeSubmenu('nat', 'union');
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="dropdown-link submenu-toggle"
                      onClick={() => toggleSubmenu('nat')}
                      aria-haspopup="true"
                      aria-expanded={Boolean(openSubmenus.nat)}
                    >
                      <div className="dropdown-icon dropdown-icon--green">
                        <i className="fas fa-flag" aria-hidden="true"></i>
                      </div>
                      <span className="submenu-toggle__text">
                        <strong>National Councils</strong>
                        <small>Division, tehsil &amp; union</small>
                      </span>
                      <i className="fas fa-chevron-right submenu-arrow" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-submenu">
                      <li>
                        <Link to="/councils/national/division" className="dropdown-link">
                          <div className="dropdown-icon dropdown-icon--blue">
                            <i className="fas fa-landmark" aria-hidden="true"></i>
                          </div>
                          <span className="submenu-toggle__text">
                            <strong>Division Councils</strong>
                            <small>Full list of divisions</small>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/councils/national/tehsil" className="dropdown-link">
                          <div className="dropdown-icon dropdown-icon--amber">
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                          </div>
                          <span className="submenu-toggle__text">
                            <strong>Tehsil Councils</strong>
                            <small>Filter by division or district</small>
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`has-submenu ${openSubmenus.union ? 'open' : ''}`}
                        onMouseEnter={() => openOnlySubmenu('union')}
                        onMouseLeave={() => closeSubmenu('union')}
                        onFocus={() => openSubmenu('union')}
                        onBlur={(event) => {
                          if (!event.currentTarget.contains(event.relatedTarget)) {
                            closeSubmenu('union');
                          }
                        }}
                      >
                        <button
                          type="button"
                          className="dropdown-link submenu-toggle"
                          onClick={() => toggleSubmenu('union')}
                          aria-haspopup="true"
                          aria-expanded={Boolean(openSubmenus.union)}
                        >
                          <div className="dropdown-icon dropdown-icon--green">
                            <i className="fas fa-users" aria-hidden="true"></i>
                          </div>
                          <span className="submenu-toggle__text">
                            <strong>Union Councils</strong>
                            <small>Women &amp; men councils</small>
                          </span>
                          <i className="fas fa-chevron-right submenu-arrow" aria-hidden="true"></i>
                        </button>
                        <ul className="dropdown-submenu">
                          <li>
                            <Link to="/councils/national/union/women" className="dropdown-link">
                              <div className="dropdown-icon dropdown-icon--amber">
                                <i className="fas fa-female" aria-hidden="true"></i>
                              </div>
                              <span className="submenu-toggle__text">
                                <strong>Women Councils</strong>
                                <small>Coming soon</small>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/councils/national/union/men" className="dropdown-link">
                              <div className="dropdown-icon dropdown-icon--blue">
                                <i className="fas fa-male" aria-hidden="true"></i>
                              </div>
                              <span className="submenu-toggle__text">
                                <strong>Men Councils</strong>
                                <small>Coming soon</small>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="navbar-actions">
              <ActionButton
                to="/donate"
                variant="primary"
                size="sm"
                icon="fas fa-heart"
                iconPosition="left"
                className="nav-donate-btn"
              >
                Donate
              </ActionButton>

              <ActionButton
                variant="secondary"
                size="sm"
                icon="fas fa-hand-holding-heart"
                iconPosition="left"
                className="nav-volunteer-btn"
                onClick={() => openForm('volunteer', 'navbar')}
              >
                Volunteer
              </ActionButton>

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
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeMobileMenu();
            }
          }}
        >
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

            {/* Councils Accordion */}
            <li>
              <div
                className={`mobile-dropdown-header ${activeDropdown === 'councils-mob' ? 'active' : ''}`}
                onClick={() => toggleDropdown('councils-mob')}
                onKeyDown={(event) => handleAccordionKeyDown(event, 'councils-mob')}
                role="button"
                tabIndex={0}
                aria-expanded={activeDropdown === 'councils-mob'}
              >
                <div className="mobile-nav-left">
                  <div className="mobile-icon-box mobile-icon--logo">
                    <img src={siteLogo} alt="Councils" className="mobile-nav-logo-thumb" />
                  </div>
                  <span>Councils</span>
                </div>
                <i className={`fas fa-chevron-${activeDropdown === 'councils-mob' ? 'up' : 'down'} mobile-accordion-arrow`}></i>
              </div>
              {activeDropdown === 'councils-mob' && (
                <ul className="mobile-sub-menu">
                  <li>
                    <Link
                      to="/councils"
                      onClick={closeMobileMenu}
                      className={isSectionActive('/councils') ? 'active' : ''}
                    >
                      <img src={siteLogo} alt="All Councils" className="mobile-sub-logo-thumb" />
                      <span>All Councils</span>
                    </Link>
                  </li>

                  <li>
                    <div
                      className={`mobile-submenu-toggle ${openSubmenus.intl ? 'active' : ''}`}
                      onClick={() => toggleSubmenu('intl')}
                      onKeyDown={(event) => handleSubmenuKeyDown(event, 'intl')}
                      role="button"
                      tabIndex={0}
                      aria-expanded={Boolean(openSubmenus.intl)}
                    >
                      <span className="mobile-submenu-toggle__label">
                        <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                        <span>International Councils</span>
                      </span>
                      <i className={`fas fa-chevron-${openSubmenus.intl ? 'up' : 'down'}`} aria-hidden="true"></i>
                    </div>
                    {openSubmenus.intl && (
                      <ul className="mobile-sub-menu mobile-sub-menu--nested">
                        <li>
                          <Link to="/councils/international/city" onClick={closeMobileMenu} className={isActive('/councils/international/city') ? 'active' : ''}>
                            <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                            <span>City Councils</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/councils/international/state" onClick={closeMobileMenu} className={isActive('/councils/international/state') ? 'active' : ''}>
                            <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                            <span>State Councils</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/councils/international/world" onClick={closeMobileMenu} className={isActive('/councils/international/world') ? 'active' : ''}>
                            <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                            <span>World Councils</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <div
                      className={`mobile-submenu-toggle ${openSubmenus.nat ? 'active' : ''}`}
                      onClick={() => toggleSubmenu('nat')}
                      onKeyDown={(event) => handleSubmenuKeyDown(event, 'nat')}
                      role="button"
                      tabIndex={0}
                      aria-expanded={Boolean(openSubmenus.nat)}
                    >
                      <span className="mobile-submenu-toggle__label">
                        <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                        <span>National Councils</span>
                      </span>
                      <i className={`fas fa-chevron-${openSubmenus.nat ? 'up' : 'down'}`} aria-hidden="true"></i>
                    </div>
                    {openSubmenus.nat && (
                      <ul className="mobile-sub-menu mobile-sub-menu--nested">
                        <li>
                          <Link to="/councils/national/division" onClick={closeMobileMenu} className={isActive('/councils/national/division') ? 'active' : ''}>
                            <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                            <span>Division Councils</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/councils/national/tehsil" onClick={closeMobileMenu} className={isActive('/councils/national/tehsil') ? 'active' : ''}>
                            <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                            <span>Tehsil Councils</span>
                          </Link>
                        </li>
                        <li>
                          <div
                            className={`mobile-submenu-toggle ${openSubmenus.union ? 'active' : ''}`}
                            onClick={() => toggleSubmenu('union')}
                            onKeyDown={(event) => handleSubmenuKeyDown(event, 'union')}
                            role="button"
                            tabIndex={0}
                            aria-expanded={Boolean(openSubmenus.union)}
                          >
                            <span className="mobile-submenu-toggle__label">
                              <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                              <span>Union Councils</span>
                            </span>
                            <i className={`fas fa-chevron-${openSubmenus.union ? 'up' : 'down'}`} aria-hidden="true"></i>
                          </div>
                          {openSubmenus.union && (
                            <ul className="mobile-sub-menu mobile-sub-menu--nested">
                              <li>
                                <Link to="/councils/national/union/women" onClick={closeMobileMenu} className={isActive('/councils/national/union/women') ? 'active' : ''}>
                                  <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                                  <span>Women Councils</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/councils/national/union/men" onClick={closeMobileMenu} className={isActive('/councils/national/union/men') ? 'active' : ''}>
                                  <img src={siteLogo} alt="" className="mobile-sub-logo-thumb" />
                                  <span>Men Councils</span>
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
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
            <ActionButton
              to="/donate"
              variant="primary"
              size="md"
              icon="fas fa-heart"
              iconPosition="left"
              fullWidth
              className="mobile-donate-btn"
              onClick={closeMobileMenu}
            >
              Donate Now
            </ActionButton>
            <ActionButton
              variant="secondary"
              size="md"
              icon="fas fa-hand-holding-heart"
              iconPosition="left"
              fullWidth
              className="mobile-volunteer-btn"
              onClick={() => {
                closeMobileMenu();
                openForm('volunteer', 'navbar-mobile');
              }}
            >
              Volunteer
            </ActionButton>
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