import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface NavbarProps {
  isSinglePage?: boolean;
  setIsSinglePage?: (val: boolean) => void;
  activeSection?: string;
  onNavClick?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isSinglePage = false, setIsSinglePage, activeSection, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', id: 'home', label: 'Home' },
    { path: '/experience', id: 'experience', label: 'Experience' },
    { path: '/education', id: 'education', label: 'Education' },
    { path: '/skills', id: 'skills', label: 'Skills' },
    { path: '/projects', id: 'projects', label: 'Projects' },
    { path: '/contact', id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id?: string) => {
    setMobileMenuOpen(false);
    if (isSinglePage && onNavClick && id) {
      onNavClick(id);
    } else {
      window.scrollTo(0, 0); // scroll to top on multi-page navigate
    }
  };

  const toggleLayout = () => {
    if (setIsSinglePage) {
      setIsSinglePage(!isSinglePage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar" style={{ flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {isSinglePage ? (
              <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
                Kartik<span>.Dev</span>
              </a>
            ) : (
              <Link to="/" className="logo" onClick={() => handleLinkClick()}>
                Kartik<span>.Dev</span>
              </Link>
            )}

            {setIsSinglePage && (
              <button 
                onClick={toggleLayout}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Mode: {isSinglePage ? 'Single Page' : 'Multi-Page'}
              </button>
            )}
          </div>
          
          <button 
            className="nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                {isSinglePage ? (
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => handleLinkClick()}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
