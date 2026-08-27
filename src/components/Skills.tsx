import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Dart', 'Python', 'HTML/CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'Flutter', 'Tailwind CSS', 'OpenCV', 'MediaPipe']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'Firebase Firestore', 'REST APIs', 'YOLOv8', 'Docker', 'Figma']
    }
  ];

  return (
    <section id="skills" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-title">Expertise</span>
        <h2>Technical Skills</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Technologies and tools I leverage to build robust applications and intelligent systems.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '20px' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag" style={{ margin: 0 }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
