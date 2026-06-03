import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const ringRef = useRef<HTMLDivElement | null>(null);
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Instantly update inner dot position
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // 2. Interpolate outer trailing ring with easing physics
    let animationFrameId: number;
    const updateRingPosition = () => {
      const ease = 0.18; // Speed coefficient to catch up
      
      const dx = position.x - ringPos.current.x;
      const dy = position.y - ringPos.current.y;
      
      ringPos.current.x += dx * ease;
      ringPos.current.y += dy * ease;
      
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(updateRingPosition);
    };
    
    updateRingPosition();

    // 3. Event Delegation for hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('textarea') || 
        target.closest('select') || 
        target.closest('[role="button"]') || 
        target.closest('.tab-btn') || 
        target.closest('.project-card-link');
        
      if (isInteractive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('textarea') || 
        target.closest('select') || 
        target.closest('[role="button"]') || 
        target.closest('.tab-btn') || 
        target.closest('.project-card-link');
        
      if (isInteractive) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing Outer Ring */}
      <div 
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
      />
      {/* Instant Inner Dot */}
      <div 
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};
