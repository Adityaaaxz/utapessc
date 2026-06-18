'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState('Home');
  const [cartCount]                   = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        id="navbar"
        className="glass-nav"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '18px 0',
          transition: 'padding 0.3s ease',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── LEFT: Logo ── */}
          <Link href="#home" style={{ textDecoration: 'none' }}>
            <motion.div
              style={{
                fontFamily: 'var(--font-graffiti)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                letterSpacing: '0.05em',
                color: 'var(--white)',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span style={{ color: 'var(--orange)' }}>U</span>TAPES
              <span
                style={{
                  fontSize: '0.45em',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  color: 'var(--orange)',
                  background: 'rgba(255,107,0,0.12)',
                  border: '1px solid var(--orange)',
                  borderRadius: 4,
                  padding: '2px 6px',
                  letterSpacing: '0.1em',
                  alignSelf: 'flex-end',
                  marginBottom: 4,
                }}
              >
                SC
              </span>
            </motion.div>
          </Link>

          {/* ── CENTER: Nav links (desktop) ── */}
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: 'clamp(16px, 3vw, 40px)',
              alignItems: 'center',
            }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    letterSpacing: '0.05em',
                    color: activeLink === link.label ? 'var(--orange)' : 'var(--white)',
                    position: 'relative',
                    padding: '4px 0',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--orange)',
                        borderRadius: 1,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── RIGHT: Cart + Hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <motion.button
              id="cart-button"
              aria-label="Shopping Cart"
              style={{
                background: 'rgba(255,107,0,0.1)',
                border: '1px solid rgba(255,107,0,0.3)',
                borderRadius: 8,
                padding: '8px 10px',
                cursor: 'pointer',
                color: 'var(--white)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              whileHover={{ scale: 1.1, background: 'rgba(255,107,0,0.2)' }}
              whileTap={{ scale: 0.93 }}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: -6, right: -6,
                    background: 'var(--orange)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: 18, height: 18,
                    fontSize: 10,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Hamburger (mobile) */}
            <motion.button
              id="hamburger-button"
              aria-label="Menu"
              className="show-mobile"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--white)',
                cursor: 'pointer',
                padding: 4,
                display: 'none',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={26} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 52px) 36px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 52px) 36px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 52px) 36px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              id="close-mobile-menu"
              aria-label="Close Menu"
              style={{
                position: 'absolute',
                top: 24, right: 24,
                background: 'rgba(255,107,0,0.15)',
                border: '1px solid rgba(255,107,0,0.3)',
                borderRadius: 8,
                color: 'var(--white)',
                padding: '8px 10px',
                cursor: 'pointer',
              }}
              onClick={() => setMenuOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              <X size={22} />
            </motion.button>

            <div
              style={{
                fontFamily: 'var(--font-marker)',
                fontSize: 40,
                color: 'rgba(255,107,0,0.08)',
                position: 'absolute',
                top: 20, left: 20,
                transform: 'rotate(-8deg)',
              }}
            >
              UTAPES
            </div>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                  style={{
                    fontFamily: 'var(--font-graffiti)',
                    fontSize: 'clamp(48px, 10vw, 72px)',
                    letterSpacing: '0.04em',
                    color: activeLink === link.label ? 'var(--orange)' : 'var(--white)',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
