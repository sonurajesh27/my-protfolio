import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ExternalLink, BookOpen, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const PROJECT_COLORS = ['var(--proj-0)', 'var(--proj-1)', 'var(--proj-2)', 'var(--proj-3)'];

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const getMetricData = (project) => {
    if (!project.metrics) return null;
    return project.metrics.labels.map((label, index) => ({
      name: label,
      value: project.metrics.data[index],
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-eyebrow">// portfolio</span>
        <h2 className="section-title">Featured Work</h2>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            onClick={() => setSelectedProject(project)}
            layoutId={`card-container-${project.id}`}
            style={{ '--proj-color': PROJECT_COLORS[idx % PROJECT_COLORS.length] }}
          >
            <div className="card-top">
              <span className="tech-badge">{project.stack[0]}</span>
              <ArrowUpRight className="card-arrow" size={16} />
            </div>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-tagline">{project.tagline}</p>
            <div className="card-stack-preview">
              {project.stack.slice(0, 3).map((s) => (
                <span key={s} className="stack-pill">{s}</span>
              ))}
              {project.stack.length > 3 && (
                <span className="stack-pill-more">+{project.stack.length - 3}</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay">
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Case Study"
              >
                <X size={16} />
              </button>

              <div className="modal-scroll-content">
                {/* Header */}
                <div className="modal-header">
                  <span className="modal-subtitle">Case Study</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <p className="modal-tagline">{selectedProject.tagline}</p>

                  <div className="modal-links">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {selectedProject.liveDemo && (
                      <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {selectedProject.paper && (
                      <a href={selectedProject.paper} target="_blank" rel="noopener noreferrer" className="modal-link-btn paper-btn">
                        <BookOpen size={14} />
                        <span>Research Paper</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="modal-body-grid">
                  <div className="modal-main-column">
                    <div className="detail-section">
                      <h4 className="detail-title">The Challenge</h4>
                      <p>{selectedProject.problem}</p>
                    </div>

                    <div className="detail-section">
                      <h4 className="detail-title">The Strategy</h4>
                      <p>{selectedProject.solution}</p>
                    </div>

                    {selectedProject.challenges && (
                      <div className="detail-section results-section">
                        <h4 className="detail-title">Hardship &amp; Triumph</h4>
                        <div className="hardship-card">
                          <span className="card-flag red">Challenge</span>
                          <p>{selectedProject.challenges}</p>
                        </div>
                        <div className="hardship-card mt-3">
                          <span className="card-flag green">Outcome</span>
                          <p>{selectedProject.results}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="modal-sidebar-column">
                    <div className="sidebar-section">
                      <h4 className="detail-title">Technologies</h4>
                      <div className="sidebar-pills">
                        {selectedProject.stack.map((item) => (
                          <span key={item} className="stack-pill">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="sidebar-section">
                      <h4 className="detail-title">Key Modules</h4>
                      <ul className="sidebar-bullets">
                        {selectedProject.features.map((feat) => (
                          <li key={feat}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    {selectedProject.metrics && (
                      <div className="sidebar-section chart-section">
                        <h4 className="detail-title">{selectedProject.metrics.metricLabel}</h4>
                        <div className="chart-wrapper">
                          <ResponsiveContainer width="100%" height={160}>
                            <BarChart
                              data={getMetricData(selectedProject)}
                              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                              <XAxis dataKey="name" stroke="#52525e" fontSize={9} tickLine={false} />
                              <YAxis stroke="#52525e" fontSize={9} tickLine={false} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#111114',
                                  borderColor: 'rgba(255,255,255,0.08)',
                                  borderRadius: '8px',
                                  fontSize: '11px',
                                  color: '#f2f2f4',
                                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                }}
                                cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                              />
                              <Bar dataKey="value" fill="url(#barGradient)" radius={[3, 3, 0, 0]} />
                              <defs>
                                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#e8e0d0" stopOpacity={0.7} />
                                  <stop offset="95%" stopColor="#e8e0d0" stopOpacity={0.15} />
                                </linearGradient>
                              </defs>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
