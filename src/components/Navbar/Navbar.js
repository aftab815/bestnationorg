import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/siteData';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className={"header " + (scrolled ? "scrolled" : "")}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="BNWO Logo" className="logo-image" />
          <div className="logo-text">
            <h1>BNWO</h1>
            <span>Best Nation Welfare Organization</span>
          </div>
        </Link>
        <nav>
          <ul className={"nav-menu " + (menuOpen ? "active" : "")}>
            {navLinks.map((link, index) => (
              <li key={index} className={link.dropdown ? "dropdown " + (openDropdown === index ? "open" : "") : ""}>
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                      onClick={(e) => {
                        if (window.innerWidth <= 768) {
                          e.preventDefault();
                          toggleDropdown(index);
                        }
                      }}
                    >
                      {link.name}
                      <i className="fas fa-chevron-down dropdown-arrow"></i>
                    </Link>
                    <div className="dropdown-content">
                      <Link to={link.path}>All {link.name}</Link>
                      {link.dropdown.map((subLink, subIndex) => (
                        <Link key={subIndex} to={subLink.path}>{subLink.name}</Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/donate" className="donate-btn">
          Donate
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;