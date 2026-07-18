import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../../data/siteData';
import './Stats.css';

const Stats = () => {
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        setAnimated(true);
        stats.forEach((stat, index) => {
          let start = 0;
          const step = stat.target / 100;
          const interval = setInterval(() => {
            start += step;
            if (start >= stat.target) { start = stat.target; clearInterval(interval); }
            setCounts((prev) => {
              const n = [...prev]; n[index] = Math.floor(start); return n;
            });
          }, 20);
        });
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-item">
              <i className={stat.icon}></i>
              <h3>{counts[index]}+</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;