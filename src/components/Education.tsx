import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'Bachelor of Technology (Computer Science)',
      institution: 'Vishwakarma Institute of Technology, Pune',
      year: '2023 - 2027',
      details: 'Relevant Coursework: Data Structures & Algorithms, Machine Learning, Computer Vision, Artificial Intelligence, Database Management Systems.',
    },
    {
      degree: 'High School Diploma (HSC)',
      institution: 'State Board',
      year: '2021 - 2023',
      details: 'Focus on Physics, Chemistry, and Mathematics. Graduated with honors.',
    }
  ];

  return (
    <section id="education" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">Academic Background</span>
        <h2>Education</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          My academic qualifications and foundational learning journey.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {educationData.map((edu, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{edu.degree}</h3>
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--primary-color)' }}>{edu.institution}</span>
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                {edu.year}
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              {edu.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
