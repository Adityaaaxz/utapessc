'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, RotateCcw, CheckCircle } from 'lucide-react'
import { type Product } from '@/lib/products'
import { useCart } from '@/lib/cart'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accent = '#FF6B00'

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      style={{ perspective: '1200px', cursor: 'pointer' }}
      onClick={() => setIsFlipped((p) => !p)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', width: '100%', transformStyle: 'preserve-3d' }}
      >

        {/* ══════════════ FRONT FACE ══════════════ */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(160deg, #161616 0%, #0d0d0d 100%)',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            border: '1.5px solid rgba(255,107,0,0.2)',
            boxShadow: '0 16px 56px rgba(0,0,0,0.65)',
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #FF6B00 50%, transparent)',
              zIndex: 5,
            }}
          />

          {/* NEW DROP badge */}
          {product.isNew && (
            <div
              style={{
                position: 'absolute', top: 16, left: 16, zIndex: 10,
                background: accent,
                color: '#000',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.7rem', letterSpacing: '0.18em',
                padding: '3px 12px', borderRadius: '4px',
                boxShadow: `0 2px 14px ${accent}99`,
              }}
            >
              NEW DROP
            </div>
          )}

          {/* Spinning flip icon */}
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <RotateCcw size={12} color="rgba(255,255,255,0.4)" />
          </motion.div>

          {/* ── IMAGE AREA ── */}
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(180deg, #1c1c1c 0%, #111 100%)',
              padding: 'clamp(32px, 6vw, 52px) clamp(20px, 4vw, 38px) clamp(20px, 3vw, 32px)',
              overflow: 'hidden',
              minHeight: 'clamp(180px, 30vw, 270px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Radial spotlight glow */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 85%, ${accent}28 0%, transparent 65%)`,
                pointerEvents: 'none',
              }}
            />
            {/* Second subtle glow for depth */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Brand watermark */}
            <span
              style={{
                position: 'absolute',
                bottom: -6, right: 6,
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(44px, 8vw, 80px)', letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.04)',
                lineHeight: 1, pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {product.brand}
            </span>

            {/* Shoe image with hover effect */}
            <motion.div
              whileHover={{ scale: 1.09, rotate: -4, y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              style={{ width: '100%', aspectRatio: '4/3', position: 'relative', zIndex: 2 }}
            >
              <Image
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 46vw, 30vw"
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.75))',
                }}
              />
            </motion.div>
          </div>

          {/* ── CARD BODY ── */}
          <div style={{ padding: 'clamp(14px, 2.5vw, 20px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                {/* Brand — Bebas, big */}
                <p
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)',
                    letterSpacing: '0.06em',
                    color: '#fff',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {product.brand}
                </p>
                {/* Model name — Inter, small, muted (only place Inter is used) */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.32)',
                    margin: '4px 0 0',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {product.name}
                </p>
              </div>

              {/* Price badge — solid orange */}
              <div
                style={{
                  background: accent,
                  borderRadius: '8px',
                  padding: '5px 12px',
                  flexShrink: 0,
                  boxShadow: `0 4px 14px ${accent}55`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                    color: '#000',
                    letterSpacing: '0.04em',
                  }}
                >
                  {product.price}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                margin: '12px 0 10px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,107,0,0.35), transparent)',
              }}
            />

            {/* Flip hint — Bebas */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: 'rgba(255,255,255,0.18)',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.68rem', letterSpacing: '0.14em',
              }}
            >
              <RotateCcw size={9} />
              KLIK UNTUK DETAIL
            </div>
          </div>
        </div>

        {/* ══════════════ BACK FACE ══════════════ */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(160deg, #0e0e0e 0%, #161616 100%)',
            borderRadius: '20px',
            border: `1.5px solid ${accent}55`,
            boxShadow: `0 16px 56px rgba(0,0,0,0.65), 0 0 60px ${accent}18`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Top glow */}
          <div
            style={{
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />

          <div style={{ padding: '18px 18px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Shoe thumbnail + brand header */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '14px', padding: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ position: 'relative', width: '72px', height: '50px', flexShrink: 0 }}>
                <Image
                  src={product.image}
                  alt={product.brand}
                  fill
                  sizes="72px"
                  style={{ objectFit: 'contain', filter: `drop-shadow(0 4px 10px ${accent}66)` }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1.4rem', color: accent, letterSpacing: '0.06em', margin: 0,
                  }}
                >
                  {product.brand}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.7rem', color: 'rgba(255,255,255,0.38)', margin: 0,
                  }}
                >
                  {product.name}
                </p>
              </div>
            </div>

            {/* Info rows — all Bebas labels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'HARGA', value: product.price, isPrice: true },
                { label: 'KONDISI', value: 'Second / Thrift', isPrice: false },
                { label: 'BRAND', value: product.brand, isPrice: false },
                { label: 'KATEGORI', value: 'Sneakers', isPrice: false },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 12px',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                    borderRadius: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      letterSpacing: '0.14em',
                      color: 'rgba(255,255,255,0.28)',
                      fontSize: '0.78rem',
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: row.isPrice ? 'var(--font-bebas), sans-serif' : 'var(--font-inter), sans-serif',
                      fontSize: row.isPrice ? '1.1rem' : '0.78rem',
                      color: row.isPrice ? accent : '#bbb',
                      fontWeight: row.isPrice ? 900 : 500,
                      letterSpacing: row.isPrice ? '0.06em' : '0.01em',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA area */}
          <div style={{ padding: '14px 18px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <AnimatePresence mode="wait">
              {added ? (
                <motion.div
                  key="added"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  style={{
                    width: '100%', padding: '14px',
                    background: 'rgba(0,200,100,0.12)',
                    border: '1.5px solid rgba(0,200,100,0.35)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    color: '#00c864',
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1rem', letterSpacing: '0.12em',
                  }}
                >
                  <CheckCircle size={16} />
                  DITAMBAHKAN KE CART!
                </motion.div>
              ) : (
                <motion.button
                  key="buy"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBuyNow}
                  style={{
                    width: '100%',
                    background: `linear-gradient(135deg, ${accent}, #cc5500)`,
                    color: '#000',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '14px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1.05rem',
                    letterSpacing: '0.14em',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: `0 4px 24px ${accent}55`,
                  }}
                >
                  <ShoppingCart size={16} />
                  TAMBAH KE CART
                </motion.button>
              )}
            </AnimatePresence>

            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
                color: 'rgba(255,255,255,0.16)',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '0.68rem', letterSpacing: '0.12em',
              }}
            >
              <RotateCcw size={9} />
              KLIK UNTUK KEMBALI
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
