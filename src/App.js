import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import ProgramDetail from './pages/ProgramDetail/ProgramDetail';
import Committees from './pages/Committees/Committees';
import Membership from './pages/Membership/Membership';
import NewsletterAdmin from './pages/NewsletterAdmin/NewsletterAdmin';
import CouncilsOverview from './pages/Councils/CouncilsOverview';
import DivisionCouncils from './pages/Councils/DivisionCouncils';
import DivisionCouncilDetail from './pages/Councils/DivisionCouncilDetail';
import TehsilCouncils from './pages/Councils/TehsilCouncils';
import TehsilCouncilDetail from './pages/Councils/TehsilCouncilDetail';
import CouncilComingSoon from './pages/Councils/CouncilComingSoon';
import InternationalCityCouncils from './pages/Councils/InternationalCityCouncils';
import InternationalStateCouncils from './pages/Councils/InternationalStateCouncils';
import InternationalStateCouncilDetail from './pages/Councils/InternationalStateCouncilDetail';
import InternationalWorldCouncils from './pages/Councils/InternationalWorldCouncils';
import InternationalWorldCouncilDetail from './pages/Councils/InternationalWorldCouncilDetail';
import { FormModalProvider } from './components/getInvolved/FormModalProvider';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Support deep links such as /donate#paypro-section; otherwise start at the top.
    const hashTarget = hash ? document.getElementById(hash.slice(1)) : null;
    if (hashTarget) {
      hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }

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
  }, [pathname, hash]);

  return null;
}

function App() {


  return (
    <FormModalProvider>
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
            <Route path="/programs/:programId" element={<ProgramDetail />} />
            <Route path="/parliament" element={<Parliament />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/join" element={<Navigate to="/" replace />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
            <Route path="/events" element={<Events />} />
            <Route path="/councils" element={<CouncilsOverview />} />
            <Route path="/councils/international/city" element={<InternationalCityCouncils />} />
            <Route path="/councils/international/state" element={<InternationalStateCouncils />} />
            <Route
              path="/councils/international/state/:countrySlug/:stateSlug"
              element={<InternationalStateCouncilDetail />}
            />
            <Route path="/councils/international/world" element={<InternationalWorldCouncils />} />
            <Route
              path="/councils/international/world/:countrySlug"
              element={<InternationalWorldCouncilDetail />}
            />
            <Route path="/councils/national/division" element={<DivisionCouncils />} />
            <Route
              path="/councils/national/division/:divisionId"
              element={<DivisionCouncilDetail />}
            />
            <Route path="/councils/national/tehsil" element={<TehsilCouncils />} />
            <Route
              path="/councils/national/tehsil/:tehsilId"
              element={<TehsilCouncilDetail />}
            />
            <Route
              path="/councils/national/union"
              element={
                <CouncilComingSoon
                  title="Union Councils"
                  kicker="National Councils"
                  subtitle="Union-level councils with women and men council activity."
                />
              }
            />
            <Route
              path="/councils/national/union/women"
              element={
                <CouncilComingSoon
                  title="Women Councils"
                  kicker="Union Councils"
                  subtitle="Union-level women councils supporting community participation."
                />
              }
            />
            <Route
              path="/councils/national/union/men"
              element={
                <CouncilComingSoon
                  title="Men Councils"
                  kicker="Union Councils"
                  subtitle="Union-level men councils supporting community participation."
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/newsletter-admin" element={<NewsletterAdmin />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopBtn />
      </div>
    </FormModalProvider>
  );
}

export default App;
