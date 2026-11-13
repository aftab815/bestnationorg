import React, { useCallback, useEffect, useRef, useState } from 'react';
import ActionButton from '../common/ActionButton';
import educationLandscape1280 from '../../assets/hero/education-landscape-1280.webp';
import educationLandscape1920 from '../../assets/hero/education-landscape-1920.webp';
import educationPortrait720 from '../../assets/hero/education-portrait-720.webp';
import healthLandscape1280 from '../../assets/hero/health-landscape-1280.webp';
import healthLandscape1920 from '../../assets/hero/health-landscape-1920.webp';
import healthPortrait720 from '../../assets/hero/health-portrait-720.webp';
import skillsLandscape1280 from '../../assets/hero/skills-landscape-1280.webp';
import skillsLandscape1920 from '../../assets/hero/skills-landscape-1920.webp';
import skillsPortrait720 from '../../assets/hero/skills-portrait-720.webp';

const HERO_CONTENT = {
  title: 'Let\u2019s Pay Back to ',
  titleAccent: 'Pakistan',
  subtitle: {
    lead: 'Education, health and livelihood for a stronger Pakistan. Through ',
    focusOne: 'Education & Professional Skills',
    middle: ' and ',
    focusTwo: 'Health Awareness',
    tail: ', we help people build better lives and stronger communities.',
  },
  primaryCta: { label: 'Donate Now', to: '/donate' },
  secondaryCta: { label: 'View Programs', to: '/programs' },
  trustStrip: '7-Tier Governance \u00b7 24 Committees \u00b7 Transparent Impact',
  slides: [
    {
      id: 'education',
      alt: 'Students in blue uniforms reading at wooden desks in a classroom',
      landscape1280: educationLandscape1280,
      landscape1920: educationLandscape1920,
      portrait720: educationPortrait720,
      /* object-position: desktop center 55%, phone center 50% */
      objDesktop: 'center 55%',
      objPhone: 'center 50%',
    },
    {
      id: 'health',
      alt: 'Nurse giving an injection to a masked patient',
      landscape1280: healthLandscape1280,
      landscape1920: healthLandscape1920,
      portrait720: healthPortrait720,
      /* object-position: desktop 35% 25%, phone 35% 30% */
      objDesktop: '35% 25%',
      objPhone: '35% 30%',
    },
    {
      id: 'skills',
      alt: 'Student working at a computer in a school computer lab',
      landscape1280: skillsLandscape1280,
      landscape1920: skillsLandscape1920,
      portrait720: skillsPortrait720,
      /* object-position: desktop 35% 30%, phone 35% 30% */
      objDesktop: '35% 30%',
      objPhone: '35% 30%',
    },
  ],
};

const AUTOPLAY_MS = 6000;
const CROSSFADE_MS = 700;
const SWIPE_THRESHOLD = 40;
const SLIDE_COUNT = HERO_CONTENT.slides.length;

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setPrefersReducedMotion(event.matches);
    if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', handleChange);
    else mediaQuery.addListener(handleChange);
    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener('change', handleChange);
      else mediaQuery.removeListener(handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

const useDocumentHidden = () => {
  const [isDocumentHidden, setIsDocumentHidden] = useState(() => document.visibilityState === 'hidden');

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentHidden(document.visibilityState === 'hidden');
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isDocumentHidden;
};

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [slideOneLoaded, setSlideOneLoaded] = useState(false);
  const [remainingSlidesLoaded, setRemainingSlidesLoaded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDocumentHidden = useDocumentHidden();
  const firstImageRef = useRef(null);
  const touchStart = useRef(null);

  const isAutoplayActive =
    !prefersReducedMotion &&
    !isHovered &&
    !isFocusWithin &&
    !isDocumentHidden &&
    slideOneLoaded &&
    remainingSlidesLoaded;

  useEffect(() => {
    const image = firstImageRef.current;
    if (image && image.complete && image.naturalWidth > 0) setSlideOneLoaded(true);
  }, []);

  useEffect(() => {
    if (!slideOneLoaded || remainingSlidesLoaded) return undefined;

    let isCancelled = false;
    let idleId;
    let timeoutId;
    let fallbackId;
    let scheduled = false;

    const start = () => {
      if (!isCancelled) setRemainingSlidesLoaded(true);
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(start, { timeout: 2500 });
      } else {
        timeoutId = window.setTimeout(start, 200);
      }
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
      fallbackId = window.setTimeout(schedule, 6000);
    }

    return () => {
      isCancelled = true;
      window.removeEventListener('load', schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
    };
  }, [slideOneLoaded, remainingSlidesLoaded]);

  useEffect(() => {
    if (!isAutoplayActive) return undefined;
    const timer = window.setInterval(() => {
      setCurrentSlide((index) => (index + 1) % SLIDE_COUNT);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isAutoplayActive, currentSlide]);

  useEffect(() => {
    if (prefersReducedMotion) setCurrentSlide(0);
  }, [prefersReducedMotion]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goToPrevious = () => goToSlide(currentSlide - 1);
  const goToNext = () => goToSlide(currentSlide + 1);

  const handleFocus = (event) => {
    if (event.target.matches(':focus-visible')) setIsFocusWithin(true);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false);
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType === 'mouse') setIsHovered(true);
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === 'mouse') setIsHovered(false);
  };

  const handleKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return;
    goToSlide(currentSlide + (deltaX < 0 ? 1 : -1));
  };

  return (
    <>
      <section
        className="home-hero"
        aria-labelledby="home-hero-title"
        role="region"
        aria-roledescription="carousel"
        aria-label="Best Nation Welfare Organisation highlights"
        style={{ '--hero-fade-duration': `${CROSSFADE_MS}ms` }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
      >
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <h1 id="home-hero-title" className="home-hero__title">
              {HERO_CONTENT.title}
              <span className="home-hero__title-accent">{HERO_CONTENT.titleAccent}</span>
            </h1>
            <p className="home-hero__sub">
              {HERO_CONTENT.subtitle.lead}
              <strong>{HERO_CONTENT.subtitle.focusOne}</strong>
              {HERO_CONTENT.subtitle.middle}
              <strong>{HERO_CONTENT.subtitle.focusTwo}</strong>
              {HERO_CONTENT.subtitle.tail}
            </p>
            <div className="home-hero__actions">
              <ActionButton
                to={HERO_CONTENT.primaryCta.to}
                variant="primary"
                size="md"
                icon="fas fa-heart"
                className="hero-btn"
              >
                {HERO_CONTENT.primaryCta.label}
              </ActionButton>
              <ActionButton
                to={HERO_CONTENT.secondaryCta.to}
                variant="secondary"
                size="md"
                icon="fas fa-arrow-right"
                className="hero-btn"
              >
                {HERO_CONTENT.secondaryCta.label}
              </ActionButton>
            </div>
          </div>

          <div className="home-hero__media">
            <div className="home-hero__slides" aria-live={isAutoplayActive ? 'off' : 'polite'}>
              {HERO_CONTENT.slides.map((slide, index) => {
                const isActive = index === currentSlide;
                const shouldRenderImage = index === 0 || remainingSlidesLoaded;

                return (
                  <div
                    key={slide.id}
                    className={`home-hero__slide${isActive ? ' is-active' : ''}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${SLIDE_COUNT}`}
                    aria-hidden={isActive ? undefined : true}
                  >
                    {shouldRenderImage && (
                      <picture>
                        <source media="(max-width: 767px)" srcSet={slide.portrait720} />
                        <img
                          ref={index === 0 ? firstImageRef : undefined}
                          className="home-hero__img"
                          src={slide.landscape1920}
                          srcSet={`${slide.landscape1280} 1280w, ${slide.landscape1920} 1920w`}
                          sizes="(max-width: 767px) 100vw, 100vw"
                          width="1920"
                          height="1080"
                          alt={slide.alt}
                          loading="eager"
                          fetchpriority={index === 0 ? 'high' : 'low'}
                          decoding="async"
                          style={{
                            '--obj-desktop': slide.objDesktop,
                            '--obj-phone': slide.objPhone,
                          }}
                          onLoad={index === 0 ? () => setSlideOneLoaded(true) : undefined}
                        />
                      </picture>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="home-hero__controls">
              <button
                type="button"
                className="home-hero__arrow"
                aria-label="Previous slide"
                onClick={goToPrevious}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                  <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                className="home-hero__arrow"
                aria-label="Next slide"
                onClick={goToNext}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                  <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="home-hero-trust" role="note">
        {HERO_CONTENT.trustStrip}
      </div>
    </>
  );
};

export default HomeHero;
