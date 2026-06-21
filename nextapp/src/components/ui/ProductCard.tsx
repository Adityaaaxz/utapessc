'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, ArrowRight, CheckCircle, Tag, RotateCcw } from 'lucide-react'
import { type Product } from '@/lib/products'
import { useCart } from '@/lib/cart'

interface ProductCardProps {
  product: Product
  index: number
}

const ORANGE = '#FF6B00'

function typeStyle(type: string) {
  const t = type.toLowerCase()
  if (t.includes('trail') || t.includes('run'))
    return { bg: '#000', color: '#fff', border: '#111' }
  if (t.includes('skate'))
    return { bg: '#000', color: '#fff', border: '#111' }
  return { bg: ORANGE, color: '#fff', border: ORANGE }
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [added, setAdded]         = useState(false)
  const { addItem }               = useCart()
  const ts                        = typeStyle(product.type)

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      style={{ perspective: '1400px', cursor: 'pointer' }}
      onClick={() => setIsFlipped((p) => !p)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', width: '100%', transformStyle: 'preserve-3d' }}
      >

        {/* ══════════════ FRONT (STREETWEAR VIBE BUT WITH INTER FONT) ══════════════ */}
        <motion.div
          whileHover={{ y: -6, boxShadow: `0 32px 64px rgba(0,0,0,0.18), 8px 8px 0 #000` }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '4px 4px 0 #000',
            border: '2px solid #000',
          }}
        >
          {/* ── Image area ── */}
          <div
            style={{
              position: 'relative',
              background: '#f4f4f4',
              borderBottom: '2px solid #000',
              padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px) clamp(24px, 4vw, 36px)',
              minHeight: 'clamp(200px, 28vw, 270px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Massive Watermark */}
            <div aria-hidden style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-10deg)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(50px, 12vw, 110px)',
              color: 'rgba(0,0,0,0.04)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              letterSpacing: '-0.04em',
              zIndex: 1,
            }}>
              {product.brand.toUpperCase()}
            </div>

            {/* Subtle radial under shoe */}
            <div style={{
              position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)',
              width: '70%', height: '40%',
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)',
              filter: 'blur(8px)',
              pointerEvents: 'none',
              zIndex: 1,
            }} />

            {/* NEW DROP Tape style */}
            {product.isNew && (
              <div style={{
                position: 'absolute', top: 16, left: -8, zIndex: 5,
                background: ORANGE,
                color: '#000',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 800,
                fontSize: '0.65rem', letterSpacing: '0.14em',
                padding: '4px 14px 4px 20px',
                transform: 'rotate(-4deg)',
                border: '1.5px solid #000',
                boxShadow: '2px 2px 0 #000',
              }}>
                ★ NEW DROP
              </div>
            )}



            {/* Shoe image */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -4, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ width: '100%', aspectRatio: '4/3', position: 'relative', zIndex: 2 }}
            >
              <Image
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 46vw, 30vw"
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.3))',
                }}
              />
            </motion.div>
          </div>

          {/* ── Card body ── */}
          <div style={{ padding: '20px 22px 22px', background: '#fff' }}>
            {/* Brand + name */}
            <div style={{ marginBottom: '16px' }}>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
                letterSpacing: '-0.02em',
                color: '#000',
                margin: 0,
                lineHeight: 1,
              }}>
                {product.brand}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 600,
                fontSize: '0.8rem',
                color: '#666',
                margin: '6px 0 0',
              }}>
                {product.name}
              </p>
            </div>

            {/* Thick Separator */}
            <div style={{
              height: '3px',
              background: '#000',
              marginBottom: '16px',
            }} />

            {/* Price + cta row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 800,
                  fontSize: '0.65rem',
                  color: '#888',
                  margin: '0 0 4px',
                  letterSpacing: '0.1em',
                }}>
                  PRICE
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
                  color: ORANGE,
                  margin: 0,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>
                  Rp {product.price}
                </p>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: '#111',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '8px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}>
                DETAIL <ArrowRight size={14} color={ORANGE} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════ BACK ══════════════ */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#111',
            borderRadius: '16px',
            border: `2px solid #000`,
            boxShadow: `0 12px 32px rgba(255,107,0,0.25)`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Back graphic bg layer */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/assets/background/hero-product-background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            mixBlendMode: 'luminosity',
            pointerEvents: 'none',
          }} />

          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            padding: '18px 18px 16px',
            borderBottom: '2px solid rgba(255,255,255,0.1)',
            position: 'relative', zIndex: 2,
          }}>
            <div style={{
              position: 'relative', width: '68px', height: '50px', flexShrink: 0,
              background: '#000', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden',
            }}>
              <Image
                src={product.image} alt={product.brand}
                fill sizes="68px"
                style={{ objectFit: 'contain', padding: '6px', filter: `drop-shadow(0 2px 8px ${ORANGE}44)` }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 800,
                fontSize: '1rem', color: '#fff',
                margin: 0, letterSpacing: '0.02em',
              }}>
                {product.brand}
              </p>
              <p style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontWeight: 500,
                fontSize: '0.72rem', color: '#aaa', margin: '3px 0 0',
              }}>
                {product.name}
              </p>
            </div>
          </div>

          {/* Spec rows */}
          <div style={{ flex: 1, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 2 }}>
            {[
              { label: 'TYPE',     value: product.type,      chip: true,  hl: false },
              { label: 'BRAND',    value: product.brand,     chip: false, hl: false },
              { label: 'KONDISI',  value: 'Second / Thrift', chip: false, hl: false },
              { label: 'PRICE',    value: `Rp ${product.price}`, chip: false, hl: true },
            ].map((row) => (
              <div key={row.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 14px',
                background: '#000',
                border: row.hl ? `1.5px solid ${ORANGE}` : '1px solid #333',
                boxShadow: row.hl ? `2px 2px 0 ${ORANGE}` : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 700,
                  fontSize: '0.65rem', color: '#888', letterSpacing: '0.1em',
                }}>
                  {row.label}
                </span>

                {row.chip ? (
                  <span style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 800,
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    background: ts.bg, color: ts.color,
                    padding: '3px 10px',
                    border: `1px solid ${ts.color}`,
                    display: 'flex', alignItems: 'center', gap: '4px',
                    borderRadius: '4px',
                  }}>
                    <Tag size={10} />{row.value}
                  </span>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: row.hl ? 900 : 600,
                    fontSize: row.hl ? '1rem' : '0.8rem',
                    color: row.hl ? ORANGE : '#ccc',
                    letterSpacing: row.hl ? '-0.02em' : '0em',
                  }}>
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ padding: '14px 18px 18px', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 2 }}>
            <AnimatePresence mode="wait">
              {added ? (
                <motion.div
                  key="added"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  style={{
                    width: '100%', padding: '14px',
                    background: '#000',
                    border: '1.5px solid #34d399',
                    boxShadow: '0 4px 14px rgba(52,211,153,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    color: '#34d399',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 800,
                    fontSize: '0.9rem', letterSpacing: '0.04em',
                    borderRadius: '8px',
                  }}
                >
                  <CheckCircle size={18} />
                  DITAMBAHKAN!
                </motion.div>
              ) : (
                <motion.button
                  key="buy"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBuyNow}
                  style={{
                    width: '100%',
                    background: ORANGE,
                    color: '#000',
                    border: 'none',
                    padding: '14px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 900,
                    fontSize: '0.9rem', letterSpacing: '0.06em',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: `0 4px 14px rgba(255,107,0,0.3)`,
                    borderRadius: '8px',
                  }}
                >
                  <ShoppingCart size={18} />
                  TAMBAH KE CART
                </motion.button>
              )}
            </AnimatePresence>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
              color: '#666',
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 700,
              fontSize: '0.65rem', letterSpacing: '0.1em',
              marginTop: '6px'
            }}>
              <RotateCcw size={10} />
              KLIK UNTUK KEMBALI
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
