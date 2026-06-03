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
      title: 'Mediconnect — Appointment OS',
      category: 'Academic & Research',
      desc: 'A responsive hospital appointment booking system with research-backed workflows, dynamic scheduling, and an analytics dashboard.',
      tags: ['React', 'Express', 'MongoDB'],
      linkText: 'View Project Details'
    },
    {
      title: 'MLSE Club Experience Portal',
      category: 'Academic & Research',
      desc: 'Reworked the MLSE club’s site with a digital-first story, event timelines, membership flows, and storytelling modules.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      linkText: 'View Launch Details'
    },
    {
      title: 'Product Dashboard',
      category: 'Academic & Research',
      desc: 'Interactive sales dashboard built with responsive chart elements, data visualization layers, and a focus on accessibility.',
      tags: ['React', 'Chart.js', 'Node.js'],
      linkText: 'Live Demo'
    },
    {
      title: 'Mess App',
      category: 'Personal Experiment',
      desc: 'A Flutter mobile application to track mess expenses, menu plans, and shareable summaries for college students.',
      tags: ['Flutter', 'Firebase'],
      linkText: 'Github Repository',
      linkUrl: 'https://github.com/Kartik-code2116/My-mess-1st-app?tab=readme-ov-file'
    },
    {
      title: 'AI Image Assistant',
      category: 'Personal Experiment',
      desc: 'A lightweight Flask tool that auto-tags and organizes large image libraries using pre-trained TensorFlow modules.',
      tags: ['Python', 'Flask', 'TensorFlow'],
      linkText: 'Open Source Code'
    },
    {
      title: 'Portfolio CMS',
      category: 'Personal Experiment',
      desc: 'A minimal content management system tailored for developer portfolios featuring markdown preview and API delivery.',
      tags: ['TypeScript', 'Prisma', 'PostgreSQL'],
      linkText: 'Try it out'
    }
  ];

  const timelineData = [
    { sem: 'Sem 1', title: 'Mediconnect', desc: 'Responsive hospital appointment & research paper in collaboration with ASEP.' },
    { sem: 'Sem 3', title: 'WildTrack', desc: 'Real-time animal detection dashboard with OpenWeatherMap integration.' },
    { sem: 'Sem 4', title: 'Deepfake Detection', desc: 'Platform to secure online interactions by showing trust levels based on facial verification.' },
    { sem: 'Sem 5', title: 'E-Commerce Dashboard', desc: 'Admin panel prototype for inventory and order insights using React + Node.' },
    { sem: 'Sem 7', title: 'Future Ideas', desc: 'Planning automation-focused systems for campus collaborators.' }
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
        <h2>Academic Highlights</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          A roadmap of my build milestones during my semesters at VIT Pune.
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
