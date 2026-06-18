'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Search, ShoppingCart } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled((prev) => {
      const shouldBeScrolled = latest > 50;
      return prev === shouldBeScrolled ? prev : shouldBeScrolled;
    });
  })

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        padding: isScrolled ? '14px 60px' : '24px 60px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.0)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transformOrigin: 'top',
        willChange: 'padding, background-color',
      }}>
      {/* ── LEFT: Logo ── */}
      <Link href="#home" style={{ textDecoration: 'none' }}>
        <motion.span 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 900,
            fontSize: '1.5rem',
            letterSpacing: '0.02em',
            color: '#000',
            display: 'inline-block'
          }}>
          UTAPES
        </motion.span>
      </Link>

      {/* ── CENTER: Pill Navigation ── */}
      <motion.div 
        className="desktop-nav" 
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(239, 239, 239, 1)',
          boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.04)' : '0 4px 24px rgba(0,0,0,0.02)',
          border: isScrolled ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
        }}
        transition={{ duration: 0.3 }}
        style={{
        borderRadius: '999px',
        padding: '6px',
        display: 'flex',
        gap: '4px',
        willChange: 'background-color, box-shadow',
      }}>
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setActive(l.label)}
            style={{ textDecoration: 'none' }}
          >
            <motion.div
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                color: active === l.label ? '#fff' : '#000',
                background: active === l.label ? '#000' : 'transparent',
                padding: '10px 28px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* ── RIGHT: Icons ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <motion.button
          aria-label="User"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#000', display: 'flex' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <User size={22} strokeWidth={2.5} />
        </motion.button>
        
        <motion.button
          aria-label="Search"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#000', display: 'flex' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search size={22} strokeWidth={2.5} />
        </motion.button>

        <motion.button
          aria-label="Cart"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#000', display: 'flex' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={22} strokeWidth={2.5} />
        </motion.button>
      </div>
    </motion.nav>
  )
}
