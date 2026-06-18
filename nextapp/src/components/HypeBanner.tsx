'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideLeft, fadeIn } from '@/lib/animations'

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: star <= Math.round(rating) ? '#FF6B00' : '#333', fontSize: '18px' }}>★</span>
      ))}
    </div>
  )
}

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 40
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer); return }
      setCount(parseFloat(start.toFixed(1)))
    }, 40)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toFixed(1)}</span>
}

export default function HypeBanner() {
  return (
    <section
      style={{
        background: '#000',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* WANTED watermark */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          right: '-5%', top: '50%',
          transform: 'translateY(-50%) rotate(8deg)',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(100px, 18vw, 240px)',
          color: 'rgba(255,107,0,0.06)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        WANTED
      </motion.div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left: Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
          >
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.25em', color: '#FF6B00', textTransform: 'uppercase', marginBottom: '8px' }}>
              ★ WHAT OUR CUSTOMERS ARE SAYING ★
            </p>
            <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(36px, 7vw, 72px)', color: '#fff', lineHeight: 1, margin: '0 0 16px', letterSpacing: '0.02em' }}>
              REAL STEPS,<br /><span style={{ color: '#FF6B00' }}>REAL HYPE.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <StarRating rating={4.9} />
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '2rem', color: '#FF6B00' }}>
                <CountUp target={4.9} />
              </span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#666' }}>
                dari 2,000+ ulasan
              </span>
            </div>
          </motion.div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div style={{
                width: '120px', height: '120px',
                borderRadius: '50%',
                background: 'rgba(255,107,0,0.1)',
                border: '2px solid rgba(255,107,0,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '60px',
              }}>
                👟
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
