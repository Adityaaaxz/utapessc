'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['U', 'T', 'A', 'P', 'E', 'S'];

function SprayParticle({ delay }: { delay: number }) {
  const angle = Math.random() * 360;
  const dist  = 30 + Math.random() * 80;
  const tx = Math.cos((angle * Math.PI) / 180) * dist;
  const ty = Math.sin((angle * Math.PI) / 180) * dist;
  const size = 2 + Math.random() * 4;

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: Math.random() > 0.5 ? '#FF6B00' : '#ffffff',
        top: '50%',
        left: '50%',
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, tx, tx * 1.5],
        y: [0, ty, ty * 1.5],
        opacity: [0, 1, 0],
        scale: [0, 1, 0.3],
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: 'easeOut',
      }}
    />
  );
}

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'spray' | 'hold' | 'exit'>('spray');
  const [activeLetterIdx, setActiveLetterIdx] = useState(-1);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Spray each letter one by one
    LETTERS.forEach((_, i) => {
      const t = setTimeout(() => setActiveLetterIdx(i), i * 200);
      timeoutsRef.current.push(t);
    });

    // Hold phase
    const holdT = setTimeout(() => setPhase('hold'), LETTERS.length * 200 + 400);
    timeoutsRef.current.push(holdT);

    // Exit phase
    const exitT = setTimeout(() => setPhase('exit'), LETTERS.length * 200 + 1200);
    timeoutsRef.current.push(exitT);

    // Complete callback
    const doneT = setTimeout(() => onComplete(), LETTERS.length * 200 + 2000);
    timeoutsRef.current.push(doneT);

    return () => timeoutsRef.current.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Background radial glow */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.12) 0%, transparent 70%)',
            }}
            animate={{ opacity: [0, 1, 0.6] }}
            transition={{ duration: 1.5 }}
          />

          {/* Graffiti tag subtitle */}
          <motion.p
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: 'clamp(14px, 2vw, 20px)',
              color: '#FF6B00',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '-10px',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === 'hold' ? 1 : 0, y: phase === 'hold' ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            ★ THRIFT BEST ★
          </motion.p>

          {/* Main UTAPES letters */}
          <div style={{ display: 'flex', gap: 'clamp(4px, 1.5vw, 20px)', position: 'relative' }}>
            {LETTERS.map((letter, i) => (
              <div key={letter} style={{ position: 'relative' }}>
                <motion.span
                  className="intro-spray"
                  initial={{ opacity: 0, scale: 0.3, rotate: -20, filter: 'blur(20px)' }}
                  animate={
                    activeLetterIdx >= i
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotate: i % 2 === 0 ? -2 : 2,
                          filter: 'blur(0px)',
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>

                {/* Spray particles burst when letter appears */}
                {activeLetterIdx === i && (
                  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    {Array.from({ length: 14 }).map((_, pi) => (
                      <SprayParticle key={pi} delay={pi * 0.02} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* "SHOE STORE" sub-line */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={phase === 'hold' ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #FF6B00)' }} />
            <span
              style={{
                fontFamily: 'var(--font-graffiti)',
                fontSize: 'clamp(14px, 2vw, 20px)',
                letterSpacing: '0.25em',
                color: '#888',
              }}
            >
              THRIFT SHOE STORE
            </span>
            <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #FF6B00, transparent)' }} />
          </motion.div>

          {/* Corner graffiti tags */}
          {['TL', 'TR', 'BL', 'BR'].map((pos) => (
            <motion.div
              key={pos}
              style={{
                position: 'absolute',
                fontFamily: "'Permanent Marker', cursive",
                fontSize: 'clamp(28px, 5vw, 60px)',
                color: 'rgba(255,107,0,0.08)',
                ...(pos === 'TL' ? { top: 20, left: 30, transform: 'rotate(-10deg)' } : {}),
                ...(pos === 'TR' ? { top: 20, right: 30, transform: 'rotate(8deg)' } : {}),
                ...(pos === 'BL' ? { bottom: 20, left: 30, transform: 'rotate(12deg)' } : {}),
                ...(pos === 'BR' ? { bottom: 20, right: 30, transform: 'rotate(-8deg)' } : {}),
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {pos === 'TL' ? 'UTAPES' : pos === 'TR' ? 'GRFTY' : pos === 'BL' ? 'FRESH' : 'KICKS'}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
