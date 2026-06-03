import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const tempErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error dynamically
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        await addDoc(collection(db, "contacts"), {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: serverTimestamp()
        });
        console.log("Contact submission saved in Firestore successfully!");
      } catch (err) {
        console.error("Could not write document to Firestore database:", err);
      }
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span className="section-title">Contact</span>
        <h2>Let's Build Something Together</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Open to internship cycles, freelance proposals, and research collaborations.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="glass-panel contact-info">
          <div>
            <span className="hero-highlight">Available For Work</span>
            <h3 style={{ fontSize: '1.6rem', marginTop: '8px', marginBottom: '16px' }}>Contact Channels</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              If you have an idea, feel free to write to me. I generally respond within 24 hours.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <strong>Email</strong>
              <p><a href="mailto:kartik.thorat24@vit.edu">kartik.thorat24@vit.edu</a></p>
            </div>
            
            <div className="contact-item">
              <strong>Phone</strong>
              <p><a href="tel:+918329785830">+91 8329785830</a></p>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="contact-item">
              <strong>Hours</strong>
              <p>Mon — Sat · 10:00 AM to 8:00 PM IST</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <a 
              href="https://linkedin.com/in/Kartik-Thorat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
              style={{ flex: 1, padding: '10px 0' }}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Kartik-code2116" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
              style={{ flex: 1, padding: '10px 0' }}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="glass-panel">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Send a message</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
            Fill out the form below with your project specifics or questions, and I'll review it.
          </p>

          {isSubmitted && (
            <div className="form-success">
              Message sent successfully! I'll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your project details or inquiries..."
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
