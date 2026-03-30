import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-text">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates, news, and resources delivered to your inbox</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">{subscribed ? 'Subscribed!' : 'Subscribe'}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;