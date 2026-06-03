import React from 'react';

interface HeroProps {
  onProjectsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
  const stats = [
    { value: '08+', label: 'Semesters of build cycles' },
    { value: '15+', label: 'Client-facing projects' },
    { value: '24h', label: 'Response guarantee' },
    { value: '04', label: 'Active collaborations' }
  ];

  return (
    <section id="home" className="section container">
      <div className="hero-wrapper">
        <div className="hero-info">
          <div className="hero-highlight">Full Stack · UX-Led</div>
          <h1>
            Crafting digital experiences that <span className="text-gradient">feel personal</span> and function flawlessly.
          </h1>
          <p>
            I'm Kartik Thorat, a Full Stack Developer and Bachelor of AI student at VIT Pune.
            I build polished web, mobile, and AI-powered interfaces that translate ideas into clean code and high performance.
          </p>
          
          <div className="hero-actions">
            <button onClick={onProjectsClick} className="btn primary">
              See Projects
            </button>
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
