import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarInitials: string;
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Kartik translated messy, raw requirements into a delightful, functional interface. He is always prepared to iterate, showing deep design sensibilities.",
      author: "Anjali Mehta",
      role: "Product Lead, ASEP Collabs",
      avatarInitials: "AM"
    },
    {
      quote: "His codebase reviews feel like professional engineering consulting. Kartik writes code built to scale and balances academic rigor with developer velocity.",
      author: "Prof. Sameer Patil",
      role: "AI Lead Coordinator, VIT Pune",
      avatarInitials: "SP"
    },
    {
      quote: "Outstanding frontend capacity and adaptive learning speeds. Kartik picked up complex React state hooks and API orchestration protocols in record time.",
      author: "Rajesh Kumar",
      role: "Director of Training, Infosys Campus Connect",
      avatarInitials: "RK"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="section-title">Endorsements</span>
        <h2>Client & Academic Feedback</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}>
          What collaborators, leads, and academic advisors say about our engineering cycles.
        </p>
      </div>

      <div 
        className="glass-panel" 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          position: 'relative',
          padding: '48px 60px',
          textAlign: 'center',
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <blockquote 
          style={{ 
            fontSize: '1.2rem', 
            fontStyle: 'italic', 
            color: 'var(--text-primary)', 
            marginBottom: '24px',
            lineHeight: '1.7',
            fontFamily: 'var(--font-sans)'
          }}
        >
          “{current.quote}”
        </blockquote>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', 
              color: '#050508',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem'
            }}
          >
            {current.avatarInitials}
          </div>
          <div style={{ textAlign: 'left' }}>
            <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '1rem' }}>{current.author}</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{current.role}</span>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button 
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
          aria-label="Previous testimonial"
        >
          &larr;
        </button>

        <button 
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
          aria-label="Next testimonial"
        >
          &rarr;
        </button>

        {/* Carousel Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: activeIndex === idx ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'var(--transition-fast)'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
