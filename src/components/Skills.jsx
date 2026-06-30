import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [bars, setBars] = useState(() => Array.from({ length: 8 }, () => Math.random() * 60 + 10));

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

const Skills = () => {
  const { skills } = portfolioData;
  const [uptime, setUptime] = useState(0);

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

        {/* ── MONITOR BODY (Grid Layout) ── */}
        <div className="monitor-body">
          {skills.map((cat, idx) => {
            const meta = CATEGORY_META[idx];
            const Icon = meta.icon;
            return (
              <motion.div 
                key={cat.category}
                className="skills-panel-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ '--p-color': meta.color }}
              >
                {/* Panel Header */}
                <div className="panel-header">
                  <div className="panel-title" style={{ color: meta.color }}>
                    <Icon size={16} className="panel-icon" />
                    <span className="panel-label">{meta.label}</span>
                    <span className="panel-pid">{meta.pid}</span>
                  </div>
                  <ActivityBar color={meta.color} active={true} />
                </div>

                {/* Skills Rows */}
                <div className="panel-skills-list">
                  {cat.items.map((skill) => (
                    <div key={skill} className="skill-terminal-row">
                      <span className="skill-prompt" style={{ color: meta.color }}>›</span>
                      <span className="skill-name">{skill}</span>
                      <span className="skill-status">loaded</span>
                    </div>
                  ))}
                </div>

                {/* Domain Synthesis Description */}
                <div className="panel-meta" style={{ borderColor: meta.color + '15' }}>
                  <div className="panel-meta-label" style={{ color: meta.color }}>
                    <Activity size={11} className="pulse-icon" /> DOMAIN_SYNTHESIS
                  </div>
                  <p className="panel-desc">
                    {idx === 0 && "Building robust NLP systems — RAG pipelines, vector indices, and LLM orchestration to eliminate hallucination in enterprise data."}
                    {idx === 1 && "Algorithmic precision — deep neural architectures, SMOTE for class imbalance, and production-grade model evaluation pipelines."}
                    {idx === 2 && "Full-stack delivery — React/Vite frontends with FastAPI microservices, MongoDB and SQL datastores, deployed on Vercel."}
                    {idx === 3 && "HCI + BA synthesis — Fitts's Law, WCAG AA accessibility, Agile sprint planning, and BRD documentation."}
                  </p>
                  <div className="panel-checks">
                    <span><CheckCircle size={10} /> State Verified</span>
                    <span><CheckCircle size={10} /> Latency Checked</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── STATUS BAR ── */}
        <div className="monitor-statusbar">
          <span className="sb-item green">● SYSTEM READY</span>
          <span className="sb-item">PROCESSES: {skills.length} RUNNING</span>
          <span className="sb-item">MODULES: {skills.reduce((a, s) => a + s.items.length, 0)} ACTIVE</span>
          <span className="sb-item cyan">DISPLAY: ALL TASKS RENDERED</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
