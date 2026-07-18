import React, { useEffect, useState } from 'react';
import './NewsletterAdmin.css';

const NewsletterAdmin = () => {
  const [adminKey, setAdminKey] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch('/api/newsletter/stats');
        const data = await res.json();
        if (res.ok) {
          setCount(data.count || 0);
        }
      } catch (err) {
        // ignore stats errors on UI
      }
    };
    loadStats();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setSending(true);

    try {
      const res = await fetch('/api/newsletter/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey, subject, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: 'error', message: data.message || 'Failed to send emails.' });
      } else {
        setStatus({ type: 'success', message: data.message || 'Emails sent successfully.' });
        setSubject('');
        setMessage('');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Server not reachable. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="newsletter-admin-page">
      <div className="container">
        <div className="newsletter-admin-card">
          <h1>Newsletter Broadcast Panel</h1>
          <p className="admin-subtitle">
            Send one email from web panel to all subscribed users.
          </p>
          <p className="admin-count">Current subscribers: {count}</p>

          <form className="newsletter-admin-form" onSubmit={handleSend}>
            <label>Admin Key</label>
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Enter admin key"
              required
            />

            <label>Email Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Example: Ramadan food drive update"
              required
            />

            <label>Email Message</label>
            <textarea
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message for all subscribers..."
              required
            />

            <button className="btn-primary" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send to All Subscribers'}
            </button>
          </form>

          {status.message ? (
            <p className={`admin-status ${status.type}`}>{status.message}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default NewsletterAdmin;
