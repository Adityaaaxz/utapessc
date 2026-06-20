'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/lib/products'
import { useSearch } from '@/lib/search'
import type { BrandFilter } from '@/lib/products'

const FILTERS: BrandFilter[] = ['ALL', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON']

export default function ProductSection() {
  const { query, activeBrand, setActiveBrand } = useSearch()

  /* ── filtering logic ── */
  const displayed = products.filter((p) => {
    const matchBrand  = activeBrand === 'ALL' || p.category === activeBrand
    const q           = query.trim().toLowerCase()
    const matchQuery  = !q ||
      p.brand.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    return matchBrand && matchQuery
  })

  return (
    <section
      id="product"
      style={{
        position: 'relative',
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 'clamp(80px, 12vw, 120px) clamp(20px, 5vw, 48px) clamp(80px, 12vw, 120px)',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '4%', left: '-2%',
          fontFamily: 'var(--font-inter), sans-serif',
          fontWeight: 900,
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

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
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
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(38px, 8vw, 80px)',
                color: '#000',
                lineHeight: 0.92,
                margin: 0,
                letterSpacing: '-0.03em',
              }}
            >
              THE LATEST
              <br />
              <span style={{ color: '#FF6B00' }}>DROP</span>
            </h2>

            {/* Search query feedback */}
            {query && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255,107,0,0.08)',
                  border: '1px solid rgba(255,107,0,0.22)',
                  borderRadius: '999px',
                  padding: '5px 14px',
                  color: '#FF6B00',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                }}
              >
                🔍 Hasil untuk &ldquo;{query}&rdquo;
              </motion.div>
            )}

            {!query && (
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
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                }}
              >
                 Klik kartu untuk detail &amp; harga
              </div>
            )}
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

        {/* ── Filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="filter-scroll-wrap"
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
            marginBottom: '48px',
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
                onClick={() => setActiveBrand(f)}
                whileHover={{ scale: activeBrand === f ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  background: activeBrand === f ? '#000' : 'transparent',
                  color: activeBrand === f ? '#fff' : '#555',
                  boxShadow: activeBrand === f ? '0 4px 16px rgba(0,0,0,0.25)' : 'none',
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)',
                  letterSpacing: '0.08em',
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
                {activeBrand === f && (
                  <motion.span
                    layoutId="filter-dot"
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#FF6B00', display: 'inline-block', flexShrink: 0,
                    }}
                  />
                )}
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Product Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand + query}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
              gap: 'clamp(20px, 3vw, 36px)',
            }}
          >
            {displayed.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Empty state ── */}
        {displayed.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>🔍</span>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#ccc',
              margin: 0,
            }}>
              Produk tidak ditemukan
            </p>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.85rem',
              color: '#aaa',
              margin: 0,
            }}>
              Coba kata kunci lain atau pilih brand lain
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
