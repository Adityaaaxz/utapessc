'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, cardPop, fadeUp } from '@/lib/animations'

type Brand = 'ALL' | 'NIKE' | 'ADIDAS' | 'VANS' | 'PUMA' | 'SOLOMON'

const FILTERS: Brand[] = ['ALL', 'NIKE', 'ADIDAS', 'VANS', 'PUMA', 'SOLOMON']

const PRODUCTS = [
  { id: '1', brand: 'PUMA',   model: 'Speedcat OG',  price: '900K',  img: '/assets/products/puma-speedcat.png',  cat: 'PUMA'    as Brand },
  { id: '2', brand: 'ADIDAS', model: 'Samba OG',     price: '900K',  img: '/assets/products/adidas-samba.png',  cat: 'ADIDAS'  as Brand },
  { id: '3', brand: 'NIKE',   model: 'Dunk Low',     price: '900K',  img: '/assets/products/nike-dunk.png',     cat: 'NIKE'    as Brand },
  { id: '4', brand: 'VANS',   model: 'Old Skool',    price: '750K',  img: '/assets/products/vans-oldskool.png', cat: 'VANS'    as Brand },
  { id: '5', brand: 'SOLOMON',model: 'XT-6',         price: '1.1JT', img: '/assets/products/salomon-xt6.png',  cat: 'SOLOMON' as Brand },
]

function ProductCard({ p, i }: { p: typeof PRODUCTS[0]; i: number }) {
  return (
    <motion.div
      variants={cardPop}
      className="product-card-hover"
      style={{
        background: '#111',
        border: '2px solid #FF6B00',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* NEW badge */}
      <div style={{
        position: 'absolute', top: '10px', left: '10px',
        background: '#FF6B00', color: '#000',
        fontFamily: 'var(--font-bebas), sans-serif',
        fontSize: '0.75rem', letterSpacing: '0.1em',
        padding: '2px 8px', borderRadius: '3px', zIndex: 2,
      }}>
        NEW
      </div>

      {/* Image area */}
      <div style={{ background: '#1a1a1a', padding: '28px 20px 16px', position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
          <Image
            src={p.img}
            alt={`${p.brand} ${p.model}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'contain', padding: '8px' }}
          />
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em', color: '#fff', lineHeight: 1, margin: 0 }}>
              {p.brand}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '3px', margin: 0 }}>
              {p.model}
            </p>
          </div>
          <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.2rem', color: '#fff', letterSpacing: '0.04em' }}>
            {p.price}
          </span>
        </div>

        <button style={{
          width: '100%',
          background: '#FF6B00',
          color: '#000',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: '1rem',
          letterSpacing: '0.1em',
          padding: '10px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 900,
          transition: 'background 0.2s',
        }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#cc5500' }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#FF6B00' }}
        >
          BUY NOW
        </button>
      </div>
    </motion.div>
  )
}

export default function ProductSection() {
  const [filter, setFilter] = useState<Brand>('ALL')

  const displayed = filter === 'ALL' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter)

  return (
    <section
      id="product"
      className="graffiti-bg"
      style={{
        position: 'relative',
        background: 'transparent',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        overflow: 'hidden',
      }}
    >
      {/* Big "GANGSTAR" watermark */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '8%', left: '-2%',
        fontFamily: 'var(--font-bebas), sans-serif',
        fontSize: 'clamp(80px, 14vw, 180px)',
        color: 'rgba(0,0,0,0.04)',
        letterSpacing: '0.02em',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
        transform: 'rotate(-5deg)',
      }}>KING★STAR</div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase', margin: '0 0 6px' }}>
              PRODUCT
            </p>
            <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(40px, 8vw, 80px)', color: '#000', lineHeight: 1, margin: 0 }}>
              THE LATEST<br /><span style={{ color: '#FF6B00' }}>DROP</span>
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
              <Image src="/assets/maskot/Tengkorak.png" alt="Skull" width={80} height={80} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.4))' }} />
            </motion.div>
          </motion.div>
        </div>

        {/* NEW ARRIVAL */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(26px, 5vw, 44px)', textAlign: 'center', margin: '0 0 32px', color: '#000' }}
        >
          NEW <span style={{ color: '#FF6B00' }}>ARRIVAL!</span>
        </motion.h3>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))',
              gap: 'clamp(16px, 2.5vw, 28px)',
              marginBottom: '36px',
            }}
          >
            {displayed.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
          </motion.div>
        </AnimatePresence>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                padding: '6px 18px',
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
      </div>
    </section>
  )
}
