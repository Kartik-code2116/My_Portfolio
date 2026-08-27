import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  isSinglePage?: boolean;
  onProjectsClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isSinglePage, onProjectsClick }) => {
  const stats = [
    { value: '3+', label: 'Years Programming' },
    { value: '10+', label: 'Projects Completed' },
    { value: 'AI / ML', label: 'Specialization' },
    { value: 'Full Stack', label: 'Development' }
  ];

  return (
    <section id="home" className="section container">
      <div className="hero-wrapper">
        <div className="hero-info">
          <div className="hero-highlight">Software Engineer · AI Enthusiast</div>
          <h1 style={{ fontSize: '3.2rem' }}>
            Building scalable systems and <span className="text-gradient">intelligent solutions.</span>
          </h1>
          <p>
            I'm Kartik Thorat, a Computer Science student at VIT Pune. 
            I specialize in Full Stack Development, Artificial Intelligence, and Machine Learning. Passionate about translating complex problems into clean, high-performance software.
          </p>
          
          <div className="hero-actions">
            {isSinglePage ? (
              <button onClick={onProjectsClick} className="btn primary">
                See Projects
              </button>
            ) : (
              <Link to="/projects" className="btn primary">
                See Projects
              </Link>
            )}
            <a href="/Kartik Resume (1st Year).pdf" download className="btn secondary">
              Download Resume
            </a>
          </div>

          <div className="stat-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3>{stat.value}</h3>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-frame">
            <img src="/Kartik_img (2) (1).jpg" alt="Kartik Thorat" />
          </div>
        </div>
      </div>
    </section>
  );
};
