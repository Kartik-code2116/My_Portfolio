import React from 'react';

interface Repo {
  name: string;
  desc: string;
  stars: number;
  forks: number;
  tags: string[];
  githubUrl: string;
}

export const OpenSource: React.FC = () => {
  const repos: Repo[] = [
    {
      name: "firebase-react-sync-hooks",
      desc: "Lightweight React hooks to synchronize collections with Firebase databases, optimizing component rendering thresholds.",
      stars: 142,
      forks: 18,
      tags: ['React', 'TypeScript', 'Firebase'],
      githubUrl: "https://github.com/Kartik-code2116"
    },
    {
      name: "tf-flask-edge-boilerplate",
      desc: "Fast configuration template for serving pruned convolutional models over Flask microservice environments.",
      stars: 98,
      forks: 32,
      tags: ['Python', 'Flask', 'TensorFlow', 'Docker'],
      githubUrl: "https://github.com/Kartik-code2116"
    },
    {
      name: "vite-typewriter-prompt",
      desc: "CSS-first typing effects library designed for custom terminal prompts and documentation dashboards.",
      stars: 76,
      forks: 9,
      tags: ['CSS', 'Vanilla JS', 'Vite'],
      githubUrl: "https://github.com/Kartik-code2116"
    }
  ];

  return (
    <section id="opensource" className="section container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">Open Source</span>
        <h2>Libraries & Tool contributions</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
          Open repositories, utilities, and developer components published to public indexes.
        </p>
      </div>

      <div className="projects-grid">
        {repos.map((repo, idx) => (
          <div key={idx} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-color)', marginBottom: '12px' }}>
              {repo.name}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1 }}>
              {repo.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
              {repo.tags.map((tag, tIdx) => (
                <span key={tIdx} className="skill-tag">{tag}</span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                <span>★ {repo.stars}</span>
                <span>⑂ {repo.forks}</span>
              </div>
              <a 
                href={repo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card-link"
                style={{ fontSize: '0.85rem' }}
              >
                GitHub Repo &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
