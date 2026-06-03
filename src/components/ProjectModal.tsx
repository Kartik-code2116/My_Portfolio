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
    'Mediconnect — Appointment OS': {
      role: 'Lead UI/UX Developer & System Integrator',
      challenge: 'The medical team had scheduling collision issues where double bookings occurred during high traffic. High-latency database querying made scheduling unresponsive.',
      solution: 'Rebuilt slot-allocation hooks using React context and optimized MongoDB compound index logic to check availability in O(1) latency before staging reservations.',
      architecture: [
        'React Context & Stateful Hooks',
        'Node.js & Express REST Endpoints',
        'MongoDB indexing patterns'
      ],
      metrics: [
        'Collision rates dropped from 6% to 0%',
        'Page weight optimized for 3G loads in under 1.5s',
        '99% positive feedback during hospital trials'
      ]
    },
    'MLSE Club Experience Portal': {
      role: 'UI Designer & Frontend Engineer',
      challenge: 'The club had stale media content and no unified place to showcase ongoing student machine learning project milestones and registration events.',
      solution: 'Crafted a digital-first story flow with lazy-loaded timeline elements and embeddable code sandbox case studies using responsive grid designs.',
      architecture: [
        'HTML5 & Modern CSS grids',
        'Vanilla JS scroll orchestration',
        'Performance optimized media lazy loading'
      ],
      metrics: [
        'Increased visitor session times by 120%',
        '3,000+ registration inputs captured in 1 week',
        'Achieved 100/100 Lighthouse performance metrics'
      ]
    },
    'Product Dashboard': {
      role: 'Frontend UI Engineer',
      challenge: 'Legacy analytics software contained dense, unreadable grid data that violated WCAG accessibility compliance standards for color contrast and assistive screen-readers.',
      solution: 'Designed an ARIA-compliant dashboard using fully styled SVG charts with high-contrast palette toggle patterns.',
      architecture: [
        'React & Component-level scoping',
        'Chart.js svg drawing hooks',
        'ARIA-compliant accessibility layout'
      ],
      metrics: [
        '100% WCAG 2.1 AA Compliance Score',
        'Load time optimized under 150ms',
        'Accessible color modes mapped dynamically'
      ]
    },
    'Mess App': {
      role: 'Full Stack Flutter Developer',
      challenge: 'Students living in common hostels struggled to track rotating mess bills, menu schedules, and budget allocations in static shared spreadsheets.',
      solution: 'Built a cross-platform Flutter application backed by Firebase Realtime Database triggers for automatic price index splits.',
      architecture: [
        'Flutter & Dart framework',
        'Firebase Realtime Database triggers',
        'Firebase OAuth authentication'
      ],
      metrics: [
        'Active user count grew to 350+ students in 1 month',
        'Synced price updates with less than 40ms lag',
        'Zero ledger discrepancies reported across semesters'
      ]
    },
    'AI Image Assistant': {
      role: 'AI Researcher & DevOps Developer',
      challenge: 'Marketing and design teams spent upwards of 10 hours weekly manually sorting, tag-naming, and uploading raw image assets to repository directories.',
      solution: 'Integrated a TensorFlow visual analysis pipeline inside a Flask backend triggered by Git triggers for automated nightly cataloging.',
      architecture: [
        'Python & Flask microservice',
        'TensorFlow pre-trained classification models',
        'GitHub Actions continuous pipeline integration'
      ],
      metrics: [
        'Saved creative teams 10+ manual labor hours weekly',
        '94.2% catalog categorization accuracy achieved',
        'Automated 12,000+ directory asset tagging routines'
      ]
    },
    'Portfolio CMS': {
      role: 'Backend Creator',
      challenge: 'Standard content tools are bulky, slow down initial page loads, and introduce vulnerabilities through unmonitored dependencies.',
      solution: 'Configured a minimal, lightweight markdown CMS tailored for developers using Prisma ORM with secured PostgreSQL databases.',
      architecture: [
        'TypeScript API design',
        'Prisma client schema mapping',
        'PostgreSQL relationship indexing'
      ],
      metrics: [
        'Reduced database payload transfer weight to 1.1KB',
        '10x faster loads compared to traditional systems',
        'Protected markdown render sandbox parameters'
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
