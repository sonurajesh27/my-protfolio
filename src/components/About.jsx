import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const { experience, education } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="timeline" className="about-section">
      <div className="section-header">
        <span className="section-eyebrow">// journey</span>
        <h2 className="section-title">Timeline &amp; Story</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-axis"></div>

        {/* Experience */}
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className="timeline-item left-aligned"
            custom={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="timeline-marker exp-marker">
              <Briefcase size={14} />
            </div>

            <div
              className="timeline-content-card"
              onClick={() => toggleExpand(`exp-${idx}`)}
            >
              <div className="timeline-card-header">
                <span className="timeline-badge badge-exp">{exp.type}</span>
                <span className="timeline-period"><Calendar size={12} /> {exp.period}</span>
              </div>
              <h3 className="timeline-card-title">{exp.role}</h3>
              <h4 className="timeline-card-company">{exp.company}</h4>
              <div className="timeline-location"><MapPin size={12} /> {exp.location}</div>

              {expandedIndex === `exp-${idx}` ? (
                <motion.div
                  className="timeline-card-expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ul className="timeline-bullets">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                  <span className="toggle-indicator"><ChevronUp size={14} /> Show Less</span>
                </motion.div>
              ) : (
                <span className="toggle-indicator"><ChevronDown size={14} /> Expand</span>
              )}
            </div>
          </motion.div>
        ))}

        {/* Education */}
        {education.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            className="timeline-item right-aligned"
            custom={idx + experience.length}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="timeline-marker edu-marker">
              <GraduationCap size={14} />
            </div>

            <div
              className="timeline-content-card"
              onClick={() => toggleExpand(`edu-${idx}`)}
            >
              <div className="timeline-card-header">
                <span className="timeline-badge badge-edu">Education</span>
                <span className="timeline-period"><Calendar size={12} /> {edu.period}</span>
              </div>
              <h3 className="timeline-card-title">{edu.degree}</h3>
              <h4 className="timeline-card-company">{edu.institution}</h4>
              <div className="timeline-location">{edu.grade}</div>

              {expandedIndex === `edu-${idx}` ? (
                <motion.div
                  className="timeline-card-expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ul className="timeline-bullets">
                    {edu.highlights.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                  <span className="toggle-indicator"><ChevronUp size={14} /> Show Less</span>
                </motion.div>
              ) : (
                <span className="toggle-indicator"><ChevronDown size={14} /> Expand</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
