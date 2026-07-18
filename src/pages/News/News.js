import React, { useState } from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import { newsData } from '../../data/siteData';
import './News.css';

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