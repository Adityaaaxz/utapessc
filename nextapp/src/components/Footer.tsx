'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const NAV_LINKS = [
  { label: 'HOME',    href: '#home' },
  { label: 'PRODUCT', href: '#product' },
  { label: 'ABOUT',   href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

const BRANDS = [
  { name: 'nike',    src: '/assets/logos/nike.png' },
  { name: 'adidas',  src: '/assets/logos/adidas.png' },
  { name: 'vans',    src: '/assets/logos/vans.png' },
  { name: 'puma',    src: '/assets/logos/puma.png' },
  { name: 'salomon', src: '/assets/logos/salomon.png' },
]

const SOCIAL = [
  { label: 'IG',  href: 'https://instagram.com/utapessc', emoji: '📸' },
  { label: 'TT',  href: '#', emoji: '🎵' },
  { label: 'WA',  href: '#', emoji: '💬' },
]

export default function Footer() {
  return (
    <footer
      className="graffiti-bg"
      style={{
        background: '#000',
        padding: 'clamp(56px, 9vw, 80px) clamp(16px, 4vw, 24px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orange glow blob top-right */}
      <div aria-hidden style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      {/* Giant UTAPESSC watermark */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -48%) rotate(-5deg)',
        fontFamily: 'var(--font-bebas), sans-serif',
        fontSize: 'clamp(80px, 14vw, 200px)',
        color: 'rgba(255,107,0,0.04)',
        pointerEvents: 'none', userSelect: 'none',
        whiteSpace: 'nowrap', lineHeight: 1,
        letterSpacing: '0.04em',
      }}>
        UTAPESSC
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── TOP: Big brand identity block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '48px',
            gap: '16px',
          }}
        >
          {/* Huge logo */}
          <p style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(52px, 10vw, 96px)',
            color: '#fff', letterSpacing: '0.04em',
            lineHeight: 0.9, margin: 0,
          }}>
            <span style={{ color: '#FF6B00' }}>U</span>TAPES
            <span style={{ color: '#FF6B00', fontSize: '0.4em', verticalAlign: 'super', marginLeft: '4px' }}>SC</span>
          </p>

          <p style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '0.82rem', letterSpacing: '0.22em',
            color: '#444', margin: 0,
          }}>
            ★ THRIFT SHOES STORE — CIANJUR ★
          </p>

          {/* Social row */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
            {SOCIAL.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '0.88rem', letterSpacing: '0.14em',
                  padding: '8px 18px',
                  borderRadius: '4px',
                  background: 'rgba(255,107,0,0.08)',
                  border: '1.5px solid rgba(255,107,0,0.3)',
                  color: '#FF6B00',
                  textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.2)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.08)' }}
              >
                <span>{s.emoji}</span> {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Orange divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, #FF6B00 0%, rgba(255,107,0,0.3) 50%, transparent 100%)',
          marginBottom: '48px',
        }} />

        {/* ── MIDDLE: 3-column grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginBottom: '56px',
          }}
        >
          {/* Navigasi */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '0.78rem', letterSpacing: '0.22em',
              color: '#FF6B00', margin: '0 0 20px',
            }}>
              NAVIGASI
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      fontSize: '1.15rem', letterSpacing: '0.1em',
                      color: '#555', textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555' }}
                  >
                    <span style={{ color: '#FF6B00', fontSize: '0.9rem' }}>→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Brand kami */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '0.78rem', letterSpacing: '0.22em',
              color: '#FF6B00', margin: '0 0 20px',
            }}>
              BRAND KAMI
            </p>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '14px 20px', alignItems: 'center',
            }}>
              {BRANDS.map((b) => (
                <motion.div
                  key={b.name}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  style={{ opacity: 0.45, transition: 'opacity 0.2s' }}
                >
                  <Image
                    src={b.src} alt={b.name}
                    width={54} height={38}
                    style={{ objectFit: 'contain', filter: 'brightness(0) invert(0.7)' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kontak */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '0.78rem', letterSpacing: '0.22em',
              color: '#FF6B00', margin: '0 0 20px',
            }}>
              KONTAK
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'ALAMAT',    value: 'Ciharashas, Kec. Cilaku, Kab. Cianjur' },
                { label: 'TELEPON',   value: '+62 812-3456-7890' },
                { label: 'EMAIL',     value: 'hello@utapes.sc' },
                { label: 'INSTAGRAM', value: '@utapessc' },
              ].map((c) => (
                <div key={c.label}>
                  <p style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '0.65rem', letterSpacing: '0.2em',
                    color: '#FF6B00', margin: '0 0 3px',
                    opacity: 0.7,
                  }}>
                    {c.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.84rem', color: '#777',
                    margin: 0, lineHeight: 1.5,
                  }}>
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          borderTop: '1px solid #111',
          padding: '20px 0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <p style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '0.72rem', letterSpacing: '0.16em',
            color: '#2a2a2a', margin: 0,
          }}>
            © 2026 UTAPES.SC — ALL RIGHTS RESERVED
          </p>
          <p style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '0.72rem', letterSpacing: '0.16em',
            color: '#2a2a2a', margin: 0,
          }}>
            MADE WITH ❤️ FOR SNEAKER CULTURE
          </p>
        </div>
      </div>
    </footer>
  )
}
