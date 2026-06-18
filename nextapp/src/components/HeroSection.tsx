'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const BRAND_LOGOS = [
  { name: 'Nike',    src: '/assets/logos/nike.png' },
  { name: 'Adidas',  src: '/assets/logos/adidas.png' },
  { name: 'Vans',    src: '/assets/logos/vans.png' },
  { name: 'Puma',    src: '/assets/logos/puma.png' },
  { name: 'Salomon', src: '/assets/logos/salomon.png' },
]

/* ────────────────────────────────────────
   SVG GRAFFITI DRAWING ANIMATION
   Draws UTAPES stroke-by-stroke, then
   reveals the styled filled version
──────────────────────────────────────── */
function UtapesDrawAnimation({ onDone }: { onDone: () => void }) {
  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg
        viewBox="0 0 820 200"
        style={{ width: '100%', maxWidth: '820px', overflow: 'visible' }}
        aria-label="UTAPES"
      >
        {/* ── Black 3D shadow offset ── */}
        <motion.text
          x="412"
          y="188"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '188px', letterSpacing: '6px' }}
          fill="none"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '0 7000', opacity: 0.7 }}
          animate={{ strokeDasharray: '7000 0', opacity: 0.18 }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.1 }}
        >
          UTAPES
        </motion.text>

        {/* ── Orange glow stroke ── */}
        <motion.text
          x="408"
          y="184"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '188px', letterSpacing: '6px' }}
          fill="none"
          stroke="#FF6B00"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '0 7000' }}
          animate={{ strokeDasharray: '7000 0' }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.15 }}
        >
          UTAPES
        </motion.text>

        {/* ── Main black stroke (drawing layer) ── */}
        <motion.text
          x="406"
          y="182"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '188px', letterSpacing: '6px' }}
          fill="none"
          stroke="#000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '0 7000' }}
          animate={{ strokeDasharray: '7000 0' }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.2 }}
          onAnimationComplete={onDone}
        >
          UTAPES
        </motion.text>

        {/* ── Tip "marker" dot that travels along stroke ── */}
        <motion.circle
          r="8"
          fill="#FF6B00"
          style={{ filter: 'blur(2px)' }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [40, 200, 400, 620, 780],
            y: [182, 175, 182, 175, 182],
          }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.2, times: [0, 0.2, 0.5, 0.8, 1] }}
        />
      </svg>
    </div>
  )
}

/* ────────────────────────────────────────
   FINAL STYLED UTAPES LOGO
──────────────────────────────────────── */
function UtapesLogo() {
  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg
        viewBox="0 0 820 210"
        style={{ width: '100%', maxWidth: '820px', overflow: 'visible' }}
        aria-label="UTAPES"
      >
        {/* ── Deep black 3-D shadow ── */}
        <text
          x="412"
          y="190"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '188px', letterSpacing: '6px' }}
          fill="rgba(0,0,0,0.5)"
        >
          UTAPES
        </text>

        {/* ── Orange offset ── */}
        <text
          x="410"
          y="187"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '188px', letterSpacing: '6px' }}
          fill="#FF6B00"
          stroke="#FF6B00"
          strokeWidth="2"
        >
          UTAPES
        </text>

        {/* ── White fill with black stroke ── */}
        <text
          x="406"
          y="183"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '188px', letterSpacing: '6px' }}
          fill="#fff"
          stroke="#000"
          strokeWidth="6"
          strokeLinejoin="round"
        >
          UTAPES
        </text>
      </svg>
    </div>
  )
}

/* ────────────────────────────────────────
   HERO SECTION
──────────────────────────────────────── */
export default function HeroSection() {
  const [phase, setPhase] = useState<'drawing' | 'styled'>('drawing')
  const [contentVisible, setContentVisible] = useState(false)

  const handleDrawDone = () => {
    setTimeout(() => setPhase('styled'), 200)
    setTimeout(() => setContentVisible(true), 600)
  }

  return (
    <section
      id="home"
      className="graffiti-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90px',
        paddingBottom: '40px',
        paddingLeft: '24px',
        paddingRight: '24px',
        overflow: 'hidden',
      }}
    >
      {/* Big faded "UTAPESSC" watermark right bottom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-10px',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(80px, 14vw, 160px)',
          color: 'rgba(0,0,0,0.04)',
          letterSpacing: '0.04em',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        UTAPESSC
      </div>

      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Crown / Mahkota */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
        >
          <Image
            src="/assets/maskot/mahkota.png"
            alt="Crown"
            width={100}
            height={70}
            loading="eager"
            style={{ objectFit: 'contain', width: 'auto', height: '70px', marginBottom: '-10px', filter: 'drop-shadow(0 4px 12px rgba(255,107,0,0.4))' }}
          />
        </motion.div>

        {/* ── UTAPES drawing animation → styled logo ── */}
        <div style={{ width: '100%', minHeight: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {phase === 'drawing' ? (
              <motion.div
                key="drawing"
                style={{ width: '100%' }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.3 } }}
              >
                <UtapesDrawAnimation onDone={handleDrawDone} />
              </motion.div>
            ) : (
              <motion.div
                key="styled"
                style={{ width: '100%' }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'backOut' }}
              >
                <UtapesLogo />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Rest of hero content (visible after drawing) ── */}
        <AnimatePresence>
          {contentVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}
            >

              {/* THRIFT BEST */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}
              >
                <div style={{ width: '60px', height: '2px', background: '#000' }} />
                <motion.span
                  variants={fadeUp}
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: 'clamp(18px, 3vw, 26px)',
                    letterSpacing: '0.3em',
                    color: '#000',
                  }}
                >
                  THRIFT BEST
                </motion.span>
                <div style={{ width: '60px', height: '2px', background: '#000' }} />
              </motion.div>

              {/* THRIFT SHOES STORE badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '0.9rem',
                  letterSpacing: '0.25em',
                  padding: '8px 20px',
                  display: 'inline-block',
                  borderRadius: '4px',
                }}
              >
                THRIFT SHOES STORE
              </motion.div>

              {/* Brand logos row */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '10px',
                  padding: '14px 24px',
                }}
              >
                {BRAND_LOGOS.map((logo) => (
                  <motion.div key={logo.name} variants={fadeUp} whileHover={{ scale: 1.15 }}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={50}
                      height={32}
                      style={{ objectFit: 'contain', filter: 'grayscale(100%) brightness(0.2)' }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <motion.a
                  variants={fadeUp}
                  href="#product"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1.1rem',
                    letterSpacing: '0.1em',
                    padding: '12px 28px',
                    border: '2px solid #000',
                    borderRadius: '4px',
                    color: '#000',
                    background: 'transparent',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#000'
                    ;(e.currentTarget as HTMLElement).style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.color = '#000'
                  }}
                >
                  Browse Catalog
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href="#product"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1.1rem',
                    letterSpacing: '0.1em',
                    padding: '12px 28px',
                    border: '2px solid #FF6B00',
                    borderRadius: '4px',
                    color: '#fff',
                    background: '#FF6B00',
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 4px 20px rgba(255,107,0,0.35)',
                  }}
                >
                  Shop Now
                </motion.a>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Placeholder content before animation finishes */}
        {!contentVisible && (
          <div style={{ height: '200px' }} />
        )}

      </div>
    </section>
  )
}
