import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button className={"scroll-top " + (visible ? "show" : "")} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopBtn;