import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/siteData';
import flettisImage from '../../assets/flettis/3.jpg';
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

            <aside className="hero-panel">
              <div className="hero-panel__image-wrapper">
                <img src={flettisImage} alt="BNWO Event" className="hero-panel__image" />
              </div>
              <div className="hero-panel__label">BNWO Impact</div>
              <div className="hero-panel__headline">Trusted support with measurable progress.</div>
              <ul className="hero-panel__list">
                <li>
                  <strong>150+</strong>
                  <span>Community initiatives</span>
                </li>
                <li>
                  <strong>2,800+</strong>
                  <span>Families reached</span>
                </li>
                <li>
                  <strong>40+</strong>
                  <span>Partner organizations</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      ))}

      <div className="hero-controls">
        <button className="hero-arrow hero-arrow--prev" onClick={() => changeSlide(currentSlide - 1)} aria-label="Previous slide">
          <span>&#10094;</span>
        </button>
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={"dot " + (index === currentSlide ? 'active' : '')}
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="hero-arrow hero-arrow--next" onClick={() => changeSlide(currentSlide + 1)} aria-label="Next slide">
          <span>&#10095;</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;