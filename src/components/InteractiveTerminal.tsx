import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export const InteractiveTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'Initializing Kartik.Dev Secure Shell [Version 1.4.2]...', type: 'success' },
    { text: "Type 'help' to view available operations.", type: 'output' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const jokes = [
    "Why do programmers wear glasses? Because they can't C#.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "['hip', 'hip'] (hip hip array!)",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
  ];

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `kartik@guest:~$ ${cmd}`, type: 'input' as const }];

    switch (trimmed) {
      case 'help':
        setHistory([
          ...newHistory,
          { text: 'Available commands:', type: 'success' },
          { text: '  about    - Summary of Kartik Thorat\'s profile', type: 'output' },
          { text: '  skills   - List technical stack expertise', type: 'output' },
          { text: '  projects - Catalog of recent builds', type: 'output' },
          { text: '  joke     - Dispense a programming pun', type: 'output' },
          { text: '  matrix   - Load matrix digital rain routine', type: 'output' },
          { text: '  clear    - Clear terminal logs', type: 'output' }
        ]);
        break;
      case 'about':
        setHistory([
          ...newHistory,
          { text: 'Kartik Thorat -- Full Stack Developer & AI Candidate at VIT Pune.', type: 'output' },
          { text: 'Passionate about engineering micro-interactions, designing clean UX systems, and training machine learning pipelines.', type: 'output' },
          { text: 'Location: Pune, Maharashtra, India. Respond guarantee: 24 hours.', type: 'output' }
        ]);
        break;
      case 'skills':
        setHistory([
          ...newHistory,
          { text: '=== FRONTEND ===', type: 'success' },
          { text: 'React, TypeScript, HTML5, CSS3, Tailwind, Sass, React Native', type: 'output' },
          { text: '=== BACKEND & AI ===', type: 'success' },
          { text: 'Node.js, Express, Python, Flask, Firebase, TensorFlow, PyTorch', type: 'output' },
          { text: '=== SYSTEMS & DATA ===', type: 'success' },
          { text: 'Git, VS Code, Figma, PostgreSQL, MongoDB, GitHub Actions CI/CD', type: 'output' }
        ]);
        break;
      case 'projects':
        setHistory([
          ...newHistory,
          { text: '=== Project Portfolio ===', type: 'success' },
          { text: '1. Mediconnect - Responsive Appointment booking system (React, Express, MongoDB)', type: 'output' },
          { text: '2. Mess App - Student meal cost tracking utility (Flutter, Firebase)', type: 'output' },
          { text: '3. AI Image Assistant - TensorFlow auto-tagging flask microservice', type: 'output' },
          { text: '4. Club Experience Portal - Event storytelling portal for VIT MLSE (HTML, CSS, JS)', type: 'output' }
        ]);
        break;
      case 'joke':
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setHistory([...newHistory, { text: randomJoke, type: 'output' }]);
        break;
      case 'matrix':
        setHistory([
          ...newHistory,
          { text: 'Loading Digital Rain Stream...', type: 'success' },
          { text: '01001011 01000001 01010010 01010100 01001001 01001011', type: 'success' },
          { text: 'SYS_SECURE_AUTH: Success. Connection established.', type: 'success' }
        ]);
        break;
      case 'clear':
        setHistory([]);
        break;
      case '':
        setHistory([...newHistory]);
        break;
      default:
        setHistory([
          ...newHistory,
          { text: `bash: command not found: '${cmd}'. Type 'help' for options.`, type: 'error' }
        ]);
    }
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="section container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="section-title">Developer Console</span>
        <h2>Interactive Sandbox</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}>
          Feel at home with terminal shells? Query my credentials directly using the retro command line console below.
        </p>
      </div>

      <div 
        className="glass-panel" 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0', 
          overflow: 'hidden', 
          borderRadius: '12px',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        {/* Terminal Header Bar */}
        <div 
          style={{ 
            background: '#12131a', 
            padding: '12px 18px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
          </div>
          <span 
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)',
              fontWeight: 500
            }}
          >
            kartik@guest:~ (bash)
          </span>
          <span style={{ width: '48px' }}></span>
        </div>

        {/* Terminal Screen Area */}
        <div 
          style={{ 
            background: 'rgba(10, 11, 16, 0.9)', 
            padding: '24px', 
            height: '340px', 
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            textAlign: 'left',
            color: '#39ff14' /* Retro terminal green */
          }}
          onClick={() => document.getElementById('terminal-input-focus')?.focus()}
        >
          {history.map((line, idx) => {
            let color = 'var(--text-secondary)';
            if (line.type === 'input') color = 'var(--text-primary)';
            else if (line.type === 'success') color = '#00ffcc';
            else if (line.type === 'error') color = 'var(--accent-color)';
            
            return (
              <div 
                key={idx} 
                style={{ 
                  color: color, 
                  lineHeight: '1.5', 
                  marginBottom: '6px',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {line.text}
              </div>
            );
          })}
          
          <form 
            onSubmit={(e) => { e.preventDefault(); handleCommand(inputVal); }}
            style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
          >
            <span style={{ color: 'var(--text-primary)', marginRight: '8px' }}>kartik@guest:~$</span>
            <input
              type="text"
              id="terminal-input-focus"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              autoComplete="off"
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#39ff14',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                flexGrow: 1,
                caretColor: '#39ff14'
              }}
            />
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </section>
  );
};
