import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/siteData';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={"hero-slide " + (index === currentSlide ? "active" : "")}
        >
          <img className="hero-img" src={slide.bg} alt={slide.title} />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <div className="hero-buttons">
              <Link to={slide.btn1.link} className="hero-btn">{slide.btn1.text}</Link>
              <Link to={slide.btn2.link} className="hero-btn outline">{slide.btn2.text}</Link>
            </div>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <div key={index} className={"dot " + (index === currentSlide ? "active" : "")} onClick={() => setCurrentSlide(index)}></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;