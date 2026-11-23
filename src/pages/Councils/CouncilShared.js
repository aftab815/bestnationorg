import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import '../Events/Events.css';

export const CouncilBreadcrumb = ({ items }) => (
  <nav className="council-breadcrumb" aria-label="Breadcrumb">
    {items.map((item, index) => (
      <React.Fragment key={`${item.label}-${index}`}>
        {index > 0 ? (
          <span className="council-breadcrumb__sep" aria-hidden="true">
            &rsaquo;
          </span>
        ) : null}
        {item.to ? (
          <Link to={item.to}>{item.label}</Link>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export const CouncilHero = ({ kicker, title, subtitle, breadcrumbItems, meta }) => (
  <section className="council-hero">
    <div className="container">
      {breadcrumbItems ? <CouncilBreadcrumb items={breadcrumbItems} /> : null}
      {kicker ? <span className="council-hero__kicker">{kicker}</span> : null}
      <h1>{title}</h1>
      {subtitle ? <p className="council-hero__subtitle">{subtitle}</p> : null}
      {meta ? <div className="council-hero__meta">{meta}</div> : null}
    </div>
  </section>
);

export const CouncilPage = ({ children }) => (
  <div className="council-page">
    {children}
    <CTA />
    <Newsletter />
  </div>
);

export const CouncilListCard = ({ to, title, subtitle, badge }) => (
  <Link to={to} className="council-list-card">
    <div className="council-list-card__icon" aria-hidden="true">
      <i className="fas fa-landmark"></i>
    </div>
    <div className="council-list-card__body">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    {badge ? <span className="council-list-card__badge">{badge}</span> : null}
    <i className="fas fa-arrow-right council-list-card__arrow" aria-hidden="true"></i>
  </Link>
);

export const CouncilEventCard = ({ event }) => (
  <article className="event-card council-event-card">
    <div className="event-image">
      {event.image ? (
        <img src={event.image} alt={event.title} loading="lazy" />
      ) : (
        <div className="council-event-placeholder" aria-hidden="true">
          <i className="fas fa-image"></i>
        </div>
      )}
      <span className="event-status past">Past Event</span>
    </div>
    <div className="event-body">
      <h3>{event.title}</h3>
      <div className="event-details">
        <div className="event-detail">
          <i className="fas fa-calendar-alt"></i>
          <span>{event.date}</span>
        </div>
      </div>
      <p>{event.description}</p>
    </div>
  </article>
);

export const CouncilEventsGrid = ({ events }) => {
  if (!events.length) {
    return (
      <div className="council-empty" role="status">
        <div className="council-empty__icon" aria-hidden="true">
          <i className="fas fa-calendar-plus"></i>
        </div>
        <h2>Events will be published soon</h2>
        <p>This council&rsquo;s past events will appear here as soon as they are added.</p>
      </div>
    );
  }

  return (
    <div className="events-grid council-events-grid">
      {events.map((event) => (
        <CouncilEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export const ComingSoonBlock = ({ title, message }) => (
  <div className="council-coming-soon">
    <div className="council-coming-soon__icon" aria-hidden="true">
      <i className="fas fa-hourglass-half"></i>
    </div>
    <span className="council-coming-soon__badge">Coming soon</span>
    <h2>{title}</h2>
    <p>{message}</p>
    <Link to="/councils" className="btn btn-primary">
      Back to All Councils
    </Link>
  </div>
);

export const CouncilNotFound = ({ title, backTo, backLabel }) => (
  <div className="council-empty">
    <div className="council-empty__icon" aria-hidden="true">
      <i className="fas fa-map-signs"></i>
    </div>
    <h2>{title}</h2>
    <p>We could not find the council you were looking for.</p>
    <Link to={backTo} className="btn btn-primary">
      {backLabel}
    </Link>
  </div>
);
