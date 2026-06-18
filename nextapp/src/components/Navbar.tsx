'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

const LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '24px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'transparent',
    }}>
      {/* ── LEFT: Logo ── */}
      <Link href="#home" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontWeight: 900,
          fontSize: '1.5rem',
          letterSpacing: '0.02em',
          color: '#000',
        }}>
          UTAPES
        </span>
      </Link>

      {/* ── CENTER: Pill Navigation ── */}
      <div className="desktop-nav" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '999px',
        padding: '6px',
        display: 'flex',
        gap: '4px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.05)',
      }}>
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setActive(l.label)}
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: active === l.label ? '#fff' : '#666',
              background: active === l.label ? '#000' : 'transparent',
              padding: '10px 28px',
              borderRadius: '999px',
              transition: 'all 0.2s ease',
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* ── RIGHT: Cart ── */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          aria-label="Cart"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
        >
          <ShoppingCart size={24} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  )
}
