import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, bgImage }) => {
  return (
    <div
      className="service-card"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="service-card__overlay"></div>
      <div className="service-card__content">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-card__footer">
          <span className="service-card__link">
            Explore Program <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;