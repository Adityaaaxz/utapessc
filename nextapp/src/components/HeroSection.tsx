'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const BRAND_LOGOS = [
  { name: 'Nike',    src: '/assets/logos/nike.png' },
  { name: 'Adidas',  src: '/assets/logos/adidas.png' },
  { name: 'Vans',    src: '/assets/logos/vans.png' },
  { name: 'Puma',    src: '/assets/logos/puma.png' },
  { name: 'Salomon', src: '/assets/logos/salomon.png' },
]

/* ────────────────────────────────────────
   FINAL STYLED UTAPES LOGO (Stacked CSS)
──────────────────────────────────────── */
function UtapesLogo() {
  const textStyle: React.CSSProperties = {
    fontFamily: 'var(--font-bebas), sans-serif',
    fontSize: 'clamp(100px, 18vw, 220px)',
    letterSpacing: '0.04em',
    lineHeight: 1,
    position: 'absolute',
    top: 0, left: 0, width: '100%', textAlign: 'center',
    margin: 0,
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: 'clamp(100px, 18vw, 220px)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Layer 3: Black outline around the orange shadow */}
        <div style={{ ...textStyle, color: '#000', WebkitTextStroke: '28px #000', transform: 'translate(12px, 16px)', zIndex: 1 }}>UTAPES</div>
        
        {/* Layer 2: Orange shadow/extrusion */}
        <div style={{ ...textStyle, color: '#FF6B00', WebkitTextStroke: '18px #FF6B00', transform: 'translate(12px, 16px)', zIndex: 2 }}>UTAPES</div>
        
        {/* Layer 1: Main black outline for the white text */}
        <div style={{ ...textStyle, color: '#000', WebkitTextStroke: '18px #000', zIndex: 3 }}>UTAPES</div>
        
        {/* Layer 0: The crisp white text fill (no stroke so it doesnt eat inward) */}
        <div style={{ ...textStyle, color: '#fff', zIndex: 4 }}>UTAPES</div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────
   HERO SECTION
──────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '160px',
        paddingBottom: '120px',
        paddingLeft: '24px',
        paddingRight: '24px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cpath d='M10 80 Q50 20 100 70 Q140 110 190 60 Q230 20 280 80 Q320 130 370 70' stroke='%23000' fill='none' stroke-width='1.5' opacity='0.07'/%3E%3Cpath d='M5 180 Q60 120 120 170 Q180 220 240 160 Q290 110 350 170 Q390 210 400 180' stroke='%23000' fill='none' stroke-width='1' opacity='0.05'/%3E%3Cpath d='M20 280 Q80 230 130 270 Q175 310 230 260 Q275 215 340 270' stroke='%23000' fill='none' stroke-width='1.5' opacity='0.06'/%3E%3Ccircle cx='60' cy='320' r='3' fill='%23000' opacity='0.04'/%3E%3Ccircle cx='200' cy='100' r='2' fill='%23000' opacity='0.04'/%3E%3Ccircle cx='340' cy='230' r='4' fill='%23000' opacity='0.03'/%3E%3Cpath d='M70 350 Q100 310 140 350 Q170 385 210 345' stroke='%23000' fill='none' stroke-width='1' opacity='0.05'/%3E%3Cpath d='M250 30 Q270 10 300 30 Q325 50 350 25' stroke='%23000' fill='none' stroke-width='1.5' opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px',
      }}
    >
      <div style={{ maxWidth: '1100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}>

        {/* Crown / Mahkota */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -20 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          style={{ zIndex: 10, position: 'relative', marginBottom: '-50px', marginLeft: '-20px' }}
        >
          <Image
            src="/assets/maskot/mahkota.png"
            alt="Crown"
            width={160}
            height={110}
            loading="eager"
            style={{ objectFit: 'contain', width: 'auto', height: '110px' }}
          />
        </motion.div>

        {/* ── STYLED UTAPES LOGO ── */}
        <div style={{ width: '100%', minHeight: 'clamp(120px, 20vw, 260px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'backOut', delay: 0.2 }}
            style={{ width: '100%' }}
          >
            <UtapesLogo />
          </motion.div>
        </div>

        {/* ── THRIFT BEST ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center', marginTop: '10px' }}
        >
          <div style={{ width: '80px', height: '2px', background: '#000' }} />
          <span
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(18px, 3vw, 28px)',
              letterSpacing: '0.1em',
              color: '#000',
            }}
          >
            THRIFT BEST
          </span>
          <div style={{ width: '80px', height: '2px', background: '#000' }} />
        </motion.div>

        {/* ── Bottom Content Row (Left: Box & Logos, Right: Buttons) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end', 
            flexWrap: 'wrap',
            width: '100%', 
            marginTop: '60px',
            gap: '40px'
          }}
        >
              
              {/* LEFT COLUMN */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {/* Black Box */}
                <div style={{
                  background: '#000',
                  color: '#fff',
                  padding: '16px 32px',
                  borderBottom: '6px solid #FF6B00',
                  borderLeft: '6px solid #FF6B00',
                  display: 'inline-block',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  fontSize: '1rem',
                  alignSelf: 'flex-start'
                }}>
                  THRIFT SHOES STORE
                </div>

                {/* Logos */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                  {BRAND_LOGOS.map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      width={50}
                      height={32}
                      loading="eager"
                      style={{ objectFit: 'contain', width: 'auto', height: '32px', filter: 'grayscale(100%) contrast(200%)' }}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a
                  href="#product"
                  style={{
                    background: '#000',
                    color: '#fff',
                    padding: '14px 36px',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  Browse Catalog
                </a>
                
                <a
                  href="#product"
                  style={{
                    background: '#fff',
                    color: '#000',
                    border: '2px solid #ccc',
                    padding: '14px 36px',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                >
                  Shop Now
                </a>
              </div>

          </motion.div>

      </div>
    </section>
  )
}
