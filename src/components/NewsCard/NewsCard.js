import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={news.image} alt={news.title} />
        {news.category && <span className="news-category">{news.category}</span>}
      </div>
      <div className="news-card-body">
        <div className="news-card-meta">
          <span><i className="fas fa-calendar-alt"></i> {news.date}</span>
          <span><i className="fas fa-user"></i> {news.author}</span>
        </div>
        <h3><Link to="/news">{news.title}</Link></h3>
        <p>{news.excerpt}</p>
        <Link to="/news" className="read-more">Read More <i className="fas fa-arrow-right"></i></Link>
      </div>
    </div>
  );
};

export default NewsCard;