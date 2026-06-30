import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MATRIX_CHARS = '0189ABCDEF!@#$%^&*()_+-=[]{}|<>?;:';

const BootScreen = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [startRipple, setStartRipple] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let iterations = 0;
    const maxIterations = 18; // length of decryption phase
    
    const interval = setInterval(() => {
      if (iterations < maxIterations) {
        // Generate random characters
        const c1 = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const c2 = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        setDisplayText(`${c1} ${c2}`);
        iterations++;
      } else {
        clearInterval(interval);
        // Settle into final letters
        setDisplayText('S R');
        setIsDecrypted(true);
        // Trigger neon shockwave ripple
        setStartRipple(true);
        
        // Wait and exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onComplete(), 600);
        }, 1000);
      }
    }, 45); // fast updates

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="boot-screen"
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: exiting ? 'none' : 'all' }}
    >
      <div className="boot-center-container">
        {/* Holographic scanning laser line */}
        <AnimatePresence>
          {!isDecrypted && (
            <motion.div 
              className="scan-line"
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
            />
          )}
        </AnimatePresence>

        {/* Central Monogram */}
        <motion.div
          className={`boot-monogram ${isDecrypted ? 'decrypted' : 'decrypting'}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {displayText}
        </motion.div>

        {/* Shockwave Energy Ripple */}
        {startRipple && (
          <motion.div
            className="shockwave-ripple"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 3.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </div>

      <style>{`
        .boot-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #020204;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }
        .boot-center-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 250px;
        }
        .scan-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00d4ff, transparent);
          box-shadow: 0 0 10px #00d4ff;
          pointer-events: none;
          z-index: 10;
        }
        .boot-monogram {
          font-family: 'Outfit', sans-serif;
          font-size: 5.5rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-align: center;
          user-select: none;
          transition: all 0.3s ease;
        }
        .boot-monogram.decrypting {
          color: rgba(0, 212, 255, 0.4);
          font-family: 'Courier New', Courier, monospace;
          text-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
        }
        .boot-monogram.decrypted {
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.6));
          text-shadow: 0 0 35px rgba(99, 102, 241, 0.4), 
                       2px 2px 0px rgba(255, 0, 128, 0.5), 
                       -2px -2px 0px rgba(0, 212, 255, 0.5);
          animation: glitch-pulse 1.2s ease-in-out infinite alternate;
        }
        .shockwave-ripple {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2px solid #6366f1;
          box-shadow: 0 0 20px #6366f1, 
                      inset 0 0 20px #6366f1;
          pointer-events: none;
          z-index: 2;
        }
        @keyframes glitch-pulse {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.6));
          }
          100% {
            transform: scale(1.03);
            filter: drop-shadow(0 0 35px rgba(99, 102, 241, 0.85)) brightness(1.1);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BootScreen;
