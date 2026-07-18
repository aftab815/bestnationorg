import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/bb bnwo.jpeg';
import './PageBanner.css';

const PageBanner = ({ title, breadcrumb }) => {
  return (
    <section className="page-banner">
      <div className="container banner-inner">
        <div className="banner-left">
          <img src={logo} alt="BNWO Logo" className="page-banner-logo" />
          <h1>{title}</h1>
        </div>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fas fa-chevron-right"></i>
          <span>{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;