import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bootLines = [
  { prefix: 'ok',   text: 'Booting portfolio environment...' },
  { prefix: 'ok',   text: 'Loading AI & GenAI modules' },
  { prefix: 'info', text: 'Mounting RAG pipeline subsystem' },
  { prefix: 'ok',   text: 'React renderer — ready' },
  { prefix: 'ok',   text: 'Data Science stack — online' },
  { prefix: 'info', text: 'Syncing project case studies' },
  { prefix: 'ok',   text: 'HCI systems — initialized' },
  { prefix: 'ok',   text: 'Welcome. Initializing experience...' },
];

const BootScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress]         = useState(0);
  const [showName, setShowName]         = useState(false);
  const [exiting, setExiting]           = useState(false);

  useEffect(() => {
    // Show name first
    const nameTimer = setTimeout(() => setShowName(true), 200);

    let lineIdx = 0;
    const lineTimer = setInterval(() => {
      if (lineIdx < bootLines.length) {
        const current = lineIdx;
        setVisibleLines(prev => [...prev, bootLines[current]]);
        setProgress(Math.round(((current + 1) / bootLines.length) * 100));
        lineIdx++;
      } else {
        clearInterval(lineTimer);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onComplete(), 650);
        }, 400);
      }
    }, 210);

    return () => {
      clearTimeout(nameTimer);
      clearInterval(lineTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="boot-screen"
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: exiting ? 'none' : 'all' }}
    >
      {/* Personal identity — not a product name */}
      <motion.div
        className="boot-identity"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 16 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="boot-identity-name">Sonu Rajesh</div>
        <div className="boot-identity-role">AI &amp; Data Science Engineer</div>
      </motion.div>

      {/* Terminal lines */}
      <div className="boot-lines">
        {visibleLines.map((line, i) => (
          <motion.div
            key={i}
            className="boot-line"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
          >
            <span className={line.prefix}>[{line.prefix.toUpperCase()}]</span>
            {line.text}
          </motion.div>
        ))}
        {visibleLines.length < bootLines.length && (
          <div className="boot-line" style={{ color: 'var(--os-text-3)' }}>
            <span className="boot-cursor">█</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="boot-bar-wrap">
        <motion.div
          className="boot-bar"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ width: '0%' }}
        />
      </div>

      <style>{`
        .boot-cursor { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .boot-identity { text-align: center; margin-bottom: 8px; }
        .boot-identity-name {
          font-family: 'Inter', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #f2f2f4;
          margin-bottom: 6px;
        }
        .boot-identity-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--os-cyan);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.8;
        }
      `}</style>
    </motion.div>
  );
};

export default BootScreen;
