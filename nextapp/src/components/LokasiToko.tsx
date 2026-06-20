'use client'

import { motion } from 'framer-motion'

const STORE_INFO = [
  { icon: '📍', label: 'ALAMAT',    value: '45P4+VCM, Ciharashas, Kec. Cilaku, Kab. Cianjur, Jawa Barat 43285' },
  { icon: '🕐', label: 'JAM BUKA', value: 'Senin – Sabtu · 10.00 – 21.00 WIB' },
  { icon: '📞', label: 'TELEPON',  value: '+62 812-3456-7890' },
  { icon: '✉️', label: 'EMAIL',    value: 'hello@utapes.sc' },
  { icon: '📸', label: 'INSTAGRAM',value: '@utapessc' },
]

export default function LokasiToko() {
  return (
    <section
      id="contact"
      style={{
        background: '#080808',
        padding: 'clamp(60px, 10vw, 100px) 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orange glow top-right */}
      <div aria-hidden style={{
        position: 'absolute', top: '-100px', right: '-80px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.14) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '200px', left: '-60px',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.09) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Giant watermark */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '160px', left: '50%',
        transform: 'translateX(-50%) rotate(-2deg)',
        fontFamily: 'var(--font-bebas), sans-serif',
        fontSize: 'clamp(80px, 16vw, 200px)',
        color: 'rgba(255,107,0,0.035)',
        whiteSpace: 'nowrap', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '0.04em',
      }}>
        UTAPESSC
      </div>

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          marginBottom: '44px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p style={{
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: '0.8rem', letterSpacing: '0.28em',
          color: '#FF6B00', margin: '0 0 8px',
        }}>
          ★ FIND US ★
        </p>
        <h2 style={{
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(52px, 11vw, 110px)',
          color: '#fff', lineHeight: 0.9, margin: 0,
          letterSpacing: '0.02em',
        }}>
          LOKASI<br />
          <span style={{
            color: '#FF6B00',
            textShadow: '4px 4px 0 rgba(255,107,0,0.25)',
          }}>TOKO</span>
        </h2>
      </motion.div>

      {/* ── Full-width Map ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Label above map */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#FF6B00', color: '#000',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: '0.85rem', letterSpacing: '0.18em',
          padding: '5px 16px', borderRadius: '4px',
          marginBottom: '14px',
        }}>
          📍 CEK RUTE
        </div>

        {/* Map frame */}
        <div style={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '2px solid rgba(255,107,0,0.5)',
          boxShadow: '0 0 0 1px rgba(255,107,0,0.15), 0 24px 60px rgba(0,0,0,0.5)',
        }}>
          <iframe
            src="https://maps.google.com/maps?q=45P4%2BVCM%2C%20Ciharashas%2C%20Kec.%20Cilaku%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043285&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            style={{ border: 0, display: 'block', minHeight: 'clamp(260px, 35vw, 420px)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi UTAPES"
          />
          {/* Corner sticker */}
          <div style={{
            position: 'absolute', bottom: '14px', right: '14px',
            background: '#000', color: '#FF6B00',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '0.75rem', letterSpacing: '0.16em',
            padding: '5px 14px', borderRadius: '4px',
            border: '1.5px solid rgba(255,107,0,0.7)',
          }}>
            UTAPESSC
          </div>
        </div>
      </motion.div>

      {/* ── Info Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          marginTop: '32px',
          background: 'rgba(255,255,255,0.03)',
          borderTop: '1px solid rgba(255,107,0,0.18)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0',
        }}>
          {STORE_INFO.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
              style={{
                padding: '28px 20px',
                borderRight: i < STORE_INFO.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.65rem', letterSpacing: '0.22em',
                color: '#FF6B00', margin: 0,
              }}>
                {info.icon} {info.label}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.82rem', color: '#bbb',
                margin: 0, lineHeight: 1.55,
              }}>
                {info.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA Strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          background: '#FF6B00',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}>
          <p style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            letterSpacing: '0.1em',
            color: '#000',
            margin: 0,
          }}>
            FOLLOW KAMI DI INSTAGRAM UNTUK UPDATE TERBARU
          </p>
          <motion.a
            href="https://instagram.com/utapessc"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, backgroundColor: '#000' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#000',
              color: '#FF6B00',
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '1rem', letterSpacing: '0.14em',
              padding: '12px 28px',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '16px' }}>📸</span>
            @UTAPESSC ↗
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
