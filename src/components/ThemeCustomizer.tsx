import React, { useState, useEffect } from 'react';

interface ThemeCustomizerProps {
  particlesEnabled: boolean;
  setParticlesEnabled: (enabled: boolean) => void;
}

type ActiveTheme = 'cyan' | 'pink' | 'matrix' | 'purple';

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  particlesEnabled,
  setParticlesEnabled
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ActiveTheme>('cyan');

  useEffect(() => {
    // Clear previous theme classes
    document.documentElement.classList.remove('theme-cyan', 'theme-pink', 'theme-matrix', 'theme-purple');
    // Apply current theme
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  const themes: { id: ActiveTheme; label: string; primaryColor: string }[] = [
    { id: 'cyan', label: 'Cyan Glow', primaryColor: '#00e5ff' },
    { id: 'pink', label: 'Cyber Pink', primaryColor: '#ff2a74' },
    { id: 'matrix', label: 'Matrix Green', primaryColor: '#39ff14' },
    { id: 'purple', label: 'Vivid Violet', primaryColor: '#b026ff' }
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
    >
      {/* Settings Panel */}
      {isOpen && (
        <div 
          className="glass-panel" 
          style={{
            padding: '20px',
            width: '240px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            textAlign: 'left'
          }}
        >
          <div>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Accent Palette</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: theme === t.id ? 'var(--primary-color)' : 'transparent',
                    background: theme === t.id ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    textAlign: 'left',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <span 
                    style={{ 
                      width: '10px', 
                      height: '10px', 
                      borderRadius: '50%', 
                      background: t.primaryColor,
                      display: 'inline-block' 
                    }}
                  />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Ambient Setup</h4>
            <label 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                fontSize: '0.85rem', 
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <input
                type="checkbox"
                checked={particlesEnabled}
                onChange={(e) => setParticlesEnabled(e.target.checked)}
                style={{ 
                  accentColor: 'var(--primary-color)',
                  width: '15px',
                  height: '15px'
                }}
              />
              Particle Canvas
            </label>
          </div>
        </div>
      )}

      {/* Settings Toggle Gear Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
          color: '#050508',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '1.4rem',
          boxShadow: '0 8px 24px rgba(0, 229, 255, 0.25)',
          transition: 'var(--transition-smooth)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08) rotate(30deg)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
        aria-label="Customize theme"
      >
        {isOpen ? '✕' : '⚙'}
      </button>
    </div>
  );
};
