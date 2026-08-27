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
      title: 'WildTrack AI',
      category: 'Academic & Research',
      desc: 'A real-time wildlife monitoring and alert system utilizing edge-cloud hybrid processing for rural intrusion detection. Features YOLOv8 ML inference and low-latency push notifications.',
      tags: ['Kotlin', 'JavaScript', 'YOLOv8'],
      linkText: 'View Case Study'
    },
    {
      title: 'EduReport',
      category: 'Personal Experiment',
      desc: 'A comprehensive mobile platform enabling teachers to streamline attendance, CCE grades, and automated progress report generation using scalable NoSQL databases.',
      tags: ['Java', 'Firebase Firestore'],
      linkText: 'View Case Study'
    },
    {
      title: 'AURA',
      category: 'Personal Experiment',
      desc: 'A personal finance and daily goal tracking application that uses a directed graph node-based layout to accurately model complex financial relationships and monetary flows.',
      tags: ['Dart'],
      linkText: 'View Case Study'
    },
    {
      title: 'Deepfake Detection Platform',
      category: 'Academic & Research',
      desc: 'An adaptive real-time deepfake detection pipeline integrated into a video conferencing interface using gaze biometric analysis and advanced computer vision.',
      tags: ['Python', 'OpenCV', 'MediaPipe'],
      linkText: 'View Case Study'
    },
    {
      title: 'Messapp',
      category: 'Personal Experiment',
      desc: 'A mobile application designed to manage food mess menus, student subscription plans, and daily meal selections with secure backend data systems.',
      tags: ['Java', 'Firebase Firestore'],
      linkText: 'View Case Study'
    },
    {
      title: 'UrbanGuard / CivicPulse AI',
      category: 'Academic & Research',
      desc: 'A zero-trust identity-aware security architecture for managing city infrastructure APIs and access controls, featuring robust RBAC models.',
      tags: ['TypeScript'],
      linkText: 'View Case Study'
    },
    {
      title: 'BG Verify',
      category: 'Academic & Research',
      desc: 'An industry background verification project utilizing Agentic AI and Retrieval-Augmented Generation (RAG).',
      tags: ['AI', 'Agentic AI', 'RAG'],
      linkText: 'View Case Study'
    },
    {
      title: 'AI-Powered Security Assistant',
      category: 'Academic & Research',
      desc: 'An AI-powered security assistant designed for safe URL and document analysis to identify and mitigate potential threats.',
      tags: ['AI', 'Security'],
      linkText: 'View Case Study'
    }
  ];

  const timelineData = [
    { sem: 'Sem 1', title: 'Mediconnect', desc: 'Skills Developed: Web Development, UI/UX Design, and foundational technical concepts.' },
    { sem: 'Sem 2', title: 'Skill Development Phase', desc: 'Deepened my knowledge in core technologies. Realized that persistence is the vehicle you arrive in. "The only way to do great work is to love what you do."' },
    { sem: 'Sem 3', title: 'WildTrack AI', desc: 'Skills Developed: Android App Development, Machine Learning model integration, Kotlin, and YOLOv8.' },
    { sem: 'Sem 4', title: 'Deepfake Detection Platform', desc: 'Skills Developed: Python, OpenCV, MediaPipe, Machine Learning, and Computer Vision.' },
    { sem: 'Sem 5', title: 'AI & Security', desc: 'Developed BG Verify (Agentic AI & RAG) and an AI-Powered Security Assistant for safe URL and document analysis.' },
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
