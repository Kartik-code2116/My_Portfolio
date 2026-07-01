import React, { useEffect } from 'react';

interface ProjectModalProps {
  projectTitle: string;
  onClose: () => void;
}

interface CaseStudyDetails {
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: string[];
  role: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectTitle, onClose }) => {
  // Prevent page scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Close on escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const caseStudies: Record<string, CaseStudyDetails> = {
    'EduReport (Startup Initiative)': {
      role: 'Founder / Lead Developer',
      challenge: 'Educators in Maharashtra State Board schools spent countless hours manually calculating grades and generating yearly academic reports, leading to delays and errors.',
      solution: 'Developed the "EduReport" application to digitize the process, engineering a scalable system to securely manage student records and calculate performance metrics accurately.',
      architecture: [
        'Java core logic',
        'Scalable data management',
        'Secure student record handling'
      ],
      metrics: [
        'Streamlined grading process significantly',
        'Automated report generation for Grades 1–10',
        'Ensured accurate yearly performance metrics'
      ]
    },
    'Student Mess Management System': {
      role: 'Android Developer',
      challenge: 'Local food messes relied on manual bookkeeping to track daily operations, student meal plans, and subscription renewals, leading to discrepancies.',
      solution: 'Developed a centralized, digital Android app with an intuitive user interface that allows mess owners to seamlessly monitor subscriptions and attendance.',
      architecture: [
        'Java Android Development',
        'Centralized digital tracking',
        'Intuitive User Interface'
      ],
      metrics: [
        'Eliminated manual bookkeeping',
        'Streamlined daily student attendance',
        'Simplified subscription renewals'
      ]
    },
    'WildTrack AI': {
      role: 'Backend & Android Developer',
      challenge: 'Wildlife monitoring lacked real-time, accurate animal detection with immediate alerts to ensure safety in specific locations.',
      solution: 'Engineered a monitoring system using ML models for animal detection, backed by a JavaScript server and a Kotlin Android app for location-based alerts.',
      architecture: [
        'Kotlin (Android Client)',
        'JavaScript (Backend Server)',
        'Machine Learning Models'
      ],
      metrics: [
        'Real-time accurate animal detection',
        'Immediate location-based safety alerts',
        'Efficient live ML prediction processing'
      ]
    },
    'Adaptive Deepfake Detection & Zoom Clone': {
      role: 'Full Stack AI Developer',
      challenge: 'Online meetings faced risks of impersonation and cheating due to sophisticated deepfakes that were difficult to detect in real-time.',
      solution: 'Built a custom video conferencing app integrating a real-time ML model using gaze biometrics to ensure media authenticity without disrupting the call.',
      architecture: [
        'Python Video Processing',
        'Machine Learning (Gaze Biometrics)',
        'Low-latency video streaming'
      ],
      metrics: [
        'Analyzed live video with minimal latency',
        'Prevented impersonation in active calls',
        'Maintained smooth user communication'
      ]
    },
    'Live Face Swap Integration': {
      role: 'Computer Vision Developer',
      challenge: 'Achieving seamless, realistic face swaps on live video streams requires high computational efficiency and accurate facial landmark mapping.',
      solution: 'Created a real-time application utilizing advanced Computer Vision algorithms and optimized ML models to accurately transpose faces during live execution.',
      architecture: [
        'Python',
        'Advanced Computer Vision algorithms',
        'Optimized ML model training'
      ],
      metrics: [
        'Maintained high frame rates',
        'Ensured smooth facial transformations',
        'Accurate facial landmark mapping'
      ]
    },
    'MediConnect (Hospital Management System)': {
      role: 'Frontend Developer',
      challenge: 'Patients faced long wait times and physical lines outside clinics due to inefficient queue management and appointment scheduling.',
      solution: 'Designed and developed a responsive frontend web interface for appointment booking to streamline patient intake and improve efficiency.',
      architecture: [
        'HTML5 & CSS3',
        'Responsive UI/UX Design',
        'Digital scheduling platform'
      ],
      metrics: [
        'Reduced patient physical wait times',
        'Streamlined hospital outpatient intake',
        'Delivered foundational platform architecture'
      ]
    }
  };

  const study = caseStudies[projectTitle] || {
    role: 'Developer',
    challenge: 'Solving user interaction complexities.',
    solution: 'Crafted structured web solutions tailored to client specifications.',
    architecture: ['React & CSS', 'Clean architecture principles'],
    metrics: ['Optimal responsiveness', 'Clean code verification']
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(5, 5, 8, 0.85)',
        backdropFilter: 'blur(12px)',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel" 
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '40px',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
        >
          ✕
        </button>

        <span className="section-title" style={{ marginBottom: '8px' }}>Project Case Study</span>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{projectTitle}</h2>
        <span 
          style={{ 
            fontSize: '0.9rem', 
            color: 'var(--primary-color)', 
            fontWeight: '600',
            display: 'block', 
            marginBottom: '32px' 
          }}
        >
          Role: {study.role}
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>The Challenge</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{study.challenge}</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>The Solution</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{study.solution}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Architecture Stack</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {study.architecture.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', position: 'relative', paddingLeft: '18px' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Engineering Metrics</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {study.metrics.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', position: 'relative', paddingLeft: '18px' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>★</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
