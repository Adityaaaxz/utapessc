'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const NAV_LINKS = ['Home', 'Product', 'About', 'Contact']
const CONTACT_INFO = [
  { label: 'Alamat',   value: 'Jl. Sneaker No. 47, Bandung' },
  { label: 'Telepon',  value: '+62 812-3456-7890' },
  { label: 'Email',    value: 'hello@utapes.sc' },
  { label: 'Instagram',value: '@utapessc' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000',
        borderTop: '2px solid rgba(255,107,0,0.3)',
        padding: 'clamp(48px, 8vw, 72px) 24px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Big UTAPES watermark */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotate(-6deg)',
        fontFamily: 'var(--font-bebas), sans-serif',
        fontSize: 'clamp(80px, 14vw, 180px)',
        color: 'rgba(255,107,0,0.03)',
        pointerEvents: 'none', userSelect: 'none',
        whiteSpace: 'nowrap', lineHeight: 1,
      }}>
        UTAPESSC
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Brand column */}
        <motion.div variants={fadeUp}>
          <p style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '2.2rem', color: '#fff', letterSpacing: '0.06em', margin: '0 0 12px', lineHeight: 1 }}>
            <span style={{ color: '#FF6B00' }}>U</span>TAPES<span style={{ color: '#FF6B00', fontSize: '1rem', verticalAlign: 'super' }}>SC</span>
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#555', lineHeight: 1.7, maxWidth: '220px', margin: 0 }}>
            Toko sepatu thrift terpercaya. Koleksi premium, harga terjangkau, kualitas terjamin.
          </p>

          {/* Social badges */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
            {['IG', 'TT', 'WA'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255,107,0,0.1)',
                  border: '1px solid rgba(255,107,0,0.3)',
                  color: '#FF6B00',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.25)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.1)' }}
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Nav column */}
        <motion.div variants={fadeUp}>
          <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.15em', color: '#FF6B00', margin: '0 0 20px', textTransform: 'uppercase' }}>
            NAVIGASI
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.875rem',
                    color: '#666',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF6B00' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#666' }}
                >
                  → {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact column */}
        <motion.div variants={fadeUp}>
          <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1rem', letterSpacing: '0.15em', color: '#FF6B00', margin: '0 0 20px', textTransform: 'uppercase' }}>
            KONTAK
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {CONTACT_INFO.map((c) => (
              <div key={c.label}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase', margin: '0 0 2px' }}>
                  {c.label}
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#aaa', margin: 0 }}>
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        paddingTop: '20px',
        borderTop: '1px solid #1a1a1a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        position: 'relative',
        zIndex: 1,
      }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#333', margin: 0 }}>
          © 2026 utapes.sc — All Rights Reserved
        </p>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#333', margin: 0 }}>
          Made with ❤️ for sneaker culture
        </p>
      </div>
    </footer>
  )
}
