import React, { useState } from 'react';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { eventsData } from '../../data/siteData';
import './Events.css';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? eventsData : eventsData.filter((e) => e.status === filter);

  return (
    <div className="events-page">
      <section className="events-section">
        <div className="container">
          <div className="section-title"><h2>Our Events</h2><div className="underline"></div><p>Join us at our upcoming events</p></div>
          <div className="event-filters">
            <button className={"filter-btn " + (filter === 'all' ? "active" : "")} onClick={() => setFilter('all')}>All Events</button>
            <button className={"filter-btn " + (filter === 'upcoming' ? "active" : "")} onClick={() => setFilter('upcoming')}>Upcoming</button>
            <button className={"filter-btn " + (filter === 'past' ? "active" : "")} onClick={() => setFilter('past')}>Past Events</button>
          </div>
          <div className="events-grid">
            {filtered.map((e) => (
              <div key={e.id} className="event-card">
                <div className="event-image">
                  <img src={e.image} alt={e.title} />
                  <span className={"event-status " + e.status}>{e.status === 'upcoming' ? 'Upcoming' : 'Past Event'}</span>
                </div>
                <div className="event-body">
                  <h3>{e.title}</h3>
                  <div className="event-details">
                    <div className="event-detail"><i className="fas fa-calendar-alt"></i><span>{e.date}</span></div>
                    <div className="event-detail"><i className="fas fa-clock"></i><span>{e.time}</span></div>
                    <div className="event-detail"><i className="fas fa-map-marker-alt"></i><span>{e.location}</span></div>
                  </div>
                  <p>{e.description}</p>
                  {e.status === 'upcoming' && <button className="btn-primary">Register Now</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Events;