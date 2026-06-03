import React, { useState } from 'react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'expertise' | 'skills' | 'education'>('expertise');

  const expertiseData = [
    {
      title: 'User-Centered Design',
      desc: 'Rapid prototyping, design systems, and interaction patterns that balance joy with clarity.',
      items: ['Figma co-design sessions', 'High-fidelity prototypes', 'Quantitative + qualitative feedback loops']
    },
    {
      title: 'Full Stack Delivery',
      desc: 'React + Node.js + Firebase stack orchestrated with clean architecture.',
      items: ['API design & authentication', 'Database modeling (SQL & NoSQL)', 'Testing, monitoring, documentation']
    },
    {
      title: 'AI Research & Automation',
      desc: 'Proof-of-concepts, data pipelines, and assistive automation for creative workflows.',
      items: ['TensorFlow / PyTorch notebooks', 'Automation scripts (Python + shell)', 'Model deployment on Firebase & cloud']
    }
  ];

  const educationData = [
    {
      title: 'VIT Pune | Bachelor of Artificial Intelligence',
      subtitle: '2024 — 2028 · CGPA: 8.5',
      desc: 'Research focus on AI-driven interfaces and human-computer interaction. Building scalable coursework projects and assisting in labs.'
    },
    {
      title: 'Infosys Certifications',
      subtitle: 'Continuous learning credentials',
      desc: 'Front-End Web Developer · Artificial Intelligence Foundation · Agile Fundamentals.'
    },
    {
      title: 'Additional Academics',
      subtitle: 'RMD / Davkhare College',
      desc: 'Science stream with foundation in mathematics and problem-solving.'
    }
  ];

  return (
    <section id="about" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">About Me</span>
        <h2>Bridging AI Research with Product Engineering</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem' }}>
          I turn curiosity into clean code. As an AI student, I bring depth in data modeling and intelligence alongside a passion for modern, responsive user interfaces and full-stack product release cycles.
        </p>
      </div>

      <div className="tab-container">
        <button 
          className={`tab-btn ${activeTab === 'expertise' ? 'active' : ''}`}
          onClick={() => setActiveTab('expertise')}
        >
          Core Expertise
        </button>
        <button 
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills & Tools
        </button>
        <button 
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education & Credentials
        </button>
      </div>

      <div style={{ minHeight: '380px' }}>
        {activeTab === 'expertise' && (
          <div className="services-grid" style={{ animation: 'slideUp 0.4s ease-out' }}>
            {expertiseData.map((exp, idx) => (
              <div key={idx} className="glass-panel service-card">
                <h3>
                  <span style={{ color: 'var(--primary-color)' }}>0{idx + 1}.</span> {exp.title}
                </h3>
                <p>{exp.desc}</p>
                <ul>
                  {exp.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="glass-panel" style={{ animation: 'slideUp 0.4s ease-out', display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '20px', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>Frontend & Core Stack</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'React & React Native', level: 88 },
                    { name: 'TypeScript & JavaScript', level: 85 },
                    { name: 'HTML5 & CSS3 (Sass)', level: 95 },
                    { name: 'Tailwind CSS', level: 90 }
                  ].map((s, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                        <span>{s.name}</span>
                        <span style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-mono)' }}>{s.level}%</span>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.level}%`, background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))', borderRadius: '4px', boxShadow: '0 0 8px var(--primary-glow)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '20px', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>Backend & Data / AI</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'Node.js & Express.js', level: 85 },
                    { name: 'Python (Flask / Scripts)', level: 80 },
                    { name: 'Firebase Sync & Authentication', level: 90 },
                    { name: 'TensorFlow & Machine Learning', level: 78 }
                  ].map((s, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                        <span>{s.name}</span>
                        <span style={{ color: 'var(--secondary-color)', fontFamily: 'var(--font-mono)' }}>{s.level}%</span>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.level}%`, background: 'linear-gradient(90deg, var(--secondary-color), var(--accent-color))', borderRadius: '4px', boxShadow: '0 0 8px var(--secondary-glow)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Other Toolkit & DevOps</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {['Git & GitHub', 'VS Code', 'Figma co-design', 'PostgreSQL', 'MongoDB', 'GitHub Actions', 'PyTorch', 'OpenCV', 'Pandas & NumPy'].map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="glass-panel" style={{ animation: 'slideUp 0.4s ease-out', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {educationData.map((edu, idx) => (
              <div 
                key={idx} 
                style={{ 
                  borderBottom: idx !== educationData.length - 1 ? '1px solid var(--border-color)' : 'none', 
                  paddingBottom: idx !== educationData.length - 1 ? '20px' : '0' 
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>{edu.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', display: 'block', marginBottom: '10px', fontWeight: '500' }}>{edu.subtitle}</span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{edu.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
