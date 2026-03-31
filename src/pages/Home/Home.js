import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import NewsCard from '../../components/NewsCard/NewsCard';
import Partners from '../../components/Partners/Partners';
import { services, eventsData, newsData } from '../../data/siteData';
import './Home.css';

const chamberEvent =
  eventsData.find((e) => e.title.toLowerCase().includes('chamber')) || eventsData[0];

const Home = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <section className="home-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>About BNWO</h2>
              <span className="highlight">Best Nation Welfare Organisation</span>
              <p>Our vision at BNWO is to create a society where every individual has access to the education, healthcare, and livelihood opportunities, regardless of their background or circumstances. We envision a future where compassion,</p>
              <ul className="about-features">
                <li><i className="fas fa-check-circle"></i> IT skills & training</li>
                <li><i className="fas fa-check-circle"></i> Community Support</li>
                <li><i className="fas fa-check-circle"></i> Research Engagement</li>
                <li><i className="fas fa-check-circle"></i> Policy Influence</li>
                <li><i className="fas fa-check-circle"></i> Education Programs</li>
                <li><i className="fas fa-check-circle"></i> Network Building</li>
              </ul>
              <Link to="/about" className="btn-primary">Read More About Us <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="about-side">
              <div className="side-shape large">
                <h3>7</h3>
                <p>Years of<br/>Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <div className="underline"></div>
            <p>Our key areas of work focused on improving lives and creating lasting positive change</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (<ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} />))}
          </div>
        </div>
      </section>
      <Stats />
      <section className="home-news">
        <div className="container">
          <div className="section-title">
            <h2>Latest News & Updates</h2>
            <div className="underline"></div>
            <p>Stay informed about our latest activities and community events</p>
          </div>
          <div className="home-news-grid">
            {newsData.slice(0, 3).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <article className="home-event-feature">
            <div className="home-event-feature-image">
              <img src={chamberEvent.image} alt={chamberEvent.title} />
            </div>
            <div className="home-event-feature-body">
              <h3>{chamberEvent.title}</h3>
              <div className="home-event-feature-meta">
                <span><i className="fas fa-calendar-alt"></i> {chamberEvent.date}</span>
                <span><i className="fas fa-clock"></i> {chamberEvent.time}</span>
                <span><i className="fas fa-map-marker-alt"></i> {chamberEvent.location}</span>
              </div>
              <p>{chamberEvent.description}</p>
              <Link to="/events" className="btn-primary">
                View All Events <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <Partners />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Home;