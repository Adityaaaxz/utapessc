'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import { products, type BrandFilter } from '@/lib/products'

type Brand = BrandFilter

const FILTERS: Brand[] = ['ALL', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON']

export default function ProductSection() {
  const [filter, setFilter] = useState<Brand>('ALL')

  const displayed =
    filter === 'ALL' ? products : products.filter((p) => p.category === filter)

  return (
    <section
      id="product"
      style={{
        position: 'relative',
        background: '#fff',
        padding: 'clamp(80px, 12vw, 120px) clamp(16px, 4vw, 24px) clamp(60px, 10vw, 100px)',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '4%',
          left: '-2%',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(70px, 12vw, 180px)',
          color: 'rgba(0,0,0,0.04)',
          letterSpacing: '0.02em',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          transform: 'rotate(-4deg)',
        }}
      >
        KING★STAR
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '36px',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(42px, 9vw, 88px)',
                color: '#000',
                lineHeight: 0.95,
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              THE LATEST
              <br />
              <span style={{ color: '#FF6B00' }}>DROP</span>
            </h2>
            {/* Flip hint — Bebas font, inline with heading */}
            <div
              style={{
                marginTop: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255,107,0,0.08)',
                border: '1px solid rgba(255,107,0,0.22)',
                borderRadius: '999px',
                padding: '5px 14px',
                color: '#FF6B00',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.82rem',
                letterSpacing: '0.12em',
              }}
            >
              ↺ KLIK KARTU UNTUK DETAIL & HARGA
            </div>
          </motion.div>

          {/* Skull mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 18 }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0], y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/assets/maskot/Tengkorak.png"
                alt="Skull"
                width={80}
                height={80}
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 12px rgba(255,107,0,0.45))',
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Filter pills — scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="filter-scroll-wrap"
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '8px',
              padding: '6px',
              background: 'rgba(0,0,0,0.04)',
              borderRadius: '999px',
              border: '1px solid rgba(0,0,0,0.07)',
              width: 'fit-content',
              margin: '0 auto',
              whiteSpace: 'nowrap',
            }}
          >
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: filter === f ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  background: filter === f ? '#000' : 'transparent',
                  color: filter === f ? '#fff' : '#555',
                  boxShadow: filter === f ? '0 4px 16px rgba(0,0,0,0.25)' : 'none',
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: 'clamp(0.82rem, 1.4vw, 1rem)',
                  letterSpacing: '0.14em',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  flexShrink: 0,
                }}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-dot"
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#FF6B00',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                )}
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
              gap: 'clamp(14px, 2.5vw, 28px)',
            }}
          >
            {displayed.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {displayed.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#aaa',
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '1.2rem',
              letterSpacing: '0.12em',
            }}
          >
            BELUM ADA PRODUK UNTUK KATEGORI INI.
          </div>
        )}
      </div>
    </section>
  )
}
