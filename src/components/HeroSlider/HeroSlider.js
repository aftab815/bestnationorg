import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/siteData';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const changeSlide = (index) => {
    const nextIndex = (index + heroSlides.length) % heroSlides.length;
    setCurrentSlide(nextIndex);
  };

  return (
    <section className="hero" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={"hero-slide " + (index === currentSlide ? 'active' : '')}
        >
          <img className="hero-img" src={slide.bg} alt={slide.title} />
          <div className="hero-overlay"></div>
          <div className="hero-shape hero-shape--left"></div>
          <div className="hero-shape hero-shape--right"></div>

          <div className="hero-content">
            <div className="hero-copy">
              <span className="hero-tag">Community-led welfare | Transparent impact</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                <Link to={slide.btn1.link} className="hero-btn">{slide.btn1.text}</Link>
                <Link to={slide.btn2.link} className="hero-btn outline">{slide.btn2.text}</Link>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span></span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;