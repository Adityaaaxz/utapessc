'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, Music2 } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const NAV_LINKS = [
  { label: 'HOME',      href: '#home' },
  { label: 'PRODUCT',   href: '#product' },
  { label: 'ABOUT',     href: '#about' },
  { label: 'TESTIMONI', href: '#testimoni' },
  { label: 'CONTACT',   href: '#contact' },
]

const BRANDS = [
  { name: 'nike',    src: '/assets/logos/nike.png' },
  { name: 'adidas',  src: '/assets/logos/adidas.png' },
  { name: 'vans',    src: '/assets/logos/vans.png' },
  { name: 'puma',    src: '/assets/logos/puma.png' },
  { name: 'salomon', src: '/assets/logos/salomon.png' },
]

const SOCIAL = [
  { label: 'IG',  href: 'https://instagram.com/utapessc', icon: <InstagramIcon size={18} /> },
  { label: 'TT',  href: '#', icon: <Music2 size={18} /> },
  { label: 'WA',  href: '#', icon: <MessageCircle size={18} /> },
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
        fontFamily: 'var(--font-inter), sans-serif',
        fontWeight: 900,
        fontSize: 'clamp(80px, 14vw, 200px)',
        color: 'rgba(255,107,0,0.03)',
        pointerEvents: 'none', userSelect: 'none',
        whiteSpace: 'nowrap', lineHeight: 1,
        letterSpacing: '-0.02em',
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
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(42px, 9vw, 84px)',
            color: '#fff', letterSpacing: '-0.03em',
            lineHeight: 0.9, margin: 0,
          }}>
            <span style={{ color: '#FF6B00' }}>U</span>TAPES
          </p>

          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 700,
            fontSize: '0.75rem', letterSpacing: '0.15em',
            color: '#555', margin: 0,
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
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 800,
                  fontSize: '0.8rem', letterSpacing: '0.08em',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,107,0,0.08)',
                  border: '1.5px solid rgba(255,107,0,0.3)',
                  color: '#FF6B00',
                  textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.2)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.08)' }}
              >
                {s.icon} <span style={{ paddingTop: '2px' }}>{s.label}</span>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
            gap: '40px',
            marginBottom: '56px',
          }}
        >
          {/* Navigasi */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 800,
              fontSize: '0.8rem', letterSpacing: '0.1em',
              color: '#FF6B00', margin: '0 0 20px',
            }}>
              NAVIGASI
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const target = document.querySelector(link.href)
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontWeight: 600,
                      fontSize: '0.95rem', letterSpacing: '0.04em',
                      color: '#666', textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#666' }}
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
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 800,
              fontSize: '0.8rem', letterSpacing: '0.1em',
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
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 800,
              fontSize: '0.8rem', letterSpacing: '0.1em',
              color: '#FF6B00', margin: '0 0 20px',
            }}>
              KONTAK
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'ALAMAT',    value: 'Cianjur, Cibinong hilir, Jawa Barat' },
                { label: 'TELEPON',   value: '+62 812-3456-7890' },
                { label: 'EMAIL',     value: 'hello@utapes.sc' },
                { label: 'INSTAGRAM', value: '@utapes.sc' },
              ].map((c) => (
                <div key={c.label}>
                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.65rem', letterSpacing: '0.1em',
                    color: '#FF6B00', margin: '0 0 4px',
                    opacity: 0.8,
                  }}>
                    {c.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 500,
                    fontSize: '0.85rem', color: '#888',
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
          borderTop: '1px solid #1a1a1a',
          padding: '24px 0 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 600,
            fontSize: '0.7rem', letterSpacing: '0.05em',
            color: '#444', margin: 0,
          }}>
            © 2026 UTAPES.SC — ALL RIGHTS RESERVED
          </p>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 600,
            fontSize: '0.7rem', letterSpacing: '0.05em',
            color: '#444', margin: 0,
          }}>
          </p>
        </div>
      </div>
    </footer>
  )
}
