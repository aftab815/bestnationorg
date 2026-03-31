import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus({ type: 'error', message: data.message || 'Subscription failed. Please try again.' });
      } else {
        setStatus({ type: 'success', message: data.message || 'Subscribed successfully.' });
        setEmail('');
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Could not connect to subscription service. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
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
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>
          {status.message ? (
            <p className={"newsletter-status " + status.type} role="status" aria-live="polite">
              {status.message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;