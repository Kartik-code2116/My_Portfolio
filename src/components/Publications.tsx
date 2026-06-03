import React from 'react';

interface Publication {
  title: string;
  journal: string;
  date: string;
  abstract: string;
  doi?: string;
  link?: string;
}

export const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: "Conflict-Free Appointment Allocation Patterns in Decentralized Clinical Systems",
      journal: "Journal of Medical Systems & Software Engineering (JMSSE)",
      date: "May 2025",
      abstract: "This paper introduces a distributed transaction pipeline designed to resolve doctor-patient scheduling conflicts in low-connectivity rural health networks. Tested under the Mediconnect project framework.",
      doi: "10.1007/s10916-025-1823-y"
    },
    {
      title: "HCI Paradigms: Color Contrast Adaptations in Screen-Reader Analytics Environments",
      journal: "Student Research Forum - Human-Computer Interaction (VIT Pune)",
      date: "November 2024",
      abstract: "A quantitative assessment evaluating dashboard interaction speeds for visually impaired users. Demonstrates dynamic ARIA grid mappings designed for complex data charts.",
      doi: "10.1109/HCI.2024.9928"
    },
    {
      title: "Lightweight Automated Image Tagging via Pruned Edge Neural Networks",
      journal: "Open Source AI Engineering Journal",
      date: "March 2025",
      abstract: "Proposes an optimized execution model wrapping a pruned MobileNet convolutional neural network inside a Flask micro-container. Showcases 94% accuracy scores on edge servers.",
      doi: "10.2139/ssrn.481203"
    }
  ];

  return (
    <section id="publications" className="section container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">Research</span>
        <h2>Academic & Research Publications</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Documenting academic inquiries and software prototypes in peer-reviewed contexts.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
        {publications.map((pub, idx) => (
          <div key={idx} className="glass-panel" style={{ textAlign: 'left', padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', flex: '1' }}>{pub.title}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{pub.date}</span>
            </div>
            
            <span style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)', display: 'block', marginBottom: '16px' }}>
              Published in: {pub.journal}
            </span>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
              <strong>Abstract:</strong> {pub.abstract}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              {pub.doi && (
                <code style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  DOI: {pub.doi}
                </code>
              )}
              <a 
                href="#contact" 
                className="project-card-link"
                style={{ fontSize: '0.85rem' }}
              >
                Request Preprint &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
