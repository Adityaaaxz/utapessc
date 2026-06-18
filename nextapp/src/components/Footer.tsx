'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,107,0,0.2)',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-8deg)',
          fontFamily: "'Permanent Marker', cursive",
          fontSize: 'clamp(48px, 10vw, 120px)',
          color: 'rgba(255,107,0,0.04)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        UTAPESSC
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-graffiti)',
              fontSize: 'clamp(32px, 6vw, 56px)',
              color: 'var(--white)',
              letterSpacing: '0.05em',
            }}
          >
            U<span style={{ color: 'var(--orange)' }}>TAPES</span>SC
          </p>
          <p
            style={{
              color: 'var(--gray)',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              marginTop: 4,
            }}
          >
            THRIFT BEST SHOE STORE
          </p>
        </motion.div>

        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['Home', 'Product', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: 'var(--gray)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--orange)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--gray)')}
            >
              {link}
            </a>
          ))}
        </div>

        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255,255,255,0.06)',
          }}
        />

        <p style={{ color: 'var(--gray)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          © 2026 UTAPESSC — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
