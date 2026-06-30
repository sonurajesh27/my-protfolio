import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Compass, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Certifications.css';

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Certifications = () => {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="credentials" className="credentials-section">
      <div className="section-header">
        <span className="section-eyebrow">// recognition</span>
        <h2 className="section-title">Credentials &amp; Awards</h2>
      </div>

      <div className="credentials-grid">
        {/* Left — Certifications */}
        <div className="credentials-column">
          <div className="column-title-container">
            <Award className="column-icon" size={18} />
            <h3 className="column-title">Professional Certifications</h3>
          </div>
          <div className="cards-list">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                className="credential-card glass-card"
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <div className="credential-icon-wrapper">
                  <Compass size={16} />
                </div>
                <div className="credential-info">
                  <h4 className="credential-name">{cert.title}</h4>
                  <span className="credential-provider">{cert.provider}</span>
                  <p className="credential-desc">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Achievements */}
        <div className="credentials-column">
          <div className="column-title-container">
            <Trophy className="column-icon" size={18} />
            <h3 className="column-title">Achievements &amp; Honors</h3>
          </div>
          <div className="cards-list">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                className="achievement-card glass-card"
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <div className="achievement-header">
                  <span className="achievement-badge">
                    <Star size={10} className="star-icon" /> Honored
                  </span>
                </div>
                <h4 className="achievement-title">{ach.title}</h4>
                <span className="achievement-subtitle">{ach.subtitle}</span>
                <p className="achievement-desc">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
