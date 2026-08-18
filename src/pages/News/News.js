import React, { useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import { eventsData } from '../../data/siteData';
import newsHero from '../../assets/hero4.jpeg';
import './News.css';

const newsData = eventsData.map((event, index) => ({
  ...event,
  author: 'BNWO Communications',
  category: index % 2 === 0 ? 'Field Update' : 'Community News',
  excerpt: event.description,
  content: event.description,
}));

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  if (selectedNews) {
    return (
      <div className="news-page">
        <section className="news-detail">
          <div className="container">
            <button className="back-btn" onClick={() => setSelectedNews(null)}><i className="fas fa-arrow-left"></i> Back to News</button>
            <div className="news-detail-content">
              <div className="news-detail-image"><img src={selectedNews.image} alt={selectedNews.title} /></div>
              <div className="news-detail-meta">
                <span><i className="fas fa-calendar-alt"></i> {selectedNews.date}</span>
                <span><i className="fas fa-user"></i> {selectedNews.author}</span>
                <span><i className="fas fa-tag"></i> {selectedNews.category}</span>
              </div>
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.content}</p>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
    );
  }

  return (
    <div className="news-page">
      {/* ── Bespoke Modern News Hero ──────────────── */}
      <section className="news-hero-modern">
        <div className="news-hero-bg">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80" alt="BNWO News & Updates" />
          <div className="news-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="news-hero-content">
            <div className="news-hero-badge">
              <span className="live-pulse-dot"></span>
              <span>Official Media Desk &bull; Press Releases &bull; Field Updates</span>
            </div>
            <h1>Latest News &amp; Updates</h1>
            <p>
              Stay informed with official dispatches, MoU signings, parliamentary activations,
              and community uplift dispatches from across Pakistan.
            </p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <div className="section-title"><h2>Latest News</h2><div className="underline"></div><p>Stay informed about our latest activities</p></div>
          <div className="news-page-grid">
            {newsData.map((n) => (
              <div key={n.id} className="news-page-card" onClick={() => setSelectedNews(n)}>
                <div className="news-page-image">
                  <img src={n.image} alt={n.title} />
                  <span className="news-page-category">{n.category}</span>
                </div>
                <div className="news-page-body">
                  <div className="news-page-meta">
                    <span><i className="fas fa-calendar-alt"></i> {n.date}</span>
                    <span><i className="fas fa-user"></i> {n.author}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                  <span className="read-more">Read More <i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default News;
