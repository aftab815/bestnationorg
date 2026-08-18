import React, { useState } from 'react';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import { eventsData } from '../../data/siteData';
import eventsHero from '../../assets/flettis/3.jpg';
import './Events.css';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filtered = filter === 'all'
    ? eventsData
    : eventsData.filter((e) => e.status === filter);

  return (
    <div className="events-page">
      {/* ── Bespoke Modern Events Hero ────────────── */}
      <section className="events-hero-modern">
        <div className="events-hero-bg">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80" alt="BNWO Events & Seminars" />
          <div className="events-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="events-hero-content">
            <div className="events-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>Field Outreach &bull; Seminars &bull; Community Drives</span>
            </div>
            <h1>BNWO Events &amp; Seminars</h1>
            <p>
              Explore our past and upcoming community welfare drives, institutional partnerships,
              and parliamentary coordination assemblies across Pakistan.
            </p>
            <div className="events-hero-filter-tabs">
              <button
                className={`event-hero-tab ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Gatherings ({eventsData.length})
              </button>
              <button
                className={`event-hero-tab ${filter === 'upcoming' ? 'active' : ''}`}
                onClick={() => setFilter('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`event-hero-tab ${filter === 'past' ? 'active' : ''}`}
                onClick={() => setFilter('past')}
              >
                Completed &amp; Highlights
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events Section ────────────────────── */}
      <section className="events-section">
        <div className="container">
          {/* Filter Pills */}
          <div className="event-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <i className="fas fa-layer-group"></i> All Gatherings ({eventsData.length})
            </button>
            <button
              className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setFilter('upcoming')}
            >
              <i className="fas fa-clock"></i> Upcoming Sessions
            </button>
            <button
              className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
              onClick={() => setFilter('past')}
            >
              <i className="fas fa-history"></i> Past Events
            </button>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {filtered.map((e) => (
              <div key={e.id} className="event-card">
                <div className="event-image">
                  <img src={e.image} alt={e.title} />
                  <span className={`event-status ${e.status}`}>
                    {e.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
                <div className="event-body">
                  <h3>{e.title}</h3>
                  <div className="event-details">
                    <div className="event-detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{e.date}</span>
                    </div>
                    <div className="event-detail">
                      <i className="fas fa-clock"></i>
                      <span>{e.time}</span>
                    </div>
                    <div className="event-detail">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{e.location}</span>
                    </div>
                  </div>
                  <p>{e.description}</p>
                  <div className="event-actions">
                    <button
                      className="event-view-btn"
                      onClick={() => setSelectedEvent(e)}
                    >
                      <i className="fas fa-images"></i> View Event Details
                    </button>
                    {e.status === 'upcoming' && (
                      <a
                        href="/contact"
                        className="btn-primary event-reg-btn"
                      >
                        Register Now <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Modal / Lightbox ───────────── */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal" onClick={(evt) => evt.stopPropagation()}>
            <button
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
            >
              <i className="fas fa-times"></i>
            </button>
            <span className={`event-status ${selectedEvent.status}`} style={{ marginBottom: '14px', display: 'inline-block' }}>
              {selectedEvent.status === 'upcoming' ? 'Upcoming Session' : 'Past Event Record'}
            </span>
            <h3>{selectedEvent.title}</h3>
            <div className="event-details modal-details">
              <div className="event-detail">
                <i className="fas fa-calendar-alt"></i>
                <span>{selectedEvent.date}</span>
              </div>
              <div className="event-detail">
                <i className="fas fa-clock"></i>
                <span>{selectedEvent.time}</span>
              </div>
              <div className="event-detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>{selectedEvent.location}</span>
              </div>
            </div>
            <p>{selectedEvent.fullDescription || selectedEvent.description}</p>

            {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
              <div className="modal-gallery-sec">
                <h4><i className="fas fa-camera"></i> Event Photo Gallery</h4>
                <div className="event-gallery">
                  {selectedEvent.gallery.map((img, idx) => (
                    <div key={idx} className="gallery-item">
                      <img src={img} alt={`${selectedEvent.title} photo ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <CTA />
      <Newsletter />
    </div>
  );
};

export default Events;