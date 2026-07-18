import React from 'react';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import './About.css';

const About = () => {


  return (
    <div className="about-page">
      <section className="about-intro" id="about">
        <div className="container">
          <div className="about-intro-content">
            <span className="about-intro-kicker">Best Nation Welfare Organization</span>
            <h1>About Us</h1>
            <div className="underline-left about-intro-title-line" />
            <div className="about-intro-highlights">
              <span><i className="fas fa-hands-helping" aria-hidden="true"></i> Community-led</span>
              <span><i className="fas fa-bullhorn" aria-hidden="true"></i> Advocacy</span>
              <span><i className="fas fa-map-marked-alt" aria-hidden="true"></i> Pakistan-wide reach</span>
            </div>
            <p>
              Welcome to Best Nation Welfare Organisation (BNWO), where compassion meets action to create positive change
              in communities across Pakistan and beyond. With a steadfast commitment to serve humanity, BNWO is dedicated to uplift
              the underprivileged, providing essential services, and fostering sustainable development.
            </p>
            <p>
              Through education, collaboration, and strategic engagement, we build informed communities that drive better
              health outcomes, influence policy, and create sustainable impact.
            </p>
          </div>
        </div>
      </section>
      <section className="about-vision">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-card"><i className="fas fa-eye"></i><h3>Our Vision</h3><p>Our vision at BNWO is to create a society where every individual has access to the education, healthcare, and livelihood opportunities, regardless of their background or circumstances. We envision a future where compassion.</p></div>
            <div className="vision-card"><i className="fas fa-bullseye"></i><h3>Our Goals</h3><p>To build a strong network of informed community advocates and to influence health policy at all levels.</p></div>
            <div className="vision-card"><i className="fas fa-chart-line"></i><h3>Our Impact</h3><p>Over 20 years of advocacy, influencing treatment guidelines and empowering thousands of advocates.</p></div>
          </div>
        </div>
      </section>
      <section className="about-mission" id="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <div className="underline-left"></div>
              <p>At BNWO, our mission is to enable communities, promote social welfare, and alleviate poverty through holistic and sustainable interventions. Through our various programs and initiatives, we aim to address the root causes of inequality and injustice, while nurturing a culture of empathy, compassion, and solidarity. By enabling individuals and communities to become agents of change, we strive to create a ripple effect of positive transformation that extends far beyond our immediate reach, touching the lives of countless individuals and families...</p>
              <div className="mission-values">
                <div className="value-item"><i className="fas fa-heart"></i><h4>Compassion</h4><p>We put people first</p></div>
                <div className="value-item"><i className="fas fa-shield-alt"></i><h4>Integrity</h4><p>Honesty and transparency</p></div>
                <div className="value-item"><i className="fas fa-hands-helping"></i><h4>Collaboration</h4><p>Working together</p></div>
                <div className="value-item"><i className="fas fa-lightbulb"></i><h4>Innovation</h4><p>Creative solutions</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <section className="about-history" id="history">
        <div className="container">
          <div className="section-title"><h2>Our History</h2><div className="underline"></div><p>Key milestones in our journey</p></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-content"><h3>2019</h3><h4>BNWO Founded</h4><p>Established to give communities a voice in HIV treatment decisions.</p></div></div>
            <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-content"><h3>2020</h3><h4>First National Conference</h4><p>Over 200 community advocates from across the PK.</p></div></div>
            <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-content"><h3>2022</h3><h4>Policy Influence</h4><p>Successfully influenced national treatment guidelines.</p></div></div>
            <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-content"><h3>2023</h3><h4>International Partnership</h4><p>Partnerships with international organizations.</p></div></div>
            <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-content"><h3>2025</h3><h4>Continuing the Mission</h4><p>Over 5,000 members nationwide.</p></div></div>
          </div>
        </div>
      </section>
      <CTA />
      <Newsletter />
    </div>
  );
};

export default About;