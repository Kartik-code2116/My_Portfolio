import React from 'react';

interface ExperienceLink {
  label: string;
  url: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  links?: ExperienceLink[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Industry Project',
      company: 'BG Verify (Agentic AI & RAG)',
      duration: 'Sem 5',
      description: [
        'Developed an AI-driven background verification system utilizing Agentic AI workflows.',
        'Implemented Retrieval-Augmented Generation (RAG) to accurately cross-reference and validate documents.',
      ],
    },
    {
      role: 'Machine Learning & Deep Learning',
      company: 'Deepfake Detection Platform',
      duration: 'Sem 4',
      description: [
        'Built an adaptive real-time deepfake detection pipeline integrated into video conferencing interfaces.',
        'Utilized gaze biometric analysis and advanced computer vision to identify manipulated media.',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Kartik-code2116/zoom-clone' }
      ]
    },
    {
      role: 'Software Developer',
      company: 'WildTrack AI',
      duration: 'Sem 3',
      description: [
        'Architected an edge-cloud hybrid processing system to detect wildlife intrusions in real time.',
        'Integrated YOLOv8 machine learning inference on a JavaScript backend with a native Kotlin Android application to deliver low-latency push notifications.',
      ],
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/Kartik-code2116/AnimalAlertApp' }
      ]
    },
    {
      role: 'Full Lifecycle Android Developer',
      company: 'EduReport (Startup Initiative)',
      duration: 'Personal',
      description: [
        'Handled full-lifecycle native Android development, from UI design to deploying the production application on the Google Play Console.',
        'Structured scalable NoSQL databases with Firebase Firestore to automate grading logic and manage vast amounts of student evaluation data securely.',
      ],
      links: [
        { label: 'Play Store App', url: 'https://play.google.com/store/apps/details?id=com.kartik.myschool' },
        { label: 'Website', url: 'https://edu-report.in' }
      ]
    },
    {
      role: 'Android Developer',
      company: 'Messapp',
      duration: 'Personal',
      description: [
        'Designed and developed a mobile application to manage food mess menus, student subscription plans, and daily meal selections.',
        'Implemented secure backend data systems and successfully deployed the application to the Google Play Store for active users.',
      ],
      links: [
        { label: 'Play Store App', url: 'https://play.google.com/store/apps/details?id=com.kartik.messapp' }
      ]
    },
  ];

  return (
    <section id="experience" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">Professional Journey</span>
        <h2>Work Experience</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          My professional history, key accomplishments, and deployed applications.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-panel" style={{ marginBottom: '24px', padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '4px' }}>{exp.role}</h3>
                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>{exp.company}</span>
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
                {exp.duration}
              </span>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: exp.links ? '20px' : '0' }}>
              {exp.description.map((desc, dIdx) => (
                <li key={dIdx} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', position: 'relative', paddingLeft: '20px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span>
                  {desc}
                </li>
              ))}
            </ul>

            {exp.links && (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {exp.links.map((link, lIdx) => (
                  <a 
                    key={lIdx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="skill-tag"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                  >
                    <span>🔗</span> {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
