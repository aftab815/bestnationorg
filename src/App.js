import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTopBtn from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Donate from './pages/Donate/Donate';
import Parliament from './pages/Parliament/Parliament';
import Programs from './pages/Programs/Programs';
import Committees from './pages/Committees/Committees';
import Membership from './pages/Membership/Membership';
import NewsletterAdmin from './pages/NewsletterAdmin/NewsletterAdmin';
import News from './pages/News/News';

function ScrollManager() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Apply data-animate attribute to common components that should animate
    const animateSelectors = [
      '.section-title',
      '.hero-content',
      '.about-feature-item',
      '.service-card',
      '.stat-item',
      '.news-page-card',
      '.prog-card',
      '.cmte-card',
      '.mem-card',
      '.parl-tier-card',
      '.involved-card',
      '.wwd-focus-card',
      '.wwd-project-card',
      '.approach-card',
      '.timeline-item',
      '.value-card',
      '.contact-info-card',
      '.newsletter-box'
    ];

    const elementsToAnimate = document.querySelectorAll(animateSelectors.join(', '));
    elementsToAnimate.forEach(el => {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'fade-up');
      }
    });

    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => {
      el.classList.remove('is-visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollManager />
      <TopBar />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/parliament" element={<Parliament />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/newsletter-admin" element={<NewsletterAdmin />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
}

export default App;
