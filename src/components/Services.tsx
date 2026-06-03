import React from 'react';

export const Services: React.FC = () => {
  const servicesData = [
    {
      title: 'UI / UX Design Systems',
      desc: 'Modern web interfaces built with accessible typography, optimized palettes, and fluid motion systems.',
      items: [
        'Responsive layout & grid designs',
        'Fluid micro-interactions & states',
        'Design-to-code handoff readiness'
      ]
    },
    {
      title: 'Full Stack Builds',
      desc: 'Production-ready releases from API configuration down to hosting setup with standard platforms.',
      items: [
        'Secure API & authentication workflows',
        'Database modeling (SQL & NoSQL)',
        'CI/CD pipeline configuration'
      ]
    },
    {
      title: 'AI & Automation',
      desc: 'Practical proof-of-concept models and automated data ingestion scripts ready for hosting.',
      items: [
        'TensorFlow & PyTorch pipelines',
        'Automated file & image tagging routines',
        'Model deployment on cloud environments'
      ]
    }
  ];

  return (
    <section id="services" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span className="section-title">Services</span>
        <h2>What I Regularly Deliver</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Providing services that scale with product growth, utilizing modern industry tools and design patterns.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div key={idx} className="glass-panel service-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
              <span className="text-gradient" style={{ fontWeight: '800' }}>0{idx + 1}.</span> {service.title}
            </h3>
            <p>{service.desc}</p>
            <ul>
              {service.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
