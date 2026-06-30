import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Database, Laptop, CheckCircle, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const CATEGORY_META = [
  { icon: Brain,    color: '#00d4ff', label: 'GEN-AI',    pid: '0x1A2F' },
  { icon: Cpu,      color: '#00ff88', label: 'ML-CORE',   pid: '0x3B7C' },
  { icon: Database, color: '#ffb800', label: 'WEB-STACK', pid: '0x5D1E' },
  { icon: Laptop,   color: '#a855f7', label: 'HCI-BA',    pid: '0x8F4A' },
];

/* Animated bar that randomly fluctuates to simulate CPU activity */
const ActivityBar = ({ color, active }) => {
  const [bars, setBars] = useState(() => Array.from({ length: 12 }, () => Math.random() * 60 + 10));

  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => {
      setBars(prev => prev.map(b => {
        const delta = (Math.random() - 0.5) * 30;
        return Math.max(8, Math.min(100, b + delta));
      }));
    }, 500);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="activity-bar">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="activity-bar-column"
          animate={{ height: active ? `${h}%` : '15%', opacity: active ? 0.7 : 0.2 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{ background: color }}
        />
      ))}
    </div>
  );
};

/* Typewriter effect for skills list */
const TypewriterSkills = ({ skills, color }) => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(i);
      if (i >= skills.length) clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, [skills]);

  return (
    <div className="skill-list-terminal">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill}
          className="skill-terminal-row"
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: idx < shown ? 1 : 0, x: idx < shown ? 0 : -6 }}
          transition={{ duration: 0.2 }}
          style={{ '--skill-color': color }}
        >
          <span className="skill-prompt" style={{ color }}>›</span>
          <span className="skill-name">{skill}</span>
          <span className="skill-status">loaded</span>
        </motion.div>
      ))}
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection]           = useState(1);
  const [uptime, setUptime] = useState(0);

  const handleCategoryChange = (idx) => {
    if (idx === activeCategory) return;
    setDirection(idx > activeCategory ? 1 : -1);
    setActiveCategory(idx);
  };

  /* Simulated uptime counter */
  useEffect(() => {
    const t = setInterval(() => setUptime(u => u + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, '0');
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  const active = skills[activeCategory];
  const meta   = CATEGORY_META[activeCategory];
  const Icon   = meta.icon;

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-eyebrow">// capabilities</span>
        <h2 className="section-title">Technical Arsenal</h2>
      </div>

      <div className="skills-os-monitor">

        {/* ── TOP BAR ── */}
        <div className="monitor-topbar">
          <div className="os-traffic">
            <span className="t-red" /><span className="t-yellow" /><span className="t-green" />
          </div>
          <span className="monitor-title">process-monitor — sonu@os:~</span>
          <span className="monitor-uptime">uptime {fmt(uptime)}</span>
        </div>

        <div className="monitor-body">

          {/* ── LEFT: process list ── */}
          <div className="process-list">
            <div className="process-list-header">
              <span>PID</span>
              <span>PROCESS</span>
              <span>STATUS</span>
            </div>
            {skills.map((cat, idx) => {
              const m = CATEGORY_META[idx];
              const M = m.icon;
              return (
                <button
                  key={cat.category}
                  className={`process-row ${activeCategory === idx ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(idx)}
                  style={{ '--p-color': m.color }}
                >
                  <span className="process-pid">{m.pid}</span>
                  <span className="process-name">
                    <M size={13} />
                    {m.label}
                  </span>
                  <span className="process-badge">
                    <span className="process-dot" style={{ background: m.color }} />
                    {activeCategory === idx ? 'ACTIVE' : 'IDLE'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: detail panel ── */}
          <div className="process-detail">

            {/* header row */}
            <div className="detail-header">
              <div className="detail-proc-name" style={{ color: meta.color }}>
                <Icon size={18} />
                <span>{meta.label}</span>
                <span className="detail-pid">{meta.pid}</span>
              </div>
              <ActivityBar color={meta.color} active={true} />
            </div>

            {/* skills list */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeCategory}
                custom={direction}
                initial={{ opacity: 0, y: direction * 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -30 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="detail-content"
              >
                <TypewriterSkills skills={active.items} color={meta.color} />

                {/* domain description */}
                <div className="detail-meta" style={{ borderColor: meta.color + '22' }}>
                  <div className="detail-meta-label" style={{ color: meta.color }}>
                    <Activity size={11} /> DOMAIN_SYNTHESIS
                  </div>
                  {activeCategory === 0 && <p>Building robust NLP systems — RAG pipelines, vector indices, and LLM orchestration to eliminate hallucination in enterprise data.</p>}
                  {activeCategory === 1 && <p>Algorithmic precision — deep neural architectures, SMOTE for class imbalance, and production-grade model evaluation pipelines.</p>}
                  {activeCategory === 2 && <p>Full-stack delivery — React/Vite frontends with FastAPI microservices, MongoDB and SQL datastores, deployed on Vercel.</p>}
                  {activeCategory === 3 && <p>HCI + BA synthesis — Fitts's Law, WCAG AA accessibility, Agile sprint facilitation, and BRD documentation.</p>}
                  <div className="detail-checks">
                    <span><CheckCircle size={11} /> State Verified</span>
                    <span><CheckCircle size={11} /> Latency Optimized</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── STATUS BAR ── */}
        <div className="monitor-statusbar">
          <span className="sb-item green">● SYSTEM READY</span>
          <span className="sb-item">PROCESSES: {skills.length} LOADED</span>
          <span className="sb-item">MODULES: {skills.reduce((a, s) => a + s.items.length, 0)} ACTIVE</span>
          <span className="sb-item cyan">SELECTED: {meta.label}</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
