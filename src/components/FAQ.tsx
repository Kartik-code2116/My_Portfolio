import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Are you open to remote internships or relocations?",
      answer: "Yes, I am fully open to remote software development roles, summer internship cycles, and relocation opportunities within India (including Bangalore, Mumbai, Delhi-NCR, Hyderabad, and Pune)."
    },
    {
      question: "What is your stack preference for scaling new platforms?",
      answer: "I am highly comfortable with React, React Native, and TypeScript for the frontend, Node.js, Express, and Python for the backend, and Firebase or PostgreSQL/MongoDB for persistence. For machine learning pipelines, I build using TensorFlow and PyTorch."
    },
    {
      question: "Do you offer freelance development or digital consulting?",
      answer: "Yes, I collaborate with small businesses and early-stage startups on design system setups, rapid UI prototyping, API integrations, and proof-of-concept AI integrations. Reach out through the contact form to discuss scope."
    },
    {
      question: "How can recruiters arrange an interview with you?",
      answer: "The fastest way is by using the Contact form below or emailing me directly at kartik.thorat24@vit.edu. I check my inbox daily and will get back to you within 24 hours."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="section-title">FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}>
          Quick answers to inquiries regarding availability, engineering stack, and work setup.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{ 
                padding: '0', 
                overflow: 'hidden', 
                textAlign: 'left',
                border: isOpen ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
                boxShadow: isOpen ? '0 10px 20px rgba(0, 229, 255, 0.04)' : 'none',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleFAQ(idx)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  padding: '24px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <span>{faq.question}</span>
                <span 
                  style={{ 
                    fontSize: '1.4rem', 
                    color: isOpen ? 'var(--primary-color)' : 'var(--text-secondary)',
                    transition: 'var(--transition-fast)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div 
                  style={{ 
                    padding: '0 24px 24px 24px', 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    animation: 'slideUp 0.3s ease-out'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
