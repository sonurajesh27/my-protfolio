import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemV = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  const { name, tagline, titles, bio, profilePic, resumeUrl, paperUrl, github, linkedin, email } = portfolioData.personalInfo;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTitleIndex(p => (p + 1) % titles.length), 3000);
    return () => clearInterval(t);
  }, [titles.length]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">

        {/* LEFT */}
        <motion.div className="hero-content" variants={containerV} initial="hidden" animate="visible">

          <motion.div className="status-pill" variants={itemV}>
            <span className="pulse-dot" />
            Available for Internships &amp; Projects
          </motion.div>

          <motion.h1 className="hero-name" variants={itemV}>
            Sonu Rajesh
          </motion.h1>

          <motion.div className="title-slider-container" variants={itemV}>
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              {titles[titleIndex]}
            </motion.div>
          </motion.div>

          <motion.p className="hero-tagline" variants={itemV}>
            // {tagline}
          </motion.p>

          <motion.p className="hero-bio" variants={itemV}>{bio}</motion.p>

          <motion.div className="hero-socials" variants={itemV}>
            <a href={github}          target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={linkedin}        target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
            <a href={`mailto:${email}`} className="social-icon-btn" aria-label="Email">
              <Mail size={17} />
            </a>
          </motion.div>

          <motion.div className="hero-actions" variants={itemV}>
            <a href={resumeUrl} download className="btn btn-primary">
              <Download size={14} /> Download CV
            </a>
            <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <BookOpen size={14} /> IEEE Paper
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-tertiary"
            >
              View Work <ArrowRight size={13} className="arrow" />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — Portrait */}
        <motion.div 
          className="hero-avatar-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="avatar-frame">
            <div className="avatar-background-glow"></div>
            
            {/* Outer Rotating Skill Orbit Ring with Upright Badges */}
            <div className="avatar-orbit-outer">
              <div className="orbit-badge badge-ds">
                <span className="badge-text">DATA SCIENCE</span>
              </div>
              <div className="orbit-badge badge-ai">
                <span className="badge-text">AGENTIC AI</span>
              </div>
              <div className="orbit-badge badge-ba">
                <span className="badge-text">BUSINESS ANALYST</span>
              </div>
            </div>

            {/* Inner Counter-Rotating Orbit Ring */}
            <div className="avatar-orbit-inner"></div>

            {/* Face Scan Line laser */}
            <div className="avatar-scan-line"></div>

            <img 
              src={profilePic} 
              alt={name} 
              className="avatar-img"
            />
          </div>
        </motion.div>
      </div>

      <div
        className="hero-scroll-indicator"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll"
      >
        <div className="mouse"><div className="wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
