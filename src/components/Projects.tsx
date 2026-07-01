import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';

type ProjectCategory = 'all' | 'academic' | 'personal';

interface Project {
  title: string;
  category: 'Academic & Research' | 'Personal Experiment';
  desc: string;
  tags: string[];
  linkText?: string;
  linkUrl?: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projectsData: Project[] = [
    {
      title: 'EduReport (Startup Initiative)',
      category: 'Personal Experiment',
      desc: 'Founded a startup initiative to digitize and automate the generation of yearly academic reports for Maharashtra State Board schools.',
      tags: ['Java', 'Scalable Architecture'],
      linkText: 'View Case Study'
    },
    {
      title: 'Student Mess Management System',
      category: 'Personal Experiment',
      desc: 'Developed an Android application to streamline daily operations, subscription tracking, and student record management for local food messes.',
      tags: ['Java', 'Android', 'Firebase'],
      linkText: 'View Case Study'
    },
    {
      title: 'WildTrack AI',
      category: 'Academic & Research',
      desc: 'Real-time wildlife monitoring and mobile notification system utilizing Machine Learning models for accurate animal detection.',
      tags: ['Kotlin', 'JavaScript', 'Machine Learning'],
      linkText: 'View Case Study'
    },
    {
      title: 'Adaptive Deepfake Detection & Zoom Clone',
      category: 'Academic & Research',
      desc: 'Built a live video conferencing application integrated with a real-time Machine Learning model to detect deepfakes during active calls.',
      tags: ['Python', 'Machine Learning', 'Computer Vision'],
      linkText: 'View Case Study'
    },
    {
      title: 'Live Face Swap Integration',
      category: 'Personal Experiment',
      desc: 'Created a real-time Face Swap application using advanced Computer Vision algorithms, designed for integration into live video calling systems.',
      tags: ['Python', 'Computer Vision', 'Machine Learning'],
      linkText: 'View Case Study'
    },
    {
      title: 'MediConnect (Hospital Management System)',
      category: 'Academic & Research',
      desc: 'Designed and developed the frontend web interface for a hospital queue management system aimed at reducing patient wait times.',
      tags: ['HTML', 'CSS', 'UI/UX'],
      linkText: 'View Case Study'
    }
  ];

  const timelineData = [
    { sem: 'Sem 1', title: 'Mediconnect', desc: 'Skills Developed: Web Development, UI/UX Design, and foundational technical concepts.' },
    { sem: 'Sem 2', title: 'Skill Development Phase', desc: 'Deepened my knowledge in core technologies. Realized that persistence is the vehicle you arrive in. "The only way to do great work is to love what you do."' },
    { sem: 'Sem 3', title: 'Animal Detection App', desc: 'Skills Developed: Android App Development, Machine Learning model integration, and Kotlin.' },
    { sem: 'Sem 4', title: 'Deepfake Learning', desc: 'Skills Developed: React.js, Machine Learning, Computer Vision, and other related AI concepts.' },
    { sem: 'Continuous', title: 'Lifelong Learning', desc: '"Success is not final, failure is not fatal: it is the courage to continue that counts." Always pushing the boundaries of my skills.' }
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'academic') return proj.category === 'Academic & Research';
    if (filter === 'personal') return proj.category === 'Personal Experiment';
    return true;
  });

  return (
    <section id="projects" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">Projects</span>
        <h2>Work Samples & Prototypes</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Explore my catalog of projects spanning academic research collaborations and personal coding experiments.
        </p>
      </div>

      <div className="tab-container">
        <button 
          className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`tab-btn ${filter === 'academic' ? 'active' : ''}`}
          onClick={() => setFilter('academic')}
        >
          Academic & Research
        </button>
        <button 
          className={`tab-btn ${filter === 'personal' ? 'active' : ''}`}
          onClick={() => setFilter('personal')}
        >
          Personal Experiments
        </button>
      </div>

      <div className="projects-grid" style={{ minHeight: '320px', marginBottom: '80px' }}>
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="glass-panel project-card" style={{ animation: 'slideUp 0.4s ease-out' }}>
            <span className="skill-tag category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-card-tags">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="skill-tag">{tag}</span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: 'auto' }}>
              <button 
                onClick={() => setActiveProject(project.title)} 
                className="project-card-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none', textAlign: 'left' }}
              >
                View Case Study &rarr;
              </button>
              {project.linkUrl && (
                <a 
                  href={project.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-card-link"
                  style={{ opacity: 0.8 }}
                >
                  GitHub Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', margin: '80px 0 48px' }}>
        <span className="section-title">Timeline</span>
        <h2>Academic & Growth Highlights</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          A roadmap of my build milestones, skill development, and motivational lessons learned.
        </p>
      </div>

      <div className="timeline">
        {timelineData.map((item, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h4>{item.sem}</h4>
              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{item.title}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal 
          projectTitle={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </section>
  );
};
