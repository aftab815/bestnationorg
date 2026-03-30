import React from 'react';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Newsletter from '../../components/Newsletter/Newsletter';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const focusAreas = [
    {
      id: 1,
      icon: 'fas fa-graduation-cap',
      title: 'Education & Training',
      description: 'Building schools, providing scholarships, and empowering through knowledge.',
      highlights: ['15 Schools', '2000+ Students'],
    },
    {
      id: 2,
      icon: 'fas fa-notes-medical',
      title: 'Healthcare & Awareness',
      description: 'Medical camps, health awareness, and community health initiatives.',
      highlights: ['25 Medical Camps', '5000+ Patients'],
    },
    {
      id: 3,
      icon: 'fas fa-people-carry',
      title: 'Community Development',
      description: 'Infrastructure projects, skill development, and community empowerment.',
      highlights: ['10 Villages', '1000+ Families'],
    },
  ];

  const currentProjects = [
    {
      id: 1,
      title: 'Best Nation IT & Skill Institutes & Universities',
      description: 'Modern IT labs, vocational training, and university partnerships so young people gain digital skills, certifications, and pathways to dignified careers.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80',
      stats: ['Skill Courses', 'Youth Trained'],
      status: 'Ongoing',
    },
    {
      id: 2,
      title: 'Health Awareness, Ambulance Service & clean water Program',
      description: 'Community health camps, emergency ambulance support, and clean drinking water initiatives to protect lives and prevent disease in underserved areas.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80',
      stats: ['Health Camps', 'Water Points'],
      status: 'Ongoing',
    },
    {
      id: 3,
      title: 'Darul Rehmat for orphans & special childs',
      description: 'Safe shelter, education, therapy, and daily care for orphans and children with special needs—built on compassion, dignity, and long-term support.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80',
      stats: ['Children Supported', 'Care Programs'],
      status: 'Ongoing',
    },
    {
      id: 4,
      title: 'Best Nation Taleem Dost & literacy Program',
      description: 'Non-formal education, adult literacy, and learning support for out-of-school children so every family can read, write, and access better opportunities.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80',
      stats: ['Learners', 'Learning Centers'],
      status: 'Ongoing',
    },
    {
      id: 5,
      title: 'clean green & Drug Free Pakistan',
      description: 'Tree plantation, waste awareness, and anti-drug campaigns that mobilize youth and communities for a healthier, greener, and addiction-free Pakistan.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80',
      stats: ['Trees Planted', 'Awareness Drives'],
      status: 'Ongoing',
    },
    {
      id: 6,
      title: 'Best Nation Entrepreneurship & Employment Program',
      description: 'Micro-enterprise support, internships, and job-linkage activities that help individuals start small businesses and find stable employment.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80',
      stats: ['Startups Supported', 'Jobs Linked'],
      status: 'Ongoing',
    },
    {
      id: 7,
      title: 'Quran-o-Sunat Awareness Spiritual Healings Program',
      description: 'Quranic education, Sunnah-based guidance, and spiritual counseling sessions that strengthen faith, family values, and emotional well-being.',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&q=80',
      stats: ['Sessions', 'Beneficiaries'],
      status: 'Ongoing',
    },
    {
      id: 8,
      title: 'Dialysis Center , Blood Bank & Thallassemia Centers',
      description: 'Affordable dialysis, voluntary blood donation, and thalassemia screening and care—reducing suffering for patients who need long-term medical support.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80',
      stats: ['Patients Served', 'Donation Drives'],
      status: 'Ongoing',
    },
    {
      id: 9,
      title: 'Youth & Women Empowerment Programs',
      description: 'Leadership workshops, vocational skills, and safe spaces for young people and women to learn, earn, and participate fully in community life.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
      stats: ['Youth Engaged', 'Women Skilled'],
      status: 'Ongoing',
    },
    {
      id: 10,
      title: 'Parenting & Teachers Training Program',
      description: 'Practical parenting sessions and teacher capacity-building so families and schools work together for better child development and learning outcomes.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80',
      stats: ['Parents Trained', 'Workshops'],
      status: 'Ongoing',
    },
    {
      id: 11,
      title: 'Sports & Cultural Programs',
      description: 'Sports leagues, fitness activities, and cultural events that keep youth active, build teamwork, and celebrate heritage and creativity.',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900&q=80',
      stats: ['Events', 'Participants'],
      status: 'Ongoing',
    },
    {
      id: 12,
      title: 'Human Rights,Legal Support & nikkah falah Program',
      description: 'Legal awareness, pro-bono support where possible, and guidance on marriage registration and family welfare aligned with rights and dignity.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80',
      stats: ['Cases Guided', 'Legal Clinics'],
      status: 'Ongoing',
    },
  ];

  return (
    <div className="whatwedo-page">
      <section className="wwd-intro">
        <div className="container">
          <div className="section-title">
            <h2>Our Focus Areas</h2>
            <div className="underline"></div>
            <p>We work across multiple sectors to create comprehensive impact.</p>
          </div>
          <div className="wwd-focus-grid">
            {focusAreas.map((area) => (
              <article key={area.id} className={`wwd-focus-card wwd-focus-card--${area.id}`}>
                <i className={area.icon}></i>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="wwd-tags">
                  {area.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wwd-projects">
        <div className="container">
          <div className="section-title section-title-light">
            <h2>Current Projects</h2>
            <div className="underline"></div>
            <p>These projects are actively running and making an impact.</p>
          </div>
          <div className="wwd-project-grid">
            {currentProjects.map((project) => (
              <article key={project.id} className="wwd-project-card">
                <div className="wwd-project-image-wrap">
                  <img src={project.image} alt={project.title} className="wwd-project-image" />
                  <span className="wwd-badge">{project.status}</span>
                </div>
                <div className="wwd-project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="wwd-tags">
                    {project.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>
                  <button type="button" className="wwd-btn">Learn More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wwd-approach">
        <div className="container">
          <div className="section-title">
            <h2>Our Delivery Approach</h2>
            <div className="underline"></div>
          </div>
          <div className="approach-grid">
            <div className="approach-card"><div className="approach-step">1</div><h3>Assess</h3><p>We identify real community needs through consultation and field data.</p></div>
            <div className="approach-card"><div className="approach-step">2</div><h3>Plan</h3><p>We design projects with clear outcomes, timelines, and accountability.</p></div>
            <div className="approach-card"><div className="approach-step">3</div><h3>Deliver</h3><p>We implement through trained teams and local partnerships.</p></div>
            <div className="approach-card"><div className="approach-step">4</div><h3>Scale</h3><p>We measure impact and expand successful models sustainably.</p></div>
          </div>
        </div>
      </section>
      <Stats />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default WhatWeDo;