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
      className="graffiti-bg"
      style={{
        position: 'relative',
        background: '#fff',
        padding: 'clamp(100px, 15vw, 140px) 24px clamp(60px, 10vw, 100px)',
        overflow: 'hidden',
      }}
    >
      {/* Big "KINGSTAR" watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '-2%',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(80px, 14vw, 180px)',
          color: 'rgba(0,0,0,0.04)',
          letterSpacing: '0.02em',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          transform: 'rotate(-5deg)',
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
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#888',
                textTransform: 'uppercase',
                margin: '0 0 6px',
              }}
            >
              PRODUCT
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(40px, 8vw, 80px)',
                color: '#000',
                lineHeight: 1,
                margin: 0,
              }}
            >
              THE LATEST
              <br />
              <span style={{ color: '#FF6B00' }}>DROP</span>
            </h2>
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
                  filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.4))',
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* NEW ARRIVAL heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(26px, 5vw, 44px)',
            textAlign: 'center',
            margin: '0 0 12px',
            color: '#000',
          }}
        >
          NEW <span style={{ color: '#FF6B00' }}>ARRIVAL!</span>
        </motion.h3>

        {/* Flip hint banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: '#888',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
          }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,107,0,0.08)',
            border: '1px solid rgba(255,107,0,0.2)',
            borderRadius: '999px',
            padding: '5px 14px',
            color: '#FF6B00',
          }}>
            ↺ Klik kartu untuk melihat detail & harga
          </span>
        </motion.div>

        {/* Filter pills — ABOVE grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '36px',
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.88rem',
                letterSpacing: '0.12em',
                padding: '7px 20px',
                borderRadius: '999px',
                border: `1.5px solid ${filter === f ? '#FF6B00' : '#ccc'}`,
                background: filter === f ? '#FF6B00' : 'transparent',
                color: filter === f ? '#fff' : '#555',
                cursor: 'pointer',
                fontWeight: filter === f ? 700 : 400,
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Product Grid — with flip cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))',
              gap: 'clamp(16px, 2.5vw, 28px)',
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
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            Belum ada produk untuk kategori ini.
          </div>
        )}
      </div>
    </section>
  )
}
