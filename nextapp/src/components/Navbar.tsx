'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, X, MoreHorizontal } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Product',   href: '#product' },
  { label: 'About',     href: '#about' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Contact',   href: '#contact' },
]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}

function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const sectionIds = ['home', 'product', 'about', 'testimoni', 'contact']
    const labelMap: Record<string, string> = {
      home: 'Home', product: 'Product', about: 'About', testimoni: 'Testimoni', contact: 'Contact',
    }

    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(labelMap[id])
            }
          })
        },
        {
          rootMargin: '-20% 0px -40% 0px', // trigger when section is in 20%-60% of viewport
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return [activeSection, setActiveSection] as const
}

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [searchOpen, setSearchOpen]       = useState(false)
  const [searchQuery, setSearchQuery]     = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { scrollY }    = useScroll()
  const isMobile       = useIsMobile()
  const [active, setActive] = useScrollSpy()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled((prev) => {
      const next = latest > 50
      return prev === next ? prev : next
    })
  })

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus()
  }, [searchOpen])

  useEffect(() => {
    if (!isMobile) setMobileMenuOpen(false)
  }, [isMobile])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchOpen(false)
    const productSection = document.getElementById('product')
    if (productSection) productSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault()
    setActive(label)
    const targetId = href.substring(1)
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
    if (isMobile) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.0)',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.07)' : 'none',
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile
            ? '12px 20px'
            : 'clamp(8px,1.5vw,14px) clamp(24px,4vw,48px)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* ── Logo ── */}
        <Link href="#home" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 900,
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              letterSpacing: '0.04em',
              color: '#000',
              display: 'inline-block',
            }}
          >
            UTAPES
          </motion.span>
        </Link>

        {/* ── Desktop Pill Nav ── */}
        {!isMobile && (
          <motion.div
            animate={{
              backgroundColor: isScrolled ? 'rgba(240,240,240,0.9)' : 'rgba(239,239,239,1)',
              boxShadow: isScrolled
                ? '0 4px 20px rgba(0,0,0,0.06)'
                : '0 2px 12px rgba(0,0,0,0.04)',
            }}
            transition={{ duration: 0.3 }}
            style={{ borderRadius: '999px', padding: '4px', display: 'flex', gap: '2px' }}
          >
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} style={{ textDecoration: 'none' }} onClick={(e) => handleLinkClick(e, l.href, l.label)}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: active === l.label ? '#fff' : '#333',
                    background: active === l.label ? '#000' : 'transparent',
                    padding: '7px 20px',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.25s, color 0.25s',
                    cursor: 'pointer',
                  }}
                >
                  {l.label}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}

        {/* ── Right icons ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '6px' : '10px',
          flexShrink: 0,
        }}>

          {/* Desktop search: icon → expand on click */}
          {!isMobile && (
            <AnimatePresence mode="wait">
              {searchOpen ? (
                <motion.form
                  key="open"
                  onSubmit={handleSearchSubmit}
                  initial={{ width: 36, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 36, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(0,0,0,0.06)',
                    border: '1.5px solid rgba(0,0,0,0.18)',
                    borderRadius: '999px',
                    padding: '7px 14px',
                    overflow: 'hidden',
                  }}
                >
                  <Search size={16} strokeWidth={2.5} style={{ color: '#555', flexShrink: 0 }} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      marginLeft: '8px',
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.85rem',
                      color: '#000',
                      width: '100%',
                      minWidth: 0,
                    }}
                  />
                  <motion.button
                    type="button"
                    onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', color: '#555', padding: 0, flexShrink: 0,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={15} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.button
                  key="closed"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#111',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px',
                    borderRadius: '50%',
                  }}
                  whileHover={{ scale: 1.15, backgroundColor: 'rgba(0,0,0,0.06)' }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Search size={21} strokeWidth={2.2} />
                </motion.button>
              )}
            </AnimatePresence>
          )}

          {/* Mobile: plain search icon */}
          {isMobile && (
            <motion.button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#111', display: 'flex', padding: '6px', borderRadius: '50%',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={21} strokeWidth={2.2} />
            </motion.button>
          )}

          {/* Cart */}
          <motion.button
            aria-label="Cart"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#111', display: 'flex', padding: '6px', borderRadius: '50%',
            }}
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={isMobile ? 20 : 21} strokeWidth={2.2} />
          </motion.button>

          {/* Mobile 3-dot menu */}
          {isMobile && (
            <motion.button
              aria-label="Menu"
              onClick={() => setMobileMenuOpen((p) => !p)}
              style={{
                background: mobileMenuOpen ? '#000' : 'rgba(0,0,0,0.06)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                color: mobileMenuOpen ? '#fff' : '#111',
                display: 'flex',
                padding: '6px',
                width: '36px',
                height: '36px',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s, color 0.2s',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MoreHorizontal size={20} strokeWidth={2.2} />
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* ── Mobile search bar (slides down below navbar) ── */}
      <AnimatePresence>
        {isMobile && searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.9 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: '12px',
              right: '12px',
              zIndex: 999,
              background: 'rgba(255,255,255,0.98)',
              borderRadius: '14px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
              border: '1.5px solid rgba(0,0,0,0.09)',
              transformOrigin: 'top',
            }}
          >
            <form
              onSubmit={handleSearchSubmit}
              style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', gap: '10px' }}
            >
              <Search size={18} strokeWidth={2.5} style={{ color: '#555', flexShrink: 0 }} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Cari produk sepatu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'transparent', border: 'none', outline: 'none',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.95rem', color: '#000', width: '100%',
                }}
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', color: '#555' }}
              >
                <X size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 997 }}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                top: '66px',
                right: '16px',
                zIndex: 998,
                background: 'rgba(255,255,255,0.98)',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
                border: '1px solid rgba(0,0,0,0.08)',
                overflow: 'hidden',
                minWidth: '190px',
                backdropFilter: 'blur(20px)',
              }}
            >
              {LINKS.map((l, idx) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href, l.label)}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ backgroundColor: active === l.label ? '#111' : '#f5f5f5' }}
                    style={{
                      padding: '14px 20px',
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontWeight: active === l.label ? 700 : 500,
                      fontSize: '0.95rem',
                      color: active === l.label ? '#fff' : '#111',
                      background: active === l.label ? '#000' : 'transparent',
                      borderBottom: idx < LINKS.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    {active === l.label && (
                      <span style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: '#FF6B00',
                        flexShrink: 0,
                      }} />
                    )}
                    {l.label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
