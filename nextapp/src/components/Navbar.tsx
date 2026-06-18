'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('Home')

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,107,0,0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* ── LEFT: Logo ── */}
          <Link href="#home" style={{ textDecoration: 'none' }}>
            <motion.span
              whileHover={{ scale: 1.04 }}
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '2rem',
                letterSpacing: '0.06em',
                color: '#fff',
                lineHeight: 1,
              }}
            >
              <span style={{ color: '#FF6B00' }}>U</span>TAPES
            </motion.span>
          </Link>

          {/* ── CENTER: Links (desktop) ── */}
          <ul className="desktop-nav" style={{ display: 'flex', listStyle: 'none', gap: '36px', margin: 0, padding: 0 }}>
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setActive(l.label)}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: active === l.label ? '#FF6B00' : '#fff',
                    letterSpacing: '0.04em',
                    padding: '6px 12px',
                    borderRadius: active === l.label ? '20px' : '0',
                    background: active === l.label ? 'rgba(255,107,0,0.12)' : 'transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── RIGHT: Cart + Hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Cart"
              style={{
                background: 'rgba(255,107,0,0.12)',
                border: '1px solid rgba(255,107,0,0.35)',
                borderRadius: '8px',
                padding: '8px 10px',
                cursor: 'pointer',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShoppingCart size={20} />
            </motion.button>

            {/* Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '4px',
                display: 'none',
                alignItems: 'center',
              }}
              aria-label="Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.97)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '40px',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'rgba(255,107,0,0.15)',
                border: '1px solid rgba(255,107,0,0.3)',
                borderRadius: '8px',
                color: '#fff',
                padding: '8px 10px',
                cursor: 'pointer',
              }}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {LINKS.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={l.href}
                  onClick={() => { setActive(l.label); setOpen(false) }}
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '4rem',
                    color: active === l.label ? '#FF6B00' : '#fff',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                  }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
