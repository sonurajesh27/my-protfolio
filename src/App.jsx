import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BootScreen from './components/BootScreen';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <CustomCursor />

      {/* Boot screen sits on top until dismissed */}
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      {/* Main content — always rendered, fades in after boot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid-overlay"   aria-hidden="true" />
        <div className="scanlines"      aria-hidden="true" />

        <Navigation />

        <main className="main-wrapper">
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Certifications />
          <Contact />
        </main>

        <footer className="os-footer">
          <span className="os-footer-left">
            <span className="os-footer-brand">SONU.OS</span>
            <span>v2.4.1</span>
          </span>
          <span>© {new Date().getFullYear()} Sonu Rajesh — All systems nominal.</span>
          <span className="os-footer-right">
            <span className="pulse-dot" style={{ width: 5, height: 5 }} />
            <span>Online</span>
          </span>
        </footer>
      </motion.div>
    </>
  );
}

export default App;
