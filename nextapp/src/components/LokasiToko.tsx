'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Map } from 'lucide-react'

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const STORE_INFO = [
  { icon: <MapPin size={16} />,   label: 'ALAMAT',    value: 'Cianjur, Cibinong hilir, Jawa Barat' },
  { icon: <Clock size={16} />,    label: 'OPEN STORE',  value: '09.00 – 21.00 WIB' },
  { icon: <Phone size={16} />,    label: 'TELEPON',   value: '+62 812-3456-7890' },
  { icon: <Mail size={16} />,     label: 'EMAIL',     value: 'hello@utapes.sc' },
  { icon: <InstagramIcon size={16} />,label: 'INSTAGRAM', value: '@utapes.sc' },
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
        fontFamily: 'var(--font-inter), sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(80px, 16vw, 200px)',
        color: 'rgba(255,107,0,0.035)',
        whiteSpace: 'nowrap', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.02em',
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 800,
            fontSize: '0.75rem', letterSpacing: '0.15em',
            color: '#FF6B00', margin: '0 0 12px',
          }}>
            ★ FIND US ★
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <h2 style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(44px, 9vw, 90px)',
              color: '#fff', lineHeight: 0.95, margin: 0,
              letterSpacing: '-0.03em',
            }}>
              LOKASI<br />
              <span style={{
                color: '#FF6B00',
                textShadow: '4px 4px 0 rgba(255,107,0,0.25)',
              }}>TOKO</span>
            </h2>

            {/* Logo next to text */}
            <motion.div
              initial={{ scale: 0.8, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 12, stiffness: 200 }}
              style={{
                background: 'rgba(255,107,0,0.1)',
                padding: '12px',
                borderRadius: '50%',
                border: '2px solid rgba(255,107,0,0.3)',
              }}
            >
              <Image
                src="/assets/maskot/utapessc.png"
                alt="UTAPES Logo"
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </div>
        </div>
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
          fontFamily: 'var(--font-inter), sans-serif',
          fontWeight: 800,
          fontSize: '0.8rem', letterSpacing: '0.08em',
          padding: '8px 16px', borderRadius: '8px',
          marginBottom: '16px',
        }}>
          <Map size={16} /> CEK RUTE
        </div>

        {/* Map frame */}
        <div style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '2px solid rgba(255,107,0,0.3)',
          boxShadow: '0 0 0 1px rgba(255,107,0,0.1), 0 24px 60px rgba(0,0,0,0.5)',
        }}>
          <iframe
            src="https://maps.google.com/maps?q=45P4%2BVCM%2C%20Ciharashas%2C%20Kec.%20Cilaku%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043285&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            style={{ border: 0, display: 'block', minHeight: 'clamp(300px, 40vw, 480px)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi UTAPES"
          />
          {/* Corner sticker */}
          <div style={{
            position: 'absolute', bottom: '16px', right: '16px',
            background: '#000', color: '#FF6B00',
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 800,
            fontSize: '0.75rem', letterSpacing: '0.1em',
            padding: '6px 14px', borderRadius: '8px',
            border: '1.5px solid rgba(255,107,0,0.7)',
            pointerEvents: 'none',
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
          marginTop: '40px',
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,107,0,0.15)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
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
                padding: '32px 24px',
                borderRight: i < STORE_INFO.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: '#FF6B00',
              }}>
                {info.icon}
                <span style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 800,
                  fontSize: '0.75rem', letterSpacing: '0.12em',
                }}>
                  {info.label}
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 500,
                fontSize: '0.85rem', color: '#999',
                margin: 0, lineHeight: 1.6,
              }}>
                {info.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
