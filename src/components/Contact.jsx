import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-eyebrow">// contact</span>
        <h2 className="section-title">Connect With Me</h2>
      </div>

      <div className="contact-grid">
        {/* Left — contact info */}
        <motion.div
          className="contact-info-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          <div className="info-cards-list">
            <motion.div className="info-card" variants={fadeUp} custom={0}>
              <div className="info-icon-box indigo-glow">
                <Mail size={16} />
              </div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <a href={`mailto:${email}`} className="info-value">{email}</a>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={fadeUp} custom={1}>
              <div className="info-icon-box teal-glow">
                <Phone size={16} />
              </div>
              <div className="info-details">
                <span className="info-label">Phone</span>
                <a href={`tel:${phone}`} className="info-value">{phone}</a>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={fadeUp} custom={2}>
              <div className="info-icon-box pink-glow">
                <MapPin size={16} />
              </div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">{location}</span>
              </div>
            </motion.div>
          </div>

          <motion.div className="contact-status-card" variants={fadeUp} custom={3}>
            <div className="status-indicator-wrapper">
              <span className="pulse-dot"></span>
              <h4>System Availability</h4>
            </div>
            <p>
              Active and exploring GenAI, Data Science, and Business Analyst roles. Drop a message to trigger an instant handshake request.
            </p>
            <div className="social-links-row">
              <a href={github} target="_blank" rel="noopener noreferrer" className="social-pill">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-pill">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hi Sonu, I reviewed your EduSense project and would love to connect..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`submit-btn ${status}`}
            >
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <Send size={14} className="btn-icon" />
                </>
              )}
              {status === 'sending' && (
                <>
                  <span>Sending…</span>
                  <span className="spinner"></span>
                </>
              )}
              {status === 'success' && (
                <>
                  <span>Message Sent</span>
                  <CheckCircle size={14} className="btn-icon text-teal" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
